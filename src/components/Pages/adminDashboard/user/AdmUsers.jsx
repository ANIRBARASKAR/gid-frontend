import { HiOutlineDocument } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';

const AdmUsers = () => {
    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <div className="mt-5 flex items-center justify-between mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-bold">Users</h1>
                <div className='flex items-center gap-4'>
                    <button className="text-white bg-[#001356] px-4 py-1 rounded-md">Add User</button>
                    <button className='flex items-center gap-2 px-4 py-1 border border-[#001356] rounded-md text-[#001356]'>
                        <HiOutlineDocument />
                        Export
                        <BiChevronDown />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdmUsers;