import logo from '../../assets/images/logo.png';
import { logo_media } from '../../assets/images';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="pt-26 w-full  bg-[#373737] text-white">
            <div className="p-16 ">
                <div className="flex flex-col justify-center items-center  mb-40">
                    <h1 className="text-8xl">Move Faster, Build Better</h1>
                    <Link to={"/account"} className="btn-submit flex justify-center items-center mt-16 border-3 w-40 h-16 text-2xl hover:-translate-y-2">Get it free</Link>
                </div>
                <div className="flex justify-between mr-10">
                    <div>
                        <div className="flex items-center gap-8">
                            <img className="border rounded w-16 h-16" src={logo} alt="logo" />
                            <p className="text-2xl">Mind Script</p>
                        </div>
                        <div className="mt-4">
                            <p className="w-96 text-[#8A8A8A]">A supercharged Management platform that make your life organaized!</p>
                            <div className="relative items-center mt-4">
                                <input className="w-100 rounded-[15px] h-15 border-2 border-black text-black pl-4 bg-white" placeholder="  Work Email" type="text" />
                                <button className="btn-submit absolute left-64 top-2.5 border-2 text-black cursor-pointer rounded-[10px] bg-[#F7CB52] w-33 h-10 "> Try For Free </button>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-2">
                            {logo_media.map((lg, i) => (
                                <a href=''> <img className="w-10 h-10" src={lg} key={i} alt={`logo-${i}`} /></a>
                            ))}
                        </div>
                    </div>
                    <div className="text-[#8A8A8A] ">
                        <ul>
                            <li className="text-white text-[18px] mb-2">Integrations</li>
                            <li>Gmail & Calendar</li>
                            <li>Google meet </li>
                            <li>Linkedin</li>
                            <li>Notion</li>
                            <li>Zoom</li>
                            <li>Slack</li>
                        </ul>
                    </div>
                    <div className="text-[#8A8A8A] ">
                        <ul>
                            <li className="text-white text-[18px] mb-2">Solution</li>
                            <li>For Cordinators</li>
                            <li>For Interviewers</li>
                            <li>For Recruiters</li>
                            <li>For Recruting Leader</li>
                            <li>For Enterprise</li>
                        </ul>
                    </div>
                    <div className="text-[#8A8A8A] ">
                        <ul>
                            <li className="text-white text-[18px] mb-2">Features</li>
                            <li>Tracking Application</li>
                            <li>Performance Management</li>
                            <li>Employee Onboarding</li>
                            <li>Reporting & Analytics</li>
                        </ul>
                    </div>
                    <div className="text-[#8A8A8A]">
                        <ul>
                            <li className="text-white text-[18px] mb-2">Company</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-black w-full h-16 flex gap-16 pl-32 items-center'>
                <p className='cursor-pointer'>Copyright @ 2025 Mind Script</p>
                <p className='cursor-pointer'>Terms & Conditions</p>
                <p className='cursor-pointer'>Provacy Policy </p> 
            </div>
        </div>
    );
}

export default Footer;