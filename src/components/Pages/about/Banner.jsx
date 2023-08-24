const Banner = () => {
    return (
        <div className="mt-8">
                <img className="w-full lg:h-[350px] lg:relative" src="https://i.ibb.co/857DXHJ/Photo.jpg" alt="" />
                <div className="md:flex justify-center lg:block mt-[-15px] lg:mt-0">
                    <div className="bg-[#424348] lg:h-[350px] w-auto text-white inline-block lg:absolute mt-[-18px] lg:mt-[-350px] px-8 py-8 lg:py-0 mx-10 md:mx-0 lg:mx-0">
                        <div className="lg:mt-24">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 bg-white"></div>
                                    <p className="text-base lg:text-lg font-semibold">About Us</p>
                                </div>
                                <h3 className="text-lg lg:text-4xl font-bold">Know About Us</h3>
                                <p className="text-sm lg:text-base mt-1">Collaboratively administrate empowered markets plug and play networks dynamically procrastinated </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;