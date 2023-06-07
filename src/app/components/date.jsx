import React from 'react'
import styled from 'styled-components'

const DivContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e9e9ea;
  border-top: 2px solid #e9e9ea;
  padding: 14px;
  //margin-bottom: 25px;
  background: #f4f4f5;
`
const Ul = styled('ul')`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`
const Li = styled('li')`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  list-style: none;
`
const DaysOfWeek = styled('div')`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 10px;
`
const Days = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
`
const SelectedDate = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #fd3132;
  border-radius: 50%;
  color: #fff;
`

const MonthContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0 47px;
`
const LeftRight = styled('span')`
  color: #fd3132;
  font-size: 24px;
  font-weight: 900;
`
const Month = styled('span')`
  font-size: 24px;
  font-weight: 900;
`

const Date = () => {
  return (
    <DivContainer>
      <Ul>
        <Li>
          <DaysOfWeek>M</DaysOfWeek>
          <Days>25</Days>
        </Li>
        <Li>
          <DaysOfWeek>T</DaysOfWeek>
          <Days>26</Days>
        </Li>
        <Li>
          <DaysOfWeek>W</DaysOfWeek>
          <Days>27</Days>
        </Li>
        <Li>
          <DaysOfWeek>T</DaysOfWeek>
          <Days>28</Days>
        </Li>
        <Li>
          <DaysOfWeek>F</DaysOfWeek>
          <Days>
            <SelectedDate>29</SelectedDate>
          </Days>
        </Li>
        <Li>
          <DaysOfWeek>S</DaysOfWeek>
          <Days>30</Days>
        </Li>
        <Li>
          <DaysOfWeek>S</DaysOfWeek>
          <Days>31</Days>
        </Li>
      </Ul>
      <MonthContainer>
        <LeftRight>
          {'<'}
        </LeftRight>
        <Month>March 2019</Month>
        <LeftRight>
          {'>'}
        </LeftRight>
      </MonthContainer>
    </DivContainer>
  )
}

export default Date