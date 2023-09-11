import { useState } from "react";
import { RxTriangleUp } from "react-icons/rx";
import Opportunity from "./buttonPages/opportunity/Opportunity";
import Roundes from "./buttonPages/rounds/Roundes";
import Rewards from "./buttonPages/rewards/Rewards";

const EventOrgDetails = () => {
    const [active, setActive] = useState("firstButton");
    return (
        <div className=" mt-8 lg:ml-[300px]">
            <div>
                <div className="w-[275px] md:w-[665px] h-[10px] md:h-[15px] bg-[#FCFCFC] mx-auto" style={{
                    boxShadow: "0px 2px 4px 0px #00000040 inset"
                }}></div>
                <div className="flex justify-center mt-[-15px] md:mt-[-25px]">
                    <div>
                        <div className="flex justify-between w-[280px] md:w-[670px]">
                            <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center md:pt-[7px]">
                                        <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-[#284B80] mt-1">
                                            <p className="text-white text-center text-xs md:text-sm mb-1">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center md:pt-[7px]">
                                        <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-[#284B80] mt-1">
                                            <p className="text-white text-center text-xs md:text-sm mb-1">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full bg-[#FCFCFC]" style={{
                                boxShadow: "0px 2px 4px 0px #00000040 inset"
                            }}>
                                <div>
                                    <div className="flex justify-center items-center md:pt-[7px]">
                                        <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-[#284B80] mt-1">
                                            <p className="text-white text-center text-xs md:text-sm mb-1">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mx-[15px] md:mx-[280px] mt-1">
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#284B80]" size={25} /></div>
                        <button 
                        onClick={() => setActive("firstButton")}
                        className="text-white bg-[#284B80] text-[8px] md:text-sm px-2 py-1 rounded-full ml-5 mt-0" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Opportunity Visibility</button>
                    </div>
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#D9D9D9]" size={25} /></div>
                        <button 
                        onClick={() => setActive("secondButton")}
                        className="bg-[#D9D9D9] px-2 py-1 rounded-full text-[8px] md:text-sm" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Rounds</button>
                    </div>
                    <div>
                        <div className="flex justify-center"><RxTriangleUp className="text-[#D9D9D9]" size={25} /></div>
                        <button
                        onClick={() => setActive("thirdButton")} 
                        className="bg-[#D9D9D9] px-2 py-1 rounded-full text-[8px] md:text-sm" style={{
                            boxShadow: "0px 2px 4px 0px #00000040 inset"
                        }}>Rewards & Recognition</button>
                    </div>
                </div>
            </div>
            {/* Different pages */}
            <div>
                {
                    active === "firstButton" && <Opportunity />
                }
                {
                    active === "secondButton" && <Roundes />
                }
                {
                    active === "thirdButton" && <Rewards />
                }
            </div>
        </div>
    );
};

export default EventOrgDetails;