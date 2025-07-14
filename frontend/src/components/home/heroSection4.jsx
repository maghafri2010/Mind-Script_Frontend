const layers = [
  {
    title: "Sprint Reporting",
    pg: "Determine where your team is overcommitted to reduce excessive scope creep."
  },
  {
    title: "Real-Time Collaboration",
    pg: "Work together seamlessly across teams and time zones with synchronized updates."
  },
  {
    title: "Custom Workflows",
    pg: "Tailor each task to your project needs and automate repetitive steps with ease."
  },
  {
    title: "Smart Notifications",
    pg: "Get updates that matter — without the noise — and stay focused on priority tasks."
  }
];


const HeroSection4 = () => {
    return (
        <section className="flex justify-between items-center bg-[#FFCBB4]  px-52  py-36">
            <div className="">
                <h1 className="text-4xl">Reports and insights</h1>
                <p className="w-[450px] text-2xl mt-4 text-[#8A8A8A]">Out-of-the-box reports and dashboards in Mind Script 
                    offer critical insights within the context of your work to 
                    ensure your teams are always up to date and set up 
                    for success.</p>
            </div>
            <div className="flex flex-wrap w-[650px] ">
                {layers.map((lay, i) => (
                    <div className="m-4  w-[250px]">
                        <h2 className="text-[20px]">{lay.title}</h2>
                        <p className={`rounded-2xl border-2 p-4 h-[130px] w-[250px] mt-4 ${i < 2 ? 'bg-[#F7CB52]' : 'bg-[#9CD3D1]'} `}> 
                        {lay.pg}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HeroSection4;