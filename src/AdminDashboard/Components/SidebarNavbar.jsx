import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/newlogo.jpg";
import { 
  FaBars, FaTimes, FaUserCircle, FaBell, FaSearch, FaMoon, 
  FaHome, FaUtensils, FaShoppingCart, FaChartLine, FaSignOutAlt, FaFolder
} from "react-icons/fa";

const SidebarNavbar = ({ isOpen, toggleSidebar }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
        {/* Sidebar Toggle Button */}
        <button className="md:hidden text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Title & Logo */}
        <div className="flex items-center space-x-2">
          <img src={img} alt="Logo" className="h-11 max-h-12 w-auto object-contain" />
          <h1 className="text-xl font-bold">Taste Of India</h1>
        </div>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-md pl-8 focus:outline-none"
            />
            <FaSearch className="absolute left-2 top-3 text-gray-500" />
          </div>
          <FaMoon className="text-xl cursor-pointer hover:text-orange-300" />
          <FaBell className="text-xl cursor-pointer hover:text-orange-300" />
          <FaUserCircle className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:w-64 z-40`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4 space-y-4">
          {/* Dashboard Section with Dropdown */}
          <div>
            <button 
              className="flex justify-between w-full items-center p-2 hover:bg-orange-300 rounded"
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            >
              <span className="flex items-center space-x-2">
                <FaHome /> <span> <Link to="/" className="block hover:bg-orange-300 p-2 rounded">Dashboard </Link></span>
              </span>
             
            </button>
          </div>

          {/* Categories Section */}
          <h3 className="text-gray-600 text-sm font-semibold mt-4">Categories</h3>
          <Link to="/orders" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
             <FaShoppingCart /><span>Orders Management</span>
          </Link>
          {/*<Link to="/managers" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
            <FaFolder /> <span>Managers</span>
          </Link>*/} 
          
          {/* Labels Section */}
          <h3 className="text-gray-600 text-sm font-semibold mt-4">Labels</h3>
          <Link to="/ManageDishes" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
          <FaUtensils /> <span>Manage Dishes</span> </Link>
          <Link to="/grocerymanagement" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
          <FaUtensils /> <span>Grocery Management</span>
          {/*</Link>
          <Link to="/analytics" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
            <FaChartLine /> <span>Analytics</span>
          </Link>
          <Link to="/sales" className="flex items-center space-x-2 p-2 hover:bg-orange-300 rounded">
            <FaChartLine /> <span>Sales</span>*/}
          </Link>
            
        </nav>

        {/* Logout Button */}
        <div className="bottom-4 left-4">
          <button className="flex items-center space-x-2 text-red-600 hover:bg-red-200 rounded">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
        
      </div>
    </>
  );
};

export default SidebarNavbar;
