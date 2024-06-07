import React from 'react';
import { render, screen } from '@testing-library/react';
import Apod from '../components/DayPicture/Apod';

jest.mock('../hooks/useApod', () => ({
    useApod: jest.fn(() => ({
        loading: false,
        error: null,
        apod: {
            title: 'Test Title',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2024-06-06',
            explanation: 'Test Explanation',
            copyright: 'Test Copyright'
        }
    }))
}));

describe('Apod Component', () => {
    it('renders without crashing', () => {
        render(<Apod />);
        expect(screen.getByText('Astronomy Picture of the Day')).toBeInTheDocument();
    });

    it('renders loading spinner when loading is true', () => {
        jest.spyOn(require('../hooks/useApod'), 'useApod').mockImplementationOnce(() => ({
            loading: true,
            error: null,
            apod: null
        }));
        render(<Apod />);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('renders error message when error is present', () => {
        jest.spyOn(require('../hooks/useApod'), 'useApod').mockImplementationOnce(() => ({
            loading: false,
            error: 'Test Error',
            apod: null
        }));
        render(<Apod />);
        expect(screen.getByText('Error: Test Error')).toBeInTheDocument();
    });

    it('renders apod information correctly', () => {
        render(<Apod />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png');
        expect(screen.getByText('Author: Test Copyright Date: 2024-06-06')).toBeInTheDocument();
        expect(screen.getByText('Explanation')).toBeInTheDocument();
        expect(screen.getByText('Test Explanation')).toBeInTheDocument();
    });
});
