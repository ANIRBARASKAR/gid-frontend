import { useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

const GroupEventDetails = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}>
                <p className="text-[#001356] text-[16px] font-medium">Group Event Create</p>


                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8'>
                            <div className="mb-4">
                                <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Group Name*</label>
                                <input
                                    type="text"
                                    id="opportunityTitle"
                                    name="opportunityTitle"
                                    placeholder='Enter Title'
                                    className="w-full placeholder-[#001356] border border-[#001356] rounded-md px-2 py-1 mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="logo" className="block text-[#001356] text-base font-medium">Group Image</label>
                                <input
                                    type="file"
                                    id="groupimage"
                                    name="groupimage"
                                    accept="image/*"
                                    className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8'>
                            <div className="mb-4">
                                <label htmlFor="startDate" className="block text-[#001356] text-base font-medium">Start Date & Time*</label>
                                <input
                                    type="text"
                                    id="startDate"
                                    name="startDate"
                                    placeholder='Enter Start Date & Time'
                                    className="w-full placeholder-[#001356] border border-[#001356] rounded-lg px-2 py-1 mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="endDate" className="block text-[#001356] text-base font-medium">End Date & Time*</label>
                                <input
                                    type="text"
                                    id="endDate"
                                    name="endDate"
                                    placeholder='Enter End Date & Time'
                                    className="w-full placeholder-[#001356] border border-[#001356] rounded-lg px-2 py-1 mt-1"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8'>
                            <div>
                                <div className='mb-3'>
                                    <label className="block text-[#001356] text-base font-medium">Types of Event*</label>
                                    <Select
                                        isMulti
                                        className='w-full border border-[#001356] rounded-lg mt-1'
                                        options={options}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Vanue*</label>
                                    <input
                                        type="text"
                                        id="vanue"
                                        name="vanue"
                                        placeholder='Enter Vanue'
                                        className="w-full placeholder-[#001356] border border-[#001356] rounded-md px-2 py-1 mt-1"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Organizer*</label>
                                    <input
                                        type="text"
                                        id="organizer"
                                        name="organizer"
                                        placeholder='Enter Organizer'
                                        className="w-full placeholder-[#001356] border border-[#001356] rounded-md px-2 py-1 mt-1"
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">About</label>
                                    <textarea
                                        id="description"
                                        className="input w-full border border-[#001356] rounded-md h-[103px] lg:h-[175px] px-2 mb-4 mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GroupEventDetails;