import { useEffect, useState } from "react"
import { URL } from "constants"
import axios from 'axios';
import { TaskItem } from "components/TaskItem/TaskItem";
import { FilterWrapper, Tasks } from "./TaskList.styled";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { CategoryFilter } from "components/CategoryFilter/CategoryFilter";
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
   <FilterWrapper>
   <TaskCounter/>
    <StatusFilter/>
    <CategoryFilter/>
    </FilterWrapper>
  <Tasks>     
{tasks.map(task =><TaskItem key={task.id} props={task}/>)}
  </Tasks>
  </>)
}