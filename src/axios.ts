import axios from 'axios';

export const weatherAPI = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});
