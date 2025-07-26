import { useState } from "react";


const Register = ({onSwitch}) => {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/register" , {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log(data);
            // Clear form after successful submit
            setFormData({
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="relative w-full pt-70 h-screen bg-[#F7EABC]">

           <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl mb-12">Create Account</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center  items-center">
                    <input 
                    onChange={handleChange}
                    name="username" 
                    value={formData.username}
                    className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" 
                    type="text" 
                    placeholder="Username"/>
                    <input 
                    onChange={handleChange}
                    name="firstName" 
                    value={formData.firstName}
                    className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" 
                    type="text" 
                    placeholder="First Name"/>
                    <input
                    onChange={handleChange}
                    name="lastName" 
                    value={formData.lastName} 
                    className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" 
                    type="text" 
                    placeholder="Last Name"/>
                    <input 
                    onChange={handleChange}
                    name="email" 
                    value={formData.email}
                    className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" 
                    type="text" 
                    placeholder="Email"/>
                    <input 
                    onChange={handleChange}
                    name="password" 
                    value={formData.password}
                    className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-2" 
                    type="password" 
                    placeholder="Password"/>
                    <button 
                    type="submit"                    
                    className="btn-style bg-[#FFCBB4] mt-4 hover:bg-white w-54 h-10">Create Account</button>
                    <button 
                    onClick={() => onSwitch("login")} 
                    className="underline cursor-pointer font-bold mt-8">Already have an account?</button>
                    </div>
                </form>
                
            </div>
        </section>
    )
}

export default Register;