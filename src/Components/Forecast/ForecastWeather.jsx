import React, { Component } from 'react'
import TestForecastData from './TestForecastData.json'
import geolocationFunction from '../Functions/geolocationFunction'
import DaySelectDropdown from './DaySelectDropdown.js'

import {Table, Jumbotron, Well, Button, ButtonGroup} from 'react-bootstrap'; 
import './ForecastWeather.css'


export default class ForecastWeather extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            showJson: false,
            dailyData: [ 
                [], //0 mon
                [], //1 tues
                [], //2 wed
                [], //3 thurs
                [], //4 fri
                [], //5 sat
                [], //6 sun
            ],
            selectedDay: 2
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
            dailyData: [
                [], //0 mon
                [], //1 tues
                [], //2 wed
                [], //3 thurs
                [], //4 fri
                [], //5 sat
                [], //6 sun
            ]
        })
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
        return {
            date: formattedDate,
            time: formattedTime,
            icon: weatherIcon, 
            weatherDescription: weatherDescription,
            temperature: temperature
        }
    })

    dateArray.forEach(element => {
        if (element.date.startsWith('Mon')) {
            this.state.dailyData[0].push(element)
        } 
        else if (element.date.startsWith('Tue')) {
            this.state.dailyData[1].push(element)
        }
        else if (element.date.startsWith('Wed')) {
            this.state.dailyData[2].push(element)
        }
        else if (element.date.startsWith('Thu')) {
            this.state.dailyData[3].push(element)
        }
        else if (element.date.startsWith('Fri')) {
            this.state.dailyData[4].push(element)
        }
        else if (element.date.startsWith('Sat')) {
            this.state.dailyData[5].push(element)
        }
        else if (element.date.startsWith('Sun')) {
            this.state.dailyData[6].push(element)
        }
    });

    let dataForTable = this.state.dailyData[this.state.selectedDay].map((item) => {
        return (
            <tr key={item.date + Math.random()}>
                <td><span>{item.date}</span></td>
                <td><span>{item.time}</span></td>
                <td><p>{item.weatherDescription}<img src={item.icon} alt=""/></p></td>
                <td><span>{item.temperature}</span></td>
                {/* <td>??</td>  */}
            </tr>
        )
    })

    console.log(this.state.dailyData);
    
    

    let currentDate = new Date().toLocaleString(window.navigator.language, {weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit'})


    return (
    <div id="forecast">


            {/* <button onClick={this.toggleShowJson}>Show JSON</button> */}
            {/* {this.state.showJson ? <pre className="jsonPrint">{JSON.stringify(TestForecastData, null, 2)}</pre> : ''} */}
            {/* <pre>{JSON.stringify(this.state.dailyData, null, 2)}</pre> */}


        <Jumbotron id='ForecastJumbotron'>
            <h1>Forecast Weather</h1>
            <h2>{currentDate} - {TestForecastData.city.name}</h2>
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
                            {dataForTable}
                        </tbody>
                    </Table>
                </div>
            </Well>
        </div>
      </div>
    )
  }
}