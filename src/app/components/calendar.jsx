import React, {useState} from 'react'
import styled from 'styled-components'
import Header from './header'
import Date from './date'
import Events from './events'
import Footer from './footer'

const DivContainer = styled('div')`
  width: 640px;
`

const Calendar = () => {
  const [select, setSelect] = useState(false)

  return (
    <DivContainer>
      <Header/>
      <Date/>
      <Events select={select} setSelect={setSelect}/>
      <Footer select={select}/>
    </DivContainer>
  )
}

export default Calendar