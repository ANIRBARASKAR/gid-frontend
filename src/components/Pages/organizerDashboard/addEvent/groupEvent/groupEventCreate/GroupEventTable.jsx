import { BiSearch } from "react-icons/bi";

const GroupEventTable = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-between gap-3 items-center">
                <div>
                    <p className="text-sm font-medium text-[#001356] hidden lg:block">24 results found</p>
                    <p className="font-medium text-gray-400 block lg:hidden">All (125)</p>
                </div>
                <div className="md:flex justify-between items-center gap-6">
                    <div className="hidden md:block">
                        <div className="flex items-center gap-3 text-[#001356]">
                            <label htmlFor="date" className="text-sm">sort by :</label>

                            <select id="date" className="border border-[#001356] rounded px-2 py-1">
                                <option value="volvo">Start date (desc)</option>
                                <option value="saab">Start date (desc)</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className='flex items-center px-2 py-1 border border-[#001356] bg-[#F6F8FA] rounded'>
                            <BiSearch className='text-[#001356]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px] placeholder-[#001356]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                        <div>
                            <button className="text-white text-base bg-[#001356] px px-4 py-1 rounded-md">Add Event</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GroupEventTable;