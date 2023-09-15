import { BiSearch } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const teamOne = [
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
];

const GroupEventCreateTwo = () => {
    return (
        <div className="mt-5 lg:ml-[300px] lg:pr-6">
            <div className='mx-4 md:mx-0 flex items-center justify-between'>
                <div>
                    <div className='flex items-center gap-8 mt-5'>
                        <p className="text-[18px] text-[#343A40]">All (50)</p>
                        <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-xl'>
                            <BiSearch className='text-[#343A40]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4">
                        <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Event</button>
                        <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Group Event</button>
                    </div>
                </div>
            </div>
            <div>
                {/* Header End */}
                {/* Table Start */}
                <div className='mt-5 mx-2 md:mx-0 flex items-center gap-16'>
                    <div className="">
                        <div className="flex gap-4">
                            <input type="checkbox" name="" id="" />
                            <div>
                                <h2 className="text-16px text-[#001356] font-semibold">Group Name</h2>
                                <p className="text-[10px] text-[#001356] font-semibold">Total Members :2</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356]'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Name</th>
                                    <th className='py-4'>Email</th>
                                    <th className='py-4'>Registration Date</th>
                                    <th className='py-4'>Mobile no.</th>
                                    <th className='py-4'>Payment Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamOne.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='text-center py-4'>{index + 1}</td>
                                        <td className='text-center py-4'>{item.name}</td>
                                        <td className='text-center py-4'>{item.email}</td>
                                        <td className='text-center py-4'>
                                            <div>
                                                {item.regi}
                                                <p className="text-xs">{item.time}</p>
                                            </div>
                                        </td>
                                        <td className='text-center'>{item.mobile}</td>
                                        <td className='text-center'>{item.pti}</td>
                                        <td className='flex justify-center py-4'>
                                            <div className='flex items-center gap-8'>
                                                <MdDelete className='text-[#EC6453] cursor-pointer' size={30} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Table End */}
            </div>
        </div>
    );
};

export default GroupEventCreateTwo;