import React, { Component } from 'react';
// import backgroundImage from '../images/leaves2.jpg';

import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import DailyWeatherDisplay from './DailyWeatherDisplay';

import WeatherService from '../services/WeatherService';
import { GeolocationService } from '../services/GeolocationService';

const weatherService = new WeatherService();
const geolocationService = new GeolocationService();

// import { fetchWeather } from '../actions';

// const Forecast = () => (
//   <div>
//     <img src={backgroundImage} alt="background" />
//     <div className="card-img-overlay">
//       <h1>{fetchWeather('sydney')}&deg;</h1>
//     </div>

//     <div className="carousel slide" data-ride="carousel">

//       <ol className="carousel-indicators">
//         <li className="active" data-slide-to="0" />
//         <li data-slide-to="1" />
//       </ol>

//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <h2>Pretty, but cold as fuck</h2>
//         </div>
//         <div className="container carousel-item">
//           <div className="section">
//             <ul>
//               <li className="weekly-forecast">Monday</li>
//               <li className="weekly-forecast">Tuesday</li>
//               <li className="weekly-forecast">Wednesday</li>
//               <li className="weekly-forecast">Thursday</li>
//               <li className="weekly-forecast">Friday</li>
//               <li className="weekly-forecast">Saturday</li>
//               <li className="weekly-forecast">Sunday</li>
//             </ul>
//             <ul>
//               <li className="weekly-forecast">-1&deg;</li>
//               <li className="weekly-forecast">2&deg;</li>
//               <li className="weekly-forecast">5&deg;</li>
//               <li className="weekly-forecast">0&deg;</li>
//               <li className="weekly-forecast">-1&deg;</li>
//               <li className="weekly-forecast">0&deg;</li>
//               <li className="weekly-forecast">4&deg;</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

class Forecast extends Component {
  constructor(props) {
      super(props);

      this.state = {
          showCurrentWeather: false,
          showDailyWeather: false
      };

      this.handleOnRefresh = this.handleOnRefresh.bind(this);
  }


  componentDidMount() {
      geolocationService
          .getCurrentPosition()
          .then(position => {
              this.loadCurrentWeatherByPosition(position);
              this.loadDailyWeatherByPosition(position);
          })
          .catch(error => console.log(error));      
  }


  loadCurrentWeatherByPosition(position) {
      
      if (!position) {
          throw Error('A valid position must be specified');
      }

      weatherService
          .getCurrentWeatherByPosition(position)
          .then(weather => {
              this.setState(() => ({ weather: weather, showCurrentWeather: true }));
          })
          .catch(error => console.log(error));
  }

  handleOnRefresh() {
      this.setState(() => ({
          showCurrentWeather: false,
          showDailyWeather: false
      }));

      geolocationService
          .getCurrentPosition()
          .then(position => {
              this.loadCurrentWeatherByPosition(position);
              this.loadDailyWeatherByPosition(position);
          })
          .catch(error => console.log(error));
  }


  showWeather() {
      return this.state.showCurrentWeather 
          && this.state.showDailyWeather;
  }


  showSpinner() {
      return !this.state.showCurrentWeather 
          || !this.state.showDailyWeather;
  }


  render() {
      return (
          <div>
              {
                  this.showWeather() &&
                  <div>
                      <CurrentWeatherDisplay weather={this.state.weather} onRefresh={this.handleOnRefresh} />
                      <DailyWeatherDisplay dailyForecasts={this.state.dailyForecasts} />
                  </div>
              }
              {
                  this.showSpinner() &&
                  <div className="w-100 text-center mt-5">
                      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                  </div>
              }
          </div>
      );
  }
}


export default Forecast;
