
const Reset = ({onSwitch}) => {
    return (
        <section className="relative w-full pt-70 h-screen bg-[#F7EABC]">
            
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl mb-2">Reset Your Password</h1>
                <p className="text-[#8A8A8A] mb-12">We will send you an email to reset your password</p>
                <div className="flex flex-col justify-center  items-center">
                    <input className="border bg-white rounded-[5px] w-72 h-10 p-4 mb-8" type="text" placeholder="Email"/>
                    <button className="btn-submit w-54 mb-4 h-10">Submit</button>
                    <button onClick={() => onSwitch("login")} className="underline cursor-pointer font-bold text-[#8A8A8A] ">Cancel</button>
                </div>
            </div>

        </section>
    )
}

export default Reset;