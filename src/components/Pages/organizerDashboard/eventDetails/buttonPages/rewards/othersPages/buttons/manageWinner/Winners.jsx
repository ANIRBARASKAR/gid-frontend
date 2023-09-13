
const Winners = () => {
    return (
        <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <div className="md:flex items-center justify-between">
                <div>
                    <p className="text-[16px] font-medium text-[#001356]">Rounds</p>
                </div>
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                    <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#EC6453] rounded">Unpublish Winners</button>
                    <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#284B80] rounded">Show Winners</button>
                </div>
            </div>
            <div className="md:flex items-center gap-3 justify-between mt-4">
                <div className="flex items-center gap-3">
                    <button className="px-2 py-1 rounded-md bg-[#284B80] text-white">Round 1</button>
                    <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 2</button>
                    <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 3</button>
                </div>
                <div className="flex items-center gap-3 mt-3 lg:mt-0">
                    <button className="text-xs md:text-sm font-medium text-[#001356] px px-4 py-2 border border-[#001356] rounded">Select Rewards & Recognition</button>
                    <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#23AE00] rounded">Add to Rewards & Recognition</button>
                </div>
            </div>
        </div>
    );
};

export default Winners;