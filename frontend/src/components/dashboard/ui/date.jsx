import { useState } from "react";


const Date = () => {

    const [bol, setBol] = useState(true);
    
    const toggleMode = () => setBol((prev) => !prev);

    return (
        <div className="w-[400px] h-16 px-10 flex justify-between text-white items-center bg-[#212325] rounded-2xl">
            <h1>Today, 12,12,2002</h1>
            <button onClick={toggleMode} className="flex box  items-center border rounded-2xl w-16 h-6">
                <p className={`relative bg-amber-50  rounded-[50%] left-1 w-4 h-4 border transition-all ease-in-out duration-300 border-white ${bol ? "" : "translate-x-10"}`}></p>
                </button>
        </div>
    )
}

export default Date;