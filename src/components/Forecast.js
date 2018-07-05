import React, { Component } from 'react';
import backgroundImage from '../images/leaves2.jpg';

const Forecast = () => (
  <div className='container'>
    <div>
      <img className='background' src={backgroundImage} alt='background' />
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
          <div className='section'>
            <ul className='weekly-forecast'>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
            </ul>
            <ul className='weekly-forecast'>
              <li>-1&deg;</li>
              <li>2&deg;</li>
              <li>5&deg;</li>
              <li>0&deg;</li>
              <li>-1&deg;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Forecast;
