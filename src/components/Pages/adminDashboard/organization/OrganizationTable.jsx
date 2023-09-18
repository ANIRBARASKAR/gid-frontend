import { AiFillEdit } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const data = [
    { name: 'Organization Name', email: "xyz@gmail.com", },
    { name: 'Organization Name', email: "xyz@gmail.com", },
    { name: 'Organization Name', email: "xyz@gmail.com", },
    { name: 'Organization Name', email: "xyz@gmail.com", },
    { name: 'Organization Name', email: "xyz@gmail.com", },
    { name: 'Organization Name', email: "xyz@gmail.com", },
    
];

const OrganizationTable = () => {
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
                                    <th className='py-4'>Email</th>
                                    <th className='py-4'>Logo</th>
                                    <th className='py-4'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='py-4'>{index + 1}</td>
                                        <td className='py-4'>{item.name}</td>
                                        <td className='py-4'>{item.email}</td>
                                        <td className='py-4'>
                                            <img className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full" src="https://i.ibb.co/88cZtST/image-15.png" alt="" />
                                        </td>
                                        <td className='py-4'>
                                            <div className=''>
                                                <BsToggleOn className="text-green-700" size={30} />
                                            </div>
                                        </td>
                                        <td className='py-4'>
                                            <div className="flex items-center gap-8">
                                                <AiFillEdit className="text-gray-700" size={25} />
                                                <MdDelete className="text-red-500" size={25} />
                                            </div>
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

export default OrganizationTable;