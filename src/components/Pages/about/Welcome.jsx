import { BsCheckCircleFill } from 'react-icons/bs';


const Welcome = () => {
    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-0">
                <div>
                    <img src="https://i.ibb.co/YR4HmXy/Image.png" alt="" />
                    <div>
                        <h3 className="font-semibold text-[28px] text-[#37393F]">Lorem ipsum</h3>
                        <p className="text-base text-[#7D7D7D lg:mr-64">Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall value proposition. </p>
                        <div className='bg-[#37393F] h-1 w-16 mt-5'></div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-[#001356]"></div>
                        <p className="text-base lg:text-lg font-semibold">Welcome </p>
                    </div>
                    <h3 className="font-bold text-[28px] text-[#37393F]">Lorem ipsum</h3>
                    <div className="text-[#7D7D7D]">
                        <p className="">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.</p>
                        <p className="mt-4">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy </p>
                    </div>
                    <div className="mt-4">
                        <div className="border border-gray-300 p-4">
                            <div className='flex items-center gap-2'>
                                <BsCheckCircleFill className='text-[#001356]' />
                                <p className="text-xl font-semibold text-[#37393F]">Our Vision</p>
                            </div>
                            <p className="text-[#7D7D7D] mt-4 ml-6">Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.</p>
                        </div>
                        <div className="border border-gray-300 p-4 mt-5">
                            <div className='flex items-center gap-2'>
                                <BsCheckCircleFill className='text-[#001356]' />
                                <p className="text-xl font-semibold text-[#37393F]">Our Mision</p>
                            </div>
                            <p className="text-[#7D7D7D] mt-4 ml-6">Podcasting operational change management inside of workflows to establish a framework.</p>
                        </div>
                        <button className='mt-4 text-white bg-[#001356] px-4 py-2'>More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;