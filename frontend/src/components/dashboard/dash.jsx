import { useState } from "react";
import "./dashboard.css";
import Navigator from "./ui/navigator";
import MyPie from "./ui/radial";
import MyTimeRange from "./ui/calendarUi";
import data from "../../data/tasks";


const {
    tasks,
    onProgress,
    completed,
    upcoming,
    overdue,
    reminder,
    project,
    pieData,
    calendarData
} = data;

const array = [onProgress, completed, upcoming, overdue, reminder, project];

const Card = ({ title, onButtonClick, children }) => (
    <div className="bg-[#212325] overflow-auto p-4 text-white scroll-container w-[250px] h-[200px] rounded-2xl">
        <div className="flex  justify-between">
            <h1 className="font-bold">{title}</h1>
            <button
                onClick={onButtonClick}
                className="border border-black box rounded pl-1 w-10"
            >
                <p className="w-6 h-4  rounded bg-black"></p>
            </button>
        </div>
        {children}
    </div>
);

const Dash = () => {
    const [bol, setBol] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openWindow = (index) => {
        setBol(true);
        setSelectedIndex(index);
    };

    return (
        <section className="flex flex-col w-full">
            {/* Tasks */}
            <div className="flex gap-8 items-center justify-center">
                {tasks.map((task, i) => (
                    <Card key={i} title={task.title} onButtonClick={() => openWindow(i)}>
                        {task.content.map((arr, j) => (
                            <p
                                key={j}
                                className="flex items-center p-2 my-2 rounded box h-fit hover:bg-black"
                            >
                                {arr}
                            </p>
                        ))}
                    </Card>
                ))}
            </div>

            {/* Reminders & Pie */}
            <div className="flex gap-8 justify-center items-center mt-10">
                {/* Reminders */}
                <div className="bg-[#212325] overflow-auto p-4 text-white scroll-container w-[400px] h-[200px] rounded-2xl">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold">Reminders</h1>
                        <button
                            onClick={() => openWindow(4)}
                            className="border border-black box rounded pl-1 w-10"
                        >
                            <p className="w-6 h-4 rounded bg-black"></p>
                        </button>
                    </div>
                    {reminder.map((rem, i) => (
                        <div
                            key={i}
                            className="justify-between flex box hover:bg-black"
                        >
                            <p className="flex items-center p-2 my-2 rounded h-fit">
                                {rem.title}
                            </p>
                            <p className="flex items-center p-2 my-2 rounded h-fit">
                                {rem.date}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Pie Chart */}
                <div className="bg-[#212325] text-white w-[663px] h-[200px] rounded-2xl">
                    <div className="flex w-full h-[200px] relative">
                        <h1 className="absolute font-bold pl-3 pt-3">
                            Statistics By Month
                        </h1>
                        <MyPie data={pieData} />
                    </div>
                </div>
            </div>

            {/* Projects & Calendar */}
            <div className="flex gap-8 justify-center items-center mt-10">
                {/* Projects */}
                <div className="bg-[#212325] scroll-container overflow-auto p-4 text-white w-[400px] h-[200px] rounded-2xl">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Projects</h1>
                        <button
                            onClick={() => openWindow(5)}
                            className="border border-black box rounded pl-1 w-10 mt-2"
                        >
                            <p className="w-6 h-4 rounded bg-black"></p>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        {project.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center p-2 my-2 rounded h-fit hover:bg-black"
                            >
                                <p>{item.title}</p>
                                <p className="text-gray-400">{item.date}</p>
                                <p className="text-gray-400">{item.status}</p>
                                <p className="text-gray-400">{item.team}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Calendar */}
                <div className="bg-[#212325]   p-4 text-white w-[660px] h-[200px] rounded-2xl">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Calendar</h1>
                    </div>
                    <div className="h-[300px] w-[650px]">
                        <MyTimeRange data={calendarData} />

                    </div>
                    
                </div>
            </div>

            {/* Navigator Modal */}
            {bol && selectedIndex !== null && (
                <Navigator labels={array[selectedIndex]} />
            )}

            {/* Overlay */}
            {bol && (
                <div
                    className="fixed inset-0 bg-black/10 z-40"
                    onClick={() => setBol(false)}
                    tabIndex={-1}
                    aria-hidden="true"
                />
            )}
        </section>
    );
};

export default Dash;