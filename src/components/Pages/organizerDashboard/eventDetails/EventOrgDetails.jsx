import { RxTriangleUp } from "react-icons/rx";

const EventOrgDetails = () => {
    return (
        <div className=" mt-8 lg:ml-[300px]">
            <div>
                <div className="w-[665px] h-[15px] bg-[#FCFCFC] mx-auto" style={{
                    boxShadow: "0px 2px 4px 0px #00000040 inset"
                }}></div>
                <div className="flex justify-center mt-[-25px]">
                    <div>
                        <div className="flex justify-between w-[670px]">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center pt-[7px]">
                                        <div className="w-[22px] h-[22px] rounded-full bg-[#284B80]">
                                            <p className="text-white text-center">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center pt-[7px]">
                                        <div className="w-[22px] h-[22px] rounded-full bg-[#284B80]">
                                            <p className="text-white text-center">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center pt-[7px]">
                                        <div className="w-[22px] h-[22px] rounded-full bg-[#284B80]">
                                            <p className="text-white text-center">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between lg:mx-[280px] mt-1">
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#284B80]" size={25} /></div>
                        <button className="text-white bg-[#284B80] px-2 py-1 rounded-full ml-5 mt-0" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Opportunity Visibility</button>
                    </div>
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#D9D9D9]" size={25} /></div>
                        <button className="bg-[#D9D9D9] px-2 py-1 rounded-full" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Rounds</button>
                    </div>
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#D9D9D9]" size={25} /></div>
                        <button className="bg-[#D9D9D9] px-2 py-1 rounded-full" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Rewards & Recognition</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventOrgDetails;