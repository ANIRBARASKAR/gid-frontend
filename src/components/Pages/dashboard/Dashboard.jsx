import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";


const Dashboard = () => {
    return (
        <div className="flex items-center">
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