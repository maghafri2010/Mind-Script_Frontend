import { useState } from "react";
import ProfilePicture from '../../assets/images/profile-picture.png';
import Upload from '../../assets/images/upload.png';


const Profile = () => {
    const [image, setImage] = useState(null);
    const handlePicture = (e) => {
        const file = e.target.file[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
};

    return (
        <section className=" w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-col menu">
            <div className="flex ">
                <img className="w-30 h-30 rounded-[50%] bg-amber-50 relative left-120 mb-20" src={image || ProfilePicture} alt="Profile Picture" />
                <button className="w-fit px-8 py-10 rounded-[50%] cursor-pointer hover:bg-amber-100 absolute left-218 top-71 justify-center items-center " onClick={handlePicture}><img className="w-4 h-4 " src={Upload} alt="" /></button>
            </div>

            <div className="flex gap-4 items-center justify-between">
                <h1 className="text-2xl font-bold">Username:</h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="Maghafri2010" />
                <h1 className="text-2xl font-bold">Date Joined</h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="20/08/2025" />
            </div>
            <div className="flex gap-4 items-center justify-between mt-12">
                <h1 className="text-2xl font-bold">First Name:</h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="Abdelmoghit" />
                <h1 className="text-2xl font-bold">Last Name:</h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="Maghafri" />
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-12">Email:</h1>
                <input className="w-[600px] h-[40px] edit rounded-2xl pl-8" type="email" placeholder="abdomagha8@gmail.com" />
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-12">Phone:</h1>
                <input className="w-[600px] h-[40px] edit rounded-2xl pl-8" type="tel" placeholder="=2126-656-65665" />
            </div>
            <div>


            </div>

        </section>
    )
}

export default Profile;