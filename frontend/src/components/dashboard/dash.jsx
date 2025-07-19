import { useEffect, useState } from "react";
import "./dashboard.css"
import Navigator from "./ui/navigator";

const tasks = ["On progress", "Completed", "Upcoming", "Overdue"];
const third_line = ["Projects", "Calendar / Week", "Calendar / Month"];

const Dash = () => {
const [bol, setBol] = useState(false);
const openWindow = () => setBol((prev) => !prev);



    return (
        <section className="flex flex-col w-full ">
            <div className="flex gap-8 items-center justify-center">
                {tasks.map((task, i) => (
                    <div  className={` bg-[#212325]  p-4 text-white w-[250px] h-[200px] rounded-2xl`}>
                    <div className="flex justify-between">
                        <h1>{task}</h1>
                        <button onClick={openWindow} className="border"></button>
                    </div>
                    
                    <p className="box border p-2 mt-2">Reading Novel</p>
                    <p className="box border p-2 mt-2">Watching movie</p>
                    
                </div>
                ))}
            </div>
            
            
            <div className="flex gap-8 justify-center items-center mt-10">
                <div className="bg-[#212325] box p-4 text-white w-[400px] h-[200px] rounded-2xl">
                    <h1>Reminders</h1>
                </div>
                <div className="bg-[#212325] box p-4 text-white w-[663px] h-[200px] rounded-2xl">
                    <h1>Statistics By Month</h1> 
                </div>

            </div>
            <div className="flex gap-8 justify-center items-center mt-10">
                {third_line.map((layer, i) => (
                    <div className="bg-[#212325] box p-4 text-white w-[344px] h-[200px] rounded-2xl" >
                        <h1>{layer}</h1>
                    </div>
                ))}
            </div>

            {bol ? <Navigator/> : ""}
            {(bol) && (
                <div
                    className="fixed inset-0 bg-black/10 z-40"
                        onClick={() => {
                            if (bol) setBol(false);
                        }}
                        tabIndex={-1}
                        aria-hidden="true"
                />
            )}

            
        </section>
    )
}

export default Dash;