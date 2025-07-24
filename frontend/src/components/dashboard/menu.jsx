import { useState } from 'react'
import Menu_icon from '../../assets/images/menu.png'

import Dashboard from '../../assets/images/dashboard.png'
import Project from '../../assets/images/project.png'
import Setting from '../../assets/images/settings.png'
import Workspace from '../../assets/images/workspace.png'
import Inbox from '../../assets/images/inbox.png'
import Calendar from '../../assets/images///calendar.png'
import Tasks from '../../assets/images/tasks.png'
import Logout from '../../assets/images/turn-off.png'
import Profile from '../../assets/images/profil.png'

const labels = [
    {img: Dashboard , name: "Dashboard"},
    {img: Tasks, name: "Tasks"},
    {img: Workspace, name: "Workspace"},
    {img: Project, name: "Projects"},
    {img: Calendar, name: "Calendar"},
    {img: Inbox, name: "Inbox"},
    {img: Setting, name: "Settings"},
]

const Menu = ({bol, openMenu, setActiveLayer, activeLayer}) => {

    

    return (

        <section className={`absolute z-50  rounded-2xl text-white  h-[850px] transition-width duration-500 ease-in-out menu`}
        style={{width: bol ? "250px" : "120px"}}
        >
                <div className='flex flex-col justify-center  items-start'>
                    <button
                     onClick={openMenu} 
                     className='ml-10 mt-4 '
                     >
                        <img className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 w-10 h-10 " 
                        src={Menu_icon} alt="Menu_icon" />
                    </button>

                    <div className="box ml-10 mt-8 flex items-center gap-4 "
                    onClick={() => setActiveLayer(7)}>
                        <img className="bg-white w-10 h-10 rounded-[50%]" src={Profile} alt="" />
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
                            <img className="w-10 h-10 bg-amber-50 rounded-2xl" src={label.img} alt={label.name} />
                            {bol && <p className="transition-opacity duration-500">{label.name}</p>}
                        </div>
                    ))}
                    <div className=" box flex ml-10  duration-150 items-center gap-4 mt-20"
                    onClick={() => setActiveLayer()}>
                        <img className="bg-white  w-10 h-10 rounded-[50%]" src={Logout} alt="" />
                        {bol && <p className="transition-opacity duration-500">Logout</p>}
                    </div>
                    
                </div>
        </section>
    )
}

export default Menu;