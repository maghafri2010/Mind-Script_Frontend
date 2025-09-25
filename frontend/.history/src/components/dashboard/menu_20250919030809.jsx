import { useState } from 'react'
import Menu_icon from '../../assets/images/menu.png'
import { useNavigate } from "react-router-dom";

import Dashboard from '../../assets/images/dashboard.png'
import Project from '../../assets/images/project.png'
import Setting from '../../assets/images/settings.png'
import Workspace from '../../assets/images/workspace.png'
import Inbox from '../../assets/images/inbox.png'
import Calendar from '../../assets/images///calendar.png'
import Tasks from '../../assets/images/tasks.png'
import Logout from '../../assets/images/turn-off.png'
import Profile from '../../assets/images/profil.png'
import Dash_icon from '../svg/Dash_icon';
import Task_icon from '../svg/Task_icon';
import Workspace_icon from '../svg/Workspace_icon';
import Project_icon from '../svg/Project_icon';
import Calendar_icon from '../svg/Calendar_icon';
import Inbox_icon from '../svg/Inbox_icon';
import Setting_icon from '../svg/Setting_icon';
import Profile_icon from '../svg/Profile_icon';

const labels = [
    {img: <Dash_icon /> , name: "Dashboard"},
    {img: <Task_icon />, name: "Tasks"},
    {img: <Workspace_icon />, name: "Workspace"},
    {img: <Project_icon />, name: "Projects"},
    {img: <Calendar_icon />, name: "Calendar"},
    {img: <Inbox_icon />, name: "Inbox"},
    {img: <Setting_icon />, name: "Settings"},
]
const Menu = ({bol, openMenu, setActiveLayer, activeLayer}) => {

    const navigate = useNavigate();

    const api_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = async () => {
         
        try {
            const res = await fetch(`${api_URL}/api/logout`, {
                method: "POST",
            })
            if (res.ok)
            {
                navigate("/account");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getProfilePicture = async () => {
        try {
            const res = await fetch(`${api_URL}/api/dashboard/picture`, {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({user_id : localStorage.getItem("userID")}),
            });
            if (!res.ok) 
              console.log("Something went wrong with rendering the profile picture");  
        } catch(err) {
            console.log(err);
        }
    };
    

    return (

        <section className={`absolute z-50  rounded-2xl text-white  h-[850px] transition-width duration-500 ease-in-out menu`}
        style={{width: bol ? "250px" : "120px"}}
        >
                <div className='flex flex-col justify-center items-start'>
                    <button
                     onClick={openMenu} 
                     className='ml-10 mt-4 '
                     >
                        <img className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 w-10 h-10 " 
                        src={Menu_icon} alt="Menu_icon" />
                    </button>

                    <div className="box ml-10 mt-8 flex items-center gap-4 "
                    onClick={() => setActiveLayer(7)}>
                        <span className="w-8 h-8 rounded-[50%]" alt="" ><Profile_icon /></span>
                        {bol ? <h1 className="transition-opacity duration-500">username</h1> : "" }
                    </div>

                    <div className={`flex gap-4  items-center border transition-all ease-in-out duration-300  mt-8  ${bol ? "w-[180px] ml-8 pl-4 rounded-2xl" : "w-[120px] text-[13px]" }`}>
                        <button className="border-r-2 pr-2 box">personal</button>
                        <button className="box">Team</button>
                    </div>
                    {labels.map((label, i) => (
                        <div 
                        key={i} 
                        className={`box ml-10 mt-8 flex items-center gap-4 ${activeLayer === i ? "bg-gray-70" : ""} `}
                        onClick={() => setActiveLayer(i)}>
                            <span className='w-[40px] flex items-center justify-center'>{label.img}</span>
                            {bol && <p className="transition-opacity duration-500">{label.name}</p>}
                        </div>
                    ))}
                    <div className=" box flex ml-10  duration-150 items-center gap-4 mt-20"
                    onClick={handleSubmit}>
                        <img className="bg-white  w-10 h-10 rounded-[50%]" src={Logout} alt="" />
                        {bol && <p className="transition-opacity duration-500">Logout</p>}
                    </div>
                    
                </div>
        </section>
    )
}

export default Menu;