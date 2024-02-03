import styled from "styled-components";


export const CalendarTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1px;
 `
export const DayWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: end; 
padding: 8px;
gap: 20px;
  min-width: 140px;
  min-height: 70px;
  color: #0a334d;
  background-color: #7b7777d4;
  background-color: ${props => props.isWeekend? '#7b7777d4': "#d7d2d2d6" }
`