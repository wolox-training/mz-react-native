import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  timeout: 1000
});
