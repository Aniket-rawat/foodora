import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { TbHomeFilled } from "react-icons/tb";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";


const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <>
            {/* Desktop Menu */}
            <ul className="nav hidden lg:flex justify-center space-x-8 font-medium">
                <li>
                    <NavLink
                        to="/"
                        end
                        className="hover:text-amber-600 transition-colors flex items-center gap-1"
                    >
                        <TbHomeFilled size={28} /> <span className="text-lg ">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        end
                        className="hover:text-amber-600 transition-colors flex items-center gap-1"
                    >
                        <MdRestaurantMenu size={28} /><span className="text-lg ">Menu</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        end
                        className="hover:text-amber-600 transition-colors flex items-center gap-1"
                    >
                        <IoMdMailOpen size={28} /><span className="text-lg ">Contact</span>
                    </NavLink>
                </li>
            </ul>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg  transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50 block  lg:hidden`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <Link to="/" className="flex items-baseline gap-1">
                        <img src={logo} alt="logo" />
                        <h4 className="text-3xl font-bold text-amber-600">
                            Food<span className="text-gray-900">ora</span>
                        </h4>
                    </Link>
                    <button onClick={toggleMenu} className="text-gray-800">
                        ✕
                    </button>
                </div>

                <ul className="nav flex flex-col p-4 space-y-5 text-gray-800 font-medium bg-white">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className="hover:text-amber-600 transition-colors flex items-center gap-1"
                        >
                            <TbHomeFilled size={28} /> <span className="text-lg ">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/menu"
                            end
                            className="hover:text-amber-600 transition-colors flex items-center gap-1"
                        >
                            <MdRestaurantMenu size={28} /><span className="text-lg ">Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            end
                            className="hover:text-amber-600 transition-colors flex items-center gap-1"
                        >
                            <IoMdMailOpen size={28} /><span className="text-lg ">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
