import { BiSearch } from 'react-icons/bi';

const data = [
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'Not Published', type: 'Group' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Solo' },
    { name: 'Event Name', sdate: '15/07/20203', edate: '15/07/20203', status: 'On Sale', type: 'Group' },
];

const Participation = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <h1 className="text-[#001356] text-[26px] font-semibold">Participation</h1>
            <div className='flex items-center gap-8 mt-5'>
                <p className="text-[18px] text-[#343A40]">All (50)</p>
                <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded-xl'>
                    <BiSearch className='text-[#343A40]' size={20} />
                    <input className='outline-none bg-[#F6F8FA] w-[300px]' type="search" name="" id="" placeholder='Search..' />
                </div>
            </div>
            <div className='mt-5'>
                <table className="w-[100%]">
                    <thead>
                        <tr className='text-[#001356]'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date </th>
                            <th>Status </th>
                            <th>Event Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 text-gray-500">
                                <td className='text-center py-4'>{index + 1}</td>
                                <td className='text-center py-4'>{item.name}</td>
                                <td className='text-center'>{item.sdate}</td>
                                <td className='text-center'>{item.edate}</td>
                                <td className='text-center'><span className='bg-[#23AE00] text-white px-2 py-1 rounded-lg'>{item.status}</span></td>
                                <td className='text-center'>{item.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Participation;