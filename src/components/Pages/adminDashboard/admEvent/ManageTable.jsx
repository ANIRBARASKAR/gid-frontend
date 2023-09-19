import { MdDelete } from "react-icons/md";
import ManageLineProgress from "./ManageLineProgress";
import ManageCircleProgress from "./ManageCircleProgress";

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
                                        <td className='py-4'>{index + 1}</td>
                                        <td className='py-4'>{item.name}</td>
                                        <td className='py-4'>{item.organizer}</td>
                                        <td className='py-4'>
                                            <ManageLineProgress />
                                        </td>
                                        <td className='py-4 flex justify-center'>
                                            <ManageCircleProgress />
                                        </td>
                                        <td className='py-4 text-center'>
                                            <span
                                                className={`px-2 py-1 rounded-lg ${item.status === 'On Sale' ? 'bg-[#23AE00] text-white' : 'bg-[#F2994A] text-white'
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className='py-4'>
                                            <MdDelete className="text-red-500 cursor-pointer" size={25} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageTable;