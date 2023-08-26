import { BiArrowBack } from 'react-icons/bi';

const EventDetailsHeader = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className='flex items-center gap-2 text-[#001356]'>
                <BiArrowBack size={20} />
                <p className='text-xl'>Event Details</p>
            </div>
            <div>
                <div className='flex justify-center'>
                    <div className=''>
                        <h2 className='text-xl font-medium text-[#001356] text-center px-6 py-4 rounded-lg shadow-xl inline-block bg-white ml-[30%] relative'>Registration Open</h2>

                        <img className='mt-[-10px]' src="https://i.ibb.co/xjY0smf/image-47-1.png absolute" alt="" />
                    </div>
                </div>
                <div className='flex justify-center mt-[-30px]'>
                    <div className='flex justify-between gap-8 lg:gap-24 bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] shadow-xl px-8 lg:px-12 py-8 rounded-xl'>
                        <div className='mx-auto'>
                            <p className='text-[#001356] text-lg lg:text-[28px] font-medium'>Date & Time</p>
                            <div className='md:text-lg text-gray-500'>
                                <p className='text-gray-500'>Start :01/08/2023  Thursday 02:00 pm</p>
                                <p className='text-gray-500'>End :01/08/2023  Thursday 02:00 pm</p>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <p className='text-[#001356] text-lg md:text-[28px] font-medium'>Venue</p>
                            <p className='md:text-lg text-gray-500'>Oxford University campus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsHeader;