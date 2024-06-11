import React from 'react';
import { render } from '@testing-library/react';
import UIButton from '../../src/components/UI/UIButton';

describe('UIButton', () => {
    test('renders without crashing', () => {
        render(<UIButton />);
    });
});
