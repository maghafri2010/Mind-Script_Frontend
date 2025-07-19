const onProgress = [
    {title: "", name: "", date: "", status: "", project: "", team: "" },

];

const Navigator = (labels = onProgress) => {
    return (
        <section className="absolute bg-[#212325] w-[1100px] h-[680px] text-white rounded-2xl">
            
                <h1 className="text-4xl ml-16 mt-8">{labels.title}</h1>
            
            
            <div className="flex flex-wrap p-16 gap-8 ">
                 
                <div className="border rounded-2xl  p-4 w-[300px] h-[180px]">
                    <h1>Add responsive styling using Tailwind</h1>    
                    <h2 className="text-[14px] my-2">July 9, 2025 → July 16, 2025</h2>
                    <p>Status</p>
                <div className="flex justify-between mt-3">
                    <p>Project_name</p>
                    <p>Team_name</p>
                </div>
                </div>
        
            </div>

            
            
            
            

        </section>
    )
}

export default Navigator;