import 'dotenv/config';
import { weatherAPI } from '../axios';

import { WeatherAPIResponse } from '../types/Weather';

// TODO: transform this into a class

let cachedWeather: WeatherAPIResponse | null = null;

async function getWeather(location: string): Promise<WeatherAPIResponse> {
  if (cachedWeather) {
    return cachedWeather;
  }

  const uri = `current.json?key=${process.env.WEATHER_API_SECRET}&q=${location}`;

  const response = await weatherAPI.get(uri);

  cachedWeather = response.data;

  return response.data;
}

export default getWeather;
