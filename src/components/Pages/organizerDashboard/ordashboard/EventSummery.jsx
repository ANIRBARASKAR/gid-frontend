

const EventSummery = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className="mt-5 flex items-center gap-4 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-bold">Dashboard</h1>
                <img src="https://i.ibb.co/sjJWFNX/airplay.png" alt="" />
            </div>
            <div className="flex justify-between">
                <h1 className="text-[#001356] text-[26px] font-bold">Events Summary</h1>
                <div className="text-[20px] font-semibold text-[#001356]">
                    <p>Total users : <span className="font-bold">856</span></p>
                    <p>Active users : <span className="font-bold">752</span></p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">15</p>
                        <p className="text-[20px] font-medium">Event added</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">12</p>
                        <p className="text-[20px] font-medium">Published events</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">12</p>
                        <p className="text-[20px] font-medium">Upcoming events</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">5</p>
                        <p className="text-[20px] font-medium">Event dates</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSummery;