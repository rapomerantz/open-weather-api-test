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
          title={this.props.title}
          key={this.props.title}
          id={`dropdown-basic-${this.props.title}`}
          onSelect = {this.handleDropdownSelect}
          >
            <MenuItem eventKey="Mon">Monday</MenuItem>
            <MenuItem eventKey="Tue">Tuesday</MenuItem>
            <MenuItem eventKey="Wed">Wednesday</MenuItem>
            <MenuItem eventKey="Thu">Thursday</MenuItem>
            <MenuItem eventKey="Fri">Friday</MenuItem>
            <MenuItem eventKey="Sat">Saturday</MenuItem>
            <MenuItem eventKey="Sun">Sunday</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}
