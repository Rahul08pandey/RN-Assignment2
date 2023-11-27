import {LOGIN, SIGNUP, LOGOUT} from './actionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  payload: {email, password},
});

export const signUp = (name, email, contact, password) => ({
  type: SIGNUP,
  payload: {name, email, contact, password},
});

export const logout = () => ({
  type: LOGOUT,
});
