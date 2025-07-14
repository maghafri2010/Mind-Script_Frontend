import { useState } from "react";
import Check from '../../assets/images/check.png';


const basic = ["Up to 10 creative methods", "Daily Habit Tracker", "Basic analystics and reporting", "Support a good mentor", "Access to customizeable boards"];
const pro = [
  "Everything in Basic",
  "Unlimited creative method templates",
  "Habit & productivity tracker",
  "Priority mentor support",
  "Access to premium customizable boards and themes",
  "Collaboration with up to 5 users",
 
];
const custom = [
  "Everything in Pro",
  "Fully tailored features to your workflow",
  "Dedicated success manager",
  "Unlimited team collaboration",
  "Enterprise-level analytics and reports",
  "Custom integrations (e.g., Slack, Notion, Google Calendar)",
  
];
const Pricing = () => {
    const [color, setColor] = useState();
    const [Bol, setBol] = useState(false);

    const handle = () => {
        (setBol(Bol === false ? true : false));

    } 

    return (
        <section className="flex flex-col justify-center items-center py-16 bg-[#9CD3D1]">
            <div>
                <h1 className="text-4xl"> Empower Wellness with The Perfect Plan</h1>
                <p className="text-[20px] text-[#8A8A8A]">Free plan is free forever. Our Premium plan comes with a free, 30-day trial.</p>
            </div>
            <div className="flex mt-16  items-center gap-4">
                <p className={`${Bol === false ? "text-[#8A8A8A] " : "text-black"}`} >Monthly</p>
                <button onClick={handle} className="border-2 w-20 bg-amber-50 h-8 rounded-2xl cursor-pointer"></button>
                <span onClick={handle} className={`relative right-24 cursor-pointer w-8 h-8 border-2 transition-all duration-400 rounded-[50%] ${Bol === false ? "translate-x-12 bg-[#8A8A8A]" : "bg-[#F7CB52] "} `}></span>
                <p className={` relative right-10 ${Bol === true ? "text-[#8A8A8A]" : "text-black"}`} >Annual</p>
            </div>

            <div className="flex border-2 mt-12 h-[700px] rounded-2xl">
                <div className=" bg-[#FAF4E1] rounded-tl-2xl rounded-bl-2xl p-6  w-[330px] h-[696px]">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-[#F7EABC] border-2 rounded-[50%] w-12 h-12"/>
                        <h2 className="text-3xl">Basic</h2>
                    </div>
                    <div>
                        <p className="text-[#8A8A8A] mb-4">Ideal for improving the daily habbits you want to Build</p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold">{Bol === true ? "$ 49" : "$ 29"}</p>
                            <p className="text-[#8A8A8A]">{Bol === true ? "/month" : "/year"}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn-submit my-6  w-64 h-12">Get started</button>
                        </div>
                        
                        <p className="text-2xl mb-4">What's include:</p>
                        {basic.map((text, i) => (
                            <p className="flex items-center gap-2 mb-2"><img className="w-4 ml-2 h-4" src={Check} alt="" />{text}</p>
                        ))}
                        
                    </div>
                </div>


                <div className="bg-[#FAC9B3] p-6 border-x-2 w-[330px]  h-[696px]">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-[#F7EABC] border-2 rounded-[50%] w-12 h-12"/>
                        <h2 className="text-3xl">Pro</h2>
                    </div>
                    <div>
                        <p className="text-[#8A8A8A] mb-4">Ideal for improving the daily habbits you want to Build</p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold">{Bol === true ? "$ 190" : "$ 149"}</p>
                            <p className="text-[#8A8A8A]">{Bol === true ? "/month" : "/year"}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn-submit my-6  w-64 h-12">Get started</button>
                        </div>
                        
                        <p className="text-2xl mb-4">What's include:</p>
                        {pro.map((text, i) => (
                            <p className="flex items-center gap-2 mb-2"><img className="w-4 ml-2 h-4" src={Check} alt="" />{text}</p>
                        ))}
                        
                    </div>
                </div>


                <div className="bg-[#FAF4E1] rounded-tr-2xl rounded-br-2xl p-6 w-[330px]  h-[696px]">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-[#F7EABC] border-2 rounded-[50%] w-12 h-12"/>
                        <h2 className="text-3xl">Custom</h2>
                    </div>
                    <div>
                        <p className="text-[#8A8A8A] mb-4">Ideal for improving the daily habbits you want to Build</p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold">Custom</p>
                            
                        </div>
                        <div className="flex justify-center">
                            <button className="btn-submit my-6  w-64 h-12">Get started</button>
                        </div>
                        
                        <p className="text-2xl mb-4">What's include:</p>
                        {custom.map((text, i) => (
                            <p className="flex items-center w-70  mb-2  gap-2"><img className="w-4 ml-2 h-4" src={Check} alt="" />{text}</p>
                        ))}
                            
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Pricing;