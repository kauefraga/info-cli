import { WeatherData } from '../../types/weather';

class Weather {
  constructor(
    private data: WeatherData,
  ) {
    this.data = data;
  }

  get now() {
    return {
      celsius: `${this.data.current.temp_c}c°`,
      name: this.data.location.name,
      country: this.data.location.country,
      region: this.data.location.region,
    };
  }
}

export default Weather;
