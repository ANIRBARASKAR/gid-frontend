import { AiFillEdit } from 'react-icons/ai';

const GroupEvant = () => {
    return (
        <div className="mt-10 lg:ml-[300px]">
            <p className="text-[#001356] text-[16px] font-medium">Group Event</p>
            <div className="bg-white p-4" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
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
            </div>
        </div>
    );
};

export default GroupEvant;