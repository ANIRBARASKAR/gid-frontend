import { BiChevronDown } from "react-icons/bi";
import { HiOutlineDocument, HiOutlineSearch } from "react-icons/hi";
import { useForm } from 'react-hook-form';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Organization = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className="mt-5 flex items-center justify-between mx-4 md:mx-0">
                    <h1 className="text-[#001356] text-[26px] font-bold">Organizations</h1>
                    <div className='flex items-center gap-4'>
                        <button className="text-white bg-[#001356] px-4 py-1 rounded-md">Add User</button>
                        <button className='flex items-center gap-2 px-4 py-1 border border-[#001356] rounded-md text-[#001356]'>
                            <HiOutlineDocument />
                            Export
                            <BiChevronDown />
                        </button>
                    </div>
                </div>

                <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#284B80] text-sm'>24 results found</p>
                        <div className='flex items-center gap-8'>
                            <div className="flex items-center gap-3 text-[#001356]">
                                <label htmlFor="date" className="text-sm">sort by :</label>

                                <select id="date" className="border border-[#001356] rounded px-2 py-1">
                                    <option value="volvo">Start date (desc)</option>
                                    <option value="saab">Start date (desc)</option>
                                </select>
                            </div>
                            <MdOutlineKeyboardArrowUp className='text[#001356]' size={30} />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#001356] mt-5'></div>
                    {/* Form START */}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-5'>
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
                                <div className="mb-4">
                                    <label htmlFor="create" className="block text-[#001356] text-base font-medium">Created by organizer</label>
                                    <select
                                        id="create"
                                        name="create"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    >
                                        <option value="option1">All</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="organizerName" className="block text-[#001356] text-base font-medium">Organizer name</label>
                                    <input
                                        type="text"
                                        id="organizerName"
                                        name="organizerName"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="organizerName" className="block text-[#001356] text-base font-medium">Username</label>
                                    <input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="organizerName" className="block text-[#001356] text-base font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="role" className="block text-[#001356] text-base font-medium">Country</label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    >
                                        <option value="option1">All</option>
                                        <option value="option2">India</option>
                                        <option value="option3">India</option>
                                        <option value="option4">India</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-5'>
                                <div className="mb-4">
                                    <label htmlFor="FirstName" className="block text-[#001356] text-base font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="LastName" className="block text-[#001356] text-base font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                    />
                                </div>
                                <div className='grid grid-cols-3 ml-4'>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="all" />
                                        All
                                    </label>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="Enabled Only" />
                                        Enabled Only
                                    </label>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="Disabled Only" />
                                        Disabled Only
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="bg-[#284B80] text-white px-8 py-2 rounded-lg flex items-center gap-4"
                                >
                                    <HiOutlineSearch size={25} />
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Form End */}
                </div>


            </div>
        </>
    );
};

export default Organization;