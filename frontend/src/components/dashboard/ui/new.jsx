import { useState } from 'react';
import Plus from '../../../assets/images/plus.png';
import TaskImg from '../../../assets/images/tasks.png';
import ProjectImg from '../../../assets/images/project.png';
import NoteImg from '../../../assets/images/wirte.png';
import ReminderImg from '../../../assets/images/alarm.png';
import WorkspaceImg from '../../../assets/images/workspace.png';

const buttonList = [
    { name: "task", img: TaskImg },
    { name: "project", img: ProjectImg },
    { name: "Note", img: NoteImg },
    { name: "Reminder", img: ReminderImg },
    { name: "Workspace", img: WorkspaceImg }
];

const New = () => {
    const [status, setStatus] = useState(false);

    const openNew = () => setStatus((prev) => !prev);

    return(
        <section className='relative'>
            <div className={`z-50 fixed items-end gap-4 bottom-30 right-10 flex flex-col text-white transition-all duration-300  overflow-hidden ease-in-out ${status ? "w-[160px] h-[400px]" : "w-0 h-0 "}`}>
                {buttonList.map((button, i) => (
                    <button key={i} className={`box  rounded-4xl p-2 flex items-center gap-2 `}>
                        {button.name}
                        <img src={button.img} alt={button.name} className="w-12 h-12 bg-white border rounded-[50%]" />
                    </button>
                ))} 
            </div>
            <div onClick={openNew} className="w-16 h-16 border-2 box border-white p-2 bg-[#2F3133] relative rounded-[50%]">
                <img src={Plus} alt="plus_icon" />
            </div>
        </section>
    )
}

export default New;