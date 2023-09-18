import { AiFillEdit } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const data = [
    { title: 'Blog Title', author: "xyz@gmail.com", },
    { title: 'Blog Title', author: "xyz@gmail.com", },
    { title: 'Blog Title', author: "xyz@gmail.com", },
    { title: 'Blog Title', author: "xyz@gmail.com", },
    { title: 'Blog Title', author: "xyz@gmail.com", },
    { title: 'Blog Title', author: "xyz@gmail.com", },

];

const AdmBlogTable = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className='mt-5 mx-2 md:mx-0'>
                    <div className="overflow-x-auto w-full">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356] text-left'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Title</th>
                                    <th className='py-4'>Written By</th>
                                    <th className='py-4'>Image</th>
                                    <th className='py-4'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='py-4'>{index + 1}</td>
                                        <td className='py-4'>{item.title}</td>
                                        <td className='py-4'>{item.author}</td>
                                        <td className='py-4 flex items-center gap-4'>
                                            <img className="h-[20px] w-[20px] md:h-[47px] md:w-[122px]" src="https://i.ibb.co/YXsqL1V/image-63-1.png" alt="" />
                                            <button className="text-xs font-medium text-white bg-[#284B80] px-2 rounded-full">view</button>
                                        </td>
                                        <td className='py-4'>
                                            <div className=''>
                                                <BsToggleOn className="text-green-700 cursor-pointer" size={30} />
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

export default AdmBlogTable;