import { render, screen } from '@testing-library/react';
import Sort from '../Components/Filter/Sort';

describe('Sort', () => {
  test('Renders label', () => {
    render(<Sort />);
    const labeElement = screen.getByLabelText('Sort by price');
    expect(labeElement).toBeInTheDocument();
  });

  test('Renders button', () => {
    render(<Sort />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toBeDisabled();
  });
});
