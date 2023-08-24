import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BlogSlide = () => {
    return (
        <div className='container mx-auto p-5 mt-4'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="mb-12 flex justify-center">
                    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] px-12 py-6 rounded-3xl shadow-lg">
                        <h2 className="font-semibold text-[10px] md:text-[22px] text-[#001356]">New Upcoming Business Event</h2>
                        <p className="text-[8px] md:text-base">Lorem ipsum dolor sit amet consectetur. In aliquam us. Quis tellus et nibh fusce. Nulla elementum fringilla semper nulla pretium sed augue. At iaculis sit tempus in justo.</p>
                        <button className="border border-gray-400 rounded-xl px-3 mt-2 text-[6px] md:text-base">Register Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-12 flex justify-center">
                    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] px-12 py-6 rounded-3xl shadow-lg">
                        <h2 className="font-semibold text-[10px] md:text-[22px] text-[#001356]">New Upcoming Business Event</h2>
                        <p className="text-[8px] md:text-base">Lorem ipsum dolor sit amet consectetur. In aliquam us. Quis tellus et nibh fusce. Nulla elementum fringilla semper nulla pretium sed augue. At iaculis sit tempus in justo.</p>
                        <button className="border border-gray-400 rounded-xl px-3 mt-2 text-[6px] md:text-base">Register Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-12 flex justify-center">
                    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] px-12 py-6 rounded-3xl shadow-lg">
                        <h2 className="font-semibold text-[10px] md:text-[22px] text-[#001356]">New Upcoming Business Event</h2>
                        <p className="text-[8px] md:text-base">Lorem ipsum dolor sit amet consectetur. In aliquam us. Quis tellus et nibh fusce. Nulla elementum fringilla semper nulla pretium sed augue. At iaculis sit tempus in justo.</p>
                        <button className="border border-gray-400 rounded-xl px-3 mt-2 text-[6px] md:text-base">Register Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-12 flex justify-center">
                    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] px-12 py-6 rounded-3xl shadow-lg">
                        <h2 className="font-semibold text-[10px] md:text-[22px] text-[#001356]">New Upcoming Business Event</h2>
                        <p className="text-[8px] md:text-base">Lorem ipsum dolor sit amet consectetur. In aliquam us. Quis tellus et nibh fusce. Nulla elementum fringilla semper nulla pretium sed augue. At iaculis sit tempus in justo.</p>
                        <button className="border border-gray-400 rounded-xl px-3 mt-2 text-[6px] md:text-base">Register Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-12 flex justify-center">
                    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EEEDF1] px-12 py-6 rounded-3xl shadow-lg">
                        <h2 className="font-semibold text-[10px] md:text-[22px] text-[#001356]">New Upcoming Business Event</h2>
                        <p className="text-[8px] md:text-base">Lorem ipsum dolor sit amet consectetur. In aliquam us. Quis tellus et nibh fusce. Nulla elementum fringilla semper nulla pretium sed augue. At iaculis sit tempus in justo.</p>
                        <button className="border border-gray-400 rounded-xl px-3 mt-2 text-[6px] md:text-base">Register Now</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BlogSlide;