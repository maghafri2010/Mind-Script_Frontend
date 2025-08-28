import { useState } from "react";
import ProfilePicture from '../../assets/images/profile-picture.png';
import Upload from '../../assets/images/upload.png';
import './ui/UIstyle.css';
import editButton from '../../assets/images/edit-button.png'

const labels = ["Username:", "Date Joined", "First Name:", "Last Name:", "Email:", "Phone:"];
const keys = ["username", "dateJoined", "firstName", "lastName", "email", "phone"];

const Profile = () => {
    const [profile, setProfile] = useState({
        username: "",
        dateJoined: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
    const [editProfile, setEditProfile] = useState(profile);
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState(null);

    const edit = () => {
        setIsEditing(true);
        setEditProfile(profile);
    }
    const cancel = () => setIsEditing(false);
    const save = (e) => {
        setProfile(editProfile);
        setIsEditing(false);
    };


    const handlePicture = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
};

    return (
        <section className=" w-[1100px] h-[680px] rounded-2xl p-8 flex flex-col menu">
            <div className="flex ">
                <img 
                className="w-32 h-32 object-cover rounded-full bg-amber-50 relative left-120 mb-30" 
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
                    <div className="flex flex-wrap gap-15  w-[470px]  ">
                        <p className="text-2xl font-bold w-36 ">{label}</p>
                    
                        {isEditing ? (
                            <input className="inputStyle edit" value={editProfile[keys[i]]} onChange={ e => setEditProfile(prev => ({...prev, [keys[i]]: e.target.value}))}/>
                        ) : (
                            <span className="inputStyle pt-[8px] edit">{profile[keys[i]]}</span>
                        )}
                        {i !== 1 && (<img onClick={edit} className="iconEdit box"  src={editButton} alt="editButton" />)}
                    </div>
                ))}

                {isEditing && (  
                    <div className="flex gap-20 mt-16">
                        <button className="editButton bg-green-400 text-[20px]" onClick={save}>Save</button>
                        <button className="editButton bg-gray-300 text-[20px]" onClick={cancel}>Cancel</button>
                    </div>
                )}
                
            </div>

            



        </section>
    )
}



export default Profile;