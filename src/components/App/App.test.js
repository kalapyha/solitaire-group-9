import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game will be here', () => {
	render(<App />);
	const linkElement = screen.getByText(/game will be here/i);
	expect(linkElement).toBeInTheDocument();
});
