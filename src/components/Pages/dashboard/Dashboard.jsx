import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import SmallMenu from "./SmallMenu";


const Dashboard = () => {
    return (
        <div className="lg:flex items-center bg-[#F6F6F6] pb-8 lg:pr-6">
            <div>
                <SmallMenu />
                <DashboardMenu />
            </div>
            <div className="lg:w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;