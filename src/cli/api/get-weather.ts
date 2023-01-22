import { api } from './axios';

import type { WeatherAPIResponse } from '../../types/weather';

let cachedWeather: WeatherAPIResponse | null = null;

async function getWeather(location: string): Promise<WeatherAPIResponse> {
  if (cachedWeather) {
    return cachedWeather;
  }

  const uri = `current.json?key=${process.env.WEATHER_API_SECRET}&q=${location}`;

  const response = await api.get(uri);

  cachedWeather = response.data;

  return response.data;
}

export default getWeather;
