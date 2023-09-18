import { CiMenuKebab } from "react-icons/ci";

const data = [
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
    { reference: '#98d5a6dc', event: "Sun 16 Jul 2023, 4:00 PM ", Organizer: 'Organizer Name',},
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
        </>
    );
};

export default ReportTable;