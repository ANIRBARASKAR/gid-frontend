const Reward = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="border border-gray-600 inline-block  pl-4 pr-40 pb-20 py-2">
                <p className="font-semibold text-lg text-[#001356]">Rewards & prizes</p>
                <div className="mt-5 border border-gray-600 rounded-md relative px-4 pb-3">
                    <div className="flex items-center gap-4">
                        <img className="absolute mt-[-10px]" src="https://i.ibb.co/XsKh1H6/image-58.png" alt="" />
                        <p className="font-semibold text-lg text-[#001356] ml-16 mt-2">Winner</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <img src="https://i.ibb.co/WFZhXHv/image-61.png" alt="" />
                        <p className="font-semibold text-sm text-[#001356]">Winner Name</p>
                    </div>
                </div>
            </div>
            {/* ADVERTISE TWO */}
            <div className="mt-8">
                <img className="relative w-full" src="https://i.ibb.co/27qPxtj/Rectangle-1784-1.png" alt="" />
                <p className="absolute ml-[35%] lg:ml-[30%] text-white mt-[-40px] md:mt-[-60px] lg:mt-[-75px]">ADVERTISE 2</p>
            </div>
        </div>
    );
};

export default Reward;