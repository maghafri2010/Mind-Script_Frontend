import Sup from "../../assets/images/kebab.png";
import close from "../../assets/images/supprimer.png";
import EditTask from "../dashboard/ui/editTask.jsx";
import { useState } from "react";

const menuItems = [
  { title: "Edit", action: "edit" },
  { title: "Delete", action: "delete" },
  { title: "Duplicate", action: "duplicate" },
];

const NavigatorProjects = ({ labels, onClose, refreshProjects }) => {
  const [editing, setEditing] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // ✅ Edit a project
  const editProject = (index) => {
    setEditing(labels[index]);
  };

  // ✅ Duplicate project
  const duplicateProject = async (index) => {
    const project = labels[index];
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/duplicate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: project.user_id,
            project_id: project.project_id,
          }),
        }
      );

      if (res.ok) {
        alert("Project has been duplicated successfully!");
      } else {
        console.log("Something went wrong duplicating", project.project_id);
      }
    } catch (err) {
      console.log(err);
    }
    if (refreshProjects) refreshProjects();
  };

  // ✅ Delete project
  const deleteProject = async (index) => {
    const project = labels[index];
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const res = await fetch(
        `${apiUrl}/api/projects/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: project.user_id,
            project_id: project.project_id,
          }),
        }
      );

      if (res.ok) {
        alert("Project has been deleted successfully!");
      } else {
        console.log("Something went wrong deleting", project.project_id);
      }
    } catch (err) {
      console.log(err);
    }
    if (refreshProjects) refreshProjects();
  };

  // ✅ Handle dropdown actions
  const handleMenuClick = (action, index) => {
    if (action === "delete") {
      deleteProject(index);
      setOpenMenuIndex(null);
    }
    if (action === "edit") {
      editProject(index);
      setOpenMenuIndex(null);
    }
    if (action === "duplicate") {
      duplicateProject(index);
      setOpenMenuIndex(null);
    }
  };

  return (
    <section className="absolute menu w-[1100px] h-[750px] text-white rounded-2xl">
      <h1 className="text-2xl ml-16 mt-8">My Projects:</h1>

      <button onClick={onClose}>
        <img
          className="absolute right-8 top-8 h-8 w-8"
          src={close}
          alt="close"
        />
      </button>

      <div className="flex flex-wrap p-16 gap-8 scroll-container overflow-auto h-[600px]">
        {labels.map((project, index) => (
          <div
            key={index}
            className="relative border rounded-2xl card p-4 w-[300px] h-[180px]"
          >
            <div className="flex justify-between">
              <h1 className="font-bold">{project.title}</h1>
              <img
                src={Sup}
                onClick={() =>
                  setOpenMenuIndex(openMenuIndex === index ? null : index)
                }
                className="box h-6 w-6 hover:bg-amber-50 cursor-pointer"
              />
            </div>

            <h2 className="text-[14px] my-2">
              {project.dueDate ? project.dueDate.slice(0, 10) : "No deadline"}
            </h2>
            <p>{project.status}</p>

            <div className="flex justify-between mt-3">
              <p>{project.team || "No team"}</p>
              <p>{project.category || ""}</p>
            </div>

            {openMenuIndex === index && (
              <div className="absolute w-[100px] right-0 top-10 z-50 menu rounded shadow-lg bg-gray-800">
                {menuItems.map((item, i) => (
                  <button
                    onClick={() => handleMenuClick(item.action, index)}
                    key={i}
                    className="box p-2 rounded-2xl hover:bg-gray-700 hover:text-white w-full text-left"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {editing && (
          <EditTask
            task={editing}
            onClose={() => setEditing(null)}
            closeIcon={close}
            refreshProjects={refreshProjects}
          />
        )}
      </div>
    </section>
  );
};

export default NavigatorProjects;
