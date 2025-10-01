import { useEffect, useState } from "react";
import { fetchTasks } from "../api";



export const useTasks = () => {

    const [tasks, setTasks] = useState([]);
    
    const loadTasks = async () => {
        const task = await fetchTasks();
        setTasks(task);
    };
  
    useEffect(() => {
      loadTasks();
    },[])

      return tasks;
};

