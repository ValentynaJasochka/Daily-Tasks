import {
  BTN,
  Form,
  Input,
  RadioBtn,
  RadioBtnContainer,
  RadioInput,
  RangeInput,
  TaskDescription,
} from './TaskForm.styled';
import axios from 'axios';
import { useState } from 'react';
import { URL } from 'constants';

const handleRangePeriodic = value => {
  switch (value) {
    case 0:
      return 'monthly';
      break;
    case 25:
      return 'weekly';
      break;
    case 50:
      return 'two times per week';
      break;
    case 75:
      return 'three times per week';
      break;
    case 100:
      return 'everyday';
      break;
  }
};
axios.defaults.baseURL = URL;
const putTask = async data => {
  try {
    const response = await axios.post(`tasks`, data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const TaskForm = () => {
  const [periodic, setPeriodic] = useState(0);
  const [rangePeriodic, setRangePeriodic] = useState('monthly');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [category, setCategory] = useState('education');
  const [deadline, setDeadline] = useState(false);

  const handleTaskName = e => {
    setTaskName(e.target.value);
  };
  const handleTaskDescription = e => {
    setTaskDescription(e.target.value);
  };
  const handleCategory = e => {
    // console.log(e.currentTarget.value);
    setCategory(e.currentTarget.value);
  };
  const handlePeriodic = e => {
    setPeriodic(e.target.value);

    setRangePeriodic(handleRangePeriodic(parseInt(e.target.value)));
  };
  const handleDeadline = e => {
    setDeadline(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      "id": 1234,
      "taskName": taskName,
      "category": category,
      "deadline": deadline,
      "taskDescription": taskDescription,
      "periodic": periodic,
      "completed": false,
    };
    putTask(data);
  };
 
  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <div>
            <p> Category</p>
            <RadioBtnContainer>
              <RadioBtn>
                education
                <RadioInput
                  type="radio"
                  name="category"
                  value="education"
                  onChange={handleCategory}
                  checked={category === 'education'}
                />
              </RadioBtn>
              <RadioBtn>
                physical activity
                <RadioInput
                  type="radio"
                  name="category"
                  value="physical activity"
                  onChange={handleCategory}
                  checked={category === 'physical activity'}
                />
              </RadioBtn>
              <RadioBtn>
                fun
                <RadioInput
                  type="radio"
                  name="category"
                  value="fun"
                  onChange={handleCategory}
                  checked={category === 'fun'}
                />
              </RadioBtn>
            </RadioBtnContainer>
          </div>

          <label>
            Task name
            <Input name="taskName" value={taskName} onChange={handleTaskName} />
          </label>
          <label>
            Deadline
            <Input
              type="date"
              name="deadline"
              value={deadline}
              onChange={handleDeadline}
            />
          </label>
          <div>
            <label>
              Periodic
              <RangeInput
                type="range"
                name="periodic"
                value={periodic}
                min="0"
                max="100"
                step="25"
                onChange={handlePeriodic}
              />
            </label>
            <p>
              Selected periodic: <span>{rangePeriodic}</span>
            </p>
          </div>
          <label>
            Task Description
            <TaskDescription
              name="taskDescription"
              value={taskDescription}
              placeholder="Enter your task description..."
              onChange={handleTaskDescription}
            ></TaskDescription>
          </label>

          <BTN type="submit">Submit</BTN>
        </Form>
      </div>
    </>
  );
};
