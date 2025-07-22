
import { useState } from 'react';
import Dash from '../components/dashboard/dash';
import Menu from '../components/dashboard/menu';
import Date from '../components/dashboard/ui/date';
import Search from '../components/dashboard/ui/Search';
import New from '../components/dashboard/ui/new';
import MyTasks from '../components/dashboard/myTasks';
import Project from '../components/dashboard/projects';
import Workspace from '../components/dashboard/workspace';
import Calendar from '../components/dashboard/calendar';
import Inbox from '../components/dashboard/inbox';

const Dashboard = () => {
    
    
    const [bol, setBol] = useState(false);
    const openMenu = () => setBol(bol => !bol);



    
    return (
        
        
        <section className='flex justify-center pt-12 border pl-12 bg-black h-full pb-32 '>
            <div className='absolute left-13'>
                <Menu bol={bol} openMenu={openMenu} />
            </div>
            

        <div className={`transition-all duration-300 ease-in-out`}
        
        >
            <div className='flex ml-84 justify-between rounded-2xl'>
                <Search />
                <Date />
            </div>
            
            <div className='pt-12 ml-84  '>
                
                <Inbox />
                                
            </div>
            <div className='absolute right-10'>
                <New />
            </div>
        </div>   
            
        </section>
        
    )
};

export default Dashboard;