import { FiBookmark } from "react-icons/fi";
const pastEvent = [
    {
        id: "1",
        img: "https://i.ibb.co/NWNXLsv/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        venue: "Oxford University campus",
        date: "01/08/2023 Thursday 02:00 pm",
    },
    {
        id: "2",
        img: "https://i.ibb.co/NWNXLsv/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        venue: "Oxford University campus",
        date: "01/08/2023 Thursday 02:00 pm",
    },
    {
        id: "3",
        img: "https://i.ibb.co/NWNXLsv/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        venue: "Oxford University campus",
        date: "01/08/2023 Thursday 02:00 pm",
    },
    {
        id: "4",
        img: "https://i.ibb.co/NWNXLsv/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        venue: "Oxford University campus",
        date: "01/08/2023 Thursday 02:00 pm",
    },
]

const PastEvent = () => {
    return (
        <div className="mt-8">
            <div className="text-[26px] font-semibold flex gap-12">
                <p className="text-[#001356]">Event on sale (7)</p>
                <p className="text-gray-400">Past Events (2)</p>
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {/* CARD 1 */}
                {
                    pastEvent.map(item => (
                        <>
                            <div className="grid grid-cols-2 gap-4 shadow-lg rounded-xl bg-white pt-4 pb-6">
                                <div className="px-4">
                                    <img className="w-full h-full" src={item.img} alt="" />
                                    <div className="flex justify-end">
                                        <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[#284B80] text-sm md:text-lg font-medium mt-2">{item.title}</h4>
                                    <div className="text-[#666666] text-xs md:text-base mt-1">
                                        <p>{item.venue}</p>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className=" mt-1 lg:mt-20 flex justify-between">
                                        <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                        <FiBookmark className='text-[#284B80] mr-6' size={25} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className=" mt-8 flex justify-center">
                <button className="bg-[#000D3D] text-white px-6 py-2 rounded-lg" style={{
                    boxShadow: "0px -4px 4px 0px #000D3D inset"
                }}>Load More</button>
            </div>
        </div>
    );
};

export default PastEvent;