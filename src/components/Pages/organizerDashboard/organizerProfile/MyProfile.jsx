import { AiOutlineEdit } from "react-icons/ai";

const MyProfile = () => {
    return (
        <>
            <div>
                <div className="block lg:hidden">
                    <img className="w-full" src="https://i.ibb.co/yh75v2P/Rectangle-1.png" alt="" />
                </div>
                <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                    <h1 className="text-[#001356] text-[26px] font-semibold">My Profile</h1>
                    <img src="https://i.ibb.co/6vJ6BsP/Account.png" alt="" />
                </div>
                {/* PROFILE */}
                <div className="mt-8 grid lg:grid-cols-2">
                    <div>
                        <div className="flex gap-4">
                            <img src="https://i.ibb.co/L9JXGRr/Ellipse-6.png" alt="" />
                            <div>
                                <h1 className="text-[30px] font-bold text-[#001356]">Organization Name</h1>
                                <p className="text-sm text-gray-500">www.abc.com</p>
                            </div>
                        </div>
                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis. Nulla facilisi. Nunc luctus, ex in faucibus cursus, turpis est eleifend lorem, sit amet eleifend dui libero.</p>
                        <div className="flex items-center my-5 lg:mt-32 gap-3">
                            <button className="flex items-center gap-2 bg-[#284B80] text-white px-2 py-1 rounded-md">
                                <AiOutlineEdit />
                                Edit Profile
                            </button>
                            <div className="flex items-center gap-3">
                                <img src="https://i.ibb.co/RTdthh5/Twitter-Circled.png" alt="" />
                                <img src="https://i.ibb.co/wCqykCw/Instagram.png" alt="" />
                                <img src="https://i.ibb.co/rQXswFy/Facebook-Circled.png" alt="" />
                                <img src="https://i.ibb.co/KGPXXFj/YouTube.png" alt="" />
                                <img src="https://i.ibb.co/BsRMX6y/LinkedIn.png" alt="" />
                            </div>
                        </div>
                        <div className="lg:mt-8">
                            <div className="bg-[#C9C9C9] h-16 w-[95%] ml-4" style={{
                                boxShadow: "0px 4px 4px 0px #00000040"
                            }}></div>
                            <div className="bg-[#284B80] h-16 w-[95%] mt-[-50px]" style={{
                                boxShadow: "0px 4px 4px 0px #00000040"
                            }}>
                                <div className="grid grid-cols-3">
                                    <div className="mt-3">
                                        <img className="mx-auto" src="https://i.ibb.co/mRHhk5h/India-IN.png" alt="" />
                                        <p className="text-white text-xs text-center mt-1">India</p>
                                    </div>
                                    <div className="mt-3">
                                        <img className="mx-auto" src="https://i.ibb.co/PTN9B9w/Event-Accepted.png" alt="" />
                                        <p className="text-white text-xs text-center ">16 Events</p>
                                    </div>
                                    <div className="mt-3">
                                        <img className="mx-auto" src="https://i.ibb.co/wNmyLBT/Checked-User-Male.png" alt="" />
                                        <p className="text-white text-xs text-center ">85 Followers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hidden lg:block">
                            <div className="flex justify-end">
                                <img src="https://i.ibb.co/1G4VYML/Rectangle-2.png" alt="" />
                            </div>
                            <img className="mt-[-380px] ml-[50px]" src="https://i.ibb.co/yh75v2P/Rectangle-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;