import { BsArrowLeftCircle } from "react-icons/bs";

const NextRound = () => {
    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <div className="flex justify-between items-center">
                <p className="text-[12px] md:text-base text-[#001356] font-medium">Round Create</p>
                <div className='flex items-center bg-[#284B80] text-white px-4 py-2 rounded-md gap-4' style={{
                    boxShadow: "0px 4px 4px 0px #00135640"
                }}>
                    <BsArrowLeftCircle size={20} />
                    <button>Back</button>
                </div>
            </div>
        </div>
    );
};

export default NextRound;