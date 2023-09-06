import { NavLink } from "react-router-dom";


const SmallMenu = () => {
    return (
        <>
            {/* Dashboard for Small device */}

            <div className="block lg:hidden  mt-8" style={{
                boxShadow: "0px 4px 4px 0px #00000040"
            }}>

                <div className="bg-white">

                    <ul className="flex justify-between mx-4 list-none mt-2">
                        <li className="mb-4">
                            <NavLink
                                to="/dashboard/profile"
                                exact
                            >

                                <img src="https://i.ibb.co/0ZKqcwK/element-3.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/tickets"
                            >
                                <img src="https://i.ibb.co/2dyKm6Y/clipboard-tick.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/participation"
                            >
                                <img src="https://i.ibb.co/JqSR4vz/Vector.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/reviews"
                            >
                                <img src="https://i.ibb.co/4dHjB7j/Favorite-Window.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/certification"
                            >
                                <img src="https://i.ibb.co/zXMPBpN/book-open.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/saved-events"
                            >
                                <img src="https://i.ibb.co/JB9DH7J/bookmark.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/dashboard/blogs"
                            >
                                <img src="https://i.ibb.co/svqRn1R/edit.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/"
                            >
                                <img src="https://i.ibb.co/GPnXTZp/sms.png" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    );
};

export default SmallMenu;