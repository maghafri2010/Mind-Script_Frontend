import { Link } from 'react-router';

const Header = () => {

    return (
        <div className="flex bg-[#FAC9B3] fixed h-20 w-full mt-5 items-center justify-between">
            <div>
                <img src="" alt="" />
                <h1>Mind Script</h1>
            </div>
            <div>
               <a href="">Home</a>
               <a href="">Features</a>
               <a href="">Pricing</a>
               <a href="">About</a>
               <button>Login</button>
            </div>
            
        </div>
    );
}

export default Header;