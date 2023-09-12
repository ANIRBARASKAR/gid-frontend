import { useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    // Add more options as needed
];

const SaveAndNext = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <div>
                <p className="text-[#001356] text-base font-medium">visibility of your opportunity*</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                    <div className="bg-[#E9F2FF] py-2 px-4 border border-[#001356] rounded-lg">
                        <p className="text-lg text-[#001356]">Public visibility</p>
                        <p className="text-sm text-[#001356] mt-2">With this, your opportunity goes live on the GID after being approved in public mode by our admins and all the users of GID will be able to see and participate in this opportunity as per eligibility criteria.</p>
                    </div>
                    <div className="py-2 px-4 border border-[#8D8D8D] rounded-lg">
                        <p className="text-lg text-[#8D8D8D]">Private visibility</p>
                        <p className="text-sm text-[#8D8D8D] mt-2">Private Visibility means the opportunity will NOT be publicly visible to any user on the GID website. Participants can access this opportunity using the opportunity URL only. (Recommended for intra-college/organization competitions, etc.)</p>
                    </div>
                </div>
            </div>
            {/* FROM - START - HERE */}
            <div className='mt-4'>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="opportunityType" className="block text-[#001356] text-base font-medium">Opportunity Type*</label>
                            <select
                                id="opportunityType"
                                name="opportunityType"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>

                        <div className="mb-4 text-[#001356]">
                            <label className="block text-[#001356] text-base font-medium">Domains*</label>
                            <div className="flex justify-between mt-1">
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="checkbox" name="domain1" />
                                    Art & Science
                                </label>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="checkbox" name="domain2" />
                                    Business
                                </label>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="checkbox" name="domain3" />
                                    Engineering
                                </label>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="checkbox" name="domain4" />
                                    Others
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className="block text-[#001356] text-base font-medium">Categories*</label>
                        <Select
                            isMulti
                            className='w-full border border-[#001356] rounded-lg mt-1'
                            options={options}
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Opportunity Title*</label>
                            <input
                                type="text"
                                id="opportunityTitle"
                                name="opportunityTitle"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="websiteUrl" className="block text-[#001356] text-base font-medium">Website URL</label>
                            <input
                                type="text"
                                id="websiteUrl"
                                name="websiteUrl"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="startDate" className="block text-[#001356] text-base font-medium">Start Date & Time*</label>
                            <input
                                type="datetime-local"
                                id="startDate"
                                name="startDate"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="endDate" className="block text-[#001356] text-base font-medium">End Date & Time*</label>
                            <input
                                type="datetime-local"
                                id="endDate"
                                name="endDate"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="registrationDate" className="block text-[#001356] text-base font-medium">Registration Date & Time*</label>
                            <input
                                type="datetime-local"
                                id="registrationDate"
                                name="registrationDate"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="registrationDate" className="block text-[#001356] text-base font-medium">Registration Date & Time*</label>
                            <input
                                type="datetime-local"
                                id="registrationDate"
                                name="registrationDate"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="logo" className="block text-[#001356] text-base font-medium">Logo (Upload)</label>
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sliderBanner" className="block text-[#001356] text-base font-medium">Slider Banner (Upload)</label>
                            <input
                                type="file"
                                id="sliderBanner"
                                name="sliderBanner"
                                accept="image/*"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label className="block text-[#001356] text-base font-medium">Gender*</label>
                            <div className='grid grid-cols-3 ml-4'>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="radio" name="gender" value="male" />
                                    Male
                                </label>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="radio" name="gender" value="female" />
                                    Female
                                </label>
                                <label className="mr-4 flex items-center gap-2">
                                    <input type="radio" name="gender" value="female" />
                                    Others
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="registrationCount" className="block text-[#001356] text-base font-medium">Limit Registration Count*</label>
                            <input
                                type="text"
                                id="registrationCount"
                                name="registrationCount"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 text-[#001356]'>
                        <div className="mb-4 p-2">
                            <label className="block text-base font-medium">Mode of Payment</label>
                            <div className='grid grid-cols-2 gap-4 w-full border border-[#001356] rounded-lg p-1 mt-1'>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Free Event
                                    </label>
                                </div>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="female" />
                                        Payable Event
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="charge"
                                            name="charge"
                                            className="w-full border-b border-[#001356] p-1 my-4 placeholder-[#001356]"
                                            placeholder='Enter the charge'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-base font-medium">Mode of Event</label>
                            <div className='grid grid-cols-2 gap-8 w-full border border-[#001356] rounded-lg p-1 mt-1'>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Online Event
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            className="w-full border-b border-[#001356] p-1 mt-2 placeholder-[#001356]"
                                            placeholder='Country*'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="w-full border-b border-[#001356] p-1 my-2 placeholder-[#001356]"
                                            placeholder='City*'
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Offline Event
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            className="w-full border-b border-[#001356] p-1 mt-2 placeholder-[#001356]"
                                            placeholder='State*'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            className="w-full border-b border-[#001356] p-1 my-2 placeholder-[#001356]"
                                            placeholder='Location*'
                                        />
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-base font-medium">Participation</label>
                            <div className='grid grid-cols-3 gap-8 w-full border border-[#001356] rounded-lg p-1 mt-1'>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Individual
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            className="w-full border-b border-[#001356] p-1 my-2 placeholder-[#001356]"
                                            placeholder='Location*'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="female" />
                                        Team
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            className="w-full border-b border-[#001356] p-1 my-2 placeholder-[#001356]"
                                            placeholder='Location*'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 text-[#001356]">
                        <label className="block text-[#001356] text-base font-medium">Opportunity open for*</label>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div className='col-span-1'>
                                <div className="mt-1">
                                    <div className='flex items-center gap-4 '>
                                        <label className="mr-4 flex items-center gap-2">
                                            <input type="checkbox" name="domain1" />
                                            School student
                                        </label>
                                        <label className="mr-4 flex items-center gap-2">
                                            <input type="checkbox" name="domain2" />
                                            College student
                                        </label>
                                    </div>
                                    <div className='flex items-center gap-4 mt-2'>
                                        <label className="mr-4 flex items-center gap-2">
                                            <input type="checkbox" name="domain3" />
                                            Working professionals
                                        </label>
                                        <label className="mr-4 flex items-center gap-2">
                                            <input type="checkbox" name="domain4" />
                                            Open for All
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                {/* Selected Students Start */}
                                <div className='mt-4 border border-[#001356] rounded-md cursor-pointer'>
                                    <div className='px-2 cursor-pointer'>
                                        <p className='text-[#001356] text-lg'>Select school student</p>
                                        <div className='grid grid-cols-7 gap-4 mt-1 pb-2 text-sm'>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>1st</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2nd</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>3rd</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>4th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>5th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>6th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>7th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>8th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>9th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>10th</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>11th com.</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>12th com.</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>11th sci</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>12th sci</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Selected Students End */}
                                {/* Selected college Start */}
                                <div className='mt-4 border border-[#001356] rounded-md cursor-pointer'>
                                    <div className='px-2'>
                                        <p className='text-[#001356] text-lg'>Select college student</p>
                                        <div className='grid grid-cols-5 gap-4 mt-1 pb-2 text-sm'>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Management</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Science & technology</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Diploma</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Computer Application</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Science & Arts</p>
                                        </div>
                                        <div className='flex items-center gap-4 mt-2'>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Computer</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Electrical</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Civil</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Mechanical</p>
                                        </div>
                                        <div className='flex items-center gap-4 my-3'>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2023</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2024</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2025</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2026</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2027</p>
                                            <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2028</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Selected college End */}
                                {/* Select working professionals experience Start */}
                                <div className='mt-4 border border-[#001356] rounded-md cursor-pointer'>
                                    <div className='px-2'>
                                        <p className='text-[#001356] text-lg'>Select working professionals experience</p>
                                        <div className='grid grid-cols-7 gap-4 mt-1 pb-2 text-sm'>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>All</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Upto 11 months</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>1 year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>3year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>4year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>5year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>6year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>7year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>8year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>9year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>10year</p>
                                            <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>10years</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Select working professionals experience END */}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">About Opportunity*</label>
                        <input
                            type="text"
                            id="opportunityTitle"
                            name="opportunityTitle"
                            className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="bg-[#284B80] text-white px-8 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Save & Next
                        </button>
                    </div>
                </form>
            </div>
            {/* FROM - END - HERE */}
        </div>
    );
};

export default SaveAndNext;