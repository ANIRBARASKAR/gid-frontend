
const CourseDetails = () => {
    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center gap-4">
                <div>
                    <img className="border border-gray-400 p-2 rounded-full" src="https://i.ibb.co/QCkWjNc/image-60.png" alt="" />
                </div>
                <div>
                    <h1 className="text-[40px] font-semibold text-[#001356]">DEVOPS TRANNING & COURSE</h1>
                    <div className="lg:flex justify-between items-center">
                        <p className="text-xl font-bold text-[#4D5A89]">Organized by : xyz company </p>
                        <div className="flex justify-between mt-2 lg:ml-24">
                            <div className="grid grid-cols-3 gap-4">
                                <button className="border border-[#355688] px-2 text-[#355688] rounded-xl">Group Event</button>
                                <button className="border border-[#355688] text-[#355688] rounded-xl">Sports</button>
                                <button className="border border-[#355688] text-[#355688] rounded-xl">Tranning</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 w-full h-[1.5px] mt-5"></div>
            <div className="flex items-center justify-around text-xl text-[#001356] mt-4">
                <p className="font-semibold">Eligibility</p>
                <p className=""> Open for All</p>
                <p className="font-semibold">Mode</p>
                <p>Online</p>
                <p className="font-semibold">Guest</p>
                <p> xyz </p>
            </div>
            <div className="bg-gray-300 w-full h-[1.5px] mt-5"></div>
        </div>
    );
};

export default CourseDetails;