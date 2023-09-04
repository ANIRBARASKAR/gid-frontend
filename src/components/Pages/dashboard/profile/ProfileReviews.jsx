import { AiFillStar } from 'react-icons/ai';

// Fake DATA
const profileReview = [
    {
        id: "1",
        img: "https://i.ibb.co/qJMc1BP/Ellipse-1501-1.png",
        name: "Business Event",
        description: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt",
        date: "23/06/2023"
    },
    {
        id: "2",
        img: "https://i.ibb.co/qJMc1BP/Ellipse-1501-1.png",
        name: "Business Event",
        description: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt",
        date: "23/06/2023"
    },
    {
        id: "3",
        img: "https://i.ibb.co/qJMc1BP/Ellipse-1501-1.png",
        name: "Business Event",
        description: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt",
        date: "23/06/2023"
    }
]

const ProfileReviews = () => {
    return (
        <div>
            <h1 className="text-[#001356] text-[26px] font-semibold">My Reviews</h1>
            <div className="mt-8 bg-white p-6 rounded-lg" style={{
                boxShadow: "0px 4px 10px 0px #0000001A"
            }}>
                {
                    profileReview.map(item => (
                        <>
                            <div className='flex gap-8 mb-6 bg-[#F6F6F6] p-5 rounded-lg'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <div className='flex items-center gap-16'>
                                            <p className="text-[#001356] font-semibold text-base">{item.name}</p>
                                            <div className='flex items-center gap-2'>
                                                <AiFillStar className='text-[#F9EF00]' size={20} />
                                                <AiFillStar className='text-[#F9EF00]' size={20} />
                                                <AiFillStar className='text-[#F9EF00]' size={20} />
                                            </div>
                                        </div>
                                        <p className='text-sm text-gray-500'>{item.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>{item.date}</p>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default ProfileReviews;