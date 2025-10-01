import closeIcon from "../../../assets/images/supprimer.png";
import { useEffect, useRef, useState } from "react";
import Task_icon from "../../svg/Task_icon";

const token = localStorage.getItem("token");

const NewItem = ({ onClose, name }) => {
    const message = `${name} has been created successfully!`;

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const statusRef = useRef();
    const projectRef = useRef();
    const teamRef = useRef();

const [endPoint, setEndPoint] = useState(() => {
  if (name === "Task") return "/api/tasks/add";
  if (name === "Project") return "/api/projects/add";
  if (name === "Reminder") return "/api/reminders/add";
  return "";
});
   

    useEffect(() => {
    if (name === "Task") setEndPoint("/api/tasks/add");
    else if (name === "Project") setEndPoint("/api/projects/add");
    else if (name === "Reminder") setEndPoint("/api/reminders/add");
}, [name]);


    // Sends the new task to backend
    const handleSubmit = async (newItem) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const res = await fetch(`${apiUrl}${endPoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" ,        "Authorization": `Bearer ${token}` },
                body: JSON.stringify(newItem)
            });

            const data = await res.json();

            if (res.ok) {
                return true;
            } else {
                console.error("Backend error:", data);
                return false;
            }
        } catch (err) {
            console.error("Fetch error:", err);
            return false;
        }
    };

    const saveChanges = async (e) => {
        e.preventDefault();

        // Get user ID from localStorage and convert to number
        const userID = parseInt(localStorage.getItem("userID"));
        if (!userID || isNaN(userID)) {
            alert("User not logged in. Please login again.");
            return;
        }

        const newItem = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dateRef.current.value,
            status: statusRef.current.value,
            project: projectRef.current.value,
            team: teamRef.current.value,
            user_id: userID // Must match backend key
        };

        const result = await handleSubmit(newItem);

        if (result) {
            alert(message);
            onClose();
        } else {
            alert(`${name} creation failed. Check console for details.`);
        }
    };

    return (
        <section className="absolute top-33 left-85 menu w-[1100px] h-[750px] rounded-2xl">
            <div>
                <h1 className="text-2xl ml-16 mt-6">New {name}</h1>
                <button className="absolute right-8 top-8 h-8 w-8" onClick={onClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
            </div>
            <div>
                <form className="p-8" onSubmit={saveChanges}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input ref={titleRef} type="text" className="w-full p-2 rounded edit text-white" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea ref={descriptionRef} className="w-full h-24 p-2 rounded edit text-white" rows={3} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Date</label>
                        <input ref={dateRef} type="date" className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <select ref={statusRef} className="w-full p-2 rounded edit text-white">
                            <option value="onProgress">On Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Overdue">Overdue</option>
                        </select>
                    </div>
                        <>
                        <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Project</label>
                        <input ref={projectRef} type="text" className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Team</label>
                        <input ref={teamRef} type="text" className="w-full p-2 rounded edit text-white" />
                    </div>
                    </>

                    
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Save Changes
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewItem;
