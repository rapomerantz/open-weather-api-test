import React, { Component } from 'react';
import CurrentWeather from '../Components/Current/CurrentWeather.jsx'
import ForecastWeather from '../Components/Forecast/ForecastWeather.jsx'


class OpenWeatherTest extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      showCurrent: false
    }
  }

  toggleCurrent = () => {
    this.setState({
      showCurrent: !this.state.showCurrent
    })
  }

  render() {
    let componentToShow = this.state.showCurrent ? <CurrentWeather/> : <ForecastWeather />

    return (
      <div className="OpenWeatherTest">
        <button onClick={this.toggleCurrent}>
            {this.state.showCurrent ? 'Show Forecast' : 'Show Current'}
        </button>
        {componentToShow}
      </div>
    );
  }
}


export default OpenWeatherTest;