import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the bwf schedule logo', () => {
  render(<App />);
  const element = screen.getByTitle(/scheduleLogo1/i);
  expect(element).toBeInTheDocument();
});
