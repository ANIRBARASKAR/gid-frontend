import { AiTwotoneEye } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const data = [
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
    { name: 'Event Name', createDate: "15/07/20203", mobile: '94090054848', email: 'xyz@gmail.com', type: 'Business', status: 'Pending', },
];

const CallInQuiry = () => {
    return (
        <>
            <div className="mt-5 lg:ml-[300px] lg:pr-6">
                <h1 className="text-[#001356] text-[26px] font-bold mt-8">Call Inquiry</h1>
                <div className='flex items-center gap-8 mt-5'>
                    <p className="text-[18px] text-[#343A40]">All (50)</p>
                    <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-md'>
                        <BiSearch className='text-[#343A40]' size={20} />
                        <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                    </div>
                </div>
            </div>
            {/* Call -Inquiry Table Start */}
            <div className="lg:ml-[300px] lg:pr-6">
                <div className='mt-5 mx-2 md:mx-0'>
                    <div className="overflow-x-auto w-full">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356] text-left'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Name</th>
                                    <th className='py-4'>Created Date</th>
                                    <th className='py-4'>Mobile No.</th>
                                    <th className='py-4'>E-mail</th>
                                    <th className='py-4'>Inquiry Type</th>
                                    <th className='py-4'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='py-4'>{index + 1}</td>
                                        <td className='py-4'>{item.name}</td>
                                        <td className='py-4'>{item.createDate}</td>
                                        <td className='py-4'>{item.mobile}</td>
                                        <td className='py-4'>{item.email}</td>
                                        <td className='py-4'>{item.type}</td>
                                        <td className='py-4'>{item.status}</td>
                                        <td className='py-4'>
                                            <div className='flex items-center gap-8'>
                                                <AiTwotoneEye className="text-[#4A5786]" size={25} />
                                                <MdDelete className="text-[#EC6453]" size={25} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Call -Inquiry Table End */}
            {/* Paigination */}
            <div className='bg-white lg:ml-[255px] pt-2'>
                <div className='flex justify-between items-center'>
                    <div className='mt-2 lg:ml-2'>
                        <p>Showing 1 to 10 of 50 entries</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='bg-[#DFDFDF] p-2'>
                            <IoIosArrowBack />
                        </div>
                        <p className='text-gray-500'>1</p>
                        <p className='text-gray-500'>2</p>
                        <p className='text-gray-500'>3</p>
                        <p className='text-gray-500'>4</p>
                        <div className='bg-[#DFDFDF] p-2'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CallInQuiry;