
const Featured = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="flex justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-gray-400"></div>
                    <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">FEATURED CATEGORIES</h1>
                    <div className="w-8 h-1 bg-gray-400"></div>
                </div>
            </div>
            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-4 mt-16">
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/1rzHNCb/Image.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px] text-sm">Trip / camp</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/NjjnDR8/Image-1.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px] text-sm">Concert / Music</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/gVK90Y9/Image-2.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px]">Sport / Fitness</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/gVK90Y9/Image-2.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px]">Sport / Fitness</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/Fhxt8CQ/Image-3.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px]">Theater</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/5L5cn1k/Image-4.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px]">Museum</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/T0ZWgm2/Image-5.png" alt="" />
                    <button className="bg-[#FFF9F0] shadow-xl px-2 rounded-md absolute ml-[80px] md:ml-[150px] mt-[-40px]">Restaurant</button>
                </div>
                <div className="mx-auto">
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/ns2KKTP/Rectangle-1783.png" alt="" />
                    <span className="absolute text-white ml-[80px] mt-[-110px]">ADVERTISE 1</span>
                </div>
            </div>
        </div>
    );
};

export default Featured;