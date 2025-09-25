import { useState } from 'react';
import Plus from '../../../assets/images/plus.png';
import TaskImg from '../../../assets/images/tasks.png';
import ProjectImg from '../../../assets/images/project.png';
import NoteImg from '../../../assets/images/wirte.png';
import ReminderImg from '../../../assets/images/alarm.png';
import WorkspaceImg from '../../../assets/images/workspace.png';
import NewTask from './newTask';
import Navigator from './navigator';
import Task_icon from '../../svg/Task_icon';
import Project_icon from '../../svg/Project_icon';
import Calendar_icon from '../../svg/Calendar_icon';
import Workspace_icon from '../../svg/Workspace_icon';





export const buttonList = [
    { name: "task", img: <Task_icon />, screen: NewTask}, 
    { name: "project", img: <Project_icon />, screen: NewTask },
    { name: "Note", img: <Calendar_icon /> },
    { name: "Reminder", img: <Workspace_icon /> },
];

const New = ({setIndex, index}) => {
    const [status, setStatus] = useState(false);

    const openNew = () => setStatus((prev) => !prev);
    

    return(
        <section className='relative flex'>
            
            <div 
            className=
            {`z-50 fixed items-end gap-4 bottom-30 right-10 flex flex-col transition-all duration-300  overflow-hidden ease-in-out 
            ${status ? "w-[160px] h-[400px]" : "w-0 h-0 "}`}>
                {buttonList.map((button, i) => (
                    <button key={i} onClick={() => {setIndex(i);  openNew();}} className={`box  rounded-4xl p-2 flex items-center gap-2 `}>
                        {button.name}
                        <span src={button.img} alt={button.name} className="w-10 h-10 bg-white" >{button.img}</span>
                    </button>
                ))} 
            </div>


            <div onClick={openNew} className="w-16 fixed h-16 border-2 mt-8 box border-white p-2 overflow-hidden new relative rounded-[50%]">
                <img src={Plus} alt="plus_icon" />
            </div>
            


        </section>
    )
}

export default New;