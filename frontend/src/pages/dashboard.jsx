
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
import Settings from '../components/dashboard/settings';
import Profile from '../components/dashboard/profile';

const Dashboard = () => {
    
    
    const [bol, setBol] = useState(false);
    const openMenu = () => setBol(bol => !bol);
    const [activeLayer, setActiveLayer] = useState(0); // default to Dashboard

    const layers = [
        
        { name: 'Dashboard', component: <Dash /> },
        { name: 'My Tasks', component: <MyTasks /> },
        { name: 'Workspace', component: <Workspace /> },
        { name: 'Projects', component: <Project /> },
        { name: 'Calendar', component: <Calendar /> },
        { name: 'Inbox', component: <Inbox /> },
        { name: 'Settings', component: <Settings /> },
        { name: 'Profile', component: <Profile /> }
    ];  



    
    return (
        
        
        <section className='flex justify-center pt-12 border pl-12 bg-black h-[1000px] '>
            <div className='absolute left-13'>
                <Menu bol={bol} openMenu={openMenu} setActiveLayer={setActiveLayer} activeLayer={activeLayer} />
            </div>
            

        <div className={`transition-all duration-300 ease-in-out`}
        
        >
            <div className='flex ml-84 justify-between rounded-2xl'>
                <Search />
                <Date />
            </div>
            
            <div className='pt-12 ml-84  '>
                {layers[activeLayer].component}                
            </div>
            <div className='absolute right-10'>
                <New />
            </div>
        </div>   
            
        </section>
        
    )
};

export default Dashboard;