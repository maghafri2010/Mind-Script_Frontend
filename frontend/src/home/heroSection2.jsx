import { section_logo } from "../assets/images";


const layers = [
    {image: section_logo[0], title: "Daily Habit Tracker", pg: "Track your wellness activities habit to stay on top of your progress"},
    {image: section_logo[1], title: "Engagement Support", pg: "Connect with like-minded individuals who are focused on wellness and productivity."},
    {image: section_logo[2], title: "Stay On Track", pg: "Use the timeline view to map out the big picture, and ensure your team stays on the same page."},
    {image: section_logo[3], title: "Bye-bye Spreadsheets", pg: "Use the timeline view to map out the big picture, and ensure your team stays on the same page."},
];

const HeroSection2 = () => {
    return (
        <section className="flex justify-between items-center px-48 py-36 bg-[#9CD3D1]">
            <div className="ml-4">
                <h1 className="text-3xl">Move Fast, Stay Aligned!</h1>
                <p className="text-[#818181] mt-4 w-96">Keep every detail of a project centralized in real time so up-to-date info can flow freely across people, teams, and tools.</p>
                <button className="btn-submit p-4 mt-4">Learn more</button>
                <img className="w-96 h-96 rounded-2xl border mt-4" src="" alt="" />
            </div>
            <div className="flex flex-col">

            {layers.map((lay, i) => (
                <div className="flex m-4 w-[650px] p-8 h-36 justify-center shadow-xl shadow-black items-center bg-[#FAF4E1] rounded-2xl">
                        <img className="w-16 mr-4 h-16" src={lay.image} alt={`layer-${i}`} />
                        <div className="">
                            <h2 className="text-2xl">{lay.title}</h2>
                            <p className="mt-2 text-[#818181]">{lay.pg}</p>
                        </div>
                </div>
                
            ))}
</div>
            
        </section>
    );
}

export default HeroSection2;