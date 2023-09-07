import { BiSearch } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },
    { name: 'Username', joined: '15/07/20203', course: 'xyz' },

];

const Users = () => {
    return (
        <>
            <div className="mt-5 lg:ml-[300px]">
                <div className='mx-4 md:mx-0'>
                    <div className='flex items-center gap-8 mt-5'>
                        <p className="text-[18px] text-[#343A40]">All (125)</p>
                        <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-lg'>
                            <BiSearch className='text-[#343A40]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                    </div>
                </div>
                <div className='mt-5 mx-2 md:mx-0'>
                    <table className="w-[100%] mt-8 text-xs md:text-base">
                        <thead>
                            <tr className='text-[#001356] text-left'>
                                <th className='py-4'>Image</th>
                                <th className='py-4'>Name</th>
                                <th className='py-4'>Joined</th>
                                <th className='py-4'>Selected course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300 text-gray-500">
                                    <td className='mx-auto py-4'><img src="https://i.ibb.co/4s6nX3y/image-4.png" alt="" /></td>
                                    <td className='py-4'>{item.name}</td>
                                    <td className='py-4'>{item.joined}</td>
                                    <td className=''>{item.course}</td>
                                    <td className=''>
                                        <div className='flex items-center gap-8'>
                                            <AiFillEdit size={30} />
                                            <MdDelete className='text-[#EC6453]' size={30} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-white lg:ml-[255px]'>
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

export default Users;