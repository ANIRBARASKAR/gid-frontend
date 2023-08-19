import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Brands = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
        <div className="bg-[#ECECEC] py-8 mt-12">
            <div className='container mx-auto mt-5'>
                <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-[#001356] mt-5"></div>
                        <h4 className='font-semibold text-center pt-4 text-[30px] text-[#001356]'>TRUSTED BY OVER 1000+ BRANDS AND ENTERPRISES</h4>
                        <div className="w-12 h-1 bg-[#001356] mt-5"></div>
                    </div>
                </div>
                {/* MAIN CONTENT */}
                <div className='mt-14' >
                    <Carousel responsive={responsive}>
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
                    </Carousel>;
                </div>
            </div>
        </div>
    );
};

export default Brands;