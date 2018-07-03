import React, { Component } from 'react';
import TestData from './TestData.json'
import TestIcon from './TestIcon.png'
import './main.css'

import axios from 'axios'; 



class OpenWeatherTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zipCode: 55305,
            apiResponse: TestData,
        }
    }

    axiosTestCall = () => {
        console.log('in AxiosTestCall');
        axios.get('https://swapi.co/api/people/?search=skywalker')
        .then((response) => {
            console.log('response', response.data);
        })
        .catch((error) => {
            console.log('error', error);
        })
    }

    handleChangeZip = (event) => {
        console.log(event.target.value);
        
    }


  render() {
    const {apiResponse} = this.state

      let sunrise = (new Date (apiResponse.sys.sunrise * 1000)).toLocaleString();
      let sunset = (new Date (apiResponse.sys.sunset * 1000)).toLocaleString();

    return (
      <div className="OpenWeatherTest">
        <h1>What's The Weather Right Now?</h1>
        <pre id="jsonPrint">{JSON.stringify(this.state, null, 2)}</pre>
        <div>
            <button onClick={this.axiosTestCall}>Make the Call</button>

            <h2>City: {apiResponse.name}</h2>
            <h3>Current Temp: {apiResponse.main.temp} {String.fromCharCode(8457)}</h3>
            <span>
                <h3>Current Weather: {apiResponse.weather[0].main}</h3>
                <img src={TestIcon} alt=""/>
            </span>
            <h4>Daily Low: {apiResponse.main.temp_min} {String.fromCharCode(8457)}</h4>
            <h4>Daily High: {apiResponse.main.temp_max} {String.fromCharCode(8457)}</h4>
            <h4>Sunrise: {sunrise}</h4>
            <h4>Sunset: {sunset}</h4>
        </div>
      </div>
    );
  }
}


export default OpenWeatherTest;