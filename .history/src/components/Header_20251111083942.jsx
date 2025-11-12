import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

// react icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TbUserCircle, TbArrowNarrowRight } from "react-icons/tb";
import { RiShoppingBag4Line, RiUserLine } from "react-icons/ri";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // const [token, setToken] = useState("token");
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [cartCount, setCartCount] = useState(0); // 🟢 Dynamic cart count



    // Detect scroll to apply background
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🟢 Fetch cart items count from localStorage
    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartCount(cart.length);
        };

        // Initial load
        updateCartCount();

        // Listen to changes from other components/pages
        window.addEventListener("storage", updateCartCount);
        window.addEventListener("cartUpdated", updateCartCount);

        return () => {
            window.removeEventListener("storage", updateCartCount);
            window.removeEventListener("cartUpdated", updateCartCount);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 shadow-[inset_0_-2px_5px_rgba(0,0,0,0.2)]  w-full z-50 mb-[102px] p-6 md:p-8 lg:p-6
            ${scrolled ? "bg-white/90 backdrop-blur" : "bg-white backdrop-blur-lg"}`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-baseline gap-1">
                    <img src={logo} alt="logo" />
                    <h4 className="text-3xl font-bold text-amber-600">
                        Food<span className="text-gray-900">ora</span>
                    </h4>
                </Link>

                {/* Navbar */}
                <div className="flex-1">
                    <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="block lg:hidden text-gray-800 focus:outline-none"
                    >
                        {!isOpen ? <HiOutlineMenuAlt1 size={26} /> : ""}
                    </button>

                    {/* 🟢 Cart Icon with Dynamic Count */}
                    <Link to="/cart" className="text-gray-800 flex relative">
                        <RiShoppingBag4Line size={28} />
                        {cartCount > 0 && (
                            <span
                                className="bg-amber-600 text-white absolute left-3.5 -top-3.5 w-5 h-5 rounded-full 
                shadow-inner flex items-center justify-center text-[12px] font-semibold"
                            >
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Profile / Login */}
                    <div className="group relative">
                        {/* <div onClick={() => !token && navigate("/login")}>
                            {token ? (
                                <TbUserCircle size={28} className="cursor-pointer" />
                            ) : (
                                <button className="btn-profile text-lg">
                                    Login <RiUserLine className="cursor-pointer text-xl" />
                                </button>
                            )}
                        </div> */}
                        {/* {token && (
                            <ul
                                className="bg-white shadow-sm p-2 w-32 ring-1 ring-slate-900/15 
                rounded absolute right-0 top-8 hidden group-hover:flex flex-col"
                            >
                                <li
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => navigate("/orders")}
                                >
                                    <p>Orders</p> <TbArrowNarrowRight className="opacity-50" />
                                </li>
                                <hr className="my-2" />
                                <li className="flex justify-between items-center cursor-pointer">
                                    <p>Logout</p> <TbArrowNarrowRight className="opacity-50" />
                                </li>
                            </ul>
                        )} */}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-30 lg:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </header>
    );
};

export default Header;

