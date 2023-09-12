import { BsArrowLeftCircle } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    // Add more options as needed
];

const NextRound = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <div className="flex justify-between items-center">
                <p className="text-[12px] md:text-base text-[#001356] font-medium">Round Create</p>
                <div className='flex items-center bg-[#284B80] text-white px-4 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <BsArrowLeftCircle size={20} />
                    <button>Back</button>
                </div>
            </div>
            {/* Form START  */}
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Round title*</label>
                            <input
                                type="text"
                                id="roundTitle"
                                name="roundTitle"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Round Start Date & Time*</label>
                            <input
                                type="text"
                                id="roundStartDateAndTime"
                                name="roundStartDateAndTime"
                                placeholder="Enter Round Start Date & Time"
                                className="w-full border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Round End Date & Time*</label>
                            <input
                                type="text"
                                id="roundEndDateAndTime"
                                name="roundEndDateAndTime"
                                placeholder="Enter Round End Date & Time"
                                className="w-full border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Description*</label>
                            <textarea
                                id="description"
                                className="input w-full border border-[#001356] rounded-md h-[103px] lg:h-[103px] px-2 mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Round Type</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-3">
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Quiz
                                    </label>
                                </div>
                                <div>
                                    <label className="mr-4 flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" />
                                        Others
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <div>
                        <label className="mr-4 flex items-center gap-2">
                            <input type="checkbox" name="domain1" />
                            If any document needed ?
                        </label>
                    </div>

                    <div className='mb-4 mt-2'>
                        <label className="block text-[#001356] text-base font-medium">Document Name*</label>
                        <Select
                            isMulti
                            className=' w-full lg:w-[50%] border border-[#001356] rounded-lg mt-1'
                            options={options}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                    <div className="mb-4">
                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Document Submission Start Date & Time*</label>
                        <input
                            type="text"
                            id="startDateAndTime"
                            name="startDateAndTime"
                            placeholder="Enter Start Date & Time"
                            className="w-full border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Document Submission End Date & Time*</label>
                        <input
                            type="text"
                            id="endDateAndTime"
                            name="endDateAndTime"
                            placeholder="Enter End Date & Time"
                            className="w-full border border-[#001356] placeholder-[#001356] rounded-lg p-1 mt-1"
                        />
                    </div>
                </div>


                <div className='flex justify-center mt-4'>
                    <button
                        type="submit"
                        className="bg-[#284B80] text-white px-8 py-2 rounded-lg hover:bg-blue-600"
                        style={{
                            boxShadow: "0px 4px 4px 0px #00135640"
                        }}>
                        Submit
                    </button>
                </div>
            </form>
            {/* Form END  */}
        </div>
    );
};

export default NextRound;