import { useEffect, useState } from "react";
import "./dashboard.css";
import MyPie from "./ui/radial";
import MyTimeRange from "./ui/calendarUi";
import data from "../../data/tasks";
import Card from "./ui/card";
import { buttonList } from "./ui/new";
import New from "./ui/new";
import { fetch_projects, fetchReminders, fetchTasks } from "../../api";
import NavigatorTasks from "../navigators/navigatorTasks";
import NavigatorReminders from "../navigators/navigatorReminders";
import NavigatorProjects from "../navigators/navigatorProjects"; // <- add your project navigator

const { pieData, calendarData } = data;

const Dash = () => {
  const [bolTask, setBolTask] = useState(false);
  const [bolReminder, setBolReminder] = useState(false);
  const [bolProject, setBolProject] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [index, setIndex] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [reminder, setReminder] = useState([]);
  const [project, setProject] = useState([]);

  const SelectedScreen = index !== null ? buttonList[index]?.screen : null;

  const openTaskWindow = (index) => {
    setSelectedIndex(index);
    setBolTask(true);
  };

  const openReminderWindow = () => setBolReminder(true);
  const openProjectWindow = () => setBolProject(true);

  const loadTasks = async () => {
    const tasks = await fetchTasks();
    setTasks(tasks);
  };

  const loadReminders = async () => {
    const reminders = await fetchReminders();
    setReminder(reminders);
  };

  const loadProjects = async () => {
    const projects = await fetch_projects();
    setProject(projects);
  };

  useEffect(() => {
    loadTasks();
    loadReminders();
    loadProjects();
  }, []);

  // task status groups
  const onprogressTasks = tasks.filter(
    (t) => t.status?.toLowerCase() === "onprogress"
  );
  const completedTasks = tasks.filter(
    (t) => t.status?.toLowerCase() === "completed"
  );
  const upcomingTasks = tasks.filter(
    (t) => t.status?.toLowerCase() === "upcoming"
  );
  const overdueTasks = tasks.filter(
    (t) => t.status?.toLowerCase() === "overdue"
  );

  const statusGroup = [
    { label: "OnProgress", color: "bg-blue-500", tasks: onprogressTasks },
    { label: "Completed", color: "bg-green-500", tasks: completedTasks },
    { label: "Upcoming", color: "bg-yellow-500", tasks: upcomingTasks },
    { label: "Overdue", color: "bg-red-500", tasks: overdueTasks },
  ];

  return (
    <section className="flex flex-col w-full ">
      {/* Tasks */}
      <div className="flex gap-8 items-center justify-center">
        {statusGroup.map((group, i) => (
          <Card
            key={i}
            label={group.label}
            color={group.color}
            onButtonClick={() => openTaskWindow(i)}
          >
            {group.tasks.map((task, j) => (
              <div
                key={j}
                className="flex justify-between items-center p-2 my-2 rounded box h-fit hover:bg-black hover:text-white"
              >
                <p className="truncate max-w-[200px] h-fit">
                  {task?.title?.slice(0, 25)}
                </p>
              </div>
            ))}
          </Card>
        ))}
      </div>

      {/* Reminders & Pie */}
      <div className="flex gap-8 justify-center items-center mt-10">
        {/* Reminders */}
        <div className="card overflow-auto p-4 text-white scroll-container w-[400px] h-[200px] rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Reminders</h1>
            <button
              onClick={openReminderWindow}
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
                {rem?.title?.slice(0, 20)}
              </p>
              <p className="flex items-center p-2 my-2 rounded h-fit">
                {rem?.dueDate?.slice(0, 10)}
              </p>
            </div>
          ))}
        </div>
        {/* Pie Chart */}
        <div className="bg-gray-600 w-[663px] h-[200px] rounded-2xl">
          <div className="flex w-full h-[200px] relative">
            <h1 className="absolute font-bold pl-3 pt-3">
              Statistics By Month
            </h1>
            <MyPie data={pieData} />
          </div>
        </div>
      </div>

      {/* Projects & Calendar */}
      <div className="flex  gap-8 justify-center items-center mt-10">
        {/* Projects */}
        <div className="card scroll-container overflow-auto p-4 w-[400px] h-[200px] rounded-2xl">
          <div className="flex justify-between">
            <h1 className="font-bold">Projects</h1>
            <button
              onClick={openProjectWindow}
              className="border border-black box rounded pl-1 w-10 mt-2"
            >
              <p className="w-6 h-4 rounded bg-black"></p>
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {project.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-2 my-2 rounded h-fit hover:bg-black hover:text-white box"
              >
                <p>{item?.title?.slice(0, 15)}</p>
                <p className="text-gray-400">{item?.dueDate?.slice(0, 10)}</p>
                <p className="text-gray-400">{item?.status}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Calendar */}
        <div className="bg-gray-600 p-4 w-[660px] h-[200px] rounded-2xl">
          <div className="flex justify-between">
            <h1 className="font-bold">Calendar</h1>
          </div>
          <div className="h-[300px] w-[650px]">
            <MyTimeRange data={calendarData} />
          </div>
        </div>
      </div>

      {/* Navigator Modals */}
      {bolTask && selectedIndex !== null && (
        <NavigatorTasks
          labels={statusGroup[selectedIndex].tasks}
          onClose={() => setBolTask(false)}
          refreshTasks={loadTasks}
        />
      )}

      {bolReminder && (
        <NavigatorReminders
          labels={reminder}
          onClose={() => setBolReminder(false)}
          refreshReminders={loadReminders}
        />
      )}

      {bolProject && (
        <NavigatorProjects
          projects={project}
          onClose={() => setBolProject(false)}
          refreshProjects={loadProjects}
        />
      )}

      {/* Floating New Button */}
      <div className="absolute top-210 right-10">
        <New setIndex={setIndex} index={index} />
      </div>

      {SelectedScreen && (
        <SelectedScreen onClose={() => setIndex(null)} />
      )}
    </section>
  );
};

export default Dash;
