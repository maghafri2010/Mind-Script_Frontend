

const buttonName = ["General", "Account", "Privacy", "Notifications", "Language", "Help"];


const Settings = () => {
    return (
        <section className="w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-wrap gap-10 card">
             <div className="flex flex-col w-[200px] h-full  p-4 my-2 rounded-2xl bar ">
                {buttonName.map((item, index) => (
                    <button key={index} className="w-[150px] h-[50px] box rounded-2xl hover  mb-4 hover:bg-[#3A3B3D]">
                        {item}
                    </button>
                ))}
                
             </div>
        </section>
    )
}

export default Settings;