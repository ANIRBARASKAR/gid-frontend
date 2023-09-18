import { useForm } from 'react-hook-form';
import { BsToggleOn } from 'react-icons/bs';

const AddOrganization = () => {

    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <h1 className="text-[#001356] text-[26px] font-bold">Add Organization</h1>
                {/* FORM START */}
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
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="Password" className="block text-[#001356] text-base font-medium">Password</label>
                            <input
                                type="Password"
                                id="Password"
                                name="Password"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile no" className="block text-[#001356] text-base font-medium">Mobile No.</label>
                            <input
                                type="mobileno"
                                id="mobileno"
                                name="mobileno"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5'>
                        <div className="mb-4">
                            <label htmlFor="Address" className="block text-[#001356] text-base font-medium">Address</label>
                            <textarea
                                id="address"
                                className="input w-full border border-[#001356] rounded-md h-[55px] px-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Intro" className="block text-[#001356] text-base font-medium">Intro</label>
                            <textarea
                                id="intro"
                                className="input w-full border border-[#001356] rounded-md h-[55px] px-2"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
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
                        <div className="mb-4">
                            <label htmlFor="youtubeUrl" className="block text-[#001356] text-base font-medium">Youtube Link</label>
                            <input
                                type="text"
                                id="youtubeUrl"
                                name="youtubeUrl"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="linkedInUrl" className="block text-[#001356] text-base font-medium">Linked in Link</label>
                            <input
                                type="text"
                                id="linkedInUrl"
                                name="linkedInUrl"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="googleMapUrl" className="block text-[#001356] text-base font-medium">Google Map Link</label>
                            <input
                                type="text"
                                id="googleMapl"
                                name="googleMapUrl"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="websiteUrl" className="block text-[#001356] text-base font-medium">Website</label>
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
                            <label htmlFor="About" className="block text-[#001356] text-base font-medium">About</label>
                            <textarea
                                id="about"
                                className="input w-full border border-[#001356] rounded-md h-[55px] px-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="vissionMission" className="block text-[#001356] text-base font-medium">Vision Mission</label>
                            <textarea
                                id="vissionMission"
                                className="input w-full border border-[#001356] rounded-md h-[55px] px-2"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="insdusrtyType" className="block text-[#001356] text-base font-medium">Insdusrty Type</label>
                            <input
                                type="text"
                                id="insdusrtyType"
                                name="insdusrtyType"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="FounderName" className="block text-[#001356] text-base font-medium">Founder name</label>
                            <input
                                type="text"
                                id="founderName"
                                name="founderName"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="FounderYear" className="block text-[#001356] text-base font-medium">Founder year</label>
                            <input
                                type="text"
                                id="founderYear"
                                name="founderYear"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="headquarterType" className="block text-[#001356] text-base font-medium">Headquarter Type</label>
                            <input
                                type="text"
                                id="headquarterType"
                                name="headquarterType"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="headquarterType" className="block text-[#001356] text-base font-medium">Status</label>
                            <BsToggleOn className="text-green-700 cursor-pointer" size={30} />
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
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
                {/* FORM End */}
            </div>
        </div>
    );
};

export default AddOrganization;