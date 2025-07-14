
import Menu_icon from '../../assets/images/menu.png'

const labels = [
    {img: "", name: "Dashboard"},
    {img: "", name: "My Tasks"},
    {img: "", name: "Workspace"},
    {img: "", name: "Projects"},
    {img: "", name: "Calendar"},
    {img: "", name: "Inbox"},
    {img: "", name: "Settings"},
]

const Menu = () => {
    return (
        <section className=" flex flex-col pl-8 rounded-2xl  bg-[#212325] w-[250px] h-[850px] text-white">
                <div className="">
                    <button className="ml-36 my-4"><img className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 w-10 h-10 ml-4" src={Menu_icon} alt="" /></button>
                    <div className="flex items-center gap-4">
                        <img className="bg-white w-10 h-10 rounded-[50%]" src="" alt="" />
                        <h1 className="box">User_name</h1>
                    </div>
                    <div className="flex gap-4 pl-4 items-center border rounded-2xl mt-8 w-[180px]">
                        <button className="border-r-2 pr-2 box">personal</button>
                        <button className="box">Team</button>
                    </div>
                    {labels.map((label, i) => (
                        <div className="box mt-8 flex items-center gap-4">
                            <img className="bg-white w-10 h-10 rounded-[50%]" src={label.img} alt="" />
                            <p>{label.name}</p>
                        </div>
                    ))}
                    <div className=" box flex items-center gap-4 mt-30">
                        <img className="bg-white w-10 h-10 rounded-[50%]" src="" alt="" />
                        <p>Log out</p>
                    </div>
                    
                </div>
        </section>
    )
}

export default Menu;