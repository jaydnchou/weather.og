Todo:

- OpenWeatherMap API
- Geolocation API
- Display 5-day forecast
- Display weather icon?
- JSON file with descriptions
- Switch statements to attach descriptions with temps
- Responsive styling
- Place API key in .env
- Add propTypes and check console for errors

// const userGeolocation = () => {
//   const success = pos => {
//     console.log(`lat: ${pos.coords.latitude} long: ${pos.coords.longitude}`);
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
// };