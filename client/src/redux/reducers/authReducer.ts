import { Action, AuthState } from './types';

const initState: AuthState = {
  auth: undefined,
};

export const authReducer = (state: AuthState = initState, action: Action): AuthState => {
  switch (action.type) {
    case 'auth/sign-up':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/sign-in':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        auth: undefined,
      };

    default:
      return state;
  }
};
