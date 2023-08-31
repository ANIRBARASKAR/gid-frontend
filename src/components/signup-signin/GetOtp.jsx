
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
                        <button type="submit" className="bg-[#284B80] text-white font-semibold shadow-xl px-12 py-2 rounded mt-10 w-full">
                            Login now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetOtp;