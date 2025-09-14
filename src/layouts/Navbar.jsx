import { useState } from "react";
import { TfiHeartBroken } from "react-icons/tfi";
import { FaSearch, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";   // ✅ Import Link
import envatoIcon from "../assets/envatoIcon.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* 🔹 Top Bar */}
      <div className="w-full h-12 bg-gray-700 items-center flex px-4">
        <img
          src={envatoIcon}
          alt="Envato Logo"
          className="h-6 w-6 rounded mr-2 cursor-pointer"
        />
        <span className="text-white font-bold text-lg sm:text-xl cursor-pointer">
          envato
        </span>
        <span className="text-white text-lg sm:text-xl cursor-pointer ml-1">
          market
        </span>
        <button className="bg-green-600 text-white rounded ml-auto px-3 py-1 text-sm sm:text-base cursor-pointer hover:bg-green-700">
          Buy Now
        </button>
      </div>

      {/* 🔹 Info Bar */}
      <div className="w-full flex flex-col md:flex-row text-white text-xs sm:text-sm lg:text-base">
        {/* Left Section */}
        <div className="w-full bg-blue-500 flex flex-col md:flex-row md:items-center px-4 py-2 gap-2 md:gap-6">
          <div className="flex items-center">
            <FaPhoneAlt className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
            <span className="font-medium">Helpline:</span>
            <span className="ml-1 cursor-pointer hover:text-black">
              +208-6666-0112
            </span>
          </div>

          <div className="items-center md:ml-auto md:mr-4 hidden md:flex">
            <IoIosClock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
            <span>Mon - Fri 8.00 am - 6.00 pm</span>
          </div>
        </div>

        <div className="hidden lg:flex w-full md:w-auto bg-blue-950 items-center justify-center md:justify-end px-4 py-2">
          <MdEmail className="mr-2 text-blue-200" />
          <span className="text-white">info@example.com</span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TfiHeartBroken className="text-3xl text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Meditics</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            <li><Link to="/" className="hover:text-blue-500">HOME</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">ABOUT</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">SERVICES</Link></li>
            <li><Link to="/book-appointment" className="hover:text-blue-500">APPOINTMENT</Link></li>
            <li><Link to="/team" className="hover:text-blue-500">TEAM</Link></li>
            <li><Link to="/blog" className="hover:text-blue-500">BLOG</Link></li>
            <li><Link to="/blog-detail" className="hover:text-blue-500">BLOG DETAIL</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">CONTACT</Link></li>
          </ul>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="rounded border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white text-blue-600">
            <ul className="flex flex-col text-black items-center gap-4 py-4 font-medium md:bg-white sm:bg-white">
              <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
              <li><Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link></li>
              <li><Link to="/book-appointment" onClick={() => setIsOpen(false)}>APPOINTMENT</Link></li>
              <li><Link to="/team" onClick={() => setIsOpen(false)}>TEAM</Link></li>
              <li><Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link></li>
              <li><Link to="/blog-detail" onClick={() => setIsOpen(false)}>BLOG DETAIL</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
              
              {/* Mobile Search */}
              <div className="flex items-center space-x-2 px-4 w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-3xl border px-2 py-1 text-sm text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 md:bg-white sm:bg-white"
                />
                <FaSearch className="text-black cursor-pointer hover:text-gray-300" />
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
