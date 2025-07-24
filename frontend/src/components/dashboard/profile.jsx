

const Profile = () => {
    return (
        <section className=" w-[1100px] h-[680px]  rounded-2xl p-8 flex flex-col menu">
            <img className="w-30 h-30 rounded-[50%] bg-amber-50 relative left-120 mb-20" src="" alt="" />
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