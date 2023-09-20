
const Result = () => {
    return (
        <>
            <div className="bg-[#284B80] py-4">
                <div className="container mx-auto text-white font-medium">
                    <p className="text-[22px]">Result</p>
                </div>
            </div>
            <div className="container mx-auto mt-8 w-[300px] md:w-[600px]">
                <div className="bg-[#284B80] py-2">
                    <h2 className="text-[14px] md:text-[30px] text-white font-semibold text-center">Result : 00/20</h2>
                </div>
                <div className="text-[#284B80] font-medium mt-8 text-sm md:text-base">
                    <div className="grid grid-cols-2 gap-8 text-center mb-2">
                        <p>Total Questions</p>
                        <p>: 20</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center mb-2">
                        <p>Attended Questions</p>
                        <p>: 0</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Result;