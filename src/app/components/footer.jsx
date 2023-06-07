import React from 'react'
import styled from 'styled-components'

const DivFooter = styled('footer')`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  border-bottom: 2px solid #e9e9ea;
  border-top: 2px solid #e9e9ea;
  background: #f4f4f5;
`
const Span = styled('span')`
  color: #fd3132;
  font-family: "Segoe UI", serif;
  font-size: 30px;
`

const Footer = ({select}) => {
  return (
    <DivFooter>
      <Span>Today</Span>
      {select ? <Span>Delete</Span> : null}
    </DivFooter>
  )
}

export default Footer