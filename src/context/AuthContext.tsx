import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

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
  const [authState, dispatch] = useReducer(authReducer, authInicialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
