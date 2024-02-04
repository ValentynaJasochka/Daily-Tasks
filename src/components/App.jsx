// import { Heder } from 'components/Heder/Heder';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { Calendar } from './Calendar/Calendar';
import {  Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
 
  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/task-creator" element={<TaskForm />} />
        <Route path="/task-list"  element={<TaskList />} />
        <Route path="/task-list/:task" element={<div>single Task </div>} />
      </Route>
    </Routes>
  );
 
};
