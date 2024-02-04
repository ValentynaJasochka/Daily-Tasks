import { Container, Link, Navigation } from './Layout.styled';
import {  Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
   <Container>
    <header>
      <div>
        <Navigation>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/task-creator">Create Task</Link>
          </li>
          <li>
            <Link to="/task-list" end>Tasks List</Link>
          </li>
          <li>
            <Link to="/task-list/:task">Task</Link>
          </li>
        </Navigation>
      </div>
      
    </header>
    <main>
    <Outlet />
    </main></Container>
  );
};
