import { BiSolidStar } from "react-icons/bi";

const ProfileReviews = () => {
    return (
        <div>
            <div className='border border-gray-500 p-4 rounded-lg mt-5'>
                <div>
                    <p className="font-semibold text-xl text-[#001356] mt-2">Reviews</p>
                    <div>
                        <div className='flex gap-4 items-center bg-[#EFEFEF] px-4 py-2 rounded-md text-[#686868] mt-5'>
                            <img src="https://i.ibb.co/8rdXX4j/Ellipse-819.png" alt="" />
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                    </div>
                                    <p className='text-xs'>23/06/2023</p>
                                </div>
                                <p className='mt-2 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt </p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center bg-[#EFEFEF] px-4 py-2 rounded-md text-[#686868] mt-5'>
                            <img src="https://i.ibb.co/8rdXX4j/Ellipse-819.png" alt="" />
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                    </div>
                                    <p className='text-xs'>23/06/2023</p>
                                </div>
                                <p className='mt-2 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt </p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center bg-[#EFEFEF] px-4 py-2 rounded-md text-[#686868] mt-5'>
                            <img src="https://i.ibb.co/8rdXX4j/Ellipse-819.png" alt="" />
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                        <BiSolidStar className='text-[#F9EF00] w-[15px] h-[15px]' size={20} />
                                    </div>
                                    <p className='text-xs'>23/06/2023</p>
                                </div>
                                <p className='mt-2 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='px-8 py-2 font-medium border-2 border-gray-300 rounded-lg text-sm mt-5'>SHARE YOURS</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileReviews;