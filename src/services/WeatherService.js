import axios from 'axios';
import React, { Component } from 'react';

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'b9fdd86abbff40a94806875c86f97313';
const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

const latitude = -33;
const longitude = 151;

// const x = `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`;
// testing git
export const test = url => {
	axios
		.get(url)
		.then((response) => response.data.main.temp)
		.catch(error => error.message)
};

const getWeather = url => new Promise((resolve, reject) => {
  axios
    .get(url)
    .then((response) => {
      if (response && response.status === 200) {
        const { main, icon } = response.data.weather[0];
        const { temp, temp_min, temp_max } = response.data.main;
        const { lon, lat } = response.data.coord;
        const { dt, name } = response.data;
        resolve({
          condition: main,
          date: new Date(dt * 1000),
          icon: `${OPEN_WEATHER_IMG_URL}/${icon}.png`,
          location: {
            name,
            latitude: lat,
            longitude: lon,
          },
          temperature: {
            current: temp,
            minimum: temp_min,
            maximum: temp_max,
          },
        });
      } else {
        reject('Weather data not found');
      }
    })
    .catch(error => reject(error.message));
});


const getDailyWeather = url => new Promise((resolve, reject) => {
  axios
    .get(url)
    .then((response) => {
      if (response && response.status === 200) {
        const location = {
          name: response.data.city.name,
          latitude: response.data.city.coord.lat,
          longitude: response.data.city.coord.lon,
        };

        const dailyForecasts = response.data.list.map(fc => ({
          condition: fc.weather[0].description,
          date: new Date(fc.dt * 1000),
          icon: `${OPEN_WEATHER_IMG_URL}/${fc.weather[0].icon}.png`,
          location,
          temperature: {
            minimum: fc.temp.min,
            maximum: fc.temp.max,
          },
        }));
        resolve(dailyForecasts);
      } else {
        reject('Weather data not found');
      }
    })
    .catch(error => reject(error.message));
});

// const getCurrentWeatherByPosition = () => {
// 	const url = `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`;

// 	return getWeather(url);
// };

// const getDailyWeatherByPosition = () => {
// 	const url = `${OPEN_WEATHER_BASE_URL}/forecast/daily?appid=${OPEN_WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=metric&cnt=7`;
	
// 	return getDailyWeather(url);
// };

// 	getDailyWeatherByPosition() {
// 		const url = `${OPEN_WEATHER_BASE_URL}/forecast/daily?appid=${OPEN_WEATHER_API_KEY}&lat=-33&lon=151&units=metric&cnt=7`;
// 		return getDailyWeather(url);
// 	}
// }

const getCurrentWeatherByPosition = () => {
	const url = `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&lat=-33&lon=151&units=metric`;
	return test(url);
};

console.log(getCurrentWeatherByPosition);

export class WeatherService extends Component {
	getCurrentWeatherByPosition() {
		const url = `${OPEN_WEATHER_BASE_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&lat=-33&lon=151&units=metric`;
		return getWeather(url);
	}
};
