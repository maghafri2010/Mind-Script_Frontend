import Navigator from "./navigator";
import closeIcon from "../../../assets/images/supprimer.png";
import { useRef } from "react";

import data from "../../../data/tasks";

const {
    onProgress,
    completed,
    overdue,
    upcoming,
    tasks,
} = data;



const NewTask = ({onClose}) => {
    const titleRef = useRef();
    const dateRef = useRef();
    const statusRef = useRef();
    const projectRef = useRef();
    const teamRef = useRef();

const saveChnages = (e) => {
    e.preventDefault();
    const newTitle = titleRef.current.value;
    const newDate = dateRef.current.value;
    const newStatus = statusRef.current.value;
    const newProject = projectRef.current.value;
    const newTeam = teamRef.current.value;

    const newTask = {
        title: newTitle,
        date: newDate,
        status: newStatus,
        project: newProject,
        team: newTeam
    };
    if (statusRef.current.value === "onProgress") {
        data.tasks[0].content.push(newTask.title);
    } else if (statusRef.current.value === "Completed") {
        data.tasks[1].content.push(newTask.title);
    } else if (statusRef.current.value === "Upcoming") {
        data.tasks[2].content.push(newTask.title);
    } else if (statusRef.current.value === "Overdue") {
        data.tasks[3].content.push(newTask.title);
    }

    onclose();
}


    return (
        <section className="absolute top-30 left-70 menu w-[1100px] h-[750px]  rounded-2xl">
            
            <div>
                <h1 className="text-2xl ml-16 mt-8">New Task</h1>
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
                        <label className="block text-sm font-medium mb-2">Date</label>
                        <input ref={dateRef} type="text"  className="w-full p-2 rounded edit text-white" />
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