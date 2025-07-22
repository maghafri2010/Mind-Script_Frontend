// CalendarView.jsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calendarView.css"

const CalendarView = () => {
  const events = [
    { title: 'On Progress Task', date: '2025-07-22', color: 'green' },
    { title: 'Upcoming Task', date: '2025-07-25', color: 'blue' },
    { title: 'Deadline', date: '2025-07-30', color: 'red' },
  ];

  return (
    <div className="calendar-wrapper">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        height="auto"
      />
    </div>
  );
};

export default CalendarView;
