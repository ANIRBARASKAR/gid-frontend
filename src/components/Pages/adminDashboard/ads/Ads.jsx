import { useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    // Add more options as needed
];

const Ads = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <div className="bg-white mt-8 py-8 px-6 rounded-lg " style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <h1 className="text-[#001356] text-[26px] font-bold">Ads Setting</h1>
                <div className='mt-8'>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='mb-4'>
                            <label className="block text-[#001356] text-base font-medium">Select the page</label>
                            <Select
                                isMulti
                                className='w-full md:w-[50%] border border-[#001356] rounded-lg mt-1'
                                options={options}
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="websiteUrl" className="block text-[#001356] text-base font-medium">Advertise 1 Website</label>
                            <input
                                type="text"
                                id="websiteUrl"
                                name="websiteUrl"
                                placeholder='paste link here'
                                className="w-full md:w-[50%] border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="banner" className="block text-[#001356] text-base font-medium">Advertise 1 Banner</label>
                            <input
                                type="file"
                                id="banner"
                                name="banner"
                                accept="image/*"
                                className="w-full md:w-[50%] border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div>
                            <img className='w-full h-[60px] md:w-[728px] md:h-[90px] relative' src="https://i.ibb.co/TBRBXD7/Rectangle-5896.png" alt="" />
                            <p className='text-white text-[20px] font-medium mt-[-45px] md:mt-[-55px]  ml-[25%] md:ml-[18%] absolute'>ADVERTISE 1</p>
                        </div>
                        <div className="mb-4 mt-8">
                            <label htmlFor="websiteUrl" className="block text-[#001356] text-base font-medium">Advertise 1 Website</label>
                            <input
                                type="text"
                                id="websiteUrl"
                                name="websiteUrl"
                                placeholder='paste link here'
                                className="w-full md:w-[50%] border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="banner" className="block text-[#001356] text-base font-medium">Advertise 1 Banner</label>
                            <input
                                type="file"
                                id="banner"
                                name="banner"
                                accept="image/*"
                                className="w-full md:w-[50%] border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div>
                            <img className='w-[300px] h-[250px] relative' src="https://i.ibb.co/8mRDKMB/Rectangle-6051.png" alt="" />
                            <p className='text-white text-[20px] font-medium absolute mt-[-150px] ml-[18%] md:ml-[5%]'>ADVERTISE 2</p>
                        </div>
                        <div className='flex items-center gap-8 mt-8'>
                            <button
                                type="submit"
                                className="bg-[#001356] text-white px-8 py-2 rounded-md"
                            >
                                Submit
                            </button>
                            <button
                                type="submit"
                                className="text-[#001356] font-medium border border-[#001356] rounded-md px-8 py-2"
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

export default Ads;