import { NameWrapper, Task } from './TaskItem.styled';

export const TaskItem = ({ props }) => {
  const { taskName, taskDescription, periodic, deadline, category, completed } =
    props;
    const handleCompleted=()=>{}

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
          value={completed}
          onChange={handleCompleted}
          checked={completed}
        />
      </div>
    </Task>
  );
};
