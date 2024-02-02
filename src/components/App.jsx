import { Heder } from 'components/Heder/Heder';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <div>
      <Heder />
      <TaskForm />
      <TaskList />
    </div>
  );
};
