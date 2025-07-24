const Card = ({ title, onButtonClick, children, color }) => (
    <div className="card overflow-auto p-4 text-white scroll-container w-[250px] h-[200px] rounded-2xl">
        <div className="flex items-center justify-between ">
            <span className={`h-4 w-4 rounded-[50%] mr-4 ${color}`}></span>
            <h1 className="font-bold mr-12">{title}</h1>
            <button
                onClick={onButtonClick}
                className="border border-black box rounded pl-1 w-10"
            >
                <p className="w-6 h-4  rounded bg-black"></p>
            </button>
        </div>
        {children}
    </div>
);

export default Card;