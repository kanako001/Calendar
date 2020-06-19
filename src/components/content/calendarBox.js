import React, { Component } from "react"
import { render } from "node-sass";

export default class CalendarBox extends Component {
  constructor(props) {

    super(props);

  }

  // this.state = {

  // }

  render() {
    return(
      <div className="calendar-box">
        <div className="date">
          {this.props.date}
        </div>
      </div>
    )
  }
}