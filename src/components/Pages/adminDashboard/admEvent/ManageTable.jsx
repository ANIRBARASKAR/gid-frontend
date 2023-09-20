import { MdDelete } from "react-icons/md";
import ManageLineProgress from "./ManageLineProgress";
import ManageCircleProgress from "./ManageCircleProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
    { name: 'Event Name', organizer: "Organizer Name", status: "On Sale" },
    { name: 'Event Name', organizer: "Organizer Name", status: "Not Published" },
    { name: 'Event Name', organizer: "Organizer Name", status: "On Sale" },
    { name: 'Event Name', organizer: "Organizer Name", status: "On Sale" },
    { name: 'Event Name', organizer: "Organizer Name", status: "On Sale" },
    { name: 'Event Name', organizer: "Organizer Name", status: "On Sale" },
];
const ManageTable = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className='mt-5 mx-2 md:mx-0'>
                    <div className="overflow-x-auto w-full">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356] text-left'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Name</th>
                                    <th className='py-4'>Organizer</th>
                                    <th className='py-4'>Registrations</th>
                                    <th className='py-4 text-center'>Attendence</th>
                                    <th className='py-4 text-center'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='py-4 px-4 md:px-0'>{index + 1}</td>
                                        <td className='py-4 px-4 md:px-0'>{item.name}</td>
                                        <td className='py-4 px-4 md:px-0'>{item.organizer}</td>
                                        <td className='py-4 px-4 md:px-0'>
                                            <ManageLineProgress />
                                        </td>
                                        <td className='py-4 px-4 md:px-0 flex justify-center'>
                                            <ManageCircleProgress />
                                        </td>
                                        <td className='py-4 px-4 md:px-0 text-center'>
                                            <span
                                                className={`px-2 py-1 rounded-lg ${item.status === 'On Sale' ? 'bg-[#23AE00] text-white' : 'bg-[#F2994A] text-white'
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className='py-4 px-4 md:px-0'>
                                            <MdDelete className="text-red-500 cursor-pointer" size={25} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Paigination */}
            <div className='bg-white lg:ml-[255px] pt-2'>
                <div className='flex justify-between items-center'>
                    <div className='mt-2 lg:ml-2'>
                        <p>Showing 1 to 10 of 50 entries</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='bg-[#DFDFDF] p-2 cursor-pointer'>
                            <IoIosArrowBack />
                        </div>
                        <p className='text-gray-500'>1</p>
                        <p className='text-gray-500'>2</p>
                        <p className='text-gray-500'>3</p>
                        <p className='text-gray-500'>4</p>
                        <div className='bg-[#DFDFDF] p-2 cursor-pointer'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageTable;