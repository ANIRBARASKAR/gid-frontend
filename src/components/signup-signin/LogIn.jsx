import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline, MdLockOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className='container mx-auto my-6'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <img className=" " src="https://i.ibb.co/kDQ2FdD/Background-1.png" alt="" />
                </div>
                <div className="col-span-1 mt-12">
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        <p className="text-center text-[#555555] font-semibold">Sign up into your account</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                        <div className="mb-4">
                            <label className='text-[#555555]' htmlFor="email">Email :</label>
                            <div className='flex items-center'>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                    className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                />
                                <div className='bg-[#284B80] text-white pt-3 pb-2 mt-2 px-2 rounded-md'>
                                    <MdOutlineMailOutline size={20} />
                                </div>
                            </div>
                            {errors.email && <p className="text-red-500">Email is required</p>}
                        </div>

                        <div className="mb-4">
                            <label className='text-[#555555]' htmlFor="password">Password :</label>
                            <div className='flex items-center'>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', { required: true })}
                                    className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                />
                                <div className='bg-[#284B80] text-white pt-3 pb-2 mt-2 px-2 rounded-md'>
                                    <MdLockOutline size={20} />
                                </div>
                            </div>
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>
                        <p className='flex justify-end'><small className='text-[#284B80] border-b border-[#284B80] font-semibold '>Forgot password?</small></p>
                        <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10 w-full">
                            Login now
                        </button>
                    </form>
                    <div className='flex justify-center mt-2'>
                        <div className='flex items-center gap-4'>
                            <div className='w-32 h-[1px] bg-gray-400'></div>
                            <p className='text-gray-400'>OR</p>
                            <div className='w-32 h-[1px] bg-gray-400'></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center mt-8'>
                            <button className='flex items-center gap-4 bg-[#F3F9FA] px-16 py-3 rounded-md'>
                                <FcGoogle size={20} />
                                <p className='text-[#313957] text-sm font-semibold'>Sign in with Google</p>
                            </button>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button className='flex items-center gap-2 bg-[#F3F9FA] px-16 py-3 rounded-md'>
                                <FaFacebook className='text-blue-600' size={20} />
                                <p className='text-[#313957] text-sm font-semibold'>Sign in with Facebook</p>
                            </button>
                        </div>
                    </div>
                    <p className='text-center text-sm mt-8'>Do not you have an account? <span className='text-blue-600'><Link >Sign up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;