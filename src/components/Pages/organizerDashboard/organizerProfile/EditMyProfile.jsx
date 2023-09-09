import { AiOutlineEdit } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";

const EditMyProfile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">

            <div>
                <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                    <h1 className="text-[#001356] text-[26px] font-semibold">Edit Profile</h1>
                    <img src="https://i.ibb.co/6vJ6BsP/Account.png" alt="" />
                </div>
                <div className="flex justify-between items-center mt-8 bg-white">
                    <div className="">
                        <div className="flex items-center gap-4">
                            <div>
                                <img src="https://i.ibb.co/crmkCd9/Polygon-1.png" alt="" />
                                <BsArrowLeftCircle size={20} className="text-white mt-[-35px] ml-[15px]" />
                            </div>
                            <p className="text-lg">Cancel</p>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div>
                                <img src="https://i.ibb.co/L9JXGRr/Ellipse-6.png relative" alt="" />
                                <div className='bg-white border border-gray-400 inline-block p-1 rounded-full mt-[-20px] ml-[50px] absolute cursor-pointer'><AiOutlineEdit size={15} /></div>
                            </div>
                            <p className="text-sm text-[#001356] font-semibold">edit your profile photo</p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[228px] h-[129px]" src="https://i.ibb.co/VvMgpYH/Rectangle-1-1.png" alt="" />
                        <div className="flex gap-3 items-center text-[#001356] mt-[-40px] ml-[10px]">
                            <div className='bg-white border border-gray-400 inline-block p-1 rounded-full cursor-pointer' style={{
                                boxShadow: "0px 4px 4px 0px #00000040"
                            }}>
                                <AiOutlineEdit className="w-[10px] h-[10px] lg:w-[20px] lg:h-[20px]" />
                            </div>
                            <p className="lg:bg-white text-semibold px-3 py-1 rounded-full text-sm cursor-pointer">edit your cover photo</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditMyProfile;