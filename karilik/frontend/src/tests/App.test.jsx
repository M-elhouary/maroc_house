import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders homepage link', () => {
    render(<App />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders login page link', () => {
    render(<App />);
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders footer component', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});