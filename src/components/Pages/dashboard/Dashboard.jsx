import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";


const Dashboard = () => {
    return (
        <div className="flex items-center bg-[#F6F6F6] pb-8 lg:pr-6">
            <div>
                <DashboardMenu />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;