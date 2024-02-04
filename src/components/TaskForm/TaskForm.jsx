import { BTN, Form, Input, RadioBtnContainer } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <div>
            <p> Category</p>
            <RadioBtnContainer>
              <label>
                education
                <Input type="radio" name="category" value="education" />
              </label>
              <label>
                physical activity
                <Input
                  type="radio"
                  name="category"
                  value="physical activity"
                  checked
                />
              </label>
              <label>
                fun
                <Input type="radio" name="category" value="fun" />
              </label>
            </RadioBtnContainer>
          </div>

          <label>
            Task name
            <Input />
          </label>
          <label>
            Deadline
            <Input type="date" />
          </label>
          <div>
            <label>
              Periodic
              <input
                type="range"
                name="periodic"
                // value="40"
                min="0"
                max="100"
                step="25"
              />
            </label>
            <p>
              Selected periodic: <span>40</span>
            </p>
          </div>
          <label>
            Task Description
            <Input />
          </label>

          <BTN type="submit">Submit</BTN>
        </Form>
      </div>
    </>
  );
};
