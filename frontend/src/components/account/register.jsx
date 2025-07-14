


const Register = ({onSwitch}) => {
    return (
        <section className="relative w-full pt-70 h-screen bg-[#F7EABC]">

           <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl mb-12">Create Account</h1>
                <div className="flex flex-col justify-center  items-center">
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" type="text" placeholder="First Name"/>
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" type="text" placeholder="Last Name"/>
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" type="text" placeholder="Email"/>
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-2" type="password" placeholder="Password"/>
                    <button className="btn-style bg-[#FFCBB4] mt-4 hover:bg-white w-54 h-10">Create Account</button>
                    <button onClick={() => onSwitch("login")} className="underline cursor-pointer font-bold mt-8">Already have an account?</button>
                </div>
            </div>
        </section>
    )
}

export default Register;