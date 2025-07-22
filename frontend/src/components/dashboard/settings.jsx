

const buttonName = ["General", "Account", "Privacy", "Notifications", "Language", "Help"];


const Settings = () => {
    return (
        <section className="w-[1100px] h-[680px] text-white rounded-2xl p-8 flex flex-wrap gap-10 bg-[#212325]">
             <div className="flex flex-col w-[200px] h-full  p-4 my-2 rounded-2xl bg-[#2A2B2D] ">
                {buttonName.map((item, index) => (
                    <button key={index} className="w-[150px] h-[50px] box rounded-2xl bg-[#2A2B2D] text-white mb-4 hover:bg-[#3A3B3D]">
                        {item}
                    </button>
                ))}
                
             </div>
        </section>
    )
}

export default Settings;