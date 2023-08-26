import { BiArrowBack } from 'react-icons/bi';

const RegistrationOpen = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className='flex items-center gap-2 text-[#001356]'>
                <BiArrowBack size={20} />
                <p className='text-xl'>Miultiple Event</p>
            </div>
            <div>
                <div className='flex justify-center'>
                    <div className=''>
                        <h2 className='text-xl font-medium text-[#001356] text-center px-6 py-4 rounded-lg shadow-xl inline-block bg-white ml-[30%] relative'>Registration Open</h2>

                        <img className='mt-[-10px]' src="https://i.ibb.co/xjY0smf/image-47-1.png absolute" alt="" />
                    </div>
                </div>
                <div className='flex justify-center mt-[-30px]'>
                    <div className='flex justify-between gap-8 bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] shadow-xl px-6 py-8 rounded-xl'>

                        <div className='mx-auto text-lg hiddnen lg:block'>
                            <p className='text-[#001356]'>Number of Event</p>
                            <p className='font-bold text-gray-500 text-center'>5</p>
                        </div>

                        <div className='mx-auto'>
                            <p className='text-[#001356] text-lg'>Date & Time</p>
                            <div className='text-sm text-gray-500'>
                                <p className='text-sm text-gray-500'>Start :01/08/2023</p>
                                <p className='text-sm text-gray-500'>Thursday 02:00 pm</p>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <p className='text-[#001356] text-lg'>Venue</p>
                            <p className='text-sm text-gray-500'>Oxford University campus</p>
                        </div>
                        <div className='mx-auto hiddnen lg:block'>
                            <p className='text-[#001356] text-lg'>Views</p>
                            <p className='font-bold text-gray-500 text-center'>1k+</p>
                        </div>
                        <div className='mx-auto hiddnen lg:block'>
                            <p className='text-[#001356] text-lg'>Paticipations</p>
                            <p className='font-bold text-gray-500 text-center'>500+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationOpen;