import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'};

// Genera estado
// Siempre debe devolver algo, por eso le pongo el AuthState
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, userName: 'Hay usuario.'};
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
