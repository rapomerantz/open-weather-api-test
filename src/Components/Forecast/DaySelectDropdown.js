import React, { Component } from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap'; 


export default class DaySelectDropdown extends Component {
  handleDropdownSelect = (selectedDay) => {
    this.props.handleSelectDay(selectedDay)

  }
  render() {
    return (
      <div>
        <DropdownButton
          // bsStyle={this.props.title.toLowerCase()}
          title={this.props.title}
          key={this.props.title}
          id={`dropdown-basic-${this.props.title}`}
          onSelect = {this.handleDropdownSelect}
          >
            <MenuItem eventKey="0">Monday</MenuItem>
            <MenuItem eventKey="1">Tuesday</MenuItem>
            <MenuItem eventKey="2">Wednesday</MenuItem>
            <MenuItem eventKey="3">Thursday</MenuItem>
            <MenuItem eventKey="4">Friday</MenuItem>
            <MenuItem eventKey="5">Saturday</MenuItem>
            <MenuItem eventKey="6">Sunday</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}
