import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";


const Dashboard = () => {
    return (
        <div className="grid grid-cols-4 bg-[#F6F6F6]">
            <div className="col-span-1">
                <DashboardMenu />
            </div>
            <div className="col-span-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;