import { Link } from 'react-router';
import logo from '../assets/images/logo.png';
const Header = () => {

    return (
        <div className="flex z-50 bg-[#FAC9B3] fixed h-20 w-full mt-5 items-center justify-between text-">
            <div className='flex items-center gap-6 ml-10'>
                <Link><img className='rounded-[50%] w-18 h-16' src={logo} alt="" /></Link>
                <h1 className='text-2xl'>Mind Script</h1>
            </div>
            <div className='flex items-center gap-8 mr-10'>
               <Link className='hover:underline hover:opacity-70 transition-all ease-in-out duration-500' >Home</Link>
               <Link className='hover:underline hover:opacity-70 transition-all ease-in-out duration-500' href="">Features</Link>
               <Link className='hover:underline hover:opacity-70 transition-all ease-in-out duration-500' href="">Pricing</Link>
               <Link className='hover:underline hover:opacity-70 transition-all ease-in-out duration-500' href="">About</Link>
               <button className='btn-submit w-24 h-10'>Login</button>
            </div>  
        </div>
    );
}

export default Header;