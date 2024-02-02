import { TaskCounter } from "components/TaskCounter/TaskCounter"

import { HeaderWrapper, Tasks } from "./Heder.styled"
import { StatusFilter } from "components/StatusFilter/StatusFilter"

export const Heder =() =>{
  return(<>
  <HeaderWrapper>
  <Tasks>
          <h2> Tasks</h2>
          <TaskCounter />
        </Tasks>
        <div>
          <h2>Filter by status</h2>
          <StatusFilter />
        </div>
        
  </HeaderWrapper>
  </>)
}