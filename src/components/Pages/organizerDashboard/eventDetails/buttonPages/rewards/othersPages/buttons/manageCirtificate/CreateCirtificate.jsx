import { useForm } from 'react-hook-form';

const CreateCirtificate = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <p className="text-[16px] font-medium text-[#001356]">Create Certificate</p>

            {/* FROM - START - HERE */}
            <div className='mt-4'>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Round*</label>
                            <input
                                type="text"
                                id="round"
                                name="round"
                                placeholder='Enter Round'
                                className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Title*</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder='Enter Title'
                                className="w-full border border-[#001356] placeholder-[#001356] rounded-md px-2 p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        <div className="mb-4">
                            <label htmlFor="logo" className="block text-[#001356] text-base font-medium">Blank Image*</label>
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div>
                    </div>
                    {/* =============================== */}
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
                        {/* FIRST */}
                        <div>
                            <label className="mr-4 flex items-center gap-2 text-[#001356]">
                                <input type="radio" name="gender" value="male" />
                                First Coordinate
                            </label>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Character limit</label>
                                        <input
                                            type="text"
                                            id="characterlimit"
                                            name="characterlimit"
                                            placeholder='Enter Character limit'
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">X - Coordinate</label>
                                        <input
                                            type="text"
                                            id="xCoordinator"
                                            name="xCoordinator"
                                            placeholder='Enter X - Coordinate'
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Font Size</label>
                                        <input
                                            type="text"
                                            id="fontSize"
                                            name="fontSize"
                                            placeholder='Enter Font Size'
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>

                                </div>
                                {/* ************************************** */}
                                <div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Name Rotate</label>
                                        <input
                                            type="text"
                                            id="nameRotate"
                                            name="nameRotate"
                                            placeholder='Enter Rotate'
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Y - Coordinate</label>
                                        <input
                                            type="text"
                                            id="yCoordinator"
                                            name="yCoordinator"
                                            placeholder='Enter Y - Coordinate'
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="opportunityTitle" className="block text-[#001356] text-base font-medium">Color</label>
                                        <input
                                            type="text"
                                            id="color"
                                            name="color"
                                            className="w-full border border-[#001356] placeholder-[#001356] px-2 rounded-md p-1 mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SECOND */}
                        <div>
                            <label className="mr-4 flex items-center gap-2 text-[#001356]">
                                <input type="radio" name="gender" value="male" />
                                Second Coordinate
                            </label>
                            <div>

                            </div>
                        </div>
                    </div>
                    {/* =============================== */}
                </form>
            </div>
            {/* FROM - END - HERE */}
        </div>
    );
};

export default CreateCirtificate;