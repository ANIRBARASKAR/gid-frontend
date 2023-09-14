import { AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdDelete, MdOutlineKeyboardArrowDown } from "react-icons/md";

const data = [
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', type: "Tech", status: 'On Sale', eType: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', type: "Tech", status: 'On Sale', eType: 'Solo' },
    
];

const GroupEventTable = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-between gap-3 items-center">
                <div>
                    <p className="text-sm font-medium text-[#001356] hidden lg:block">24 results found</p>
                    <p className="font-medium text-sm text-gray-400 block lg:hidden">All (125)</p>
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
                            <button className="text-white text-xs md:text-base bg-[#001356] px px-4 py-1 rounded-md">Add Event</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header End */}
            {/* Table Start */}
            <div className='mt-5 mx-2 md:mx-0'>
                <div className="overflow-x-auto">
                    <table className="w-[100%] mt-8 md:text-base">
                        <thead>
                            <tr className='text-[#001356]'>
                                <th className='py-4'>No</th>
                                <th className='py-4'>Name</th>
                                <th className='py-4'>Start Date</th>
                                <th className='py-4'>End Date </th>
                                <th className='py-4'>Type</th>
                                <th className='py-4'>Status </th>
                                <th className='py-4'>Event Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300 text-gray-500">
                                    <td className='text-center py-4'>{index + 1}</td>
                                    <td className='text-center py-4'>{item.name}</td>
                                    <td className='text-center py-4'>{item.sdate}</td>
                                    <td className='text-center py-4'>{item.edate}</td>
                                    <td className='text-center py-4 flex justify-center'>
                                        <div className="flex items-center gap-2">
                                            {item.type}
                                            <MdOutlineKeyboardArrowDown className="text-gray-400" size={15} />
                                        </div>
                                    </td>
                                    <td className='text-center py-4 text-sm'>
                                        <span
                                            className={`px-2 py-1 rounded-lg ${item.status === 'On Sale' ? 'bg-[#23AE00] text-white' : 'bg-[#F2994A] text-white'
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className='text-center'>{item.eType}</td>
                                    <td className='flex justify-center py-4'>
                                        <div className="flex gap-8 items-center">
                                            <div>
                                                <button className="bg-[#001356] text-white px-2 rounded-md">copy</button>
                                            </div>
                                            <div className='flex items-center gap-8'>
                                                <AiFillEdit className="cursor-pointer" size={30} />
                                                <MdDelete className='text-[#EC6453] cursor-pointer' size={30} />
                                            </div>
                                            <div>
                                                <img src="https://i.ibb.co/nnyww5p/Icon.png" alt="" />
                                            </div>
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
    );
};

export default GroupEventTable;