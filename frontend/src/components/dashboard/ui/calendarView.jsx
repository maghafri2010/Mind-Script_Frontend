// CalendarView.jsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calendarView.css"
import { fetchReminders, fetchTasks } from '../../../api';
import { useEffect, useState } from 'react';
import { color } from 'd3';
import { useTasks } from '../../../data/tasks';
import { useReminder } from '../../../data/reminders';

const CalendarView = () => {



  const tasks = useTasks();
  const reminders = useReminder();
  
  

  const reminderEvents = reminders.map(reminder => ({
    title: reminder.title,
    date: reminder.dueDate,
    color: reminder.status === "Completed" ? "green"
    : reminder.status === "Upcoming" ? "blue"
    : reminder.status === "Overdue" ? "red"
    : "gray"
  }))

  const taskEvents = tasks.map(task => ({
    title: task.title,
    date: task.dueDate,
    color: task.status === "Completed" ? "green"
    : task.status === "Upcoming" ? "blue"
    : task.status === "Overdue" ? "red"
    : "gray"
  }));


    

  const events = [...taskEvents, ...reminderEvents];
    

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
