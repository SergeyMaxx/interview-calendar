import React from 'react'
import styled from 'styled-components'
import Calendar from './calendar'

const Body = styled('div')`
  display: flex;
  justify-content: center;
  font-family: "Segoe UI Light", serif;
`

function App() {
  return (
    <Body>
      <Calendar/>
    </Body>
  )
}

export default App