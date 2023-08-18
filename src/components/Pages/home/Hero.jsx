const Hero = () => {
    return (
        <div className="bg-[#FFF9F0] py-10">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-base md:text-5xl font-bold text-[#001356]"><i>Elevate Your Events, </i></h1>
                        <div className="text-sm font-semibold md:text-2xl text-[#001356] mt-2">
                            <p><i>Experience Seamless</i></p>
                            <p><i>Excellence with Our</i></p>
                            <p><i>Event Management Services!</i></p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-col justify-end">
                            <img className="ml-4 md:ml-16 h-[80px] md:h-[370px]" src="https://i.ibb.co/qd4cN7q/Rectangle-4.png" alt="" />
                            <img className="mt-2 md:mt-5 h-[22px] w-[80px] md:h-[100px] md:w-[360px]" src="https://i.ibb.co/nmQKvQL/Rectangle-7.png" alt="" />
                        </div>
                        <div className="md:ml-4 mt-8 md:mt-16">
                            <img className="h-[22px] w-[80px] md:h md:h-[100px] md:w-[360px]" src="https://i.ibb.co/vLDvf9W/Rectangle-6.png" alt="" />
                            <img className="mt-2 md:mt-5 h-[80px] md:h-[370px]" src="https://i.ibb.co/sHnkNDG/Rectangle-5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;