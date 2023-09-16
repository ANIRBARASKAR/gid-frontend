import { BsToggleOn } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
    { name: 'Username', email: "xyz@gmail.com", regi: '01/01/2023', login: '1 hour ago' },
    { name: 'Username', email: "xyz@gmail.com", regi: '01/01/2023', login: '1 hour ago' },
    { name: 'Username', email: "xyz@gmail.com", regi: '01/01/2023', login: '1 hour ago' },
    { name: 'Username', email: "xyz@gmail.com", regi: '01/01/2023', login: '1 hour ago' },
    { name: 'Username', email: "xyz@gmail.com", regi: '01/01/2023', login: '1 hour ago' },


];

const AdmHomeTable = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className='mt-5 mx-2 md:mx-0'>
                    <table className="w-[100%] mt-8 text-xs md:text-base">
                        <thead>
                            <tr className='text-[#001356] text-left'>
                                <th className='py-4'>No</th>
                                <th className='py-4'>Name</th>
                                <th className='py-4'>Email</th>
                                <th className='py-4'>Registration Date</th>
                                <th className='py-4'>Last Login</th>
                                <th className='py-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300 text-gray-500">
                                    <td className='py-4'>{index + 1}</td>
                                    <td className='py-4'>{item.name}</td>
                                    <td className='py-4'>{item.email}</td>
                                    <td className='py-4'>{item.regi}</td>
                                    <td className='py-4'>{item.login}</td>
                                    <td className='py-4'>
                                        <div className=''>
                                            <BsToggleOn className="text-green-700" size={30} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-white lg:ml-[255px]'>
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

export default AdmHomeTable;