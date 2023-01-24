import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test.skip('renders game will be here', () => {
    render(<App />);
    const linkElement = screen.getByText(/game will be here/i);
    expect(linkElement).toBeInTheDocument();
});
