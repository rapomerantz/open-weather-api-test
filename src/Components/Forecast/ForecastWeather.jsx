import React, { Component } from 'react'
import TestForecastData from './TestForecastData.json'
import geolocationFunction from '../Functions/geolocationFunction'
import DaySelectDropdown from './DaySelectDropdown.jsx'

import {Table, Jumbotron, Well, Button, ButtonGroup} from 'react-bootstrap'; 
import './ForecastWeather.css'


export default class ForecastWeather extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showJson: false,
            selectedDay: '',
            currentTime: ''
        }
    }

    toggleShowJson = () => {
        this.setState({
            showJson: !this.state.showJson
        })
    }

    handleSelectDay = (selectedDay) => {
        this.setState({
            selectedDay: selectedDay,
        })
    }

    findCurrentTime = () => {
        let dateOptions = {weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}
        let date = new Date().toLocaleString(window.navigator.language, dateOptions)
        let currentWeekday = date.substring(0, 3)
        this.setState({
            currentTime: date,
            selectedDay: currentWeekday
        })
    }

    componentDidMount () {
        this.findCurrentTime(); 
    }

  render() {

    let dateArray = TestForecastData.list.map((item) => {
        let dateFormatOptions = { weekday: 'long', month: 'long', day: 'numeric'};
        let timeFormatOptions = {hour: '2-digit' };
        let formattedDate = new Date (item.dt*1000).toLocaleString(window.navigator.language, dateFormatOptions); 
        let formattedTime = new Date (item.dt*1000).toLocaleString(window.navigator.language, timeFormatOptions); 
        let weatherIcon = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
        let weatherDescription = item.weather[0].description; 
        let temperature = (item.main.temp).toFixed()
        if (formattedDate.startsWith(this.state.selectedDay)) {
            return (
                <tr key={formattedDate + Math.random()}>
                    <td>{formattedDate}</td>
                    <td>{formattedTime}</td>
                    <td>{weatherDescription}<img src={weatherIcon} alt=""/></td>
                    <td>{temperature}</td>
                </tr>
            )
        }
    })


    return (
    <div id="forecast">


            {/* <button onClick={this.toggleShowJson}>Show JSON</button> */}
            {/* {this.state.showJson ? <pre className="jsonPrint">{JSON.stringify(TestForecastData, null, 2)}</pre> : ''} */}
            {/* <pre>{JSON.stringify(this.state.dailyData, null, 2)}</pre> */}


        <Jumbotron id='ForecastJumbotron'>
            <h1>Your Weather Forecast</h1>
            <h2>{TestForecastData.city.name}</h2>
            <h2>{this.state.currentTime && this.state.currentTime}</h2>
        </Jumbotron>
        <div id='tableWrapper'>
            <Well>
                <div id="tableContainer">
                    <Table striped condensed>
                        <thead>
                            <tr>
                                <th><DaySelectDropdown title = 'Select Day'
                                                        handleSelectDay={this.handleSelectDay}
                                                        />
                                </th>
                                <th><Button>Time</Button></th>
                                <th><Button>Description</Button></th>
                                <th><Button>Temp.</Button></th>
                                {/* <th>Precip.</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {dateArray}
                        </tbody>
                    </Table>
                </div>
            </Well>
        </div>
      </div>
    )
  }
}