import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart } from 'react-icons/fa';
import { BsBoxArrowInDown } from 'react-icons/bs';

const AboutBlog = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container mx-auto mt-20">
            <img className="mx-auto relative" src="https://i.ibb.co/27qPxtj/Rectangle-1784-1.png" alt="" />
            <p className="absolute ml-[350px] md:[ml-100px] lg:ml-[700px] text-white mt-[-50px]">ADVERTISE 2</p>

            <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-gray-400"></div>
                    <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">BLOGS</h1>
                    <div className="w-8 h-[2px] bg-gray-400"></div>
                </div>
            </div>
            <div className="bg-white my-8">
                <Carousel responsive={responsive}>
                    <div className="mx-8 pb-8">
                        <div className="shadow-xl py-4">
                            <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                            <div className="">
                                <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                                <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                                <p className="mt-4 text-[6px] md:text-sm mb-4 px-2"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                                <hr />
                                <div className="mt-2 ml-[25%]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="text-red-600" />
                                            <small>39</small>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsBoxArrowInDown />
                                            <small>72</small>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 pb-8">
                        <div className="shadow-xl py-4">
                            <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                            <div className="">
                                <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                                <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                                <p className="mt-4 text-[6px] md:text-sm mb-4 px-2"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                                <hr />
                                <div className="mt-2 ml-[25%]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="text-red-600" />
                                            <small>39</small>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsBoxArrowInDown />
                                            <small>72</small>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 pb-8">
                        <div className="shadow-xl py-4">
                            <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                            <div className="">
                                <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                                <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                                <p className="mt-4 text-[6px] md:text-sm mb-4 px-2"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                                <hr />
                                <div className="mt-2 ml-[25%]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="text-red-600" />
                                            <small>39</small>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsBoxArrowInDown />
                                            <small>72</small>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 pb-8">
                        <div className="shadow-xl py-4">
                            <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                            <div className="">
                                <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                                <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                                <p className="mt-4 text-[6px] md:text-sm mb-4 px-2"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                                <hr />
                                <div className="mt-2 ml-[25%]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="text-red-600" />
                                            <small>39</small>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsBoxArrowInDown />
                                            <small>72</small>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 pb-8">
                        <div className="shadow-xl py-4">
                            <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                            <div className="">
                                <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                                <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                                <p className="mt-4 text-[6px] md:text-sm mb-4 px-2"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                                <hr />
                                <div className="mt-2 ml-[25%]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="text-red-600" />
                                            <small>39</small>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsBoxArrowInDown />
                                            <small>72</small>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>;
            </div>
        </div>
    );
};

export default AboutBlog;