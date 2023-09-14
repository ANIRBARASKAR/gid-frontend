import { useState } from "react";
import Participations from "./buttons/participation/Participations";
import ManageRegi from "./buttons/manageRegi/ManageRegi";
import Cirtificate from "./buttons/manageCirtificate/Cirtificate";
import Winners from "./buttons/manageWinner/Winners";
// import CreateCirtificate from "./buttons/manageCirtificate/CreateCirtificate";
// import AddEventParticipation from "./buttons/participation/AddEventParticipation";

const RewardDetails = () => {
    const [active, setActive] = useState("participation");
    return (
        <div className="mt-12 lg:ml-[300px]">
            <div className="mx-2 md:mx-32 flex justify-between">
                <button
                    onClick={() => setActive("participation")}
                    className={active === "participation" ? "text-base text-[#001356] font-medium border-b border-[#001356]" : "text-base text-[#001356] font-medium"}>
                    Participation
                </button>
                <button
                    onClick={() => setActive("registration")}
                    className={active === "registration" ? "text-base text-[#001356] font-medium border-b border-[#001356]" : "text-base text-[#001356] font-medium"}>
                    Manage Registration
                </button>
                <button
                    onClick={() => setActive("cirtificate")}
                    className={active === "cirtificate" ? "text-base text-[#001356] font-medium border-b border-[#001356]" : "text-base text-[#001356] font-medium"}>
                    Manage Certificate
                </button>
                <button
                    onClick={() => setActive("winner")}
                    className={active === "winner" ? "text-base text-[#001356] font-medium border-b border-[#001356]" : "text-base text-[#001356] font-medium"}>
                    Manage Winners
                </button>
            </div>
            <div>
                {
                    active === "participation" && <Participations />
                }

                {/* After Clicking the ADD pArticipation Button the Add Event Participation will be show. */}

                {/* {
                    active === "participation" && <AddEventParticipation />
                } */}

                {
                    active === "registration" && <ManageRegi />
                }

                {
                    active === "cirtificate" && <Cirtificate />
                }

                {/* After Clicking the Add Certificate Button this Create Cirtificate Page will be show. */}

                {/* {
                    active === "cirtificate" && <CreateCirtificate />
                } */}
                
                {
                    active === "winner" && <Winners />
                }
            </div>
        </div>
    );
};

export default RewardDetails;