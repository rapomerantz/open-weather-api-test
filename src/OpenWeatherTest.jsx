import React, { Component } from 'react';
import TestData from './TestData.json'


class OpenWeatherTest extends Component {
  render() {
      let sunrise = (new Date (TestData.sys.sunrise * 1000)).toLocaleString();
      let sunset = (new Date (TestData.sys.sunset * 1000)).toLocaleString();


    return (
      <div className="OpenWeatherTest">
        <h1>What's The Weather Right Now?</h1>
        <pre>{JSON.stringify(TestData, null, 2)}</pre>

        <h2>City: {TestData.name}</h2>
        <h3>Current Temp: {TestData.main.temp} {String.fromCharCode(8457)}</h3>
        <h4>Daily Low: {TestData.main.temp_min} {String.fromCharCode(8457)}</h4>
        <h4>Daily High: {TestData.main.temp_max} {String.fromCharCode(8457)}</h4>
        <h4>Sunrise: {sunrise}</h4>
        <h4>Sunset: {sunset}</h4>

      </div>
    );
  }
}

export default OpenWeatherTest;
