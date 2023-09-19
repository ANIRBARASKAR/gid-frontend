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
                                className='w-[50%] border border-[#001356] rounded-lg mt-1'
                                options={options}
                            />
                        </div>
                        <div className="mb-4 mt-8">
                            <label htmlFor="websiteUrl" className="block text-[#001356] text-base font-medium">Advertise 1 Website</label>
                            <input
                                type="text"
                                id="websiteUrl"
                                name="websiteUrl"
                                placeholder='paste link here'
                                className="w-[50%] border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4 mt-8">
                            <label htmlFor="banner" className="block text-[#001356] text-base font-medium">Advertise 1 Banner</label>
                            <input
                                type="file"
                                id="banner"
                                name="banner"
                                accept="image/*"
                                className="w-[50%] border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ads;