import { useState } from "react";


const proj = [
    { title: "Project 1", members: "mabdo, alex", status: "In Progress", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 2", members: "mabdo, alex", status: "Completed", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 3", members: "mabdo, alex", status: "Upcoming", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 4", members: "mabdo, alex", status: "Overdue", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 5", members: "mabdo, alex", status: "In Progress", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 6", members: "mabdo, alex", status: "Completed", date: "21, jul, 2025 --> 21, aug, 2025" },
];
const Card = () => {
    return (
        <div className="flex flex-wrap gap-8  mt-10 w-[1000px] h-[680px]">
            {proj.map((item, idx) => (
                <div className="flex flex-col w-[300px] h-[200px] box p-4 my-2 rounded-2xl bg-[#212325]" key={idx}>
                    <h1 className="font-bold text-2xl text-white">{item.title}</h1>
                    <p className="mt-2 text-amber-200 ">{item.members}</p>
                    <p className="text-[18px] text-white">status: {item.status}</p>
                    <p className="text-2xl text-white">0.00%</p>
                    <p className="mt-6 text-white">{item.date}</p>
                </div>
            ))}
        </div>
    )
}

const Log = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col w-[500px] h-[700px]  p-4 my-2 rounded-2xl bg-[#212325]">
                <h1 className="font-bold text-4xl text-white">Log</h1>
            </div>
            <div className="flex flex-col w-[300px] h-[600px] p-4 my-2 rounded-2xl bg-[#212325]">
                <h1 className="text-white box hover:bg-black rounded h-8 flex justify-center items-center">M Abdelmoghit</h1>
            </div>
        </div>   
    )
}

const Mine = () => {
    return (
        <div>

        </div>
    )
}

const Team = () => {
    return (
        <div className="flex flex-col mt-12 w-[1100px] h-[680px] bg-[#212325] text-white rounded-2xl p-8">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h1 className="text-2xl ml-10">Members</h1>
                <h1 className="text-2xl">Email</h1>
                <h1 className="text-2xl">Role</h1>
                <h1 className="text-2xl mr-30">Status</h1>
            </div>
            <div className="flex gap-8 justify-center items-center  ">
                <div className="flex flex-col gap-4 border-r w-[400px] mb-4 h-[500px] ">
                    <div className="flex gap-4 text-center">
                        <img className="w-6 h-6 bg-amber-50 rounded-2xl" src="" alt="" />
                        <h1>Abdelmoghit Maghafri</h1>
                    </div>
                    <div className="flex gap-4 text-center">
                        <img className="w-6 bg-amber-50 h-6 rounded-2xl" src="" alt="" />
                        <h1>Ahmed yassin</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 border-r pr-16 text-center mb-4 w-[300px] h-[500px]">
                    <h1>abdomagha8@gmail.com</h1>
                    <h1>Ahmedyassin@gmail.com</h1>
                </div>

                <div className="flex flex-col gap-4 border-r pr-16 mb-4 w-[300px] text-center h-[500px]">
                    <h1>Developer</h1>
                    <h2>Owner</h2>
                    
                </div>
                <div className="mr-16 w-[300px] flex flex-col gap-4 text-center mb-4 h-[500px]">
                    <h1 className="text-green-400">Online</h1>
                    <h1 className="text-red-400">Offline</h1>
                </div>
            </div>
            
        </div>
    )
}


const Workspace = () => {

    const data = ["By project", "Back log", "Mine", "Team"];

    const [active, setActive] = useState(null);
    

    return (
        <section>
            <div className="flex text-white gap-8">
                {data.map((item, index) => (
                    <button key={index} onClick={() => setActive(index)} className="flex items-center gap-4">
                        <p className={`h-8 w-8 rounded-2xl box ${active === index ? "bg-green-400" : "bg-gray-400"}`}></p>
                        {item}
                    </button>
                ))}
            </div>

                <Team />
                
            
            
        </section>
    )
}

export default Workspace;   