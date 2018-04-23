import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000,
  headers: { Authorization: localStorage.getItem('authToken') } //for f5 case
});

export function setAuthorization(authToken) {
  Api.defaults.headers.common['Authorization'] = authToken;
}
