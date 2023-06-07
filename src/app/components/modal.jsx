import React from 'react'
import styled from 'styled-components'

const ModalWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${active => active ? 1 : 0};
  pointer-events: ${active => active ? 'all' : 'none'};
  z-index: 1;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
  height: 356px;
  border-radius: 29px;
  background: #e4e4e6;
  margin-top: 2px;
  margin-right: 16px;
`

const ContentHeader = styled.div`
  font-family: "Segoe UI", serif;
  font-weight: 600;
  font-size: 36px;
  margin-top: 32px;
  margin-bottom: 3px;
`
const ContentP = styled.div`
  font-size: 27px;
`
const Input = styled.input`
  width: 468px;
  height: 44px;
  margin-top: 40px;
`
const Cancel = styled.button`
  color: #0079fe;
  outline: none;
  border: #e3e3e5;
  border-right: 1px solid #68687d;
  border-bottom-left-radius: 29px;
  width: 270px;
  font-family: "Segoe UI", serif;
  font-size: 35px;
  font-weight: 500;
`
const Ok = styled.button`
  color: #0079fe;
  outline: none;
  border-bottom-right-radius: 29px;
  border: #e3e3e5;
  width: 270px;
  font-family: "Segoe UI", serif;
  font-size: 35px;
  font-weight: 500;
`
const ButtonWrap = styled.div`
  display: flex;
  margin-top: 23px;
  height: 88px;
  border-top: 1px solid #68687d;
`

const Modal = ({active, setActive}) => {
  return (
    active &&
    <ModalWindow active={active.toString()} onClick={() => setActive(false)}>
      <Content active={active.toString()}>
        <ContentHeader>
          https://calendar.com
        </ContentHeader>
        <ContentP>Enter event time:</ContentP>
        <ContentP>YYYY-MM-DD HH:mm:ss</ContentP>
        <Input/>
        <ButtonWrap>
          <Cancel>Cancel</Cancel>
          <Ok>OK</Ok>
        </ButtonWrap>
      </Content>
    </ModalWindow>
  )
}

export default Modal