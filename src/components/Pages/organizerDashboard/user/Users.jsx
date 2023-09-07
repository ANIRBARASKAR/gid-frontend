import { BiSearch } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const data = [
    { name: 'Username', joined: '15/07/20203', course: 'xyz'},
    
];

const Users = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className='mx-4 md:mx-0'>
                <div className='flex items-center gap-8 mt-5'>
                    <p className="text-[18px] text-[#343A40]">All (125)</p>
                    <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-xl'>
                        <BiSearch className='text-[#343A40]' size={20} />
                        <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                    </div>
                </div>
            </div>
            <div className='mt-5 mx-2 md:mx-0'>
                <table className="w-[100%] mt-8 text-xs md:text-base">
                    <thead>
                        <tr className='text-[#001356]'>
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
                                <td className='text-center py-4'>{item.name}</td>
                                <td className='text-center py-4'>{item.joined}</td>
                                <td className='text-center'>{item.course}</td>
                                <td className='text-center'>
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
    );
};

export default Users;