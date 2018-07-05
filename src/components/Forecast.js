import React from 'react';

import ForecastWeekly from './ForecastWeekly';
import backgroundImage from '../images/leaves2.jpg';

const Forecast = () => (
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


export default Forecast;
