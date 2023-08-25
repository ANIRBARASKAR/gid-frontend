import { FaHeart } from 'react-icons/fa';
import { BsBoxArrowInDown } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import AdvertiseTwo from '../../reusable/AdvertiseTwo';

const Blogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto mt-16">
            <AdvertiseTwo />
            <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-gray-400"></div>
                    <h1 className="text-base md:text-[26px] font-semibold text-[#001356]">BLOGS</h1>
                    <div className="w-8 h-[2px] bg-gray-400"></div>
                </div>
            </div>

            {/* ALL BLOGS */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {data.map(item => (
                    <>
                        <div className="mx-8 pb-8">
                            <div className="shadow-xl py-4">
                                <img className="w-full" src="https://i.ibb.co/7X2Hgyg/image-46.png" alt="" />
                                <div className="">
                                    <h4 className="text-base font-medium px-1">{item.title}</h4>
                                    <p className="text-sm px-2">{item.description}</p>
                                    <p className="mt-4 text-sm mb-4 px-2"><span className="font-bold">{item.time}</span> {item.author}  |  {item.min}</p>
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
                    </>
                ))}

            </div>
        </div>
    );
};

export default Blogs;