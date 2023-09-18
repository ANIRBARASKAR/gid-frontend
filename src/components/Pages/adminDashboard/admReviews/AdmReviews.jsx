import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import UserReviews from "./UserReviews";


const AdmReviews = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className="mt-8">
                    <h1 className="text-[#001356] text-[26px] font-bold">Reviews</h1>
                    <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#284B80] text-sm'>24 results found</p>
                            <div className='flex items-center gap-8'>
                                <div className="flex items-center gap-3 text-[#001356]">
                                    <label htmlFor="date" className="text-sm">sort by :</label>

                                    <select id="date" className="border border-[#001356] rounded px-2 py-1">
                                        <option value="volvo">Creation date (desc)</option>
                                        <option value="saab">Creation (desc)</option>
                                    </select>
                                </div>
                                <MdOutlineKeyboardArrowUp className='text[#001356]' size={30} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#001356] mt-5'></div>
                        {/* Input Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5">
                            <div className="mb-4">
                                <label htmlFor="Event" className="block text-[#001356] text-base font-medium">Event</label>
                                <select
                                    id="event"
                                    name="event"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                >
                                    <option value="option1">All</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Keyword" className="block text-[#001356] text-base font-medium">Keyword</label>
                                <input
                                    type="text"
                                    id="Keyword"
                                    name="Keyword"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 mt-5">
                            <div className='flex items-center justify-between gap-4'>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="all" />
                                    All
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="Enabled Only" />
                                    5 Star
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="Disabled Only" />
                                    4 Star
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="Disabled Only" />
                                    3 Star
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="Disabled Only" />
                                    1 Star
                                </label>
                            </div>
                            <div className='flex items-center gap-4'>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="all" />
                                    All
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="all" />
                                    Visible Only
                                </label>
                                <label className=" flex items-center gap-2">
                                    <input type="radio" name="gender" value="all" />
                                    Hidden Only
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button
                                type="submit"
                                className="bg-[#284B80] text-white px-8 py-2 rounded-lg flex items-center gap-4"
                            >
                                <HiOutlineSearch size={25} />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <UserReviews />
        </>
    );
};

export default AdmReviews;