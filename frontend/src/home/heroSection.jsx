import Test from '../assets/images/test.jpeg'

const stats = [
  { number: "$ 12 Million", label: "Revenue earned in 2024" },
  { number: "120+", label: "Trusted Partnership" },
  { number: "24 Years", label: "All Taskflow Solutions" },
  { number: "78%", label: "List Growth Efficiency" },
];

const HeroSection = () => {
    return (
        <section className="relative pt-70 h-screen w-full">
            <div className="flex items-center justify-center ml-80">
                <div className="flex flex-col"> 
                    <h1 className="text-5xl w-165 z-30">Connect Every Team,<br /> Task, and Project <br /> Together with Mind Script.</h1>
                    <p className="text-[#8A8A8A] mt-2 ml-4  ">Set up, clean up, and automate even the most <br /> complicated project workflows</p>
                    <button className="btn-submit w-48 h-12 mt-10 ml-38">Get Started</button>
                </div>
                
                <div className="relative right-25">
                    <img className="bg-[#8A8A8A] rounded-2xl w-120 h-70 mr-20" src={Test} alt="" />
                </div>
            </div>

            <div className="flex justify-center mt-24 text-center">
                {stats.map((stat, idx) => (
                <div key={idx} className={`px-8 ${idx !== stats.length - 1 ? 'border-r-2 border-[#8A8A8A]' : ''}`}>
                    <h1 className="text-2xl">{stat.number}</h1>
                    <p className="text-[#8A8A8A]">{stat.label}</p>
                </div>
                ))}
            </div>
        </section>
    );

}

export default HeroSection;