import React from 'react';

import Header from './Header';
import Forecast from './Forecast';

import WeatherList from '../components/WeatherList';
import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import DailyWeatherDisplay from './DailyWeatherDisplay';

import './App.css';

const App = () => (
  <div className='current-forecast'>
    <Header title="Today's weather" />
    <Forecast />
  </div>
);

export default App;
