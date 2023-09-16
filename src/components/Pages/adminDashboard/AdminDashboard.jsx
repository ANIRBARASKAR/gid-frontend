import { Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className="lg:flex items-center bg-[#F6F6F6]">
            <div>
                <h1>Admin dashboard</h1>
            </div>
            <div className="lg:w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;