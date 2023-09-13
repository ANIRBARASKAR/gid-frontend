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

const ManageRegi = () => {
    return (
        <div className="bg-white mt-10 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <p className="text-[16px] font-medium text-[#001356]">Rounds</p>
            <div className="md:flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                    <button className="px-2 py-1 rounded-md bg-[#284B80] text-white">Round 1</button>
                    <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 2</button>
                    <button className="px-2 py-1 rounded-md bg-[#D9D9D9] text-gray-500">Round 3</button>
                </div>
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                    <button className="text-xs md:text-sm font-medium text-[#001356] px px-4 py-1 border border-[#001356] rounded">Select Round for Forward</button>
                    <button className="text-xs md:text-sm font-medium text-white px px-4 py-1 bg-[#23AE00] rounded">Forward to Next Round</button>
                    <button className="text-xs md:text-sm font-medium text-white px px-4 py-1 bg-[#EC6453] rounded">Remove from this Round</button>
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
    );
};

export default ManageRegi;