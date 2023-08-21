import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#001356", borderRadius:"100%" }}
                onClick={onClick}
            />
        );
    }
    
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
    return (
        <div className="bg-[#ECECEC] pt-8 pb-16 mt-20">
            <div className='container md:mx-auto mt-5 px-4'>
                <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-[#001356] mt-5"></div>
                        <h4 className='font-semibold text-center pt-4 text-base md:text-[30px] text-[#001356]'>TRUSTED BY OVER 1000+ BRANDS AND ENTERPRISES</h4>
                        <div className="w-12 h-1 bg-[#001356] mt-5"></div>
                    </div>
                </div>
                <div className="mt-16">
                    <Slider {...settings}>
                        <div className='mx-auto'>
                            <img className="bg-white py-11 px-2 rounded-lg mx-auto" src="https://i.ibb.co/FJYtL2T/image-48.png" alt="" />
                        </div>
                        <div>
                            <img className='bg-white py-11 px-2 rounded-lg mx-auto' src="https://i.ibb.co/KyhHj6r/image-49.png" alt="" />
                        </div>
                        <div>
                            <img className='bg-white py-6 px-2 rounded-lg mx-auto' src="https://i.ibb.co/ZXLGBhk/image-50.png" alt="" />
                        </div>
                        <div>
                            <img className='bg-white py-2 px-2 rounded-lg mx-auto' src="https://i.ibb.co/6bNydWN/image-51.png" alt="" />
                        </div>
                        <div>
                            <img className='bg-white py-2 rounded-lg mx-auto' src="https://i.ibb.co/QnK144b/image-52.png" alt="" />
                        </div>
                        <div className=''>
                            <img className="bg-white py-11 px-2 rounded-lg mx-auto" src="https://i.ibb.co/FJYtL2T/image-48.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Brand;