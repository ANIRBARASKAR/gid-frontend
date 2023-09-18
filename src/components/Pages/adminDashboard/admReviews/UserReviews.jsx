import { AiFillStar } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

const data = [
    {
        id: 1,
        title: "ProSoccer FC vs Tigers FC",
        des: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt ",
        date: "Sun 16 Jul 2023, 4:00 PM"
    },
    {
        id: 2,
        title: "ProSoccer FC vs Tigers FC",
        des: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt ",
        date: "Sun 16 Jul 2023, 4:00 PM"
    },
    {
        id: 3,
        title: "ProSoccer FC vs Tigers FC",
        des: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt ",
        date: "Sun 16 Jul 2023, 4:00 PM"
    },
    {
        id: 4,
        title: "ProSoccer FC vs Tigers FC",
        des: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt ",
        date: "Sun 16 Jul 2023, 4:00 PM"
    },
    {
        id: 5,
        title: "ProSoccer FC vs Tigers FC",
        description: "Lorem ipsum dolor, sit amet consectetur adipisici elit. Provident nobis sit magni. Optio incidunt ",
        date: "Sun 16 Jul 2023, 4:00 PM"
    },
]

const UserReviews = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        data.map(item => (
                            <>
                                <div className="bg-white p-4 rounded-lg mx-3 md:mx-0">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-4">
                                            <img className="h-[30px] w-[30px] md:h-[59px] md:w-[59px]" src="https://i.ibb.co/vdMwjC1/Ellipse-819.png" alt="" />
                                            <div className="text-[9px] md:text-sm">
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-gray-400 mt-2">{item.des}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <AiFillStar className="text-yellow-400 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                                                <AiFillStar className="text-yellow-400 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                                                <AiFillStar className="text-yellow-400 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                                                <AiFillStar className="text-yellow-400 w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                                            </div>
                                            <p className="text-[9px] text-gray-400 mt-1">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <p className="text-sm font-medium text-[#001356]">4/5</p>
                                        <div className="flex items-center gap-4">
                                            <BiHide className="text-gray-500" size={25} />
                                            <MdOutlineDelete className="text-gray-500" size={25} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className='bg-white lg:ml-[255px] pt-2 mt-12'>
                <div className='flex justify-between items-center'>
                    <div className='mt-2 lg:ml-2'>
                        <p>Showing 1 to 10 of 50 entries</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <div className='bg-[#DFDFDF] p-2'>
                            <IoIosArrowBack />
                        </div>
                        <p className='text-gray-500'>1</p>
                        <p className='text-gray-500'>2</p>
                        <p className='text-gray-500'>3</p>
                        <p className='text-gray-500'>4</p>
                        <div className='bg-[#DFDFDF] p-2'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReviews;