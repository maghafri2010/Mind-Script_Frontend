import { useState } from "react";
import ProfilePicture from '../../assets/images/profile-picture.png';
import Upload from '../../assets/images/upload.png';


const Profile = () => {
    const [profile, setProfile] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState(null);

    const edit = () => setIsEditing(true);
    const cancel = () => setIsEditing(false);
    const save = () => {};


    const handlePicture = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
};

    return (
        <section className=" w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-col menu">
            <div className="flex ">
                <img 
                className="w-32 h-32 object-cover rounded-full bg-amber-50 relative left-120 mb-20" 
                src={image || ProfilePicture} alt="Profile Picture" />
                <label className="w-fit px-4 py-1 rounded-b-full  box hover:bg-amber-100 absolute left-223 top-74 justify-center items-center " >
                    <img className="w-4 h-4 " src={Upload} alt="" />
                    <input type="file"
                    accept="image/*"
                    onChange={handlePicture}
                    style={{display: "none"}} />
                </label>
            </div>

            <div className="flex gap-4 items-center justify-between">
                <h1 className="text-2xl font-bold"></h1>
                <input className="inputStyle pl-8" type="text" placeholder="Maghafri2010" />
                <h1 className="text-2xl font-bold"></h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="20/08/2025" />
            </div>
            <div className="flex gap-4 items-center justify-between mt-12">
                <h1 className="text-2xl font-bold"></h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="Abdelmoghit" />
                <h1 className="text-2xl font-bold"></h1>
                <input className="w-[300px] h-[40px] edit rounded-2xl pl-8" type="text" placeholder="Maghafri" />
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-12"></h1>
                <input className="w-[600px] h-[40px] edit rounded-2xl pl-8" type="email" placeholder="abdomagha8@gmail.com" />
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-12"></h1>
                <input className="w-[600px] h-[40px] edit rounded-2xl pl-8" type="tel" placeholder="=2126-656-65665" />
            </div>
            <div>


            </div>

        </section>
    )
}



export default Profile;