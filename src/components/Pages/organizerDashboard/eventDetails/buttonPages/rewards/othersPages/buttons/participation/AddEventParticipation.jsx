import { useForm, Controller } from 'react-hook-form';

const AddEventParticipation = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='lg:pr-6'>
            <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}>
                <p className="text-[16px] font-medium text-[#001356]">Add Event Participation</p>

                <div className='mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-[#001356] font-medium mb-2">
                                    Name
                                </label>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text"
                                        placeholder='Enter name'
                                        className="input border border-[#001356] rounded-md w-full placeholder-[#001356] px-2 py-1" />}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#001356] font-medium mb-2">
                                    Email
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="email"
                                        className="input border border-[#001356] rounded-md w-full placeholder-[#001356] px-2 py-1" />}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="mobile" className="block text-[#001356] font-medium mb-2">
                                    Mobile No
                                </label>
                                <Controller
                                    name="mobile"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="tel"
                                        className="input border border-[#001356] rounded-md w-full placeholder-[#001356] px-2 py-1" />}
                                />
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
                            <div className="mb-4">
                                <label className="block text-[#001356] font-medium mb-2">Organization</label>
                                <Controller
                                    name="organization"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text"
                                        className="input border border-[#001356] rounded-md w-full placeholder-[#001356] px-2 py-1" />}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-[#001356] font-medium mb-2">Gender</label>
                                <div className="space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="male" className="mr-2" />
                                        Male
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="female" className="mr-2" />
                                        Female
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="other" className="mr-2" />
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-5'>
                            <button type="Submit" className="px-8 py-1 rounded bg-[#284B80] text-white " style={{
                                boxShadow: "0px 4px 4px 0px #00135640"
                            }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddEventParticipation;