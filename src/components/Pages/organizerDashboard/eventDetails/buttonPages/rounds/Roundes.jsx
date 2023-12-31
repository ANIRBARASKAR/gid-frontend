import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


const Roundes = () => {
    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <p className="text-[12px] md:text-base text-[#001356] font-medium">Add/Manage Rounds</p>
            <div className="border-2 border-[#284B80] rounded-lg pl-4 py-1 flex justify-between gap-2">
                <p className="text-[#284B80] text-[10px] md:text-base">List all the rounds separately to give users a clear understanding of how they will proceed forward in this opportunity.</p>
                <div className='bg-[#284B80] rounded-md'>
                    <button className=" text-white px-2 py-1 text-[8px] md:text-base text-right">Add Round</button>
                </div>
            </div>
            <p className="text-[12px] md:text-base text-[#001356] font-medium mt-5">Round List</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-5">
                <div className="bg-[#CFE5FF] md:h-[138px] p-4 rounded-md">
                    <div className="flex justify-between">
                        <h4 className="text-sm md:text-xl font-bold text-[#001356]">Round 1</h4>
                        <button className="bg-white text-[#001356] px-6 text-[8px] md:text-base rounded-md">Quiz</button>
                    </div>
                    <p className="text-[#001356] text-xs md:text-base mt-6 md:mt-12">created on 16 Jun, 2023</p>
                </div>
                <div className="bg-[#CFE5FF] md:h-[138px] p-4 rounded-md">
                    <div className="flex justify-between">
                        <h4 className="text-sm md:text-xl font-bold text-[#001356]">Round 2</h4>
                        <button className="bg-white text-[#001356] px-6 text-[8px] md:text-base rounded-md">Quiz</button>
                    </div>
                    <p className="text-[#001356] text-xs md:text-base mt-6 md:mt-12">created on 16 Jun, 2023</p>
                </div>
                <div className="bg-[#CFE5FF] md:h-[138px] p-4 rounded-md">
                    <div className="flex justify-between">
                        <h4 className="text-sm md:text-xl font-bold text-[#001356]">Round 3</h4>
                        <button className="bg-white text-[#001356] px-6 text-[8px] md:text-base rounded-md">Quiz</button>
                    </div>
                    <p className="text-[#001356] text-xs md:text-base mt-6 md:mt-12">created on 16 Jun, 2023</p>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex items-center bg-[#284B80] text-white px-8 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <BsArrowLeftCircle size={20} />
                    <button>Previous</button>
                </div>
                <div className='flex items-center bg-[#284B80] text-white px-4 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <button>Save & Next</button>
                    <BsArrowRightCircle size={20} />
                </div>
            </div>
        </div>
    );
};

export default Roundes;