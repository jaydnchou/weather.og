import React from 'react';

import Header from './Header';
import Forecast from './Forecast';
import Search from './Search';

import WeatherList from '../components/WeatherList';
// import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import DailyWeatherDisplay from './DailyWeatherDisplay';

import './App.css';
import WeatherService, { test } from '../services/WeatherService';

const App = () => (
  <div className='current-forecast'>
    <Header title="Today's Weather" />
    <Forecast />
  </div>
);

export default App;
