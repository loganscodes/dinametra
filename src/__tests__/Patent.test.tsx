import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePattent } from '../hooks/usePatten';
import PatentComponent from '../components/Patent';

// Mock para el hook usePattent
jest.mock('../hooks/usePatten', () => ({
  usePattent: jest.fn(() => ({
    loading: false,
    filter: '',
    handleFilterChange: jest.fn(),
    filteredPatents: [
      {
        id: '1',
        title: 'Test Title',
        date: new Date().toISOString(),
        patent: 'Test Patent',
        abstract: 'Test Abstract',
        contact: 'test.jpg',
      },
    ],
  })),
}));

describe('PatentComponent', () => {
  it('renders without crashing', () => {
    render(<PatentComponent />);
    expect(screen.getByText('Patent Data')).toBeInTheDocument();
  });

  it('renders input for filtering patents', () => {
    render(<PatentComponent />);
    expect(screen.getByPlaceholderText('Filter patents')).toBeInTheDocument();
  });

  it('renders filtered patents', () => {
    render(<PatentComponent />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Patent')).toBeInTheDocument();
    expect(screen.getByText('Test Abstract')).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', 'test.jpg');
  });

  it('displays message when no patents are found', () => {
    (usePattent as jest.Mock).mockReturnValueOnce({
      ...usePattent(),
      filteredPatents: [],
    });
    render(<PatentComponent />);
    expect(screen.getByText('Not found patents')).toBeInTheDocument();
  });

  it('renders loading spinner when loading is true', () => {
    (usePattent as jest.Mock).mockReturnValueOnce({
      ...usePattent(),
      loading: true,
    });
    render(<PatentComponent />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
