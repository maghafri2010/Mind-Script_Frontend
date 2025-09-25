import { timeFormatLocale } from "d3";

export const fetchTasks = async () => {
        const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const res = await fetch(`${apiUrl}/api/tasks/render`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
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

export const fetch_Reminders = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/reminders/render`, {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
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