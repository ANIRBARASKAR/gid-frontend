import { AiOutlineEdit } from "react-icons/ai";

const EditMyProfile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-semibold">Edit Profile</h1>
                <img src="https://i.ibb.co/6vJ6BsP/Account.png" alt="" />
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <img src="https://i.ibb.co/crmkCd9/Polygon-1.png" alt="" />
                    <p>Cancel</p>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <img src="https://i.ibb.co/L9JXGRr/Ellipse-6.png relative" alt="" />
                        <div className='bg-white border border-gray-400 inline-block p-1 rounded-full mt-[-20px] ml-[50px] absolute cursor-pointer'><AiOutlineEdit size={15} /></div>
                    </div>
                    <p className="text-sm text-[#001356] font-semibold">edit your profile photo</p>
                </div>
            </div>
        </div>
    );
};

export default EditMyProfile;