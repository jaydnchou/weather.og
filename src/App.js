import React from 'react';

import Header from './components/Header';
// import Forecast from './components/Forecast';
// import CurrentWeatherDisplay from './components/CurrentWeatherDisplay';
import DailyWeatherDisplay from './components/DailyWeatherDisplay';

import './App.css';
import WeatherService from './services/WeatherService';

const App = () => (
  <div className="current-forecast">
    <Header title="Today's Weather" />
    <div>{WeatherService}</div>
  </div>
);

export default App;
