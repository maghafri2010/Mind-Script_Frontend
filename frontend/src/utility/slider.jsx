import { useState } from "react"


const arr = [
    {name: "abdo", pg: "text", role: "smth"},
    {name: "abdo", pg: "text", role: "s"},
    {name: "abdo", pg: "text", role: "d"}
];

const Slider = ({array = arr}) => {

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((prev) => (prev === 0 ? array.length - 1 : prev - 1 ));

    const next = () => setIndex((prev) => (prev === array.length - 1 ? 0 : prev + 1 ));


    return (
        <>
      
        <div className="flex flex-col justify-center items-center border">
            <p>{array[index].pg}</p>
            <h2>{array[index].name}</h2>
            <p>{array[index].role}</p>
        </div>
        
        <button onClick={prev}>left</button>
        <button onClick={next}>right</button>
        </>
    )
}

export default Slider;