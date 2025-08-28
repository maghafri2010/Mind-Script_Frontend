import { useEffect, useState } from "react";
import ProfilePicture from '../../assets/images/profile-picture.png';
import Upload from '../../assets/images/upload.png';
import './ui/UIstyle.css';
import editButton from '../../assets/images/edit-button.png'

const labels = ["Username:", "Date Joined", "First Name:", "Last Name:", "Email:", "Phone:"];
const keys = ["username", "dateJoined", "firstName", "lastName", "email", "phone"];

const Profile = () => {

    const apiUrl = import.meta.env.VITE_API_URL;
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
    const [index, setIndex] = useState();
    const [image, setImage] = useState(null);

    const handlePicture = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const edit = (i) => {
        setIsEditing(true);
        setEditProfile(profile);
        setIndex(i);
    };

    const cancel = () => setIsEditing(false);

// - We send editProfile (not profile) because it holds the latest user edits. 
// - The profile state isn’t updated immediately (state updates in React are async), so using it would send old data. 
// - Sending editProfile ensures the backend receives the current changes.

    const save = async () => {
        setProfile(editProfile);
        setIsEditing(false);

        try {
            const res = await fetch(`${apiUrl}/api/profile/edit`, {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username: editProfile.username, firstname: editProfile.firstName, lastname: editProfile.lastName, email: editProfile.email, phone: editProfile.phone})
            });
            if (res.ok)
                alert("Info has been edited successfully!");
            else
                console.log("Something went wrong while editing profile info!")
        } catch (err) {
            console.log(err);
        }
    };
    const render = async () => {
        try {
            const res = await fetch(`${apiUrl}/api/profile/render`, {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({id: "" })
            });
            if (res.ok) {
                const data = await res.json();
                setProfile(data);
            } else
                console.log("Something went wrong with rendering profile's info!!");
        } catch (err) {
            console.log(err);;
        }
    };

    useEffect( () => { 
        render();
    },[]);


    

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
                    <div key={keys[i]} className="flex flex-wrap gap-15  w-[470px]  ">
                        <p className="text-2xl font-bold w-36 ">{label}</p>
                    
                        {isEditing && i === index ? (
                            <input className="inputStyle edit " value={editProfile[keys[i]]} onChange={ e => setEditProfile(prev => ({...prev, [keys[i]]: e.target.value}))}/>
                        ) : (
                            <span className="spanStyle pt-[9px] edit ">{profile[keys[i]]}</span>
                        )}
                        {i !== 1 && (<img onClick={() => edit(i)} className="iconEdit box"  src={editButton} alt="editButton" />)}
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