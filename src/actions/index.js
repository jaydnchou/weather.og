import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'b9fdd86abbff40a94806875c86f97313';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${OPEN_WEATHER_URL}&q=${city},au`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
