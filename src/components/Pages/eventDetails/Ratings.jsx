import ProgressBar from "@ramonak/react-progress-bar";
import { FaPhoneVolume, FaDiscord } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BiSolidStar } from 'react-icons/bi';
import Reviews from "./Reviews";


const Ratings = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <div>
                        <div className='border border-gray-500 p-4 rounded-lg'>
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
                        <div>
                            <Reviews />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-[#001356]">
                        <h4 className="font-bold text-[20px]">ORGANIZER CONTACT</h4>
                        <div className="flex items-center gap-2 text-lg mt-2">
                            <FaPhoneVolume size={25} />
                            <p>+1012 3456 789</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-2">
                            <MdEmail size={25} />
                            <p>demo@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-2">
                            <MdLocationOn size={25} />
                            <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-white flex items-center gap-4 mt-5">
                            <div className="bg-[#001356] p-2 rounded-full">
                                <BsTwitter size={15} />
                            </div>
                            <div className="bg-[#001356] p-2 rounded-full">
                                <BsInstagram size={15} />
                            </div>
                            <div className="bg-[#001356] p-2 rounded-full">
                                <FaDiscord size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ratings;