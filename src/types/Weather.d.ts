interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  },
  current: {
    temp_c: number;
  }
}

interface WeatherAPIResponse {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
  },
  current: {
    temp_c: number;
    temp_f: number;
    precip_mm: number;
    humidity: number;
    condition: {
      text: string,
      // icon: string || cdn url
      // code: number
    }
  }
}

export {
  WeatherData,
  WeatherAPIResponse,
};
