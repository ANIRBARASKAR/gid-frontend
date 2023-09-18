import { useForm } from 'react-hook-form';
const AddBlog = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <h1 className="text-[#001356] text-[26px] font-bold">Add Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5'>
                        <div className="mb-4">
                            <label htmlFor="Title" className="block text-[#001356] text-base font-medium">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="w-full border border-[#001356] rounded-md p-1 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Image" className="block text-[#001356] text-base font-medium">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="w-full border border-[#001356] rounded-lg p-1 mt-1"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-5'>
                        <div className="mb-4">
                            <label htmlFor="Description" className="block text-[#001356] text-base font-medium">Description</label>
                            <textarea
                                id="description"
                                className="input w-full border border-[#001356] rounded-md h-[55px] px-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ReadTime" className="block text-[#001356] text-base font-medium">Read Time</label>
                            <input
                                type="text"
                                id="readTime"
                                name="readTime"
                                placeholder='Enter Read Times'
                                className="w-full border border-[#001356] rounded-md p-1 mt-1 placeholder-[#001356]"
                            />
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
            </div>
        </div>
    );
};

export default AddBlog;