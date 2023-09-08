

const Attendess = () => {
    return (
        <div className="lg:ml-[300px] mt-10">
            <div>
                <h1 className="text-[#001356] text-[26px] font-bold">Attendees Summary</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">15</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">12</p>
                        <p className="text-[20px] font-medium">Paid orders</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">12</p>
                        <p className="text-[20px] font-medium">Awaiting payments</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">5</p>
                        <p className="text-[20px] font-medium">Total participation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendess;