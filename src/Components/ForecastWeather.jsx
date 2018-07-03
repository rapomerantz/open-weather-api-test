import React, { Component } from 'react'
import TestForecastData from '../TestForecastData.json'

import '../main.css'

export default class ForecastWeather extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            showJson: false,
            dailyData: [
                [], //0 mon
                [], //1 tues
                [], //2 wed
                [],  //3 thurs
                [],  //4 fri
                [], //5 sat
                [], //6 sun
            ]
        }
    }

    toggleShowJson = () => {
        this.setState({
            showJson: !this.state.showJson
        })
    }


  render() {
    let resultObject = {}; 
    let dateArray = TestForecastData.list.map((item) => {
        let dateFormatOptions = { weekday: 'long', month: 'long', day: 'numeric'};
        let timeFormatOptions = {hour: '2-digit' };
        let formattedDate = new Date (item.dt*1000).toLocaleString(window.navigator.language, dateFormatOptions); 
        let formattedTime = new Date (item.dt*1000).toLocaleString(window.navigator.language, timeFormatOptions); 
        let weatherIcon = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
        let weatherDescription = item.weather[0].description; 
        let temperature = (item.main.temp).toFixed()
        // let rain = item.rain ? item.rain[0] : 0;
        return (
            <tr key={formattedDate + Math.random()}>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td><img src={weatherIcon} alt=""/></td>
                <td>{weatherDescription}</td>
                <td>{temperature}</td>
                <td>??</td> 
            </tr>
        )
    })


    for (let i = 0; i < dateArray.length; i++) {
        let dateArrayRow = dateArray[i].props.children
        let weekdayMonthDate = dateArrayRow[0].props.children
        if (weekdayMonthDate.startsWith('Mon')) {
            this.state.dailyData[0].push(dateArrayRow)
        } 
        else if (weekdayMonthDate.startsWith('Tue')) {
            this.state.dailyData[1].push(dateArrayRow)
        }
        else if (weekdayMonthDate.startsWith('Wed')) {
            this.state.dailyData[2].push(dateArrayRow)
        }
        else if (weekdayMonthDate.startsWith('Thu')) {
            this.state.dailyData[3].push(dateArrayRow)
        }
        else if (weekdayMonthDate.startsWith('Fri')) {
            this.state.dailyData[4].push(dateArrayRow)
        }
        else if (weekdayMonthDate.startsWith('Sat')) {
            this.state.dailyData[5].push(dateArrayRow)
        }
        else if (weekdayMonthDate.startsWith('Sun')) {
            this.state.dailyData[6].push(dateArrayRow)
        }
    }
    console.log(this.state.dailyData);
    
    



    let currentDate = new Date().toLocaleString(window.navigator.language, {weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit'})
    
    return (
      <div>
        <button onClick={this.toggleShowJson}>Show JSON</button>
        {this.state.showJson ? <pre className="jsonPrint">{JSON.stringify(TestForecastData, null, 2)}</pre> : ''}
        <h1>Forecast Weather</h1>
        <h2>{currentDate} - {TestForecastData.city.name}</h2>
        <div id="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Icon</th>
                        <th>Description</th>
                        <th>Temp.</th>
                        <th>Precip.</th>
                    </tr>
                </thead>
                <tbody>
                    {dateArray}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}