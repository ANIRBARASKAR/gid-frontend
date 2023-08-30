import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
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
                <div className="col-span-1 mt-16">
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        
                    </div>
                    <div className='mt-8'>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                            <div className="mb-4">
                                <label className='text-[#555555]' htmlFor="new password">Enter New Password :</label>
                                <input
                                    type="new password"
                                    id="new password"
                                    {...register('new password', { required: true })}
                                    className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                />
                                {errors.email && <p className="text-red-500">Email is required</p>}
                            </div>

                            <div className="mb-4">
                                <label className='text-[#555555]' htmlFor="confirm password">Confirm New Password  :</label>
                                <input
                                    type="confirm password"
                                    id="confirm password"
                                    {...register('confirm password', { required: true })}
                                    className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                                />
                                {errors.password && <p className="text-red-500">Password is required</p>}
                            </div>

                        </form>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10 ">
                            Login now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;