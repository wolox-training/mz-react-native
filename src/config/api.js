import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000
});

export function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = token;
}
