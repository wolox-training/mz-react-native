import { Api } from '../config/api';

export const logIn = (email, password) => Api.post('users/sessions', { email, password });
