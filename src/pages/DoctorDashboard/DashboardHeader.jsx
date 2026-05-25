import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const DashboardHeader = ({ collapsed, setCollapsed }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="w-full h-[80px] bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-2xl text-[#16345d] cursor-pointer mr-3"
        >
          <FaBars />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-[#16345d] lg:block hidden">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 w-[250px]">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full outline-none text-sm text-gray-600"
          />
        </div>

        <div className="relative">
          <FaBell className="text-2xl text-[#16345d]" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            4
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-11 h-11 rounded-full object-cover"
              alt="profile"
            />

            <div className="hidden lg:block text-left w-full">
              <h3 className="font-bold text-[#16345d] leading-5">
                Dr. Rahul Sharma
              </h3>
              <p className="text-sm text-gray-500">Admin</p>
            </div>

            <FaChevronDown
              className={`hidden lg:block text-gray-500 transition ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-16 w-[240px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-[#16345d]">Dr. Rahul Sharma</h3>
                <p className="text-sm text-gray-500">doctor@medicare.com</p>
              </div>

              <button onClick={()=> {
                setProfileOpen(!profileOpen)
                navigate("/admin-dashboard/doctor-profile")}} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] transition">
                <FaUser />
                My Profile
              </button>

              <button onClick={()=> {
                setProfileOpen(!profileOpen)
                navigate("/admin-dashboard/settings")}} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] transition">
                <FaCog />
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center gap-3 text-red-500 hover:bg-red-50 transition"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;