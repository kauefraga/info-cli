import axios from 'axios';

const quotesAPI = axios.create({
  baseURL: '',
});

const weatherAPI = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});

export {
  quotesAPI,
  weatherAPI,
};
