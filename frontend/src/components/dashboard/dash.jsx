import "./dashboard.css"

const tasks = ["On progress", "Completed", "Upcoming", "Overdue"];
const third_line = ["Projects", "Calendar / Week", "Calendar / Month"];

const Dash = () => {
const window = () => {
    "w-800px h-[900px] bg-[#212325] "
}

    return (
        <section className="flex flex-col  w-full ">
            <div className="flex gap-8 items-center justify-center">
                {tasks.map((task, i) => (
                    <div className="bg-[#212325] box p-4 text-white w-[250px] h-[200px] rounded-2xl">
                    <h1>{task}</h1>
                    <p></p>
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

            
        </section>
    )
}

export default Dash;