import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Not Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Not Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },
    { name: 'Username', email: 'abc@gmail.com', org: 'xyz', status: "Attended", marks: '44/50' },

];


const Winners = () => {
    return (
        <>
            <div className="lg:pr-6 lg:ml-[300px]">
                <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
                    boxShadow: "0px 4px 4px 0px #00000040"
                }}>
                    <div className="md:flex items-center justify-between">
                        <div>
                            <p className="text-[16px] font-medium text-[#001356]">Rounds</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 md:mt-0">
                            <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#EC6453] rounded">Unpublish Winners</button>
                            <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#284B80] rounded">Show Winners</button>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-3 justify-between mt-4">
                        <div className="flex items-center gap-3">
                            <button className="px-2 py-1 rounded-md bg-[#284B80] text-white">Round 1</button>
                            <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 2</button>
                            <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 3</button>
                        </div>
                        <div className="flex items-center gap-3 mt-3 lg:mt-0">
                            <button className="text-xs md:text-sm font-medium text-[#001356] px px-4 py-2 border border-[#001356] rounded">Select Rewards & Recognition</button>
                            <button className="text-xs md:text-sm font-medium text-white px px-4 py-2 bg-[#23AE00] rounded">Add to Rewards & Recognition</button>
                        </div>
                    </div>

                    <div>
                        {/* Table Start */}
                        <div className='mt-5 mx-2 md:mx-0'>
                            <div className="overflow-x-auto">
                                <table className="w-[100%] mt-8 text-xs md:text-base">
                                    <thead>
                                        <tr className='text-[#001356]'>

                                            <th className='py-4'>Profile</th>
                                            <th className='py-4'>Name</th>
                                            <th className='py-4'>Email</th>
                                            <th className='py-4'>Org.</th>
                                            <th className='py-4'>Round status</th>
                                            <th className='py-4'>Marks if Attended</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-300 text-gray-500">
                                                <td className='text-center py-4 flex gap-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <img className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full mx-auto" src="https://i.ibb.co/B22zDkB/image-4.png" alt="" />
                                                </td>
                                                <td className='text-center py-4'>{item.name}</td>
                                                <td className='text-center py-4'>{item.email}</td>
                                                <td className='text-center py-4'>
                                                    <div>
                                                        {item.regi}
                                                        <p className="text-xs">{item.org}</p>
                                                    </div>
                                                </td>
                                                <td className='text-center'>
                                                    <span className={`${item.status === 'Attended' ? 'text-[#23AE00]' : 'text-[#EC6453]'}`}>
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td className='text-center'>{item.marks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Table End */}
                    </div>
                </div>
            </div>
            <div className='bg-white mt-8 lg:ml-[255px] pt-3'>
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

export default Winners;