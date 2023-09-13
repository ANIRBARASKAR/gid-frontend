import { Outlet } from "react-router-dom";
import OrganizerDashboardMenu from "./OrganizerDashboardMenu";
import SmallOrgMenu from "./SmallOrgMenu";


const OrganizerDashboard = () => {
    return (
        <div className="lg:flex items-center bg-[#F6F6F6] lg:pr-6">
            <div>
                <SmallOrgMenu />
                <OrganizerDashboardMenu />
            </div>
            <div className="lg:w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default OrganizerDashboard;