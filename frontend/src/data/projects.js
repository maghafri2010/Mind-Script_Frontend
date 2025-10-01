import { useEffect, useState } from "react";
import { fetch_projects } from "../api";


export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        const project = await fetch_projects();
        setProjects(project);
    };

    useEffect(() => {
        loadProjects;
    },[]);

    return projects;
}