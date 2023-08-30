import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'};

// Genera estado
// Siempre debe devolver algo, por eso le pongo el AuthState
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, userName: 'No hay usuario.'};

    default:
      return state;
  }
};
