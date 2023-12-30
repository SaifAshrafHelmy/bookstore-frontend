
import { FaTwitter, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import logo from "../../assets/logo.svg"
import { IoHeartOutline, IoCartOutline, IoPersonOutline, IoMenuSharp   } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
import { useState } from 'react';

const Header = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const handleSideMenu = () => {
        setSideMenuOpen((prev) => !prev);
        console.log({ sideMenuOpen });
    };

    return (
        <header>
            <div className="ribbon  bg-green1 text-white w-full px-24 py-3 flex items-center relative text-xs md:text-sm">
                <div className="social-media hidden md:flex gap-4 ml-2">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaTiktok />
                </div>
                <div className="free-shipping absolute left-[50%] translate-x-[-50%]">
                    FREE SHIPPING ON ALL ORDERS
                </div>
            </div>

            <nav className="pt-4 px-24 hidden md:block">
                <ul className="flex gap-4 justify-center lg:justify-start">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Gift Card</a>
                    </li>
                    <li>
                        <a href="#">FAQs</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>

            <div className="sub-header flex px-24 gap-12 pt-4 justify-center items-center">
                <div className="menu-button lg:hidden" onClick={handleSideMenu}>
                    <IoMenuSharp className="text-2xl hover:cursor-pointer" />
                </div>
                <div className="logo min-w-40">
                    <a href="#">
                        <img
                            src={logo}
                            width={'200px'}
                            height={'200px'}
                            alt=""
                        />
                    </a>
                </div>
                <div className="search hidden lg:flex flex-grow flex-shrink-0">
                    <input
                        type="search"
                        className="w-full py-3 px-3 border-2 border-r-0 rounded-l-sm outline-none "
                        name="book_name"
                        placeholder="Enter book name"
                    />
                    <button className="bg-green1 hover:bg-green-light text-white font-bold py-3 px-8 rounded">
                        Search
                    </button>
                </div>
                <div className="button flex gap-6">
                    <SlMagnifier className="text-2xl hover:cursor-pointer lg:hidden" />
                    <IoPersonOutline className="text-2xl hover:cursor-pointer hidden md:block" />
                    <IoHeartOutline className="text-2xl hover:cursor-pointer hidden md:block" />
                    <IoCartOutline className="text-2xl  hover:cursor-pointer" />
                </div>
            </div>

            <div
                onClick={handleSideMenu}
                className={`menu-overlay z-10 w-screen h-screen bg-menu-overlay opacity-40 left-0 right-0 top-0 bottom-0  ${
                    sideMenuOpen ? 'fixed' : 'hidden'
                }`}
            ></div>

            <div
                className={`side-menu h-full w-1/2 bg-white z-50 overflow-x-hidden transition-all ease-in duration-1000 left-0 top-0 ${
                    sideMenuOpen ? 'fixed' : 'hidden'
                } `}
            >
                <div className=" bg-gray-200 text-center p-5 text-sm border-b-2 border-green1">
                    MENU
                </div>
                <ul className="flex flex-col">
                    <a href="#">
                        <li className="border-b-2 border-gray-100 px-5 py-5 hover:bg-menu-items-hover">
                            Home
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-b-2 border-gray-100 px-5 py-5 hover:bg-menu-items-hover flex gap-1">
                            <SlMagnifier className="text-2xl" />
                            Search
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-b-2 border-gray-100 px-5 py-5 hover:bg-menu-items-hover">
                            Categories
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-b-2 border-gray-100 px-5 py-5 hover:bg-menu-items-hover">
                            Deals & Promotions
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-b-2 border-gray-100 px-5 py-5 hover:bg-menu-items-hover flex gap-1">
                            <IoPersonOutline className="text-2xl" />
                            Login/Register
                        </li>
                    </a>
                </ul>
            </div>
        </header>
    );
};

export default Header