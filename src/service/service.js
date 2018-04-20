import { Api } from '../config/api';

export const logIn = (email, password) => Api.post('users/sessions', { email, password });
export const signUp = (email, password, confirm_password, first_name, last_name) =>
  Api.post('users', {
    user: {
      email,
      password,
      confirm_password,
      first_name,
      last_name,
      locale: 'en'
    }
  });
