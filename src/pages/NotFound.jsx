import React from "react";
import {
  FaExclamation,
  FaSearch,
  FaArrowLeft,
  FaHome,
  FaThLarge,
  FaBookOpen,
  FaComments,
  FaRegBookmark,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const destinations = [
    { icon: <FaThLarge />, title: "Dashboard", path: "/" },
    { icon: <FaBookOpen />, title: "Documentation", path: "/documentation" },
    { icon: <FaComments />, title: "Contact Support", path: "/contact" },
    { icon: <FaRegBookmark />, title: "Latest Articles", path: "/blogs" },
  ];

  return (
    <>
      <section className=" bg-[#f8fafc] py-16 px-4 mt-20">
        <div className="container mx-auto">
          <div
            data-aos="fade-up"
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between">
              <span className="inline-flex items-center gap-3 bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-5 py-2 rounded-full text-lg font-bold">
                <span className="w-2 h-2 bg-[#0ea5e9] rounded-full"></span>
                Error 404
              </span>

              <span className="text-gray-400 font-bold tracking-widest">
                HTTP STATUS
              </span>
            </div>

            {/* Main */}
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 items-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] flex items-center justify-center text-5xl">
                  <FaExclamation />
                </div>

                <h1 className="mt-8 text-3xl md:text-6xl font-bold text-[#16345d]">
                  404
                </h1>
              </div>

              <div>
                <h2 className="text-xl md:text-4xl font-bold text-[#16345d]">
                  This page could not be located
                </h2>

                <p className="mt-3 text-gray-500 text-lg md:text-xl leading-9">
                  The page you are looking for may have been moved, renamed, or
                  is currently unavailable.
                </p>
              </div>
            </div>

            <div className="p-4 md:p-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#16345d]">
                Search the site
              </h3>

              <div className="mt-5 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <FaSearch className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400 text-xl" />

                  <input
                    type="text"
                    placeholder="Type a keyword or page name"
                    className="w-full border border-gray-300 rounded-md pl-14 pr-4 py-4 text-lg outline-none focus:border-[#0ea5e9]"
                  />
                </div>

                <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-10 py-4 rounded-md text-xl font-bold transition cursor-pointer">
                  Search
                </button>
              </div>

              <p className="mt-4 text-gray-400 text-lg">
                Try terms like "appointment", "doctors" or "departments"
              </p>
            </div>

            {/* Bottom */}
            <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <p className="text-gray-400 text-lg font-bold tracking-widest">
                CONTINUE BROWSING
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 transition cursor-pointer"
                >
                  <FaArrowLeft />
                  Go Back
                </button>

                <Link
                  to="/"
                  className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 transition cursor-pointer"
                >
                  <FaHome />
                  Return Home
                </Link>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-10">
            <h3 className="text-gray-400 text-lg font-bold tracking-widest">
              SUGGESTED DESTINATIONS
            </h3>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              {destinations.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#0ea5e9] hover:shadow-md transition"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[#0ea5e9] text-2xl">{item.icon}</span>

                    <h4 className="text-xl font-bold text-[#16345d]">
                      {item.title}
                    </h4>
                  </div>

                  <FaExternalLinkAlt className="text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
