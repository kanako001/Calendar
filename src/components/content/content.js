import React from 'react';

import DaysWrapper from './daysWrapper'
import CalendarBoxesWrapper from './calendarBoxesWrapper'

export default function contentWarpper(props) {
  return(
    <div className="content-wrapper">
      <DaysWrapper />
      <CalendarBoxesWrapper />
    </div>
  )
}