import React, { Component } from 'react'
import TestForecastData from '../TestForecastData.json'

import '../main.css'

export default class ForecastWeather extends Component {
  render() {
    let dateArray = TestForecastData.list.map((item) => {
        let dateFormatOptions = { weekday: 'long', month: 'long', day: 'numeric'};
        let timeFormatOptions = {hour: '2-digit' };
        let formattedDate = new Date (item.dt*1000).toLocaleString(window.navigator.language, dateFormatOptions); 
        let formattedTime = new Date (item.dt*1000).toLocaleString(window.navigator.language, timeFormatOptions); 
        return (
            <tr key={formattedDate}>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td></td>
                <td>Kinda Rainy</td>
                <td>70/65</td>
                <td>Yep</td> /
            </tr>
        )
    })


    return (
      <div>
        <h1>Forecast Weather</h1>
        <table>
            <thead>
                <th>
                    Day
                </th>
                <th>
                    {/* Icon */}
                </th>
                <th>
                    Time
                </th>
                <th>
                    Description
                </th>
                <th>
                    High/Low
                </th>
                <th>
                    Precip. 
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Tuesday, July 3</td>
                    <td>3: 00 PM</td>
                    <td>Kinda Rainy</td>
                    <td>70/65</td>
                    <td>Yep</td>
                </tr>
                {dateArray}
            </tbody>

        </table>
        <pre>{JSON.stringify(TestForecastData, null, 2)}</pre>


      </div>
    )
  }
}
