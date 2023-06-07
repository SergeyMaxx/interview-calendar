import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from './modal'

const DivHeader = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 35px;
  padding: 32px;
`
const Span = styled('span')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 60px;
  font-size: 60px;
  color: #fd3132;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`

const Header = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <DivHeader>
      <span>Interview Calendar</span>
      <Span onClick={() => setModalActive(true)}>+</Span>
      <Modal active={modalActive} setActive={setModalActive}/>
    </DivHeader>
  )
}

export default Header