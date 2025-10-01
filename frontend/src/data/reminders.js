import { useEffect, useState } from "react";
import { fetchReminders } from "../api";


export const useReminder = () => {
    const [reminders, setReminders] = useState([]);
        
    const loadReminders = async () => {
        const reminder = await fetchReminders();
        setReminders(reminder);
    };
    
      useEffect(() => {
        loadReminders();
      },[]);

      return reminders;
}