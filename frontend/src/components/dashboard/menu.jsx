
import { useState } from 'react'
import Menu_icon from '../../assets/images/menu.png'

const labels = [
    {img: "", name: "Dashboard"},
    {img: "", name: "My Tasks"},
    {img: "", name: "Workspace"},
    {img: "", name: "Projects"},
    {img: "", name: "Calendar"},
    {img: "", name: "Inbox"},
    {img: "", name: "Settings"},
]

const Menu = ({bol, openMenu}) => {

    

    return (
        <section className={`flex flex-col rounded-2xl text-white  h-[850px] transition-width duration-500 ease-in-out  bg-[#212325]`}
        style={{width: bol ? "250px" : "120px"}}
        >
                <div className='flex flex-col items-center'>
                    <button
                     onClick={openMenu} 
                     className={`my-4 ${bol ? "ml-36" : ""}`}>
                        <img className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 w-10 h-10 ml-4" 
                        src={Menu_icon} alt="Menu_icon" />
                    </button>
                    <div className={`flex  items-center gap-4 ${bol ? "40px" : "w-40px"}`}>
                        <img className="bg-white w-10 h-10 rounded-[50%]" src="" alt="" />
                        {bol ? <h1>username</h1> : "" }
                    </div>
                    <div className={`flex gap-4  items-center border  mt-8  ${bol ? "w-[180px] pl-4 rounded-2xl" : "w-[120px] text-[13px]" }`}>
                        <button className="border-r-2 pr-2 box">personal</button>
                        <button className="box">Team</button>
                    </div>
                    {labels.map((label, i) => (
                        <div className="box  mt-8 flex items-center gap-4">
                            <img className="bg-white w-10 h-10 rounded-[50%]" src={label.img} alt="" />
                            {bol ? <p>{label.name}</p> : "" }
                        </div>
                    ))}
                    <div className=" box flex   duration-150 items-center gap-4 mt-30">
                        <img className="bg-white  w-10 h-10 rounded-[50%]" src="" alt="" />
                        {bol ? <p>Log out</p> : ""}
                    </div>
                    
                </div>
        </section>
    )
}

export default Menu;