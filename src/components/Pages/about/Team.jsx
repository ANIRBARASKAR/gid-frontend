import { FaPinterest } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Team = () => {
    return (
        <div className="container mx-auto">
            <div>
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-[#000000]"></div>
                        <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">OUR TEAM</h1>
                        <div className="w-8 h-[1px] bg-[#000000]"></div>
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mx-4 lg:mx-0 mt-16'>
                    {/* CARD 1 */}
                    <div className='shadow-lg py-4 rounded-lg'>
                        <div>
                            <img className='mx-auto' src="https://i.ibb.co/L8Sq36y/avatar.png" alt="" />
                            <div className='mt-2 text-center'>
                                <h1 className="text-base md:text-[26px] font-[500] text-[#001356]">Theresa</h1>
                                <p className="text-sm mt-3">Marketing Coordinator</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex gap-4 mt-4'>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <FaPinterest className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillInstagram className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiOutlineTwitter className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillFacebook className='text-[#001356]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className='shadow-lg py-4 rounded-lg'>
                        <div>
                            <img className='mx-auto' src="https://i.ibb.co/L8Sq36y/avatar.png" alt="" />
                            <div className='mt-2 text-center'>
                                <h1 className="text-base md:text-[26px] font-[500] text-[#001356]">Theresa</h1>
                                <p className="text-sm mt-3">Marketing Coordinator</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex gap-4 mt-4'>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <FaPinterest className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillInstagram className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiOutlineTwitter className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillFacebook className='text-[#001356]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className='shadow-lg py-4 rounded-lg'>
                        <div>
                            <img className='mx-auto' src="https://i.ibb.co/L8Sq36y/avatar.png" alt="" />
                            <div className='mt-2 text-center'>
                                <h1 className="text-base md:text-[26px] font-[500] text-[#001356]">Theresa</h1>
                                <p className="text-sm mt-3">Marketing Coordinator</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex gap-4 mt-4'>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <FaPinterest className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillInstagram className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiOutlineTwitter className='text-[#001356]' />
                                </div>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <AiFillFacebook className='text-[#001356]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="mx-auto">
                        <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/ns2KKTP/Rectangle-1783.png" alt="" />
                        <span className="absolute text-white ml-[20px] md:ml-[70px] lg:ml-[80px] mt-[-70px] md:mt-[-120px] lg:mt-[-110px]">ADVERTISE 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;