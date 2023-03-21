import { render, screen } from '@testing-library/react';
import NotFound from '../Components/NotFound';

describe('NotFound', () => {
  test('Renders text', () => {
    render(<NotFound />);
    const textElement = screen.getByText(
      "We're sorry, the page you requested could not be found."
    );
    expect(textElement).toBeInTheDocument();
  });
});
