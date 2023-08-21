import { FaHeart } from 'react-icons/fa';
import { BsBoxArrowInDown } from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

const Blogs = () => {
    // Arrow handling funciton Start
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#001356", borderRadius: "100%" }}
                onClick={onClick}
            />
        );
    }
    Arrow.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func,
    };
    // Arrow handling funciton end

    // Slider setting======Strat
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // Slider setting======End
    return (
        // HEADING********
        <div className="container mx-auto mt-24">
            <img className="mx-auto relative" src="https://i.ibb.co/27qPxtj/Rectangle-1784-1.png" alt="" />
            <p className="absolute ml-[350px] md:[ml-100px] lg:ml-[700px] text-white mt-[-50px]">ADVERTISE 2</p>

            <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-gray-400"></div>
                    <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">BLOGS</h1>
                    <div className="w-8 h-1 bg-gray-400"></div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mt-8">
                <Slider {...settings}>

                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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


                    <div className="shadow-2xl">
                        <img className="md:w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                        <div className="px-2">
                            <h4 className="text-[10px] md:text-base font-medium px-1">John Lewis to make final journey across Edmund Pettus Bridge in procession</h4>
                            <p className="text-[8px] md:text-sm px-2">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                            <p className="mt-4 text-[6px] md:text-sm mb-4"><span className="font-bold">2 hours ago</span> By Lucy Hiddleston  |  4min read</p>
                            <hr />
                            <div className="mt-2">
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

                </Slider>;
            </div>
        </div>
    );
};

export default Blogs;