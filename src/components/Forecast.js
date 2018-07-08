import React from 'react';

import ForecastWeekly from './ForecastWeekly';
import backgroundImage from '../images/leaves2.jpg';

// const userGeolocation = () => {
//   if (!navigator.geolocation){
//     return 'Geolocation is not supported by your browser';
//   }

//   const success = pos => {
//     console.log(`lat: ${pos.coords.latitude} long: ${pos.coords.longitude} as of ${pos.timestamp}`);
//     return {
//       lat: pos.coords.latitude,
//       long: pos.coords.longitude
//     };
//   };

//   const error = err => console.warn(`ERROR(${err.code}): ${err.message}`);

//   const options = {
//     enableHighAccuracy: true,
//     timeout: 30000,
//     maximumAge: 0
//   };

//   navigator.geolocation.getCurrentPosition(pos);
//   return navigator.geolocation.success;
// };

const Forecast = () => {


  return (
    <div className='container'>
      <div>
        <img className='background' src={backgroundImage} alt='background' />
        <h1 className='card-img-overlay'>-3&deg;</h1>
        <h2 className='card-img-overlay'>{`Location: ${location()}}`}</h2>
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
