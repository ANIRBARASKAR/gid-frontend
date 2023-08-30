import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
                <div>
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        <p className="text-center text-[#555555]  font-semibold">Sign up into your account</p>
                    </div>
                    <div className='mt-12'>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                            <div className='grid grid-cols-2 gap-8'>
                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="firstName">First Name :</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        {...register('firstName', { required: true })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500">First name is required</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="lastName">Last Name :</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        {...register('lastName', { required: true })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.lastName && <p className="text-red-500">Last name is required</p>}
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-8'>
                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="email">Email :</label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email', { required: true })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.email && <p className="text-red-500">Email is required</p>}
                                </div>

                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="phone">Phone Number :</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        {...register('phone', { required: true })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.phone && <p className="text-red-500">Phone number is required</p>}
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-8'>
                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="password">Password :</label>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register('password', { required: true })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.password && <p className="text-red-500">Password is required</p>}
                                </div>

                                <div className="mb-4">
                                    <label className='text-[#555555]' htmlFor="confirmPassword">Confirm Password :</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        {...register('confirmPassword', {
                                            required: true,
                                            validate: (value) => value === document.getElementById('password').value,
                                        })}
                                        className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                    />
                                    {errors.confirmPassword?.type === 'required' && (
                                        <p className="text-red-500">Confirm Password is required</p>
                                    )}
                                    {errors.confirmPassword?.type === 'validate' && (
                                        <p className="text-red-500">Passwords do not match</p>
                                    )}
                                </div>
                            </div>

                            <div className='flex gap-4 text-[#555555]'>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    <p className='text-base font-semibold'>Privacy Policy*</p>
                                </div>
                            </div>
                            <p className='ml-7 text-[#555555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>

                            <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
                <div className='flex justify-center px-4 lg:px-0'>
                    <div>
                        <img className="relative" src="https://i.ibb.co/W54yPTf/Vector-5.png" alt="" />
                        <img className="absolute mt-[-450px] ml-[-40px] lg:mt-[-500px] lg:ml-[-50px]" src="https://i.ibb.co/S5bgtX3/sign-up-01-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;