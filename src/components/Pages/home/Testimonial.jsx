import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

const Testimonial = () => {
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
        slidesToShow: 2,
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
        <div className="container mx-auto mt-24 bg-[#ECECEC] py-8 px-6 md:px-0">
            <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-1 bg-[#001356]"></div>
                    <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">TESTIMONIAL</h1>
                    <div className="w-10 h-1 bg-[#001356]"></div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mt-8">
                <Slider {...settings}>
                    {/* CARD 1 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div>
                        <div className="shadow-2xl bg-white">
                            <div>
                                <div className="text-center p-4 mt-6">
                                    <p className="text-[10px] md:text-lg font-medium mt-2">Dependable, Responsive, Professional Partner</p>
                                    <p className="px-2 mt-2 text-gray-600">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. </p>
                                </div>
                            </div>
                            <div className='h-12 w-12 bg-white mx-auto rotate-45'></div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <div className='flex gap-4'>
                                <img src="https://i.ibb.co/f46QPyW/Photo.png" alt="" />
                                <div className=''>
                                    <p className="text-[10px] md:text-lg font-medium px-">Sri Alam</p>
                                    <p className="mt-2 text-gray-600">CEO, Membagongkan GROUP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>;
            </div>
        </div>
    );
};

export default Testimonial;