import { Outlet } from "react-router-dom";
import OrganizerDashboardMenu from "./OrganizerDashboardMenu";


const OrganizerDashboard = () => {
    return (
        <div className="lg:flex items-center bg-[#F6F6F6] lg:pr-6">
            <div>
                <OrganizerDashboardMenu />
            </div>
            <div className="lg:w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default OrganizerDashboard;