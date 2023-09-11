
const Rewards = () => {
    return (
        <div className="bg-white mt-5 py-8 px-6 rounded-lg" style={{
            boxShadow: "0px 4px 4px 0px #00000040"
        }}>
            <p className="text-[12px] md:text-base text-[#001356] font-medium">Rewards & Recognition</p>
            <p className="text-[#001356] mt-4">One-liner description about prizes!*</p>
            <input className="w-full border-2 border-[#284B80] rounded-md py-1 px-4 mt-1 placeholder-[#284B80]" type="text" name="" id="" placeholder="Enter one liner description" />

            <div className="mt-5">
                <p className="text-[#001356]">Within how many days will you be able to release the prizes (if any) and/or certificates after the event is over?*</p>
                <input className="w-full border-2 border-[#284B80] rounded-md py-1 px-4 mt-1 placeholder-[#001356]" type="text" name="" id="" placeholder="Enter how many days release the prizes" />
            </div>
            <div className="flex items-center gap-4 text-[#001356] mt-5">
                <p className="text-medium">Participation certificate will be provided ?</p>
                <div className="flex items-center gap-4">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Yes</label>
                </div>
                <div className="flex items-center gap-4">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">No</label>
                </div>
            </div>
        </div>
    );
};

export default Rewards;