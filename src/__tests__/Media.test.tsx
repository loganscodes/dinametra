import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useMedia } from '../hooks/useMedia';
import Media from '../components/Media';

// Mock para el hook useMedia
jest.mock('../hooks/useMedia', () => ({
    useMedia: jest.fn(() => ({
        handleSearch: jest.fn(),
        inputValue: '',
        setInputValue: jest.fn(),
        selectedYear: '',
        handleYearChange: jest.fn(),
        notices: [],
        loading: false,
        error: null,
        filterByYear: jest.fn(),
        handleNoticeClick: jest.fn(),
        selectedNotice: null,
        handleClose: jest.fn(),
    })),
}));

describe('Media Component', () => {
    it('renders without crashing', () => {
        render(<Media />);
        expect(screen.getByText('Media')).toBeInTheDocument();
    });

    it('renders search form', () => {
        render(<Media />);
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    it('renders year filter select', () => {
        render(<Media />);
        expect(screen.getByLabelText('Select Year to Filter')).toBeInTheDocument();
    });

    it('renders notices', () => {
        const mockNotices = [
            {
                data: [{
                    nasa_id: '123',
                    title: 'Test Title',
                    date_created: '2024-06-06',
                }],
                links: [{ href: 'test.jpg' }],
            },
        ];
        (useMedia as jest.Mock).mockReturnValueOnce({
            ...useMedia(),
            notices: mockNotices,
        });
        render(<Media />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', 'test.jpg');
    });

    it('renders loading spinner when loading is true', () => {
        (useMedia as jest.Mock).mockReturnValueOnce({
            ...useMedia(),
            loading: true,
        });
        render(<Media />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('renders error message when error is present', () => {
        (useMedia as jest.Mock).mockReturnValueOnce({
            ...useMedia(),
            error: 'Test Error',
        });
        render(<Media />);
        expect(screen.getByText('Error...')).toBeInTheDocument();
    });

    it('opens selected notice when clicked', () => {
        const mockNotices = [
            {
                data: [{
                    nasa_id: '123',
                    title: 'Test Title',
                    date_created: '2024-06-06',
                }],
                links: [{ href: 'test.jpg' }],
            },
        ];
        (useMedia as jest.Mock).mockReturnValueOnce({
            ...useMedia(),
            notices: mockNotices,
        });
        render(<Media />);
        fireEvent.click(screen.getByText('Test Title'));
        expect(screen.getByText('Test Title')).toBeInTheDocument(); // Verifica que el título de la noticia seleccionada esté presente
        expect(screen.getByText('Close')).toBeInTheDocument(); // Verifica que el botón de cierre esté presente
    });

    it('closes selected notice when close button is clicked', () => {
        const mockNotices = [
            {
                data: [{
                    nasa_id: '123',
                    title: 'Test Title',
                    date_created: '2024-06-06',
                }],
                links: [{ href: 'test.jpg' }],
            },
        ];
        (useMedia as jest.Mock).mockReturnValueOnce({
            ...useMedia(),
            notices: mockNotices,
            selectedNotice: mockNotices[0],
        });
        render(<Media />);
        fireEvent.click(screen.getByText('Close'));
        expect(useMedia().handleClose).toHaveBeenCalled(); // Verifica que la función de cierre se haya llamado
    });
});
