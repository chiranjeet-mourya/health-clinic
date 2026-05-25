import React from "react";
import {
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCube,
  FaChartBar,
  FaChartArea,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const reports = [
  {
    title: "Appointment Reports",
    desc: "Track appointment metrics, trends, and patient attendance",
    icon: <FaCalendarAlt />,
    data: [
      ["Total Appointments", "1,248"],
      ["Completion Rate", "70.2%"],
      ["No-Show Rate", "6.8%"],
    ],
    button: "View Report",
    path:"/admin-dashboard/reports/appointments",
    active: true,
  },
  {
    title: "Financial Reports",
    desc: "Track revenue, expenses, and financial performance",
    icon: <FaChartLine />,
    data: [
      ["Total Revenue", "$128,450"],
      ["Net Profit", "$41,125"],
      ["Growth", "+12.8%"],
    ],
    button: "View Report",
    path:"/admin-dashboard/reports/financial",
    active: true,
  },
  {
    title: "Patient Visit Reports",
    desc: "Analyze patient visits, demographics, and health trends",
    icon: <FaUsers />,
    data: [
      ["Total Visits", "3,842"],
      ["New Patients", "428"],
      ["Avg. Duration", "32 min"],
    ],
    button: "View Report",
    path:"/admin-dashboard/reports/patient-visit",
    active: true,
  },
  {
    title: "Inventory Reports",
    desc: "Track inventory levels, usage, and supply chain metrics",
    icon: <FaCube />,
    data: [
      ["Total Items", "1,245"],
      ["Low Stock", "32"],
      ["Inventory Value", "$248,320"],
    ],
    button: "View Report",
    path:"/admin-dashboard/reports/inventory",
    active: true,
  },
  {
    title: "Staff Performance",
    desc: "Evaluate staff productivity, attendance, and performance",
    icon: <FaChartBar />,
    data: [
      ["Staff Count", "48"],
      ["Avg. Attendance", "92.5%"],
      ["Productivity", "87.3%"],
    ],
    button: "Coming Soon",
    active: false,
  },
  {
    title: "Custom Reports",
    desc: "Create customized reports with specific metrics and filters",
    icon: <FaChartArea />,
    data: [
      ["Saved Reports", "5"],
      ["Templates", "12"],
      ["Export Options", "PDF, CSV, Excel"],
    ],
    button: "Coming Soon",
    active: false,
  },
];

const Overview = () => {

    const navigate = useNavigate();

  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#111827]">
          Report Overview
        </h1>
        <p className="mt-2 text-gray-500 text-lg lg:text-xl">
          Access and generate detailed reports for your clinic
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-7">
        {reports.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg text-[#111827]">{item.icon}</span>
              <h2 className="text-xl md:text-xl font-bold text-[#111827]">
                {item.title}
              </h2>
            </div>

            <p className="mt-4 text-gray-500 text-lg leading-7">
              {item.desc}
            </p>

            <div className="mt-6 space-y-3">
              {item.data.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-5 text-lg"
                >
                  <span className="text-gray-500">{label}</span>
                  <span className="font-bold text-[#111827] text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button
              disabled={!item.active}
              onClick={() => item.active && navigate(item.path)}
              className={`mt-8 w-full py-2 rounded-full font-bold text-lg transition ${
                item.active
                  ? "bg-[#0ea5e9] hover:bg-[#0284c7] text-white"
                  : "bg-white border border-gray-200 text-[#111827] cursor-not-allowed"
              }`}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;

