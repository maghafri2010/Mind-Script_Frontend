import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = ({onSwitch}) => {
    const navigate = useNavigate();

    const [Data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Data)
            });
            if (res.ok){
                    const data = await res.json();
                    navigate("/dashboard");
                    localStorage.setItem("userID", data.userID); // Store user ID in localStorage

            }
                
            else {
                const error = await res.json();
                alert(error.message || "Login failed");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="relative w-full pt-70 h-screen bg-[#F7EABC]">
            
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl mb-12">Log In</h1>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center  items-center">
                    <input
                        onChange={handleChange}
                        name="email"
                        value={Data.email}
                        className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={handleChange}
                        name="password"
                        value={Data.password}
                        className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-2"
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={() => onSwitch("reset")} className="underline cursor-pointer mb-8">Forgot your password?</button>
                    <button onClick={""} type="submit" className="btn-submit w-54 mb-4 h-10">Sign In</button>
                    <button onClick={() => onSwitch("register")} className="btn-style bg-[#FFCBB4] hover:bg-white w-54 h-10">Create Account</button>
                </div>
                </form>
            </div>

        </section>
    )
}

export default Login;