import moment from 'moment';
import { CalendarTable, DayWrapper } from './Calendar.styled';
moment.updateLocale('en', { week: { dow: 1 } });
const startDay = moment().startOf('months').startOf('week');
const endDay = moment().endOf('months').endOf('week');

const calendar = [];

// while (!day.isAfter(endDay)) {
//   calendar.push(day.clone().format("MMM Do YY"));
//   day.add(1, 'day')
// }
console.log(startDay);
const day = startDay.clone().subtract(1, 'day');
const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

export const Calendar = () => {
  return (
    <CalendarTable>
      {daysArray.map(dayItem => (
        <DayWrapper
          key={dayItem.format('MMM Do YY')}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <div>{dayItem.format('DD')}</div>
          <div>Tasks</div>
        </DayWrapper>
      ))}
    </CalendarTable>
  );
};
