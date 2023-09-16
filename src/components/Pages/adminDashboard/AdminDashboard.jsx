import { Outlet } from "react-router-dom";
import LargeDeviceMenu from "./sidebar/LargeDeviceMenu";


const AdminDashboard = () => {
    return (
        <div className="lg:flex items-center bg-[#F6F6F6]">
            <div>
                <LargeDeviceMenu />
            </div>
            <div className="lg:w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;