import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer', () => {
  test('Renders text', () => {
    render(<Footer />);
    const textElement = screen.getByText(
      '© 2023 Fake Store | All rights reserved'
    );
    expect(textElement).toBeInTheDocument();
  });
});
