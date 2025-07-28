

const Inbox = () => {
    return (
        <section className="flex flex-col w-[1000px] h-[680px]  rounded-2xl p-8 card">
            <div className="flex  text-2xl border-b-2 pb-4 mb-4 gap-6">
                <button className="border-r-2 pr-4 box">All</button>
                <button className="border-r-2 pr-4 box">Unread</button>
                <button className="box">Favorite</button>
            </div>

            <div className="flex justify-between border-b-2 pb-4 mb-4 border-[#6B6B6B]">
                <div className="flex gap-8">
                    <p className="flex items-center justify-center w-18 h-18 bg-white box  text-black text-4xl text-center rounded" >AM</p>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Abdelmoghit Maghafri</h1>
                        <p className="text-gray-400">Title of Inbox</p>
                        <p>The content of the message, it ll be displayed here</p>
                    </div>
                </div>
                <div className="flex">
                    <p>25 Min ago</p>
                    <p>...</p>

                </div>
                
            </div>
            

        </section>
    )
}

export default Inbox;