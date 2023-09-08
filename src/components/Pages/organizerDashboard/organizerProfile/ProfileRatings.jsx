import ProgressBar from "@ramonak/react-progress-bar";
import { BiSolidStar } from 'react-icons/bi';

const ProfileRatings = () => {
    return (
        <div className="mt-8">
            <div className="">
                <div>
                    <div>
                        <div className='border border-gray-500 p-4 rounded-lg w-full'>
                            <div>
                                <p className="font-semibold text-xl text-[#001356] mt-2">Ratings</p>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-2'>
                                        <BiSolidStar className='text-[#F9EF00]' size={25} />
                                        <BiSolidStar className='text-[#F9EF00]' size={25} />
                                        <BiSolidStar className='text-[#F9EF00]' size={25} />
                                        <BiSolidStar className='text-[#F9EF00]' size={25} />
                                    </div>
                                    <p className="font-bold text-xl text-[#001356] mt-2">4.00</p>
                                </div>
                            </div>
                            <div className="mt-3 text-[#001356]">
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold text-xl">5</p>
                                    <ProgressBar className="w-[50%]" completed={80} />
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold text-xl">4</p>
                                    <ProgressBar className="mt-4 w-[50%]" completed={50} />
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold text-xl">3</p>
                                    <ProgressBar className="mt-4 w-[50%]" completed={0} />
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold text-xl">2</p>
                                    <ProgressBar className="mt-4 w-[50%]" completed={10} />
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold text-xl">1</p>
                                    <ProgressBar className="mt-4 w-[50%]" completed={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileRatings;