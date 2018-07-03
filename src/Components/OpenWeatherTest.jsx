import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.jsx'


class OpenWeatherTest extends Component {

  render() {
    return (
      <div className="OpenWeatherTest">
        <CurrentWeather/>
      </div>
    );
  }
}


export default OpenWeatherTest;