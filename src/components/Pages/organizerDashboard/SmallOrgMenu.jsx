import { NavLink } from "react-router-dom";


const SmallOrgMenu = () => {
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
                                to="/organizer-dashboard/org-dashboard"
                                exact
                            >

                                <img src="https://i.ibb.co/xhsRT8c/airplay.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/organizer-dashboard/my-profile"
                            >
                                <img src="https://i.ibb.co/2NFX63m/element-3.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/organizer-dashboard/add-event"
                            >
                                <img src="https://i.ibb.co/4dpHWDT/plus-circle.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to="/organizer-dashboard/users"
                            >
                                <img src="https://i.ibb.co/XVghwdb/user.png" alt="" />
                            </NavLink>
                        </li>
                        <li className="rounded-lg mb-2">
                            <NavLink
                                to=""
                            >
                                <img src="https://i.ibb.co/q7vtBw3/sms.png" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default SmallOrgMenu;