import { useForm } from 'react-hook-form';
import { BiUserPlus } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';

const EditProfile = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mt-5 lg:ml-[300px]">
            <div>
                <div className='flex items-center gap-4'>
                    <h1 className="text-[#001356] text-[26px] font-semibold mx-6 md:mx-0">My Profile</h1>
                    <MdArrowForwardIos className="text-[#001356]" />
                    <h1 className="text-[#001356] text-[26px] font-semibold mx-6 md:mx-0">Edit Profile</h1>
                </div>
                <div>
                    <img className='mx-auto' src="https://i.ibb.co/wCyschy/Ellipse-1502.png" alt="" />
                    <div className='text-center mt-[-30px] ml-[80px]'>
                        <input type="file" name="upload-image" id="upload-image" className='sr-only' />
                        <div className='bg-white border border-gray-400 inline-block p-1 rounded-full'><label className='cursor-pointer' htmlFor="upload-image"><BiUserPlus size={20} /></label></div>
                    </div>
                    <p className='text-center'>Update your profile photo</p>
                </div>
            </div>
            <div className="mx-4 mt-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-12'>
                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                {...register('firstName', { required: true })}
                                placeholder='Enter your name'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                {...register('lastName', { required: true })}
                                placeholder='Enter your name'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="gender">Gender</label>
                            <select id="gender" {...register('gender')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-12 lg:mt-5'>
                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="email">Email Id</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: true })}
                                placeholder='info@xyz.com'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="mobile">Mobile No</label>
                            <input
                                type="tel"
                                id="mobile"
                                {...register('mobile', { required: true })}
                                placeholder='+91 - 98596 58000'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="address">Address</label>
                            <input
                                id="address"
                                {...register('address', { required: true })}
                                placeholder='Enter your Address'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-12 lg:mt-5'>
                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="birthdate">Birth Date</label>
                            <input
                                type="date"
                                id="birthdate"
                                {...register('birthdate', { required: true })}
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="about">About</label>
                            <input
                                id="about"
                                {...register('about')}
                                placeholder='Enter your about'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="country">Country</label>
                            <select id="country" {...register('country')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="uk">UK</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-12 lg:mt-5'>
                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="userType">User Type</label>
                            <select id="userType" {...register('userType')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="professional">Professional</option>
                            </select>
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="education">Domain of Education</label>
                            <select id="education" {...register('education')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="student">Engineering</option>
                                <option value="teacher">Engineering</option>
                                <option value="professional">Engineering</option>
                            </select>
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="gradYear">Year of Graduation</label>
                            <select id="gradYear" {...register('gradYear')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="student">Computer Application (BCA)</option>
                                <option value="teacher">Computer Application (BCA)</option>
                                <option value="professional">Computer Application (BCA)</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-12 lg:mt-5'>
                        <div className="mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="orgName">Institution / Organization Name :</label>
                            <input
                                type="text"
                                id="orgName"
                                {...register('orgName')}
                                placeholder='Enter your name..'
                                className="input w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2"
                            />
                        </div>

                        <div className="lg:mb-4">
                            <label className='text-[#555555] text-lg' htmlFor="qualification">Qualification</label>
                            <select id="qualification" {...register('qualification')} className="input text-[#555555] w-full bg-[#EBEBEB] py-2 px-2 rounded-md outline-none mt-2">
                                <option value="student">Computer Application (BCA)</option>
                                <option value="teacher">Computer Application (BCA)</option>
                                <option value="professional">Computer Application (BCA)</option>
                            </select>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <div>
                                <button type="submit" className="btn btn-primary bg-[#001356] text-white px-4 py-2 rounded-lg" style={{
                                    boxShadow: "0px -4px 4px 0px #000D3D inset"
                                }}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;