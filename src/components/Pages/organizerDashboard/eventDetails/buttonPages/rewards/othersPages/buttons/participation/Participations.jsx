import { BiSearch } from "react-icons/bi";


const Participations = () => {
    return (
        <div>
            <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[16px] font-medium text-[#001356]">Event participation</p>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <div className='flex items-center px-2 py-1 border border-gray-300 bg-[#F6F8FA] rounded'>
                            <BiSearch className='text-[#343A40]' size={20} />
                            <input className='outline-none bg-[#F6F8FA] md:w-[300px]' type="search" name="" id="" placeholder='Search..' />
                        </div>
                        <div className="flex justify-between gap-6 items-center">
                            <div>
                                <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Add Participation</button>
                            </div>
                            <div>
                                <button className="text-white bg-[#001356] px px-4 py-1 rounded-md">Export Participation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participations;