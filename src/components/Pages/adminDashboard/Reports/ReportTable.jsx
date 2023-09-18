import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name', },
];

const ReportTable = () => {
    return (
        <>
            <div className="lg:ml-[300px] lg:pr-6">
                <div className='mt-5 mx-2 md:mx-0'>
                    <div className="overflow-x-auto w-full">
                        <table className="w-[100%] mt-8 text-xs md:text-base">
                            <thead>
                                <tr className='text-[#001356] text-left'>
                                    <th className='py-4'>No</th>
                                    <th className='py-4'>Reference</th>
                                    <th className='py-4'>Event Date</th>
                                    <th className='py-4'>Organizer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300 text-gray-500">
                                        <td className='py-4'>{index + 1}</td>
                                        <td className='py-4'>{item.reference}</td>
                                        <td className='py-4'>{item.event}</td>
                                        <td className='py-4'>{item.Organizer}</td>
                                        <td className='py-4'>
                                            <div className=''>
                                                <CiMenuKebab className="text-black cursor-pointer" size={25} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='bg-white lg:ml-[255px] pt-2'>
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

export default ReportTable;