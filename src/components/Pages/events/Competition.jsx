import { useEffect, useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import EventTitle from '../../reusable/EventTitle';

const Competition = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/event.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="container mx-auto mt-8 px-2 md:px-0">
            <EventTitle title="Competition" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map(item => (
                    <>
                        <div className="shadow-lg p-4 rounded-lg">
                            <img className="w-full lg:h-[230px]" src={item.img} alt="" />
                            <div className="flex justify-end">
                                <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                            </div>
                            <div>
                                <h4 className="text-[#284B80] text-lg font-medium">{item.title}</h4>
                                <div className="text-[#666666] text-base mt-1">
                                    <p>{item.description}</p>
                                    <p>{item.date}</p>
                                </div>
                                <div className="mt-3 flex justify-between">
                                    <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                    <FiBookmark className='text-[#284B80]' size={25} />
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </div>
            <div className='flex justify-center mt-8'>
                <button className="bg-[#001356] px-6 py-2 text-white rounded-lg">Learn More</button>
            </div>
        </div>
    );
};

export default Competition;