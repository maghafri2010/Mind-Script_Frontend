import Search_icon from '../../../assets/images/search.png';

const Search = () => {
    return (
        <div className=" ">
            <input className="w-[600px] h-16 rounded-2xl text-white bg-[#212325] p-4 pl-18 placeholder:text-white" type="text" placeholder="Search" />
            <img className='absolute top-15 left-138 w-10 h-10' src={Search_icon} alt="" />
        </div>
    )
}

export default Search;