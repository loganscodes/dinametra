import React from 'react';
import { render} from '@testing-library/react';
import Media from '../src/components/Media/Media';
import '@testing-library/jest-dom'

describe('Media component', () => {
    test('renders without errors', () => {
        const { container } = render(<Media />);
        expect(container).toMatchSnapshot();
    });
});