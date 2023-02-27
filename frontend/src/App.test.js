import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pElement = screen.getByText(/learn react/i);
  expect(pElement).toBeInTheDocument();
});
