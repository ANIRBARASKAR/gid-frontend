import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


const Rewards = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("../others-details");
    }

    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <p className="text-[12px] md:text-base text-[#001356] font-medium">Rewards & Recognition</p>
            <p className="text-[#001356] mt-4">One-liner description about prizes!*</p>
            <input className="w-full border-2 border-[#284B80] rounded-md py-1 px-4 mt-1 placeholder-[#284B80]" type="text" name="" id="" placeholder="Enter one liner description" />

            <div className="mt-5">
                <p className="text-[#001356]">Within how many days will you be able to release the prizes (if any) and/or certificates after the event is over?*</p>
                <input className="w-full border-2 border-[#284B80] rounded-md py-1 px-4 mt-1 placeholder-[#001356]" type="text" name="" id="" placeholder="Enter how many days release the prizes" />
            </div>
            <div className="flex items-center gap-4 text-[#001356] mt-5">
                <p className="text-medium">Participation certificate will be provided ?</p>
                <div className="flex items-center gap-4">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Yes</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">No</label>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-[#001356] font-medium text-[14px]">Add Prizes</p>
                <button className='flex items-center gap-2 text-white bg-[#284B80] px-2 py-1 rounded-md'>
                    <FaPlus />
                    Add New
                </button>
            </div>
            {/* CARDS */}
            <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='bg-[#CFE5FF] h-[155px] p-4 rounded-md'>
                    <div className='flex gap-16 items-center'>
                        <p className='text-base font-medium text-[#001356]'>Rank</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-16 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Cash</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-6 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Certificate</p>
                        <input className='rounded-md' type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <div className='flex justify-end mb-8'>
                            <div className='bg-white p-2 inline-block rounded-md'>
                                <MdDelete className='text-red-500' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#CFE5FF] h-[155px] p-4 rounded-md'>
                    <div className='flex gap-16 items-center'>
                        <p className='text-base font-medium text-[#001356]'>Rank</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-16 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Cash</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-6 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Certificate</p>
                        <input className='rounded-md' type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <div className='flex justify-end mb-8'>
                            <div className='bg-white p-2 inline-block rounded-md'>
                                <MdDelete className='text-red-500' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#CFE5FF] h-[155px] p-4 rounded-md'>
                    <div className='flex gap-16 items-center'>
                        <p className='text-base font-medium text-[#001356]'>Rank</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-16 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Cash</p>
                        <input className='rounded-md' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-6 items-center mt-3'>
                        <p className='text-base font-medium text-[#001356]'>Certificate</p>
                        <input className='rounded-md' type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <div className='flex justify-end mb-8'>
                            <div className='bg-white p-2 inline-block rounded-md'>
                                <MdDelete className='text-red-500' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex items-center bg-[#284B80] text-white px-4 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <BsArrowLeftCircle size={20} />
                    <button>Previous</button>
                </div>
                <div className='flex items-center bg-[#284B80] text-white px-4 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <button onClick={handleNavigate} >Save</button>
                    <BsArrowRightCircle size={20} />
                </div>
            </div>
        </div>
    );
};

export default Rewards;