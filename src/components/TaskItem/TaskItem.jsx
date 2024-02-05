import { Task } from "./TaskItem.styled";

export const TaskItem=({props}) =>{
  const {  taskName, taskDescription, periodic, deadline, category } = props;

 
  return(<Task>
  <div>{taskName}</div>
  <div>{taskDescription}</div>
  <div>{category}</div>
  <div>{deadline}</div>
  <div>{periodic}</div>
  </Task>)
}