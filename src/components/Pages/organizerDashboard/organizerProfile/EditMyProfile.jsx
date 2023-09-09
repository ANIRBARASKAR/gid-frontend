import { AiOutlineEdit, AiOutlineYoutube } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import { useForm } from 'react-hook-form';
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

const EditMyProfile = () => {
    // FROM
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-semibold">Edit Profile</h1>
                <img src="https://i.ibb.co/6vJ6BsP/Account.png" alt="" />
            </div>
            <div className="bg-white">
                <div className="flex justify-between items-center mt-8 ">
                    <div className="">
                        <div className="flex items-center gap-4">
                            <div>
                                <img src="https://i.ibb.co/crmkCd9/Polygon-1.png" alt="" />
                                <BsArrowLeftCircle size={20} className="text-white mt-[-35px] ml-[15px]" />
                            </div>
                            <p className="text-lg">Cancel</p>
                        </div>
                        <div className="flex items-center gap-4 mt-8 mx-4">
                            <div>
                                <img src="https://i.ibb.co/L9JXGRr/Ellipse-6.png relative" alt="" />
                                <div className='bg-white border border-gray-400 inline-block p-1 rounded-full mt-[-20px] ml-[50px] absolute cursor-pointer'><AiOutlineEdit size={15} /></div>
                            </div>
                            <p className="text-sm text-[#001356] font-semibold">edit your profile photo</p>
                        </div>
                    </div>
                    <div className="mx-4">
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
                {/* EDIT PROFILE FORM START FROM HERE */}
                <div className="bg-[#284B80] py-4 mx-4 mt-5 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mx-8">
                            {/* left side */}
                            <div className="col-span-3 mt-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <input
                                            {...register('firstName')}
                                            id="firstName"
                                            type="text"
                                            className="input w-full px-2 py-2 rounded-lg"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            {...register('lastName')}
                                            id="lastName"
                                            type="text"
                                            className="input w-full px-2 py-2 rounded-lg"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <input
                                        {...register('email')}
                                        id="email"
                                        type="text"
                                        className="input w-full px-2 py-2 rounded-lg"
                                        placeholder="Email ID"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <input
                                            {...register('mobile')}
                                            id="mobile"
                                            type="text"
                                            className="input w-full px-2 py-2 rounded-lg"
                                            placeholder="Mobile no."
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            {...register('birthdate')}
                                            id="birthdate"
                                            type="text"
                                            className="input w-full px-2 py-2 rounded-lg"
                                            placeholder="Birthdate"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <select {...register('categories')} className="input w-full px-2 py-2 rounded-lg text-gray-400">
                                        <option value="">Categories</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>

                                <div className="bg-white py-6 px-4 rounded-md">
                                    <p className="text-gray-500 ">Social Media Links</p>
                                    <div className="mx-4 py-10">
                                        <div className="flex items-center gap-2">
                                            <RxTwitterLogo className="text-[#284B80]" size={25} />
                                            <input
                                                {...register('twitter')}
                                                id="twitter"
                                                type="text"
                                                className="input w-full border-b border-gray-400 mb-4"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaInstagram className="text-[#284B80]" size={25} />
                                            <input
                                                {...register('instagram')}
                                                id="instagram"
                                                type="text"
                                                className="input w-full border-b border-gray-400 mb-4"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PiFacebookLogo className="text-[#284B80]" size={25} />
                                            <input
                                                {...register('facebook')}
                                                id="facebook"
                                                type="text"
                                                className="input w-full border-b border-gray-400 mb-4"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AiOutlineYoutube className="text-[#284B80]" size={25} />
                                            <input
                                                {...register('youtube')}
                                                id="youtube"
                                                type="text"
                                                className="input w-full border-b border-gray-400 mb-4"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TbWorldWww className="text-[#284B80]" size={25} />
                                            <input
                                                {...register('linkedin')}
                                                id="linkedin"
                                                type="text"
                                                className="input w-full border-b border-gray-400 mb-4"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Left side end */}
                            {/* Right-side start */}
                            <div className="col-span-1 mt-5">
                                <textarea
                                    {...register('about')}
                                    id="about"
                                    className="input w-full rounded-md h-[70px] lg:h-[211px] px-2 mb-4"
                                    placeholder="About"
                                />
                                <select {...register('country')} id="country" className="input w-full px-2 py-2 rounded-lg text-gray-400 mb-4">
                                    <option value="">Country</option>
                                    <option value="usa">USA</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">UK</option>
                                    <option value="australia">Australia</option>
                                </select>

                                <select {...register('gender')} id="gender" className="input w-full px-2 py-2 rounded-lg text-gray-400 mb-4">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <input
                                    {...register('experience')}
                                    id="experience"
                                    type="text"
                                    className="input w-full px-2 py-2 rounded-lg mb-4"
                                    placeholder="Experience"
                                />
                                <input
                                    {...register('mapLink')}
                                    id="mapLink"
                                    type="text"
                                    className="input w-full px-2 py-2 rounded-lg mb-4"
                                    placeholder="Map Link"
                                />
                                <input
                                    {...register('youtubeLink')}
                                    id="youtubeLink"
                                    type="text"
                                    className="input w-full px-2 py-2 rounded-lg mb-4"
                                    placeholder="youtube video Link"
                                />
                            </div>
                            {/* Right-side End */}
                        </div>
                        <div className="mt-4 mx-8">
                            <button
                                type="submit"
                                className=" text-white font-semibold py-2 px-4 rounded text-[22px] border-2 border-white w-full"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
                {/* EDIT PROFILE FORM END FROM HERE */}
            </div>
        </div>
    );
};

export default EditMyProfile;