import { instance } from "./axios";

export class Weather {
  static error;
  static findWeather = async ({ state, setError }) => {
    try {
      const response = await instance.get(
        `&q=${state.latitude},${state.longitude}`
      );
      return response.data;
    } catch (error) {
      setError(error);
    }
  };
  static findWeatherByCity = async ({ city, setError }) => {
    try {
      const response = await instance.get(`&q=${city}`);
      return response.data;
    } catch (error) {
      setError(error);
    }
  };
}
