
const RegistrationOTP = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
                <div>
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/4JM5spC/LOGO-PNG-3.png" alt="" />
                        <p className="text-center text-[#555555] mt-2 font-semibold">Sign up into your account</p>
                    </div>
                    <div className='mt-16'>
                        <div className="flex justify-center">
                            <div className="inline-block rounded-3xl bg-white shadow-2xl">
                                <div className="flex justify-center bg-[#7E93B3] rounded-t-3xl shadow-lg">
                                    <p className="text-center text-white p-4 ">Enter the OTP you received on the given Mobile no.</p>
                                </div>
                                <div className="flex justify-center my-16">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <input className="outline-none w-12 border-b-2 border-[#284B80]" type="text" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center px-4 lg:px-0'>
                    <div>
                        <img className="relative" src="https://i.ibb.co/W54yPTf/Vector-5.png" alt="" />
                        <img className="absolute mt-[-450px] ml-[-40px] md:ml-[-70px] md:mt-[-500px] lg:ml-[-50px]" src="https://i.ibb.co/S5bgtX3/sign-up-01-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationOTP;