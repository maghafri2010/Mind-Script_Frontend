import { stringify } from "postcss";
import { useRef } from "react";


const EditTask = ({task, onClose, closeIcon, refreshTasks}) => {


    

    const titleRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const statusRef = useRef();
    const projectRef = useRef();
    const teamRef = useRef();

    const saveChanges = async (e) => {
        e.preventDefault();
        const apiUrl = import.meta.env.VITE_API_URL;

        const newTitle = titleRef.current.value;
        const newDate = dateRef.current.value;
        const newDescription = descriptionRef.current.value;
        const newStatus = statusRef.current.value;
        const newProject = projectRef.current.value;
        const newTeam = teamRef.current.value

        try{
            const res = await fetch(`${apiUrl}/api/tasks/edit`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ title: newTitle, description: newDescription, dueDate: newDate, status: newStatus, project: newProject, team: newTeam, task_id: task.task_id }),
        })
        if (res.ok){
            alert("Task has been edited Successfully!")
            if (refreshTasks) refreshTasks();
        }
        else
            console.log("Error editing task, Smth went wrong");
        onClose();
        } catch (err) {
            console.log(err);
        }
        
        
    }
    return (
        <section className="absolute top-0 left-0 menu w-[1100px] h-[750px]  rounded-2xl">
            <div>
                <h1 className="text-2xl ml-16 mt-8">Edit Task</h1>
                <button className="absolute right-8 top-8 h-8 w-8" onClick={onClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
            </div>
            <div>
                <form className="p-8" onSubmit={saveChanges}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input ref={titleRef} type="text" defaultValue={task.title} className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea ref={descriptionRef} defaultValue={task.description} className="w-full h-24 p-2 rounded edit text-white" rows={3} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Date</label>
                        <input ref={dateRef} type="text" defaultValue={task.dueDate.slice(0,10)} className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <select ref={statusRef} defaultValue={task.status} className="w-full p-2 rounded edit text-white">
                            <option value="onProgress">On Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Overdue">Overdue</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Project</label>
                        <input ref={projectRef} type="text" defaultValue={task.project} className="w-full p-2 rounded edit text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Team</label>
                        <input ref={teamRef} type="text" defaultValue={task.team} className="w-full p-2 rounded edit text-white" />
                    </div>
                    <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
                </form>
            </div>
        </section>
    )
}

export default EditTask;