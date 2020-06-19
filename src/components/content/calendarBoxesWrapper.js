import React from 'react'

import CalendarBox from './calendarBox';

export default function calcendarBoxesWrapper(props) {
  const renderBoxes = () => {
    const boxesContainer = []

    for(let i = 0; i < 3; i++) {
      boxesContainer.push(<CalendarBox key={i} date="1"></CalendarBox>)
    }
    return boxesContainer
    
  }
}