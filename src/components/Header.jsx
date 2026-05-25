import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/clinic_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const navigate = useNavigate();
  const { user, role } = useAuth();

  const morePages = [
    { name: "Department Details", path: "/department-details" },
    { name: "Service Details", path: "/service-details" },
    { name: "Appointment", path: "/appointment" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Frequently Asked Questions", path: "/faq" },
    { name: "Gallery", path: "/gallery" },
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "404", path: "/404" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/department" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/docters" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `relative pb-2 transition hover:text-[#0ea5e9] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#0ea5e9] after:transition-all after:duration-300 ${
      isActive ? "text-[#0ea5e9] after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
    setMoreOpen(false);
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 py-4 transition-all duration-300">
      <div
        data-aos="fade-down"
        className="container mx-auto bg-white rounded-2xl shadow-lg px-6 py-5 flex items-center justify-between"
      >
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={Logo} alt="Medical Health Care" className="w-[250px]" />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.slice(0, 5).map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="relative cursor-pointer flex items-center gap-2 hover:text-[#0ea5e9] transition after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#0ea5e9] after:transition-all after:duration-300"
            >
              More Pages
              <FaChevronDown
                className={`text-xs transition ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen && (
              <div className="absolute top-12 left-0 w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                {morePages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={() => setMoreOpen(false)}
                    className="block px-5 py-3 text-md text-gray-700 hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] transition"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          {role === "DOCTOR" && (
            <li>
              <NavLink to="/admin-dashboard" className={linkClass}>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/appointment"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] transition text-white px-6 py-3 rounded-full font-medium"
          >
            Appointment
          </Link>

          <button
            onClick={handleLogout}
            className="border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition px-5 py-3 rounded-full font-medium"
          >
            Logout
          </button>
        </div>

        {/* <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                className="border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white transition px-5 py-3 rounded-full font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-[#0ea5e9] hover:bg-[#0284c7] transition text-white px-5 py-3 rounded-full font-medium"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/appointment"
                className="bg-[#0ea5e9] hover:bg-[#0284c7] transition text-white px-6 py-3 rounded-full font-medium"
              >
                Appointment
              </Link>

              <button
                onClick={handleLogout}
                className="border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition px-5 py-3 rounded-full font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div> */}

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-aos="fade-down"
          className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg p-6 max-h-[80vh] overflow-y-auto"
        >
          <ul className="flex flex-col gap-5 font-medium text-gray-700">
            {navLinks.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className="hover:text-[#0ea5e9]"
              >
                {item.name}
              </Link>
            ))}

            {role === "DOCTOR" && (
              <Link
                to="/doctor-dashboard"
                onClick={closeMobileMenu}
                className="text-[#0ea5e9] font-bold"
              >
                Dashboard
              </Link>
            )}

            <li>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full flex items-center justify-between"
              >
                More Pages
                <FaChevronDown
                  className={`text-xs transition ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  moreOpen ? "max-h-80 overflow-y-auto mt-4" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                  {morePages.map((page) => (
                    <Link
                      to={page.path}
                      key={page.path}
                      onClick={closeMobileMenu}
                      className="px-3 py-2 flex flex-col text-sm rounded-lg hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9] transition"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="hover:text-[#0ea5e9]"
            >
              Contact
            </Link>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="w-full border border-[#0ea5e9] text-[#0ea5e9] text-center py-3 rounded-xl font-bold"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="w-full bg-[#0ea5e9] text-white text-center py-3 rounded-xl font-bold"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/appointment");
                    closeMobileMenu();
                  }}
                  className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] transition text-white py-3 rounded-xl"
                >
                  Appointment
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
