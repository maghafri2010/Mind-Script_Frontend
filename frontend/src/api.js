import { timeFormatLocale } from "d3";



export const fetchTasks = async () => {
        const token = localStorage.getItem("token");

        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const res = await fetch(`${apiUrl}/api/tasks/render`, {
            method: "POST",
            headers: {"Content-type": "application/json",         "Authorization": `Bearer ${token}`
},
            body: JSON.stringify({ user_id: localStorage.getItem("userID") })
        });
        if (res.ok) {
            const data = await res.json();
            return (Array.isArray(data.tasks) ? data.tasks : []);
        } else {
            console.log("Something went wrong with fetching data!");
        }
        } catch (err) {
            console.log(err);
        }  
};

export const fetchReminders = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");


    try {
        const res = await fetch(`${apiUrl}/api/reminders/render`, {
            method: 'POST',
            headers: {'Content-type' : 'application/json' ,         "Authorization": `Bearer ${token}`},
            body: JSON.stringify({user_id: localStorage.getItem("userID")})
    });
    if (res.ok) {
        const data = await res.json();
        return (Array.isArray(data.reminders) ? data.reminders : []);
    }
    } catch (err) {
        console.log(err);
    }
}

export const fetch_projects = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    try {
        const res = await fetch(`${apiUrl}/api/projects/render`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' ,         "Authorization": `Bearer ${token}`},
            body: JSON.stringify({user_id: localStorage.getItem("userID")})
        });
        if (res.ok) {
            const data = await res.json();
            return (Array.isArray(data.projects) ? data.projects : []);
        }
    } catch (err) {
        console.log()
    }

}