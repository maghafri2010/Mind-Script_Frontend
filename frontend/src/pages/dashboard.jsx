
import { useState } from 'react';
import Dash from '../components/dashboard/dash';
import Menu from '../components/dashboard/menu';
import Date from '../components/dashboard/ui/date';
import Search from '../components/dashboard/ui/Search';

const Dashboard = () => {
    
    const [bol, setBol] = useState(false);
    const openMenu = () => setBol(bol => !bol);

    
    return (
        
        
        <section className='flex justify-items-center-safe gap-60 pt-12 border pl-12 bg-black  h-screen   '>
            <Menu bol={bol} openMenu={openMenu} />

        <div className={`transition-all duration-300 ease-in-out`}
        
        >
            <div className='flex gap-25 rounded-2xl'>
                <Search />
                <Date />
            </div>
            
            <div className='border pt-12 '>
                
                <Dash/>
                
            </div>
        </div>   
            
        </section>
        
    )
};

export default Dashboard;