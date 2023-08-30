import React from 'react';
import {createContext} from 'react';

// Definir que información tendre aca
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInicialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Le digo a React como luce y que expone el Context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInicialState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
