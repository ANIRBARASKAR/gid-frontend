import { BiSearch } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const data = [
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },
    { name: 'Amish Savaliya', email: 'abc@gmail.com', regi: '15/07/20203', time: "16:40:06", mobile: '9998887776', pti: '#hdu82s8ds96' },

];

const Participations = () => {
    return (
        <div>
            <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}>
                {/* Header Start */}
                <div className="flex justify-between gap-3 items-center">
                    <div>
                        <p className="text-[16px] font-medium text-[#001356] hidden lg:block">Event participation</p>
                        <p className="font-medium text-gray-400 block lg:hidden">All (125)</p>
                    </div>
                    <div className="md:flex justify-between items-center gap-6">
                        <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded'>
                            <BiSearch className='text-[#343A40]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                        <div className="flex justify-between gap-6 items-center mt-4 md:mt-0">
                            <div>
                                <button className="text-white text-xs md:text-base bg-[#001356] px px-4 py-1 rounded-md">Add Participation</button>
                            </div>
                            <div>
                                <button className="text-white text-xs md:text-base bg-[#001356] px px-4 py-1 rounded-md">Export Participation</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Table Start */}
                <div className='mt-5 mx-2 md:mx-0'>
                    <div className="overflow-x-auto">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356]'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Name</th>
                                    <th className='py-4'>Email</th>
                                    <th className='py-4'>Registration Date</th>
                                    <th className='py-4'>Mobile no.</th>
                                    <th className='py-4'>Payment Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='text-center py-4'>{index + 1}</td>
                                        <td className='text-center py-4'>{item.name}</td>
                                        <td className='text-center py-4'>{item.email}</td>
                                        <td className='text-center py-4'>
                                            <div>
                                                {item.regi}
                                                <p className="text-xs">{item.time}</p>
                                            </div>
                                        </td>
                                        <td className='text-center'>{item.mobile}</td>
                                        <td className='text-center'>{item.pti}</td>
                                        <td className='flex justify-center py-4'>
                                            <div className="flex gap-8 items-center">

                                                <div className='flex items-center gap-8'>
                                                    <MdDelete className='text-[#EC6453] cursor-pointer' size={30} />
                                                </div>
                                                <div>
                                                    <button className="bg-[#23AE00] text-white px-2 py-1 rounded-md">Achieved</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Table End */}
            </div>
        </div>
    );
};

export default Participations;