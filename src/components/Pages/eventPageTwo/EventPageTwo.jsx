import { useNavigate } from "react-router-dom";
import EventHeader from "../events/EventHeader";
import { FiBookmark } from 'react-icons/fi';

const EventPageTwo = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/event-details");
    }
    return (
        <div>
            <EventHeader />
            <div className="container mx-auto px-2 md:px-0">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                    {/* CARD 1 */}
                    <div className="shadow-lg rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-4 pt-4 pb-6">
                                <img className="w-full h-full" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                                <div className="flex justify-end">
                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <p className="bg-[#284B80] px-5 py-2 text-white font-semibold rounded-tr-3xl  rounded-bl-3xl">Multiple Events</p>
                                </div>
                                <h4 className="text-[#284B80] text-sm md:text-lg font-medium mt-2">DEVOPS TRANNING & COURSE</h4>
                                <div className="text-[#666666] text-xs md:text-base mt-1">
                                    <p>Oxford University campus.</p>
                                    <p>01/08/2023 Thursday 02:00 pm</p>
                                </div>
                                <div className=" mt-1 lg:mt-20 pb-4 flex justify-between">
                                    <button onClick={handleNavigate} className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                    <FiBookmark className='text-[#284B80] mr-6' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="shadow-lg rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-4 pt-4 pb-6">
                                <img className="w-full h-full" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                                <div className="flex justify-end">
                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <p className="bg-[#284B80] px-5 py-2 text-white font-semibold rounded-tr-3xl  rounded-bl-3xl">Multiple Events</p>
                                </div>
                                <h4 className="text-[#284B80] text-sm md:text-lg font-medium mt-2">DEVOPS TRANNING & COURSE</h4>
                                <div className="text-[#666666] text-xs md:text-base mt-1">
                                    <p>Oxford University campus.</p>
                                    <p>01/08/2023 Thursday 02:00 pm</p>
                                </div>
                                <div className="mt-1 lg:mt-20 pb-4 flex justify-between">
                                    <button onClick={handleNavigate} className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                    <FiBookmark className='text-[#284B80] mr-6' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className="shadow-lg rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-4 pt-4 pb-6">
                                <img className="w-full h-full" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                                <div className="flex justify-end">
                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <p className="bg-[#284B80] px-5 py-2 text-white font-semibold rounded-tr-3xl  rounded-bl-3xl">Multiple Events</p>
                                </div>
                                <h4 className="text-[#284B80] text-sm md:text-lg font-medium mt-2">DEVOPS TRANNING & COURSE</h4>
                                <div className="text-[#666666] text-xs md:text-base mt-1">
                                    <p>Oxford University campus.</p>
                                    <p>01/08/2023 Thursday 02:00 pm</p>
                                </div>
                                <div className="mt-1 lg:mt-20 pb-4 flex justify-between">
                                    <button onClick={handleNavigate} className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                    <FiBookmark className='text-[#284B80] mr-6' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="shadow-lg rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-4 pt-4 pb-6">
                                <img className="w-full h-full" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                                <div className="flex justify-end">
                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <p className="bg-[#284B80] px-5 py-2 text-white font-semibold rounded-tr-3xl  rounded-bl-3xl">Multiple Events</p>
                                </div>
                                <h4 className="text-[#284B80] text-sm md:text-lg font-medium mt-2">DEVOPS TRANNING & COURSE</h4>
                                <div className="text-[#666666] text-xs md:text-base mt-1">
                                    <p>Oxford University campus.</p>
                                    <p>01/08/2023 Thursday 02:00 pm</p>
                                </div>
                                <div className="mt-1 lg:mt-20 pb-4 flex justify-between">
                                    <button onClick={handleNavigate} className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                    <FiBookmark className='text-[#284B80] mr-6' size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPageTwo;