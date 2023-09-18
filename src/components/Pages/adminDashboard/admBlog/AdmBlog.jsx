import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import AdmBlogTable from "./AdmBlogTable";
import { useNavigate } from "react-router-dom";

const AdmBlog = () => {
    const navigate = useNavigate();
    const handleAddBlog = () => {
        navigate("../add-blog");
    }
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className="mt-5 flex items-center justify-between mx-4 md:mx-0">
                    <h1 className="text-[#001356] text-[26px] font-bold">Blogs</h1>
                    <div className='flex items-center gap-4'>
                        <button onClick={handleAddBlog} className="text-white bg-[#001356] px-4 py-1 rounded-md">Add  Blog</button>
                    </div>
                </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-5">
                        <div className="mb-4">
                            <label htmlFor="role" className="block text-[#001356] text-base font-medium">Role</label>
                            <select
                                id="role"
                                name="role"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            >
                                <option value="option1">All</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>
                        <div className="mt-5">
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
            <AdmBlogTable />
        </>
    );
};

export default AdmBlog;