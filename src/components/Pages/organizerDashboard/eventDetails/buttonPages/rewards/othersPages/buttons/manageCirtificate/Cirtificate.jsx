import { AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const data = [
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' },
    { name: 'Username', round: '3' }
];

const Cirtificate = () => {
    return (
        <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <div className="flex justify-between gap-3 items-center">
                <div>
                    <p className="text-[16px] font-medium text-[#001356]">Event Certificate</p>
                    <p className="font-medium text-gray-400 block lg:hidden">All (125)</p>
                </div>
                <div className="md:flex justify-between items-center gap-6">
                    <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded'>
                        <BiSearch className='text-[#343A40]' size={20} />
                        <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                    </div>
                    <div>
                        <button className="text-white text-xs md:text-base bg-[#001356] px px-4 py-1 rounded-md">Add Certificate</button>
                    </div>
                </div>
            </div>

            {/* Header End */}
            {/* Table Start */}
            <div className='mt-5 mx-2 md:mx-0'>
                <div className="overflow-x-auto">
                    <table className="w-[100%] mt-8 text-xs md:text-base">
                        <thead>
                            <tr className='text-[#001356]'>
                                <th className='py-4'>No</th>
                                <th className='py-4'>Name</th>
                                <th className='py-4'>Round</th>
                                <th className='py-4'>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300 text-gray-500">
                                    <td className='text-center py-4'>{index + 1}</td>
                                    <td className='text-center py-4'>{item.name}</td>
                                    <td className='text-center py-4'>{item.round}</td>
                                    <td className='text-center py-4'>
                                        <img className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full mx-auto" src="https://i.ibb.co/B22zDkB/image-4.png" alt="" />
                                    </td>
                                    <td className='flex justify-center py-4'>
                                        <div className="flex gap-8 items-center">
                                            <div className='flex items-center gap-12'>
                                                <div className="bg-[#F6F6F6] p-1 rounded">
                                                    <AiFillEdit className="cursor-pointer" size={30} />
                                                </div>
                                                <div className="bg-[#F6F6F6] p-1 rounded">
                                                    <MdDelete className='text-[#EC6453] cursor-pointer' size={30} />
                                                </div>
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

export default Cirtificate;