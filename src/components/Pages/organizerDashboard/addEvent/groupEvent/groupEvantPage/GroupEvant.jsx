import { AiFillEdit, AiOutlineEdit } from 'react-icons/ai';
import EventTable from './EventTable';

const GroupEvant = () => {
    return (
        <div className="mt-10 lg:ml-[300px] lg:pr-6">
            <p className="text-[#001356] text-[16px] font-medium">Group Event</p>
            <div className="bg-white p-4 rounded-xl mt-8" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <div className="md:flex gap-8">
                    <img className="w-full h-[186px] md:w-[333px] md:h-[281px]" src="https://i.ibb.co/hcvkpR4/image-60.png" alt="" />
                    <div className='mt-4 md:mt-0'>
                        <p className="text-[#001356] text-base font-semibold">About :</p>
                        <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis. Nulla facilisi. Nunc luctus, ex in faucibus cursus, turpis est eleifend lorem, sit amet eleifend dui libero nec felis. Pellentesque volutpat erat ac libero tincidunt, et efficitur purus efficitur. Duis gravida diam eget nisi sollicitudin, eu luctus nulla egestas.</p>
                    </div>
                    <div className='hidden md:block'>
                        <div className='bg-gray-200 p-2 rounded'>
                            <AiFillEdit className='text-gray-500' size={25} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8 mt-5 text-sm  md:text-base'>
                    <div>
                        <div className='grid grid-cols-2 gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>Group Name :</p>
                            <p className='text-gray-400'>abc group</p>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>Start date & time :</p>
                            <p className='text-gray-400'>01/08/2023  Thursday 02:00 pm</p>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>End date & time :</p>
                            <p className='text-gray-400'>01/08/2023  Thursday 02:00 pm</p>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:gap-4 lg:gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>Venue :</p>
                            <p className='text-gray-400'>Oxford University campus</p>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>Organizer :</p>
                            <p className='text-gray-400'>xyz organization</p>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mb-2'>
                            <p className='text-[#001356] font-medium'>Types of Event :</p>
                            <p className='text-gray-400'>Type1 , Type2 , Type3</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <AiOutlineEdit className='text-gray-500 block md:hidden ' size={25} />
                </div>
            </div>
            <EventTable />
        </div>
    );
};

export default GroupEvant;