
const UserSummery = () => {
    return (
        <div className="mt-10">
            <div className="mt-5">
                <h1 className="text-[#001356] text-[20px] font-bold">User Summary</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">1500</p>
                        <p className="text-[20px] font-medium">Active Users</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">312</p>
                        <p className="text-[20px] font-medium">Active Organizers</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">1.2k</p>
                        <p className="text-[20px] font-medium">Scanners</p>
                    </div>
                </div>
                <div className="text-white bg-[#284B80] text-center h-[117px] rounded-xl">
                    <div className="mt-8">
                        <p className="text-[26px] font-bold">5</p>
                        <p className="text-[20px] font-medium">Points of Sale</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSummery;