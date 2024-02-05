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
 display: inline;
 padding: 40px;
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
:checked.label &{
  background-color: #ff00b7;
}
`
