
import { FaTwitter, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import logo from "../../assets/logo.svg"
import { IoHeartOutline, IoCartOutline, IoPersonOutline, IoMenuSharp   } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";


const Header = () => {
  return (
    <header >
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

        <div className='sub-header flex px-24 gap-12 pt-4 justify-center items-center'>
            <div className="menu  lg:hidden">
                <IoMenuSharp className='text-2xl hover:cursor-pointer' />
            </div>
            <div className='logo min-w-40'>
                <a href="#"><img src={logo} width={"200px"} height={"200px"} alt="" /></a>
            </div>
            <div className='search hidden lg:flex flex-grow flex-shrink-0'>
                <input type="search" className='w-full py-3 px-3 border-2 border-r-0 rounded-l-sm outline-none ' name="book_name" placeholder='Enter book name'/>
                <button className="bg-green1 hover:bg-green-light text-white font-bold py-3 px-8 rounded">
                        Search
                </button>     
            </div>
            <div className='button flex gap-6'>
                <SlMagnifier  className='text-2xl hover:cursor-pointer lg:hidden' />
                <IoPersonOutline className='text-2xl hover:cursor-pointer' />
                <IoHeartOutline className='text-2xl hover:cursor-pointer' />
                <IoCartOutline className='text-2xl  hover:cursor-pointer' />


            </div>
        </div>
        
    </header>
  )
}

export default Header