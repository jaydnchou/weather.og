import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
   return (
     <table className='table table-hover'>
      <thead>
        <tr>
          <th>city</th>
          <th>temperature</th>
        </tr>
      </thead>
      <tbody>
       {this.props.weather.map(this.renderWeather)}
      </tbody>
     </table>
   ); 
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
