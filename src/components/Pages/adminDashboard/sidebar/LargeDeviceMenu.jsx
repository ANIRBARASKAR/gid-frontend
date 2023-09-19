import { NavLink } from "react-router-dom";

const LargeDeviceMenu = () => {
    const style = "flex items-center gap-4 text-gray-700 font-light px-4 py-3 rounded-lg text-lg font-medium";
    return (
        <>
            {/* Dashboard for large device */}
            <div
                className={`h-screen fixed top-0 md:left-0 mt-16 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl w-64 z-10 py-4 px-6 transition-all duration-300 bg-white hidden lg:block`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div className="flex flex-col">

                        <ul className="flex-col min-w-full flex list-none mt-2">
                            <li className="mb-4">
                                <NavLink
                                    to="/admin-dashboard/adm-dashboard-home"
                                    exact
                                    className={style}
                                >

                                    <img src="https://i.ibb.co/qpPhWQz/airplay-1.png" alt="" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/adm-users"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/n1p53Nt/user-1.png" alt="" />
                                    Users
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/organization"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/LYjSvDJ/element-3-1.png" alt="" />
                                    Organization
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/manage-event"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/9qZXzqD/box.png" alt="" />
                                    Manage Events
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/payout-request"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/zrmJF2K/dollar-sign.png" alt="" />
                                    Payout Request
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/adm-blog"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/jks7T1Z/edit.png" alt="" />
                                    Blogs
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/reports"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/ZLXdXLz/Trending-up.png" alt="" />
                                    Reports
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/reviews"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/t207KR3/Search-Document.png" alt="" />
                                    Review
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/call-inquiry"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/x3BH73r/Vector.png" alt="" />
                                    Call Inquery
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin-dashboard/ads"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/41B666d/sliders.png" alt="" />
                                    Ads
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/GPnXTZp/sms.png" alt="" />
                                    Sign Out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargeDeviceMenu;