import { Link } from "react-router";



const Login = ({onSwitch}) => {
    return (
        <section className="relative w-full pt-70 h-screen bg-[#F7EABC]">
            
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl mb-12">Log In</h1>
                <div className="flex flex-col justify-center  items-center">
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" type="text" placeholder="Email"/>
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-2" type="password" placeholder="Password"/>
                    <button onClick={() => onSwitch("reset")} className="underline cursor-pointer mb-8">Forgot your password?</button>
                    <button className="btn-submit w-54 mb-4 h-10">Sign In</button>
                    <button onClick={() => onSwitch("register")} className="btn-style bg-[#FFCBB4] hover:bg-white w-54 h-10">Create Account</button>
                </div>
            </div>

        </section>
    )
}

export default Login;