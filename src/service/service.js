import { instance } from '../config/api';

export const logIn = (email, password) => instance.post('users/sessions', { email, password });
