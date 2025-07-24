
import onprogress from "../../../data/tasks.jsx";
import Sup from "../../../assets/images/kebab.png";
import close from "../../../assets/images/supprimer.png";
import EditTask from "./editTask.jsx";
import { useState } from "react";

const menuItems = [
    { title: "Edit", action: "edit" },
    { title: "Delete", action: "delete" },
    { title: "Duplicate", action: "duplicate" },
]; 


const Navigator = ({labels = onprogress, onClose}) => {

    const [bol, setBol] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const deleteTask = (index) =>  labels.splice(index, 1);    
    const edit_Task = (index) => { 
        setEditingTask(labels[index]);
    }
    const duplicateTask = (index) => {
        const taskToDuplicate = labels[index];
        labels.push({ ...taskToDuplicate, id: Date.now() }); // Assuming each task has a unique id
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
    }

   
    

    return (
        <section className="absolute bg-[#212325] w-[1100px] h-[750px] text-white rounded-2xl">
            
            <h1 className="text-2xl ml-16 mt-8">My Tasks</h1>
            
            <button onClick={onClose}><img className="absolute right-8 top-8 h-8 w-8" src={close} alt="" /></button>
            <div className="flex flex-wrap p-16 gap-8 scroll-container overflow-auto h-[600px]">
                
            {labels.map((label, index) => (
                <div key={index} className="relative border rounded-2xl bg-[#2F3133]  p-4 w-[300px] h-[180px]">
                    <div className="flex justify-between">
                        <h1 className="font-bold ">{label.title}</h1>    
                        <img src={Sup} 
                        onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}  className="box h-6 w-6 hover:bg-amber-50 "/>
                    </div>
                    <h2 className="text-[14px] my-2">{label.date}</h2>
                    <p>{label.status}</p>
                <div className="flex justify-between mt-3">
                    <p>{label.project}</p>
                    <p>{label.team}</p>
                </div>
                
                {openMenuIndex === index && (
                    <div className="absolute w-[100px] right-0 top-10 z-50 bg-[#232323] rounded shadow-lg">
                        {menuItems.map((item, i) => (
                        <button onClick={() => handleMenuClick(item.action, index)} key={i} className="box p-2 rounded-2xl hover:bg-gray-700 w-full text-left">
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
                        />
                    )}    
            </div>
        </section>
    )
}

export default Navigator;