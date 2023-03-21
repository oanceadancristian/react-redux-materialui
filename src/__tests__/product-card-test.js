import { render, screen } from '@testing-library/react';
import ProductCard from '../Components/ProductCard';
import { CartContextProvider } from '../Context/Cart/CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('ProductCard', () => {
  test('Renders product title', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <ProductCard />
        </BrowserRouter>
      </CartContextProvider>
    );
    const productTitleElement = screen.getByRole('product-title');
    expect(productTitleElement).toBeVisible();
  });

  test('Renders product name', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <ProductCard />
        </BrowserRouter>
      </CartContextProvider>
    );
    const productNameElement = screen.queryByRole('img');
    expect(productNameElement).toBeInTheDocument();
  });

  test('Renders product price', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <ProductCard />
        </BrowserRouter>
      </CartContextProvider>
    );
    const productPriceElement = screen.getByRole('product-price');
    expect(productPriceElement).toBeVisible();
  });

  test('Renders add to cart button', () => {
    render(
      <CartContextProvider>
        <BrowserRouter>
          <ProductCard />
        </BrowserRouter>
      </CartContextProvider>
    );
    const addToCartButtonElement = screen.queryByRole('button');
    expect(addToCartButtonElement).toHaveTextContent('Add to cart');
  });
});
