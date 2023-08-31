
const GetOtp = () => {
    return (
        <div className='container mx-auto my-6'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <img className=" " src="https://i.ibb.co/kDQ2FdD/Background-1.png" alt="" />
                </div>
                <div className="col-span-1 mt-12">
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        <p className="text-center text-[#555555] font-semibold mt-5">Sign up into your account</p>
                    </div>
                    <form className="p-4">
                        <div>
                            <label htmlFor="username">username :</label>
                            <input className="w-full border rounded p-2 bg-[#EEEEEE] outline-none mt-2" type="text" name="" id="" placeholder="Enter Email Id / mobile no" />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#284B80] text-white font-medium px-2 py-1 rounded-md mt-8 text-sm">Get OTP</button>
                        </div>
                        <div className="flex justify-center mt-10">
                            <div className="flex items-center gap-4">
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                                <input className="w-10 border border-gray-400 shadow rounded-lg p-2 [#EEEEEE] outline-none mt-2" type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetOtp;