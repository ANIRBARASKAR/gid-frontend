import { PiArrowsOutSimpleFill } from 'react-icons/pi';

const Certifications = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className='mt-16 mx-4'>
                <div className="mt-5 flex items-center gap-2">
                    <h1 className="text-[#001356] text-[26px] font-semibold">Certifications</h1>
                    <img src="https://i.ibb.co/wK9qD8D/book-open-1.png" alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                    <div className='bg-white py-2 rounded-2xl' style={{
                        boxShadow: "0px 4px 10px 0px #0000001A"
                    }}>
                        <div className='flex justify-between items-center mt-5 mx-6'>
                            <h4 className='text-[#001356] text-2xl font-semibold'>Event Name</h4>
                            <PiArrowsOutSimpleFill size={20} />
                        </div>
                        <img className='w-full mt-5' src="https://i.ibb.co/94jHWKc/image-62.png" alt="" />
                        <div className='text-[#001356] mx-6 mt-2'>
                            <p>lorem ipsum lorem ipsumlorem ipsumlor em ipsum</p>
                            <p><span className='font-bold'>Date</span>  :  01/01/2023</p>
                            <p><span className='font-bold'>Given By</span>  :  xyz</p>
                        </div>
                    </div>
                    <div className='bg-white py-2 rounded-2xl' style={{
                        boxShadow: "0px 4px 10px 0px #0000001A"
                    }}>
                        <div className='flex justify-between items-center mt-5 mx-6'>
                            <h4 className='text-[#001356] text-2xl font-semibold'>Event Name</h4>
                            <PiArrowsOutSimpleFill size={20} />
                        </div>
                        <img className='w-full mt-5' src="https://i.ibb.co/94jHWKc/image-62.png" alt="" />
                        <div className='text-[#001356] mx-6 mt-2'>
                            <p>lorem ipsum lorem ipsumlorem ipsumlor em ipsum</p>
                            <p><span className='font-bold'>Date</span>  :  01/01/2023</p>
                            <p><span className='font-bold'>Given By</span>  :  xyz</p>
                        </div>
                    </div>
                    <div className='bg-white py-2 rounded-2xl' style={{
                        boxShadow: "0px 4px 10px 0px #0000001A"
                    }}>
                        <div className='flex justify-between items-center mt-5 mx-6'>
                            <h4 className='text-[#001356] text-2xl font-semibold'>Event Name</h4>
                            <PiArrowsOutSimpleFill size={20} />
                        </div>
                        <img className='w-full mt-5' src="https://i.ibb.co/94jHWKc/image-62.png" alt="" />
                        <div className='text-[#001356] mx-6 mt-2'>
                            <p>lorem ipsum lorem ipsumlorem ipsumlor em ipsum</p>
                            <p><span className='font-bold'>Date</span>  :  01/01/2023</p>
                            <p><span className='font-bold'>Given By</span>  :  xyz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;