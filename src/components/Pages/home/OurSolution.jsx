
const OurSolution = () => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="flex justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-[#001356]"></div>
                    <h1 className="text-xl md:text-3xl font-semibold">OUR SOLUTIONS</h1>
                    <div className="w-12 h-1 bg-[#001356]"></div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="flex gap-2 font-semibold">
                    <button className="bg-[#001356] text-white px-4 rounded-full">organizer</button>
                    <button>student</button>
                </div>
            </div>
            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-10">
                <div className="shadow-2xl rounded-2xl p-2 md:p-6">
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/FgG4w26/image-1.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-sm md:text-base font-semibold text-[#001356]">EDUCATIONAL EVENTS</h2>
                        <p className="text-sm md:text-sm md:my-3">Are your about to release your website to the real world? But did you verify your website for respons...</p>
                        <a className="text-xs md:text-sm text-blue-500 border-b border-blue-500" href="">Learn More</a>
                    </div>
                </div>

                <div className="shadow-2xl rounded-2xl p-2 md:p-6">
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/FgG4w26/image-1.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-sm md:text-base font-semibold text-[#001356]">EDUCATIONAL EVENTS</h2>
                        <p className="text-sm md:text-sm md:my-3">Are your about to release your website to the real world? But did you verify your website for respons...</p>
                        <a className="text-xs md:text-sm text-blue-500 border-b border-blue-500" href="">Learn More</a>
                    </div>
                </div>

                <div className="shadow-2xl rounded-2xl p-2 md:p-6">
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/FgG4w26/image-1.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-sm md:text-base font-semibold text-[#001356]">EDUCATIONAL EVENTS</h2>
                        <p className="text-sm md:text-sm md:my-3">Are your about to release your website to the real world? But did you verify your website for respons...</p>
                        <a className="text-xs md:text-sm text-blue-500 border-b border-blue-500" href="">Learn More</a>
                    </div>
                </div>

                <div className="shadow-2xl rounded-2xl p-2 md:p-6">
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/FgG4w26/image-1.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-sm md:text-base font-semibold text-[#001356]">EDUCATIONAL EVENTS</h2>
                        <p className="text-sm md:text-sm md:my-3">Are your about to release your website to the real world? But did you verify your website for respons...</p>
                        <a className="text-xs md:text-sm text-blue-500 border-b border-blue-500" href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSolution;