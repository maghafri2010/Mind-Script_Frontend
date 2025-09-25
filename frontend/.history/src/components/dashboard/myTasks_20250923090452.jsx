import { useState } from "react";
import Navigator from "./ui/navigator";
import data from "../../data/tasks";
import MyPie from "./ui/radial";
import DatePicker from "react-datepicker";
import MyDatePicker from "./ui/datePicker";
import NavigatorTasks from "../navigators/navigatorTasks";

const {
    
    onProgress,
    completed,
    upcoming,
    overdue,
    reminder,
    pieData,
    tasks,
} = data;

const array = [onProgress, completed, upcoming, overdue, reminder];

const Card = ({ title, onButtonClick, children, color }) => (
    <div className="card overflow-auto p-4 text-white scroll-container w-[250px] h-[300px] rounded-2xl">
        <div className="flex items-center  justify-between">
            <span className={`w-4 h-4 rounded-[50%] ${color}`}></span>
            <h1 className="font-bold text-2xl">{title}</h1>
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

const MyTasks = () => {
    const [bol, setBol] = useState(false);
        const [selectedIndex, setSelectedIndex] = useState(null);
    
        const openWindow = (index) => {
            setBol(true);
            setSelectedIndex(index);
        };
    return (
        <section className=" flex flex-col items-center">
                
                <MyDatePicker
                onDateSelect={(dateStr) => {
                setDateData(allData[dateStr] || []);
                }}
                />

            <div className="flex gap-8 items-center justify-center">
                {tasks.map((task, i) => (
                    <Card key={i} title={task.title} color={task.color} onButtonClick={() => openWindow(i)}>
                        {task.content.map((arr, j) => (
                            <p  
                                key={j}
                                className="flex items-center p-2 my-2 rounded box h-fit hover:bg-black hover:text-white"
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
                <div className="card overflow-auto p-4 text-white scroll-container w-[400px] h-[300px] rounded-2xl">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-2xl">Reminders</h1>
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
                            className="justify-between flex box hover:bg-black hover:text-white "
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
                <div className="bg-gray-600  w-[663px] h-[300px] rounded-2xl">
                    <div className="flex flex-col w-full h-[200px] relative">
                        <h1 className=" font-bold pl-4 pt-4 h-fit  text-2xl">
                            Statistics by Month
                        </h1>
                        <MyPie data={pieData} />
                    </div>
                </div>
            </div>
            {/* Navigator Modal */}
            {bol && selectedIndex !== null && (
                <NavigatorTasks labels={array[selectedIndex]} onClose={() => setBol(false)} />
            )}

            

        </section>
    )
}

export default MyTasks;