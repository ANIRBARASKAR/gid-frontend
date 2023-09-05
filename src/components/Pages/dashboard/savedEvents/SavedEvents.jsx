import { FiBookmark } from "react-icons/fi";

const events = [
    {
        "id": "1",
        "img": "https://i.ibb.co/NWNXLsv/image-47.png",
        "title": "DEVOPS TRANNING & COURSE",
        "description": "Oxford University campus.",
        "date": "01/08/2023  Thursday 02:00 pm"
    },
    {
        "id": "2",
        "img": "https://i.ibb.co/NWNXLsv/image-47.png",
        "title": "DEVOPS TRANNING & COURSE",
        "description": "Oxford University campus.",
        "date": "01/08/2023  Thursday 02:00 pm"
    },
    {
        "id": "3",
        "img": "https://i.ibb.co/NWNXLsv/image-47.png",
        "title": "DEVOPS TRANNING & COURSE",
        "description": "Oxford University campus.",
        "date": "01/08/2023  Thursday 02:00 pm"
    },
]

const SavedEvents = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-semibold">Saved Events</h1>
                <img src="https://i.ibb.co/1LrRSX8/Add-Bookmark.png" alt="" />
            </div>
            <div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0">
                    {events.map(item => (
                        <>
                            <div className="shadow-lg p-4 rounded-lg">
                                <img className="w-full lg:h-[230px]" src={item.img} alt="" />
                                <div className="flex justify-end">
                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                </div>
                                <div>
                                    <h4 className="text-[#284B80] text-lg font-medium">{item.title}</h4>
                                    <div className="text-[#666666] text-base mt-1">
                                        <p>{item.description}</p>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className="mt-3 flex justify-between">
                                        <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                        <FiBookmark className='text-[#284B80]' size={25} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SavedEvents;