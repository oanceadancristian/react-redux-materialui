import React from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') ?? null
  );

  function login(data) {
    setAuthToken(data);
    localStorage.setItem('authToken', data);
  }

  function logout() {
    localStorage.removeItem('authToken');
    setAuthToken('');
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
