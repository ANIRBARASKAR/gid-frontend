import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    return (
        <nav className="z-[11] sticky top-0 p-4 shadow-xl bg-white">
            <div className="container mx-auto p-1 relative">
                <div className="md:flex md:justify-between md:items-center ">
                    {/* first part */}
                    <div className="flex items-center">
                        <RiMenu2Fill
                            onClick={() => setOpen(!open)}
                            className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
                        />
                        <div className="mx-auto">
                            <img
                                src="https://i.ibb.co/JRZ013r/LOGO-PNG-1.png"
                                alt="logo"
                                className="h-8"
                            />
                        </div>
                    </div>
                    {/* second part */}
                    <ul className="hidden lg:flex font-semibold space-x-10">
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                               <NavLink to={"/home"}>Home</NavLink>
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                Events
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                <NavLink to={"/about"}>AboutUs</NavLink>
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                <NavLink to={"/blog"}>Blogs</NavLink>
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                ContactUs
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                DareX
                            </span>
                        </li>
                        <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
                            <span>
                                How it Works
                            </span>
                        </li>
                    </ul>
                    {/* third part */}
                    <div className="space-x-4 hidden md:block">
                        <button className="transition-all delay-100 duration-300 font-semibold text-white px-11 py-1.5 rounded-xl bg-[#001356]">
                            Signin
                        </button>
                        <button className="transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus text-white hover:border-primary px-8 py-1.5 rounded-xl bg-[#001356]">
                            Signup
                        </button>
                    </div>
                </div>
                {/* mobile navbar */}
                <div
                    className={`lg:hidden bg-primary w-[280px] md:w-[260px] h-screen absolute ${open
                            ? "-top-2 -left-2 transition-all duration-700 "
                            : "top-0 -left-full transition-all duration-1000 delay-300"
                        }`}
                >
                    <div className="bg-white p-[17px] flex justify-between items-center">
                        <span className="cursor-pointer">
                            <img
                                src="https://i.ibb.co/JRZ013r/LOGO-PNG-1.png"
                                alt="logo"
                                className="h-7"
                            />
                        </span>
                        <IoIosClose
                            className="hover:text-primary text-3xl font-bold cursor-pointer transition-all duration-200"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <ul className="space-y-3 text-sm cursor-pointer">
                        <li
                            className=""
                            style={{ borderBottom: "1px solid #F8908B" }}
                        >
                            <div
                                onClick={() => setSubmenuOpen(!submenuOpen)}
                                className="p-3"
                            >
                                Home
                            </div>
                            {/* submenu */}
                            <div
                                className={` ${submenuOpen
                                        ? "max-h-auto transition-all "
                                        : "max-h-0 overflow-hidden"
                                    } `}
                                style={{ background: "#F38681" }}
                            >
                                <ul className="space-y-5 p-6">
                                    <li>Home</li>
                                </ul>
                            </div>
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                            Events
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                            AbutUs
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                            Blogs
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                           ContactUs
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                           Darex
                        </li>
                        <li
                            style={{ borderBottom: "1px solid #F8908B" }}
                            className="p-3"
                        >
                           How it Works
                        </li>
                        <li
                            style={{borderBottom: "1px solid #F8908B" }}
                            className="flex justify-between items-center p-3"
                        >
                            Signin / Signup
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;