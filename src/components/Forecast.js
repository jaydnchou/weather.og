import {React} from 'react';
import axios from 'axios';

import { WeatherService, Weather } from '../services/Weather';
import backgroundImage from '../images/leaves2.jpg';

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'b9fdd86abbff40a94806875c86f97313';
const city = 'sydney';
const url = `${OPEN_WEATHER_BASE_URL}/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

const Forecast = () => {

  // const weatherService = () => 
  //   axios
  //     .get(url)
  //     .then(response => {
  //       return response.data.name;
  //     });

  return (
    <div className='container'>
      <div>
        <img className='background' src={backgroundImage} alt='background' />
        <h1 className='card-img-overlay'>-3&deg;</h1>
      </div>

      <div className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li className='active' data-slide-to='0' />
          <li data-slide-to='1' />
        </ol>

        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <h2>Pretty, but cold as fuck</h2>
          </div>

          <div className='container'>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Forecast;
