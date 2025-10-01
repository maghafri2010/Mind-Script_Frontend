import { useEffect, useState } from "react";
import { useProjects } from "../../data/projects";
import { fetch_projects } from "../../api";
import NavigatorProjects from "../navigators/navigatorProjects";



const Project = () => {

    const [projects, setProjects] = useState([]);
    const [bolProject, setBolProject] = useState(false);

    const openProjectWindow = () => setBolProject(true);

    const loadProjects = async() => {
        const project = await fetch_projects();
        setProjects(project);
    };

    useEffect(() => {
        loadProjects();
    },[]);

    return (
        <section className=" w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-wrap gap-10">
            {projects.map((project, idx) => (
            <div className="flex flex-col w-[300px] h-[200px] p-4 my-2 rounded-2xl card " key={idx}>
                <div className="flex justify-between">
                   <h1 className="font-bold text-2xl">{project.title}</h1>
                 <button
                onClick={() => openProjectWindow()}
                className="border border-black box rounded pl-1 w-10 h-6"
                >
                    <p className="w-6 h-4 rounded bg-black"></p>
                </button> 
                </div>
                
                <p className="text-[18px]">status: {project.status}</p>
                <p className="mt-6">{project.dueDate.slice(0,10)}</p>
            </div>
            ))}

            {bolProject && (
            <NavigatorProjects
            labels={projects}
            onClose={() => setBolProject(false)}
            refreshProjects={loadProjects}
            />
      )}
        </section>
    )
}

export default Project;   