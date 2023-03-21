import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Filter from '../Components/Filter';
import CategoryButton from '../Components/Filter/Category/CategoryButton';

describe('Filter', () => {
  test('Renders filters text', () => {
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    );
    const filtersTextElement = screen.getByText('Filters');
    expect(filtersTextElement).toBeInTheDocument();
  });

  test('Renders clear filters text', () => {
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    );
    const clearFiltersTextElement = screen.getByText('Clear filters');
    expect(clearFiltersTextElement).toBeInTheDocument();
  });

  test('Renders input radio', () => {
    render(<CategoryButton />);
    const inputRadioElement = screen.getByRole('radio');
    expect(inputRadioElement).toBeInTheDocument();
  });

  test('Renders input radio not checked', () => {
    render(<CategoryButton />);
    const inputRadioElement = screen.getByRole('radio');
    expect(inputRadioElement).not.toBeChecked();
  });
});
