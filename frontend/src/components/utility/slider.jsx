import { useRef, useState, useEffect, use } from "react"


const SliderConfig = {
        visibleCount: 1,
        autoSlide: false,
        autoSlideInterval: 3000,
        showArrows: true,
        loop: false,
        transition: "smooth",
};
const arr = [
  {
    name: "Mabdo Devs",
    pg: "“This platform makes it much easier for me to maintain and improve myself with easy-to-use features, and I love the intuitive interface!”",
    role: "Employee at Univsis"
  },
  {
    name: "Sara Benali",
    pg: "“An amazing tool that helps me track my goals every day. The clean design and smart features really keep me on track!”",
    role: "Marketing Coordinator at Casahub"
  },
  {
    name: "Youssef Chahid",
    pg: "“This app has changed how I approach productivity. Simple, fast, and genuinely helpful for building better habits.”",
    role: "Freelance Web Developer"
  },
  {
    name: "Amina Rachidi",
    pg: "“I’ve tried many tools, but this one stands out. Everything is organized and motivating. It’s a must-have for professionals.”",
    role: "UX Designer at StudioNext"
  },
  {
    name: "Rachid El Idrissi",
    pg: "“From setting up routines to tracking progress, this platform delivers. I feel more focused and structured every single day.”",
    role: "Student & Content Creator"
  }
];
function getSliderConfig(userConfig = {}) {
  return {
    visibleCount: userConfig.visibleCount ?? 1,
    autoSlide: userConfig.autoSlide ?? false,
    autoSlideInterval: userConfig.autoSlideInterval ?? 3000,
    showArrows: userConfig.showArrows ?? true,
    loop: userConfig.loop ?? false,
    transition: userConfig.transition ?? "smooth",
    ...userConfig, // in case user passed custom config
  };
}

const CustomSlider = (userConfig) => {
    const SliderConfig = {
        visibleCount: 1,
        autoSlide: false,
        autoSlideInterval: 3000,
        showArrows: true,
        loop: false,
        transition: "smooth",
    };

    const containerRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const scrollTo = (index) => {
        const container = containerRef.current;
        const width = container.offsetWidth;
        container.scrollTo({
            left: index * (width / visibleCount),
            behavior: transition,
        });
    };

    useEffect(() => {
        scrollTo(current);
    }, [current]);

    return (
        <div className="relative w-full overflow-hidden">


        </div>
    )
}




const Slider = ({array = arr}) => {

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(!visible);
        }, 3000);
        
    },[index]);

   

    const visibleCards = arr.slice(index, index + 1);

    const prev = () => {
        setIndex((prev) => (prev === 0 ? array.length - 1 : prev - 1 ));
        setVisible("enter");
    }

    const next = () => {
        setIndex((prev) => (prev === array.length - 1 ? 0 : prev + 1 ));
        setVisible("exit");
    }


    return (
        <section className=" bg-[#f8e39d] w-full h-[450px] p-44 pb-100 border ">
            <div className="flex justify-between">

                <div>
                    <h1 className="text-4xl">Success Through Our Solutions</h1>
                    <p className="text-[#8A8A8A] mt-8 w-[450px]">Mind Script is flexible enough to mold to your team’s own unique way of working, whether it is Scrum, Kanban, or something in between.</p>
                </div>

                
<div  className=" flex  w-[600px] h-[300px] overflow-hidden">
                {visibleCards.map((card, i) => (
                    

                
                    <div className={`
                        flex flex-col justify-center items-start border-2 bg-gray-50 rounded-2xl shadow-2xl p-8 !w-[400px] h-[200px] transition-all duration-700 
                        ${visible === "enter"
                        ? "translate-x-0 opacity-100 " 
                        : visible === "exit" ? "translate-x-200 opacity-100" : "translate-x-0 opacity-100"  } `}
                        
                        >
                        <p>{card.pg}</p>
                        <h2 className="font-bold mt-4">{card.name}</h2>
                        <p className="text-[#989898] text-[14px]">{card.role}</p>
                    </div>
                ))}
                                </div>

                

                </div>
                
                <div className="flex items-center">
                    <button className="w-10 h-10 bg-white font-extrabold text-2xl my-2 mx-6 rounded-[50%]" onClick={prev}>⟵	</button>
                    <button className="w-10 h-10 bg-black text-white font-extrabold text-2xl rounded-[50%]" onClick={next}>⟶</button>
                </div>

            </section>
    )
}

export default Slider;