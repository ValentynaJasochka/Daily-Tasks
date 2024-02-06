import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 15px;
`
export const BTN = styled.button`

 align-self: center;
 padding: 20px 90px;
  border-radius: 15px;
  background-color: grey;
`
export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 30px;
`
export const RangeInput = styled.input`
  width: 400px;
  
  `
export const TaskDescription = styled.textarea`
  resize: none;
  width: 200px;
  height: 100px;
`
export const RadioBtn= styled.label`
display: flex;
gap: 15px;
align-items: center;
  &::before{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid black;
  }
  /* &>RadioInput:checked{
  background-color: blue;} */
`
export const RadioInput = styled.input`
/* visibility: hidden; */
position: absolute;
width: 1px;
height: 1px;
margin:-1px;
padding: 0;
overflow: hidden;
border: 0;
clip: rect(0 0 0 0 );
&:checked +label::before {
  background-color: gray;
  box-shadow: inset 0 0 0 4px white;
}
&:hover +label::before {
 
 outline: 2px solid #272a80;
}
`
