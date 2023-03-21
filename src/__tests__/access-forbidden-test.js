import { render, screen } from '@testing-library/react';
import AccessForbidden from '../Components/AccessForbidden';

describe('AccessForbidden', () => {
  test('Renders text', () => {
    render(<AccessForbidden />);
    const textElement = screen.getByText(
      "We're sorry, you don't have access to the page you requested."
    );
    expect(textElement).toBeInTheDocument();
  });
});
