import { useEffect, useState } from "react";
import MyPie from "./ui/radial";
import DatePicker from "react-datepicker";
import MyDatePicker from "./ui/datePicker";
import NavigatorTasks from "../navigators/navigatorTasks";
import { fetchReminders, fetchTasks } from "../../api";
import NavigatorReminders from "../navigators/navigatorReminders";
import { useReminder } from "../../data/reminders";
import { useTasks } from "../../data/tasks";
import Reset from "../svg/Reset";




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

const MyTasks = (date) => {
    const [bol, setBol] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filteredReminders, setFilteredReminders] = useState([]);

    const reminders = useReminder();
    const tasks = useTasks();
    
    const [bolReminder, setBolReminder] = useState(false);
    const openWindow = (index) => {
        setBol(true);
        setSelectedIndex(index);
    };

    const openReminderWindow = () => setBolReminder(true);

    const reset = () => {
        setSelectedDate(null);
        setFilteredTasks([]);
        setFilteredReminders([]);
    };

    const onprogressTasks = (selectedDate ? filteredTasks : tasks).filter(
    (t) => t.status?.toLowerCase() === "onprogress"
  );
  const completedTasks = (selectedDate ? filteredTasks : tasks).filter(
    (t) => t.status?.toLowerCase() === "completed"
  );
  const upcomingTasks = (selectedDate ? filteredTasks : tasks).filter(
    (t) => t.status?.toLowerCase() === "upcoming"
  );
  const overdueTasks = (selectedDate ? filteredTasks : tasks).filter(
    (t) => t.status?.toLowerCase() === "overdue"
  );

    const pieData = [
  { id: "On Progress", label: "On Progress", value: onprogressTasks.length },
  { id: "Completed", label: "Completed", value: completedTasks.length },
  { id: "Upcoming", label: "Upcoming", value: upcomingTasks.length },
  { id: "Overdue", label: "Overdue", value: overdueTasks.length },
];
const statusGroup = [
    { label: "OnProgress", color: "bg-blue-500", tasks: onprogressTasks },
    { label: "Completed", color: "bg-green-500", tasks: completedTasks },
    { label: "Upcoming", color: "bg-yellow-500", tasks: upcomingTasks },
    { label: "Overdue", color: "bg-red-500", tasks: overdueTasks },
  ];

    
    return (
        <section className=" flex flex-col items-center">
                
            <div className="flex items-center">
                <MyDatePicker
                value={selectedDate}
                onDateSelect={(dateStr) => {
                setSelectedDate(dateStr);
                setFilteredTasks(tasks.filter(t => t.dueDate?.slice(0, 10) === dateStr));
                setFilteredReminders(reminders.filter(r => r.dueDate?.slice(0, 10) === dateStr));
                }}
                />
                <Reset width={30} className="mb-3" onClick={() => reset()} />
            </div>
                

            <div className="flex gap-8 items-center justify-center">
                {statusGroup.map((group, i) => (
                    <Card key={i} title={group.label} color={group.color} onButtonClick={() => openWindow(i)}>
                        {group.tasks.map((task, j) => (
                            <p  
                                key={j}
                                className="flex items-center p-2 my-2 rounded box h-fit hover:bg-black hover:text-white"
                            >
                                {task.title}
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
                            onClick={() => openReminderWindow()}
                            className="border border-black box rounded pl-1 w-10"
                        >
                            <p className="w-6 h-4 rounded bg-black"></p>
                        </button>
                    </div>
                    {(selectedDate ? filteredReminders : reminders).map((rem, i) => (
                        <div
                            key={i}
                            className="justify-between flex box hover:bg-black hover:text-white "
                        >
                            <p className="flex items-center p-2 my-2 rounded h-fit">
                                {rem.title}
                            </p>
                            <p className="flex items-center p-2 my-2 rounded h-fit">
                                {rem.dueDate?.slice(0, 10)}
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
                <NavigatorTasks labels={statusGroup[selectedIndex].tasks} onClose={() => setBol(false)} refreshTasks={loadTasks}/>
            )}
            {bolReminder && (
                    <NavigatorReminders
                      labels={reminders}
                      onClose={() => setBolReminder(false)}
                      refreshReminders={loadReminders}
                    />
                  )}

            

        </section>
    )
}

export default MyTasks;