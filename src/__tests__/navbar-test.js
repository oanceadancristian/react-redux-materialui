import { render, screen } from '@testing-library/react';
import Navbar from '../Components/Navbar';
import { AuthContextProvider } from '../Context/Auth/AuthContext';
import { CartContextProvider } from '../Context/Cart/CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('Renders text', () => {
    render(
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    );
    const textElement = screen.getByText('Fake Store');
    expect(textElement).toBeInTheDocument();
  });

  test('Renders login buton', () => {
    render(
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    );
    const loginButtonElement = screen.getByText('Login');
    expect(loginButtonElement).toBeInTheDocument();
  });

  test('Renders logout button', () => {
    render(
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    );
    const logoutButtonElement = screen.queryByRole('link', { name: 'Logout' });
    expect(logoutButtonElement).not.toBeInTheDocument();
  });

  test('Renders products button', () => {
    render(
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
    );
    const productsButtonElement = screen.queryByRole('link', {
      name: 'Products',
    });
    expect(productsButtonElement).not.toBeInTheDocument();
  });
});
