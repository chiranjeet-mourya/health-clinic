import React, { useState } from "react";
import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaCog,
  FaChevronDown,
  FaBuilding,
  FaStethoscope,
  FaCreditCard,
  FaChartBar,
  FaEnvelope,
  FaPlus,
  FaList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLocationDot, FaUserPen } from "react-icons/fa6";

import Logo from "../../assets/clinic_logo.png";
import Logo2 from "../../assets/clinic_favicon.png";

const DashboardSidebar = ({ collapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (name) => {
    if (collapsed) return;
    setOpenMenu(openMenu === name ? null : name);
  };

  const menus = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: <FaHome />,
    },
    {
      name: "Appointments",
      icon: <FaCalendarCheck />,
      children: [
        {
          name: "All Appointments",
          path: "/admin-dashboard/all-appointments",
          icon: <FaList />,
        },
        {
          name: "Add Appointment",
          path: "/admin-dashboard/add-appointments",
          icon: <FaPlus />,
        },
      ],
    },
    {
      name: "Patients",
      path: "/admin-dashboard/patients",
      icon: <FaUsers />,
    },
    {
      name: "Doctors",
      icon: <FaUserMd />,
      children: [
        {
          name: "All Doctors",
          path: "/admin-dashboard/all-doctors",
          icon: <FaList />,
        },
        {
          name: "Add Doctor",
          path: "/admin-dashboard/add-doctors",
          icon: <FaPlus />,
        },
      ],
    },
    {
      name: "Departments",
      icon: <FaBuilding />,
      children: [
        {
          name: "All Departments",
          path: "/admin-dashboard/all-departments",
          icon: <FaList />,
        },
        {
          name: "Add Department",
          path: "/admin-dashboard/add-departments",
          icon: <FaPlus />,
        },
      ],
    },
    {
      name: "Locations",
      path: "/admin-dashboard/locations",
      icon: <FaLocationDot />,
    },
    // {
    //   name: "Payments",
    //   path: "/admin-dashboard/payments",
    //   icon: <FaCreditCard />,
    // },
    {
      name: "Reports",
      icon: <FaChartBar />,
      children: [
        {
          name: "Overview",
          path: "/admin-dashboard/reports/Overview",
          icon: <FaList />,
        },
        {
          name: "Appointment Reports",
          path: "/admin-dashboard/reports/appointments",
          icon: <FaList />,
        },
        {
          name: "Financial Reports",
          path: "/admin-dashboard/reports/financial",
          icon: <FaCreditCard />,
        },
        {
          name: "Inventory Reports",
          path: "/admin-dashboard/reports/inventory",
          icon: <FaCreditCard />,
        },
        {
          name: "Patient Visit Reports",
          path: "/admin-dashboard/reports/patient-visit",
          icon: <FaCreditCard />,
        },
      ],
    },
    {
      name: "Payrolls",
      icon: <FaBuilding />,
      children: [
        {
          name: "All Payrolls",
          path: "/admin-dashboard/all-payrolls",
          icon: <FaList />,
        },
        {
          name: "Add Payrolls",
          path: "/admin-dashboard/add-payrolls",
          icon: <FaPlus />,
        },
      ],
    },
    {
      name: "Attendance",
      path: "/admin-dashboard/attendance",
      icon: <FaUserPen />,
    },
    {
      name: "Settings",
      path: "/admin-dashboard/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside
      className={`bg-[#071739] text-white transition-all duration-300 sticky top-0 shrink-0 ${
        collapsed ? "w-[90px]" : "w-[220px]"
      }`}
    >
      <div className=" border-b border-white/10">
        {collapsed ? (
          <img src={Logo2} alt="Medical Health Care" className="w-[200px] h-[80px] object-cover brightness-0 invert" />
        ) : (
          <img src={Logo} alt="Medical Health Care" className="w-[200px] h-[80px] object-contain mx-auto brightness-0 invert"/>
        )}
      </div>

      <div className="p-3 space-y-2 overflow-y-auto h-[calc(100vh-85px)]">
        {menus.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full flex items-center justify-between gap-4 px-2 py-2.5 rounded-xl transition cursor-pointer ${
                    openMenu === item.name
                      ? "bg-[#0ea5e9]"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-md text-left">{item.icon}</span>

                    {!collapsed && (
                      <span className="font-medium text-left">{item.name}</span>
                    )}
                  </div>

                  {!collapsed && (
                    <FaChevronDown
                      className={`text-sm transition duration-300 ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {!collapsed && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMenu === item.name ? "max-h-auto mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="ml-5 pl-4 border-l border-white/10 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <NavLink
                          key={childIndex}
                          to={child.path}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition ${
                              isActive
                                ? "bg-[#0ea5e9]/80 text-white"
                                : "text-white/80 hover:bg-white/10 hover:text-white"
                            }`
                          }
                        >
                          <span>{child.icon}</span>
                          <span>{child.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-2 py-3 rounded-xl transition ${
                    isActive ? "bg-[#0ea5e9]" : "hover:bg-white/10"
                  }`
                }
              >
                <span className="text-md">{item.icon}</span>

                {!collapsed && <span className="font-medium text-md">{item.name}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
