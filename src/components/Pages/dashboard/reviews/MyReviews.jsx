import { AiFillStar } from 'react-icons/ai';

const reviews = [
    {
        id: "1",
        img: "https://i.ibb.co/9n6M35R/image-47-1.png",
        rating: "4/5",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
    },
    {
        id: "1",
        img: "https://i.ibb.co/9n6M35R/image-47-1.png",
        rating: "4/5",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
    },
    {
        id: "1",
        img: "https://i.ibb.co/9n6M35R/image-47-1.png",
        rating: "4/5",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
    },
    {
        id: "1",
        img: "https://i.ibb.co/9n6M35R/image-47-1.png",
        rating: "4/5",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
    },
]
const MyReviews = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className='mx-2'>
                <div className="mt-5 flex items-center gap-2">
                    <h1 className="text-[#001356] text-[26px] font-semibold">My Reviews</h1>
                    <img src="https://i.ibb.co/6DK89pm/Favorite-Window-1.png" alt="" />
                </div>
                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        reviews.map(item => (
                            <>
                                <div className='grid grid-cols-2 gap-2 md:gap-6 bg-white p-4 rounded-lg' style={{
                                    boxShadow: "0px 4px 10px 0px #0000001A"
                                }}>
                                    <div>
                                        <img className='w-full' src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2'>
                                                <AiFillStar className='text-[#F9EF00] h-[20px] w-[20px] md:h-[25px] md:w-[25px]' />
                                                <AiFillStar className='text-[#F9EF00] h-[20px] w-[20px] md:h-[25px] md:w-[25px]' />
                                                <AiFillStar className='text-[#F9EF00] h-[20px] w-[20px] md:h-[25px] md:w-[25px]' />
                                                <AiFillStar className='text-[#F9EF00] h-[20px] w-[20px] md:h-[25px] md:w-[25px]' />
                                            </div>
                                            <div>
                                                <p className='text-sm md:text-lg text-[#001356] font-semibold'>{item.rating}</p>
                                            </div>
                                        </div>
                                        <div className='mt-3 md:mt-5'>
                                            <div className='w-full h-[1px] bg-[#284B80]'></div>
                                            <div className='w-full h-[1px] bg-[#284B80] mt-2 md:mt-4'></div>
                                        </div>
                                        <div className='text-xs md:text-base lg:mt-8'>
                                            <h4 className='font-semibold text-[#284B80]'>{item.title}</h4>
                                            <p>{item.des}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;