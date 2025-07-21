
import onprogress from "../../../data/tasks.jsx";
const Navigator = ({labels = onprogress}) => {
    return (
        <section className="absolute bg-[#212325] w-[1100px] h-[680px] text-white rounded-2xl">
            
            <h1 className="text-4xl ml-16 mt-8"></h1>
            
            
            <div className="flex flex-wrap p-16 gap-8 ">
            {labels.map((label, index) => (
                <div key={index} className="border rounded-2xl  p-4 w-[300px] h-[180px]">
                    <h1>{label.title}</h1>    
                    <h2 className="text-[14px] my-2">{label.date}</h2>
                    <p>{label.status}</p>
                <div className="flex justify-between mt-3">
                    <p>{label.project}</p>
                    <p>{label.team}</p>
                </div>
                
                
                </div>
                
            ))}     
                
        
            </div>

            
            
            
            

        </section>
    )
}

export default Navigator;