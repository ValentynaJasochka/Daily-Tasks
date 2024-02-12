import { useEffect, useState } from 'react';
import { NameWrapper, Task } from './TaskItem.styled';
import { URL } from "constants"
import axios from 'axios';
axios.defaults.baseURL = URL;
const putTaskCOmpleted = async (id, payload) => {
  try {
    const response = await axios.put(`tasks/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const TaskItem = ({ props }) => {
  const {id,  taskName, taskDescription, periodic, deadline, category, completed } =
    props;
    const [newCompleted, setNewCompleted] = useState(completed)
    const  handleCompleted=  (e)=>{console.log(e.target.value)
    setNewCompleted(!newCompleted)
   
  
  }
  useEffect(()=>{
    const rewriteCompletedTask = async() => {
      console.log(newCompleted)
      await putTaskCOmpleted(id, newCompleted )
    }
    rewriteCompletedTask()
  },[newCompleted,id])

  return (
    <Task>
      <p>{category}</p>
      <NameWrapper>
        <p>{taskName}</p>
        {deadline && <p>{deadline}</p>}
      </NameWrapper>
      <p>{periodic}</p>
      <p>{taskDescription}</p>
      <div>
        <p>completed</p>{' '}
        <input
          type="checkbox"
          name="completed"
          value={newCompleted}
          onChange={handleCompleted}
          checked={newCompleted}
        />
      </div>
    </Task>
  );
};
