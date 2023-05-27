import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Navbar from '../../../src/components/Navbar';

describe('Navbar', () => {
    it('renders Navbar component', () => {
        render(<Navbar />);

        const header = screen.getByText(/Weather-App/);

        expect(header).toBeInTheDocument();
    });
})