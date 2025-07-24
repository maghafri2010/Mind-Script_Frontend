
const proj = [
    { title: "Project 1", members: "mabdo, alex", status: "In Progress", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 2", members: "mabdo, alex", status: "Completed", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 3", members: "mabdo, alex", status: "Upcoming", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 4", members: "mabdo, alex", status: "Overdue", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 5", members: "mabdo, alex", status: "In Progress", date: "21, jul, 2025 --> 21, aug, 2025" },
    { title: "Project 6", members: "mabdo, alex", status: "Completed", date: "21, jul, 2025 --> 21, aug, 2025" },
];

const Project = () => {
    return (
        <section className=" w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-wrap gap-10">
            {proj.map((item, idx) => (
            <div className="flex flex-col w-[300px] h-[200px] box  p-4 my-2 rounded-2xl card " key={idx}>
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <p className="mt-2 text-amber-200">{item.members}</p>
                <p className="text-[18px]">status: {item.status}</p>
                <p className="text-2xl">0.00%</p>
                <p className="mt-6">{item.date}</p>
            </div>
            ))}
        </section>
    )
}

export default Project;   