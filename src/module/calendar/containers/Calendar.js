import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import BoxWrapper from './../../common/BoxWrapper';
import Events from '../constants/events';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '../styles/calendar.scss';

const Calendar = () => {
  const [calendarWeekends] = useState(true);

  return (
    <>
      <BoxWrapper>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          plugins={[dayGridPlugin, timeGridPlugin]}
          weekends={calendarWeekends}
          events={Events}
        />
      </BoxWrapper>
    </>
  );
};

export default Calendar;
