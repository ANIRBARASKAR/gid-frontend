import { NavLink } from "react-router-dom";


const OrganizerDashboardMenu = () => {
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
                                    to=""
                                    exact
                                    className={style}
                                >

                                    <img src="https://i.ibb.co/sjJWFNX/airplay.png" alt="" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to=""
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/02zGgSF/element-3.png" alt="" />
                                    My Profile
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to=""
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/6FFyrT8/plus-circle.png" alt="" />
                                    Add Event
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to=""
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/2ZwdXLx/user.png" alt="" />
                                    Users
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

export default OrganizerDashboardMenu;