import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
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
                                    to="/dashboard/profile"
                                    exact
                                    className={style}
                                >

                                    <img src="https://i.ibb.co/0ZKqcwK/element-3.png" alt="" />
                                    My Profile
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/tickets"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/2dyKm6Y/clipboard-tick.png" alt="" />
                                    My tickets
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/participation"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/JqSR4vz/Vector.png" alt="" />
                                    Participation
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/reviews"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/4dHjB7j/Favorite-Window.png" alt="" />
                                    My Reviews
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/certification"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/zXMPBpN/book-open.png" alt="" />
                                    Certifications
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/saved-events"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/JB9DH7J/bookmark.png" alt="" />
                                    Saved Events 
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard/blogs"
                                    activeClassName="text-red-500"
                                    className={style}
                                >
                                    <img src="https://i.ibb.co/svqRn1R/edit.png" alt="" />
                                    Blogs 
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

export default DashboardMenu;