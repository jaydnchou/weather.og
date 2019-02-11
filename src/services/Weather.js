import { React, Fragment } from 'react';
import axios from 'axios';

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'b9fdd86abbff40a94806875c86f97313';
const city = 'sydney';
const url = `${OPEN_WEATHER_BASE_URL}/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

// const getWeather = url => new Promise((resolve, reject) => {
//   axios
//     .get(url)
//     .then(response => {
//       if (response && response.status === 200) {
//         const { main } = response.data.weather[0];
//         const { temp } = response.data.main;
//         const { lon, lat } = response.data.coord;
//         const { dt, name } = response.data;
//         resolve({
//           condition: main,
//           date: new Date(dt * 1000),
//           location: {
//             name,
//             latitude: lat,
//             longitude: lon,
//           },
//           temperature: {
//             current: temp
//           },
//         });
//       } else {
//           reject('Weather data not found');
//         }
//     })
//     .catch(error => reject(error.message));
// });

// const WeatherService = () => {
//   const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
//   const OPEN_WEATHER_API_KEY = 'b9fdd86abbff40a94806875c86f97313';
//   const city = 'sydney';
//   const url = `${OPEN_WEATHER_BASE_URL}/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

//   try {
//     await axios.get(url)
//     console.log(response.data.weather[0]);
//     return response.data.weather[0];
//   } catch (error) {
//     console.error('Nooooo', error)
//   }
// }

// export class WeatherService extends Component {
//   constructor() {
//     super();
//     this.state = {
//       weather: [],
//       temp: []
//     };
//   }

//   componentDidMount() {
//     axios.get(url)
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           weather: res.data.list[0],
//           temp: res.data.list[0].main.temp
//         });
//       })
//       .catch(err => console.error('Error', err));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.weather.name}
//       </div>
//     );
//   }
// }


export const WeatherService = () => {
  const req = axios
    .get(url)
    .then(res => res.data.main.temp);
  
  return req;
};


// export default WeatherService;