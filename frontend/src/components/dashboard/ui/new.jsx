import { useState } from 'react';
import Plus from '../../../assets/images/plus.png';
import TaskImg from '../../../assets/images/tasks.png';
import ProjectImg from '../../../assets/images/project.png';
import NoteImg from '../../../assets/images/wirte.png';
import ReminderImg from '../../../assets/images/alarm.png';
import WorkspaceImg from '../../../assets/images/workspace.png';
import NewTask from './newTask';
import Navigator from './navigator';





export const buttonList = [
    { name: "task", img: TaskImg, screen: NewTask}, 
    { name: "project", img: ProjectImg, screen: NewTask },
    { name: "Note", img: NoteImg },
    { name: "Reminder", img: ReminderImg },
];

const New = ({setIndex, index}) => {
    const [status, setStatus] = useState(false);

    const openNew = () => setStatus((prev) => !prev);
    

    return(
        <section className='relative flex'>
            
            <div className={`z-50 fixed items-end gap-4 bottom-30 right-10 flex flex-col transition-all duration-300  overflow-hidden ease-in-out ${status ? "w-[160px] h-[400px]" : "w-0 h-0 "}`}>
                {buttonList.map((button, i) => (
                    <button key={i} onClick={() => {setIndex(i);  openNew();}} className={`box  rounded-4xl p-2 flex items-center gap-2 `}>
                        {button.name}
                        <img src={button.img} alt={button.name} className="w-12 h-12 bg-white border rounded-[50%]" />
                    </button>
                ))} 
            </div>


            <div onClick={openNew} className="w-16 h-16 border-2 mt-8 box border-white p-2 new relative rounded-[50%]">
                <img src={Plus} alt="plus_icon" />
            </div>
            


        </section>
    )
}

export default New;