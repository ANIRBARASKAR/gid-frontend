

const AdmEventSummery = () => {
    return (
        <div>
            <div className="mt-5 flex items-center gap-4 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-bold">Dashboard</h1>
                <img src="https://i.ibb.co/sjJWFNX/airplay.png" alt="" />
            </div>
            <div className="mt-5">
                <h1 className="text-[#001356] text-[20px] font-bold">Events Summary</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">1500</p>
                        <p className="text-[20px] font-medium">Events Added</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">312</p>
                        <p className="text-[20px] font-medium">Published Events</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">1.2k</p>
                        <p className="text-[20px] font-medium">Upcoming Events</p>
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

export default AdmEventSummery;