// import { useState } from "react";

import { BiSearch } from "react-icons/bi";

const RewardDetails = () => {
    // const [active, setActive] = useState("participation");
    return (
        <div className="mt-12 lg:ml-[300px]">
            <div className="mx-2 md:mx-32 flex justify-between">
                <p className="text-base text-[#001356] font-medium">Participation</p>
                <p className="text-base text-[#001356] font-medium">Manage Registration</p>
                <p className="text-base text-[#001356] font-medium">Manage Certificate</p>
                <p className="text-base text-[#001356] font-medium">Manage Winners</p>
            </div>

            <div className="bg-white mt-5 py-8 px-6 rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[16px] font-medium text-[#001356]">Event participation</p>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded'>
                            <BiSearch className='text-[#343A40]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                        <div className="flex justify-between gap-6 items-center">
                            <div>
                                <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Participation</button>
                            </div>
                            <div>
                                <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Export Participation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardDetails;