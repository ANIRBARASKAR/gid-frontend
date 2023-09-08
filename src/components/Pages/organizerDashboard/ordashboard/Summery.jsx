import Progress from "./Progress";
import LineProgress from "./LineProgress";


const Summery = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className='mt-5 mx-2 md:mx-0'>
                <table className="w-[100%] mt-8 text-xs md:text-base">
                    <thead>
                        <tr className='text-xl font-semibold text-[#001356] text-left'>
                            <th className='py-4'>Events</th>
                            <th className='py-4'>Registration</th>
                            <th className='py-4'>Status</th>
                            <th className='py-4'>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-gray-500">
                            <td className='py-4'>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.ibb.co/6gCPXTx/image-60.png" alt="" />
                                        <div>
                                            <p className="text-sm text-[#001356] font-medium">DEVOPS TRANNING & COURSE</p>
                                            <p className="text-xs text-gray-400">#vf568dc96d</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-4 lg:px-4'>
                                <div>
                                    <LineProgress />
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <button className="text-white bg-[#23AE00] px-4 py-1 rounded-lg">Published</button>
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <Progress />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="text-gray-500">
                            <td className='py-4'>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.ibb.co/6gCPXTx/image-60.png" alt="" />
                                        <div>
                                            <p className="text-sm text-[#001356] font-medium">DEVOPS TRANNING & COURSE</p>
                                            <p className="text-xs text-gray-400">#vf568dc96d</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-4 lg:px-4'>
                                <div>
                                    <LineProgress />
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <button className="text-white bg-[#23AE00] px-4 py-1 rounded-lg">Published</button>
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <Progress />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="text-gray-500">
                            <td className='py-4'>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.ibb.co/6gCPXTx/image-60.png" alt="" />
                                        <div>
                                            <p className="text-sm text-[#001356] font-medium">DEVOPS TRANNING & COURSE</p>
                                            <p className="text-xs text-gray-400">#vf568dc96d</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-4 lg:px-4'>
                                <div>
                                    <LineProgress />
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <button className="text-white bg-[#23AE00] px-4 py-1 rounded-lg">Published</button>
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <Progress />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="text-gray-500">
                            <td className='py-4'>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.ibb.co/6gCPXTx/image-60.png" alt="" />
                                        <div>
                                            <p className="text-sm text-[#001356] font-medium">DEVOPS TRANNING & COURSE</p>
                                            <p className="text-xs text-gray-400">#vf568dc96d</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-4 lg:px-4'>
                                <div>
                                    <LineProgress />
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <button className="text-white bg-[#23AE00] px-4 py-1 rounded-lg">Published</button>
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <Progress />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="text-gray-500">
                            <td className='py-4'>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.ibb.co/6gCPXTx/image-60.png" alt="" />
                                        <div>
                                            <p className="text-sm text-[#001356] font-medium">DEVOPS TRANNING & COURSE</p>
                                            <p className="text-xs text-gray-400">#vf568dc96d</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-4 lg:px-4'>
                                <div>
                                    <LineProgress />
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <button className="text-white bg-[#23AE00] px-4 py-1 rounded-lg">Published</button>
                                </div>
                            </td>
                            <td className='lg:px-4'>
                                <div>
                                    <Progress />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Summery;