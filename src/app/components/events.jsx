import React from 'react'
import styled from 'styled-components'

const DivContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`
const TimeList = styled('ul')`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 49px;
`
const Li = styled('li')`
  list-style: none;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  font-size: 22px;
  color: #cbcbcb;
  margin: 0 0 34px 17px;
`
const DaysList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 560px;
  padding: 0;
  margin: 0;
  overflow: hidden;
`
const Day = styled('li')`
  width: 80px;
  height: 64px;
  box-shadow: inset 0 0 0 3px #fdfdfe;
  list-style: none;
  box-sizing: border-box;
  border: 1px solid #bfbfc0;
  color: #fd3132;

  &:nth-child(7n) {
    border-right: none;
  }

  &:nth-child(1n) {
    border-left: none;
  }

  &:nth-child(1n) {
    border-bottom: none;
  }

  &:nth-child(-n + 7) {
    border-top: none;
  }

  &:focus {
    background: #b4b8fe;
  }
`

const Events = ({select, setSelect}) => {
  const days = new Array(91).fill('')
  const time = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

  const handleSelect = ({target}) => {
    !target.textContent && setSelect(true)
  }

  return (
    <DivContainer>
      <TimeList>
        {time.map(t => <Li key={t}>{t}</Li>)}
      </TimeList>
      <DaysList>
        {days.map((day, i) => (
          <Day key={i} onClick={handleSelect} tabIndex={0}>
            {day}
          </Day>
        ))}
      </DaysList>
    </DivContainer>
  )
}

export default Events