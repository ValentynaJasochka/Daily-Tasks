import { useEffect, useState } from "react"
import { URL } from "constants"
import axios from 'axios';
import { TaskItem } from "components/TaskItem/TaskItem";
import { Tasks } from "./TaskList.styled";
axios.defaults.baseURL = URL;
const getTasks = async () => {
  try {
    const response = await axios.get(`tasks`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const TaskList=() =>{
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const fetchTasks= async()=>{
      const tasks = await  getTasks()
      setTasks(tasks)
    }
    fetchTasks()
   
  },[]   
  )
  return(<>
  <Tasks>
{tasks.map(task =><TaskItem key={task.id} props={task}/>)}
  </Tasks>
  </>)
}