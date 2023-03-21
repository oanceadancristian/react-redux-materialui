import { render, screen } from '@testing-library/react';
import SearchBar from '../Components/SearchBar';

describe('SearchBar', () => {
  test('Renders placeholder', () => {
    render(<SearchBar />);
    const placeholderElement =
      screen.getByPlaceholderText('Search for product');
    expect(placeholderElement).toBeInTheDocument();
  });
});
