import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const EventHeader = () => {
    return (
        <div className='bg-[#334278] mt-8 py-4'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {/* ===========1 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#FFF9F0] px-4 py-2 rounded-full text-[#001356]'>
                            <p>Participation Type</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </div>
                    {/* ===========2 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#FFF9F0] px-4 py-2 rounded-full text-[#001356]'>
                            <p>Paid</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </div>
                    {/* ===========3 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#FFF9F0] px-4 py-2 rounded-full text-[#001356]'>
                            <p>Eligibility</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </div>
                    {/* ===========4 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#FFF9F0] px-4 py-2 rounded-full text-[#001356]'>
                            <p>Event Type</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </div>
                    {/* ===========5 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#FFF9F0] px-4 py-2 rounded-full text-[#001356]'>
                            <p>Event Location</p>
                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </div>
                    {/* ===========6 */}
                    <div className='mx-auto'>
                        <div className='flex items-center gap-2 bg-[#001356] px-4 py-2 rounded-full text-white'>
                            <BiSearch size={20} />
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHeader;