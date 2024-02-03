import { Heder } from 'components/Heder/Heder';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { Calendar } from './Calendar/Calendar';


export const App = () => {
  return (
    <div>
      <Heder />      
      <TaskForm />
      <TaskList />
      <Calendar/>
    </div>
  );
};
