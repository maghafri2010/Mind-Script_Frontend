import Navigator from "./navigator";
import closeIcon from "../../../assets/images/supprimer.png";
import { useRef, useState } from "react";

import data from "../../../data/tasks";
import MyDatePicker from "./datePicker";
import Notif_task from "./notifaction";

const {
    onProgress,
    completed,
    overdue,
    upcoming,
    tasks,
} = data;



const NewTask = ({onClose}) => {

    const message = "Task has been created succefully!";

    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const statusRef = useRef();
    const projectRef = useRef();
    const teamRef = useRef();

const handleSubmit = async (newTask) => {
        try {
            const res = await fetch("http://localhost:5000/api/tasks/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTask)

            });
            if (res.ok)
                return true;
            else
                return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    };    

const saveChnages = async (e) => {
    e.preventDefault();
    const newTitle = titleRef.current.value;
    const newDescription = descriptionRef.current.value;
    const newDate = dateRef.current.value;
    const newStatus = statusRef.current.value;
    const newProject = projectRef.current.value;
    const newTeam = teamRef.current.value;
    const userID = localStorage.getItem("userID");

    const newTask = {
        title: newTitle,
        description: newDescription,
        dueDate: newDate,
        status: newStatus,
        project: newProject,
        team: newTeam,
        user_id: userID
    };
    
    const result = await handleSubmit(newTask);
    if (result !== false)
    {
        alert(message);
        onClose();
    } else {
        alert("Invalid! Re-Enter the info.");
    }
}


    return (
        <section className="absolute top-30 left-70 menu w-[1100px] h-[750px]  rounded-2xl">
            
            <div>
                <h1 className="text-2xl ml-16 mt-6">New Task</h1>
                <button className="absolute right-8 top-8 h-8 w-8" onClick={onClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
            </div>
            <div>
                <form className="p-8" onSubmit={saveChnages}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input ref={titleRef}  type="text"  className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea ref={descriptionRef}   className="w-full h-24 p-2 rounded edit text-white" rows={3} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Date</label>
                        
                        <input ref={dateRef} type="date"  className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label  className="block text-sm font-medium mb-2">Status</label>
                        <select ref={statusRef}  className="w-full p-2 rounded edit text-white">
                            <option value="onProgress">On Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Overdue">Overdue</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Project</label>
                        <input ref={projectRef} type="text"  className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Team</label>
                        <input ref={teamRef} type="text"  className="w-full p-2 rounded edit text-white" />
                    </div>
                    <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
                </form>
            </div>
            
            
        </section>
    )
}

export default NewTask;