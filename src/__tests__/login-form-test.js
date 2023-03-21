import { render, screen } from '@testing-library/react';
import LoginForm from '../Components/LoginForm';
import { AuthContextProvider } from '../Context/Auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('LoginForm', () => {
  test('Renders text', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContextProvider>
    );
    const textElement = screen.getByText('Login to your account');
    expect(textElement).toBeInTheDocument();
  });

  test('Renders inputUsername', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContextProvider>
    );
    const inputUsernameElement = screen.getByRole('textbox', {
      name: 'Username',
    });
    expect(inputUsernameElement).toBeRequired();
  });

  test('Renders input checkbox', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContextProvider>
    );
    const inputCheckboxElement = screen.getByRole('checkbox');
    expect(inputCheckboxElement).not.toBeChecked();
  });

  test('Renders login button', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContextProvider>
    );
    const loginButtonElement = screen.getByRole('button');
    expect(loginButtonElement).toHaveAttribute('type', 'submit');
  });
});
