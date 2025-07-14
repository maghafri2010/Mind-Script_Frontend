import { Link } from "react-router";


const HeroSection3 = () => {
    return (
        <section className="flex flex-col py-36 px-36 justify-center items-center">
            <h1 className="text-3xl">Powerful Agile Boards</h1>
            <div className="flex mt-16">
                <div className="m-4">
                    <h2>Scrum Boards</h2>
                    <p className="text-[#8A8A8A] border-2 w-[350px]  rounded-2xl p-4">Scrum boards help agile teams break large, complex projects into manageable pieces of work so focused teams ship faster.</p>
                </div>
                <div className="m-4">
                    <h2>Kanban Boards</h2>
                    <p className="text-[#8A8A8A] border-2 w-[350px] rounded-2xl p-4">Agile and DevOps teams can use flexible kanban boards to visualize workflows, limit work-in-progress, and maximize efficiency as a team. </p>
                </div>
                <div className="m-4">
                    <h2>Choose Your Own Adventure</h2>
                    <p className="text-[#8A8A8A] border-2 w-[350px] rounded-2xl px-8 py-4">Mind Script is flexible enough to mold to your team’s own unique way of working, whether it is Scrum, Kanban, or something in between.</p>
                </div>
            </div>
            <Link to={"/account"} className="btn-submit flex justify-center items-center mt-14 p-4">Get started</Link>
        </section>
    )
}

export default HeroSection3;