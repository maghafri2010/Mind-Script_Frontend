import { useEffect, useRef, useState } from "react";





const EditItem = ({ item, onClose, closeIcon, refreshItem, name }) => {
  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const projectRef = useRef();
  const teamRef = useRef();

  const [endPoint, setEndPoint] = useState(null);

  useEffect(() => {
    if (name === "Project") setEndPoint("/api/projects/edit");
    else if (name === "Task") setEndPoint("/api/tasks/edit");
    else if (name === "Reminder") setEndPoint("/api/reminders/edit");
  }, [name]);

  const saveChanges = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");


    // Collect values
    const newTitle = titleRef.current?.value ?? "";
    const newDate = dateRef.current?.value ?? "";
    const newDescription = descriptionRef.current?.value ?? "";
    const newStatus = statusRef.current?.value ?? "";
    const newProject = projectRef.current?.value ?? "";
    const newTeam = teamRef.current?.value ?? "";

    // Build payload by type
    let payload = {};
    if (name === "Task") {
      payload = {
        title: newTitle,
        description: newDescription,
        dueDate: newDate,
        status: newStatus,
        project: newProject,
        team: newTeam,
        task_id: item.task_id ?? null,
        user_id: item.user_id ?? null,
      };
    } else if (name === "Project") {
      payload = {
        title: newTitle,
        description: newDescription,
        dueDate: newDate,
        status: newStatus,
        project_id: item.project_id ?? null,
        user_id: item.user_id ?? null,
      };
    } else if (name === "Reminder") {
      payload = {
        title: newTitle,
        description: newDescription,
        dueDate: newDate,
        status: newStatus,
        reminder_id: item.reminder_id ?? null,
        user_id: item.user_id ?? null,
      };
    }

    console.log("Edit payload:", payload);

    // Validation rules
    let requiredFields = ["title", "description"];
    if (name === "Task") requiredFields.push("project", "team", "dueDate", "status");
    if (name === "Project") requiredFields.push("dueDate", "status");
    if (name === "Reminder") requiredFields.push("dueDate", "status");

    for (const field of requiredFields) {
      const value = payload[field];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        alert(`${field} is required`);
        return;
      }
    }

    // API request
    try {
      const res = await fetch(`${apiUrl}${endPoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" ,        "Authorization": `Bearer ${token}`
 },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert(`${name} has been edited successfully!`);
        if (refreshItem) refreshItem();
      } else {
        console.error(`Error editing ${name}, status:`, res.status);
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="absolute top-0 left-0 menu w-[1100px] h-[750px] rounded-2xl">
      <div>
        <h1 className="text-2xl ml-16 mt-8">Edit {name}</h1>
        <button className="absolute right-8 top-8 h-8 w-8" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
      </div>

      <div>
        <form className="p-8" onSubmit={saveChanges}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              ref={titleRef}
              type="text"
              defaultValue={item.title}
              className="w-full p-2 rounded edit text-white"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              ref={descriptionRef}
              defaultValue={item.description}
              className="w-full h-24 p-2 rounded edit text-white"
              rows={3}
            />
          </div>

          {/* Date (always visible) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              ref={dateRef}
              type="text"
              defaultValue={item.dueDate?.slice(0, 10)}
              className="w-full p-2 rounded edit text-white"
            />
          </div>

          {/* Status (visible for all types) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              ref={statusRef}
              defaultValue={item.status}
              className="w-full p-2 rounded edit text-white"
            >
              <option value="onProgress">On Progress</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>

          {/* Project & Team (only for Task) */}
          {name === "Task" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Project</label>
                <input
                  ref={projectRef}
                  type="text"
                  defaultValue={item.project}
                  className="w-full p-2 rounded edit text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Team</label>
                <input
                  ref={teamRef}
                  type="text"
                  defaultValue={item.team}
                  className="w-full p-2 rounded edit text-white"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditItem;
