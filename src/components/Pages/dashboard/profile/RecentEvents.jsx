// import { FiBookmark } from "react-icons/fi";

const RecentEvents = () => {
    return (
        <div className="mt-14">
            <h1 className="text-[#001356] text-[26px] font-semibold">Recent Events</h1>
            
            <div className="mt-8 bg-white rounded-lg mb-5" style={{
                boxShadow: "0px 4px 10px 0px #0000001A"
            }}>
                <div className="flex items-center justify-between gap-4">
                    <div className="p-4 rounded-xl flex gap-8">
                        <div>
                            <img className=" " src="https://i.ibb.co/VJzsWtZ/image-47.png" alt="" />
                            <div className="flex justify-end">
                                <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#284B80] text-xl font-medium">DEVOPS TRANNING
                                & COURSE</h4>
                            <div className="text-[#666666] text-base mt-1">
                                <p>Oxford University campus</p>
                                <p>01/08/2023  Thursday 02:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-[#001356]">1 ticket</p>
                        <div className="textsm text-[#001356]">
                            <div className="flex items-center gap-12">
                                <p>reference :</p>
                                <p>7c5dds52c7</p>
                            </div>
                            <div className="flex items-center gap-10">
                                <p>order date :</p>
                                <p>Thu 15 jun 2021, 8:35 pm</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p>payment status :</p>
                                <p>paid</p>
                            </div>

                        </div>
                    </div>
                    <div className="mt-3 pr-6">
                        <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentEvents;