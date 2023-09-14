import { BiSearch } from "react-icons/bi";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
const data = [
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'Not Published', type: 'Group' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Group' },
];

const AddEvent = () => {
    const navigate = useNavigate();
    const handleAddEventNavigate = () => {
        navigate("../event-org-details")
    }
    const handleGroupEventNavigate = () => {
        navigate("../group-event-three")
    }
    return (
        <div className="mt-5 lg:ml-[300px]">
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
                        <button onClick={handleAddEventNavigate} className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Event</button>
                        <button onClick={handleGroupEventNavigate} className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Group Event</button>
                    </div>
                </div>
            </div>
            {/* TABLE DATA */}
            <div className='mt-5 mx-2 md:mx-0'>
                <table className="w-[100%] mt-8 text-xs md:text-base">
                    <thead>
                        <tr className='text-[#001356]'>
                            <th className='py-4'>No</th>
                            <th className='py-4'>Name</th>
                            <th className='py-4'>Start Date</th>
                            <th className='py-4'>End Date </th>
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
                                <td className='text-center py-4'>
                                    <span
                                        className={`px-2 py-1 rounded-lg ${item.status === 'On Sale' ? 'bg-[#23AE00] text-white' : 'bg-[#F2994A] text-white'
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className='text-center'>{item.type}</td>
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
    );
};

export default AddEvent;