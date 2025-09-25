import onprogress from "../../data/tasks.jsx";
import Sup from "../../../assets/images/kebab.png";
import close from "../../../assets/images/supprimer.png";
import EditTask from "../dashboard/ui/editTask.jsx";
import { useState } from "react";
import { minutesToHours } from "date-fns";
import { fetchTasks } from "../../api.js";
const menuItems = [
    { title: "Edit", action: "edit" },
    { title: "Delete", action: "delete" },
    { title: "Duplicate", action: "duplicate" },
]; 


const NavigatorTasks = ({labels , onClose, refreshTasks}) => {

    const [bol, setBol] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const edit_Task = (index) => { 
        setEditingTask(labels[index]);
    };

    const duplicateTask = async (index) => {
        const task = labels[index];
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks/duplicate` , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_id: task.user_id, task_id: task.task_id})
        });
        if (res.ok)
            alert("Task has been duplicated successfully!");
        else
            console.log("Something went wrong", task.task_id, task.user_id);
        } catch (err) {
            console.log(err);
        }
        if (refreshTasks) refreshTasks();

    };

     const deleteTask = async (index) => {
        const task = labels[index];
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const res = await fetch(`${apiUrl}/api/tasks/delete` , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_id: task.user_id, task_id: task.task_id})
        });
        
        if (res.ok)
            alert("Task has been deleted successfully!");
        else
            console.log("Something went wrong", task.task_id, task.user_id);
        } catch (err) {
            console.log(err);
        }
        if (refreshTasks) refreshTasks();
    };

    const handleMenuClick = (action, index) => {
        if (action === "delete") {
            deleteTask(index);
            setOpenMenuIndex(null); // Optionally close the menu after delete
        }
        if (action === "edit") {
            edit_Task(index);
            setOpenMenuIndex(null);
        }
        if (action === "duplicate") {
            duplicateTask(index);
            setOpenMenuIndex(null);
        }
    };

   

   
    

    return (
        <section className="absolute menu w-[1100px] h-[750px] text-white rounded-2xl">
            
            <h1 className="text-2xl ml-16 mt-8">My Tasks:</h1>
            
            <button onClick={onClose}><img className="absolute right-8 top-8 h-8 w-8" src={close} alt="" /></button>
            <div className="flex flex-wrap p-16 gap-8 scroll-container overflow-auto h-[600px]">
                
            {labels.map((label, index) => (
                <div key={index} className="relative border rounded-2xl card  p-4 w-[300px] h-[180px]">
                    <div className="flex justify-between">
                        <h1 className="font-bold ">{label.title}</h1>    
                        <img src={Sup} 
                        onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}  className="box h-6 w-6 hover:bg-amber-50 "/>
                    </div>
                    <h2 className="text-[14px] my-2">{label.dueDate.slice(0, 10)}</h2>
                    <p>{label.status}</p>
                <div className="flex justify-between mt-3">
                    <p>{label.project}</p>
                    <p>{label.team}</p>
                </div>
                
                {openMenuIndex === index && (
                    <div className="absolute w-[100px] right-0 top-10 z-50 menu rounded shadow-lg">
                        {menuItems.map((item, i) => (
                        <button onClick={() => handleMenuClick(item.action, index)} key={i} className="box p-2 rounded-2xl hover:bg-gray-700 hover:text-white w-full text-left">
                        {item.title}
                        </button>
                        ))}
                    </div>
                    )}
                </div>
                ))} 

                {editingTask && (
                        <EditTask
                            task={editingTask}
                            onClose={() => setEditingTask(null)}
                            closeIcon={close}
                            refreshTasks={refreshTasks}
                        />
                    )}    
            </div>
        </section>
    )
}

export default NavigatorTasks;