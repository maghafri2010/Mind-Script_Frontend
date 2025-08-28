import { useState } from "react";
import ProfilePicture from '../../assets/images/profile-picture.png';
import Upload from '../../assets/images/upload.png';
import './ui/UIstyle.css';

const labels = ["Username:", "Date Joined", "First Name:", "Last Name:", "Email:", "Phone:"];

const Profile = () => {
    const [profile, setProfile] = useState({
        username: "",
        dateJoined: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
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

            <div className="flex flex-wrap justify-center gap-10">
                {labels.map((label, i) => (
                    <div className="flex flex-wrap gap-15 border w-[470px]  ">
                        <p className="text-2xl font-bold w-36 border">{label}</p>
                    
                        {isEditing ? (
                            <input className="inputStyle edit" value={profile[i]} onChange={""}/>
                        ) : (
                            <span className="inputStyle edit">{profile[i]}</span>
                        )}
                    </div>
                ))}
            </div>

            



        </section>
    )
}



export default Profile;