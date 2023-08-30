import { useForm } from 'react-hook-form';

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
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="col-span-3">
                    <img className="w-full" src="https://i.ibb.co/kDQ2FdD/Background-1.png" alt="" />
                </div>
                <div className="col-span-1">
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        <p className="text-center text-[#555555] font-semibold">Sign up into your account</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
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
                            <label className='text-[#555555]' htmlFor="password">Password :</label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', { required: true })}
                                className="block w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2"
                            />
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>
                        <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10 w-full">
                        Login now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;