import { useForm } from 'react-hook-form';

const AddUser = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <h1 className="text-[#001356] text-[26px] font-bold">Add User</h1>
                {/* FORM START */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-[#001356] text-base font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#001356] text-base font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5'>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-[#001356] text-base font-medium">Password</label>
                                <input
                                    type="Password"
                                    id="Password"
                                    name="Password"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="ConfirmPassword" className="block text-[#001356] text-base font-medium">Confirm Password</label>
                                <input
                                    type="ConfirmPassword"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full border border-[#001356] rounded-md p-1 mt-1"
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                                <button
                                    type="submit"
                                    className="bg-[#001356] text-white px-8 py-2 rounded-lg flex items-center gap-4"
                                >
                                    Submit
                                </button>
                                <button
                                    type="submit"
                                    className="border border-[#001356] text-[#001356] font-semibold px-8 py-2 rounded-lg flex items-center gap-4"
                                >
                                    Reset
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;