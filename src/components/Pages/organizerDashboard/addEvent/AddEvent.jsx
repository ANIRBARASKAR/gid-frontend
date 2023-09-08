import { BiSearch } from "react-icons/bi";

const AddEvent = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className='mx-4 md:mx-0'>
                <h1 className="text-[#001356] text-[26px] font-semibold">Participation</h1>
                <div className='flex items-center gap-8 mt-5'>
                    <p className="text-[18px] text-[#343A40]">All (50)</p>
                    <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-xl'>
                        <BiSearch className='text-[#343A40]' size={20} />
                        <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;