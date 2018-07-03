import React, { Component } from 'react';
import TestData from './TestData.json'
import TestIcon from './TestIcon.png'
import './main.css'

import axios from 'axios'; 

class OpenWeatherTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zipCode: 55418,
            apiResponse: TestData
        }
    }

    getWeather = () => {
        let zipCode = this.state.zipCode
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=59d1b54e2c5f610efe6e684af2ba76c6`)
        .then((response) => {
            console.log('Successful GET',response.data);
            console.log(response.data.weather[0].icon);
            this.setState({
                apiResponse: response.data
            })            
        })
        .catch((error) => {
            console.log('error', error);
        })
    }

    // getWeatherIcon = (iconCode) => {
    //     axios.get(`http://openweathermap.org/img/w/${iconCode}.png`)
    //     .then((response) => {
    //         console.log('successful GET of weather Icon');
    //         this.setState({
    //             weatherIcon: response.data
    //         })
    //     })
    //     .catch((error) => {
    //         console.log('error in Icon');
    //     })
    // }


    handleChangeZip = (event) => {
        this.setState({
            zipCode: event.target.value        
        })
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
            <input type="number" 
                    name="zipCode" 
                    onChange = {this.handleChangeZip}
                    value={this.state.zipCode}/>
            <button onClick={this.getWeather}>Make the Call</button>

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