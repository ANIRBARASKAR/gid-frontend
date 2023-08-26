import EventTitle from "../../reusable/EventTitle";
import { FiBookmark } from 'react-icons/fi';


const TechnicalEvents = () => {
    return (
        <div className="container mx-auto mt-10">
            <EventTitle title="Technical Events" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* CARD 1 */}
                <div className="shadow-lg p-4 rounded-lg">
                    <img className="w-full lg:h-[230px]" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                    <div className="flex justify-end">
                        <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                    </div>
                    <div>
                        <h4 className="text-[#284B80] text-lg font-medium">DEVOPS TRANNING & COURSE</h4>
                        <div className="text-[#666666] text-base mt-1">
                            <p>150+ Registrations</p>
                            <p>4 weeks to go</p>
                        </div>
                        <div className="mt-3 flex justify-between">
                            <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                            <FiBookmark className='text-[#284B80]' size={25} />
                        </div>
                    </div>
                </div>
                {/* CARD 2 */}
                <div className="shadow-lg p-4 rounded-lg">
                    <img className="w-full lg:h-[230px]" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                    <div className="flex justify-end">
                        <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                    </div>
                    <div>
                        <h4 className="text-[#284B80] text-lg font-medium">DEVOPS TRANNING & COURSE</h4>
                        <div className="text-[#666666] text-base mt-1">
                            <p>150+ Registrations</p>
                            <p>4 weeks to go</p>
                        </div>
                        <div className="mt-3 flex justify-between">
                            <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                            <FiBookmark className='text-[#284B80]' size={25} />
                        </div>
                    </div>
                </div>
                {/* CARD 3 */}
                <div className="shadow-lg p-4 rounded-lg">
                    <img className="w-full lg:h-[230px]" src="https://i.ibb.co/NWNXLsv/image-47.png" alt="" />
                    <div className="flex justify-end">
                        <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                    </div>
                    <div>
                        <h4 className="text-[#284B80] text-lg font-medium">DEVOPS TRANNING & COURSE</h4>
                        <div className="text-[#666666] text-base mt-1">
                            <p>150+ Registrations</p>
                            <p>4 weeks to go</p>
                        </div>
                        <div className="mt-3 flex justify-between">
                            <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                            <FiBookmark className='text-[#284B80]' size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalEvents;