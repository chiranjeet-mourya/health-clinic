import React from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaUserMd,
  FaRupeeSign,
  FaArrowUp,
} from "react-icons/fa";
import { FaPlus, FaEye } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const cards = [
  {
    title: "Total Appointments",
    value: "128",
    growth: "12%",
    icon: <FaCalendarAlt />,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Total Patients",
    value: "1,458",
    growth: "10%",
    icon: <FaUsers />,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    title: "Total Doctors",
    value: "24",
    growth: "8%",
    icon: <FaUserMd />,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Total Revenue",
    value: "₹2,45,000",
    growth: "15%",
    icon: <FaRupeeSign />,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const lineData = [
  { day: "Mon", thisWeek: 45, lastWeek: 25 },
  { day: "Tue", thisWeek: 65, lastWeek: 45 },
  { day: "Wed", thisWeek: 35, lastWeek: 40 },
  { day: "Thu", thisWeek: 55, lastWeek: 35 },
  { day: "Fri", thisWeek: 40, lastWeek: 60 },
  { day: "Sat", thisWeek: 38, lastWeek: 30 },
  { day: "Sun", thisWeek: 56, lastWeek: 45 },
];

const pieData = [
  { name: "General Medicine", value: 45, color: "#2563eb" },
  { name: "Cardiology", value: 20, color: "#14b8a6" },
  { name: "Dental Care", value: 15, color: "#38bdf8" },
  { name: "Orthopedics", value: 10, color: "#60a5fa" },
  { name: "Pediatrics", value: 10, color: "#8b5cf6" },
];

const appointments = [
  [
    "Amit Verma",
    "Dr. Rahul Sharma",
    "Cardiology",
    "20 May 2024",
    "10:30 AM",
    "Confirmed",
  ],
  [
    "Priya Singh",
    "Dr. Neha Singh",
    "Pediatrics",
    "20 May 2024",
    "11:00 AM",
    "Confirmed",
  ],
  [
    "Rakesh Kumar",
    "Dr. Amit Verma",
    "Orthopedics",
    "20 May 2024",
    "11:30 AM",
    "Pending",
  ],
  [
    "Sneha Mehta",
    "Dr. Priya Patel",
    "Dental Care",
    "20 May 2024",
    "12:00 PM",
    "Confirmed",
  ],
  [
    "Vikram Joshi",
    "Dr. Rahul Sharma",
    "Cardiology",
    "20 May 2024",
    "12:30 PM",
    "Cancelled",
  ],
];

const patients = [
  ["Amit Verma", "35", "Male", "9876543210", "20 May 2024"],
  ["Priya Singh", "28", "Female", "8765432109", "20 May 2024"],
  ["Rakesh Kumar", "45", "Male", "7654321008", "19 May 2024"],
  ["Sneha Mehta", "32", "Female", "6543210007", "19 May 2024"],
  ["Vikram Joshi", "50", "Male", "5432109876", "18 May 2024"],
];

const revenueData = [
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 150 },
  { month: "Mar", revenue: 160 },
  { month: "Apr", revenue: 200 },
  { month: "May", revenue: 210 },
  { month: "Jun", revenue: 240 },
];

const patientData = [
  { month: "Jan", patients: 600 },
  { month: "Feb", patients: 650 },
  { month: "Mar", patients: 800 },
  { month: "Apr", patients: 920 },
  { month: "Jun", patients: 980 },
];

const schedule = [
  ["10:30 AM", "Amit Verma", "Cardiology"],
  ["11:00 AM", "Priya Singh", "Pediatrics"],
  ["11:30 AM", "Rakesh Kumar", "Orthopedics"],
  ["12:00 PM", "Sneha Mehta", "Dental Care"],
  ["12:30 PM", "Vikram Joshi", "Cardiology"],
];

const messages = [
  ["Raj Malhotra", "Need appointment with cardiologist", "10:30 AM"],
  ["Anjali Sharma", "Query regarding report", "09:15 AM"],
  ["Vikas Gupta", "Need information about packages", "Yesterday"],
  ["Neha Verma", "Thanks for the support", "Yesterday"],
];

const statusClass = {
  Confirmed: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Cancelled: "bg-red-100 text-red-600",
};

const DashboardHome = () => {
  return (
    <>
      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-lg font-medium">
                    {item.title}
                  </p>

                  <h2 className="mt-4 text-3xl font-bold text-[#16345d]">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </div>
              </div>

              <div className=" flex items-center gap-2 text-sm">
                <FaArrowUp className="text-emerald-500" />
                <span className="text-emerald-500 font-bold">
                  {item.growth}
                </span>
                <span className="text-gray-500">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <h2 className="text-2xl font-bold text-[#16345d]">
                Appointments Overview
              </h2>

              <div className="flex items-center gap-5 text-sm font-semibold">
                <span className="flex items-center gap-2 text-[#2563eb]">
                  <span className="w-3 h-3 rounded-full bg-[#2563eb]"></span>
                  This Week
                </span>

                <span className="flex items-center gap-2 text-[#60a5fa]">
                  <span className="w-3 h-3 rounded-full bg-[#60a5fa]"></span>
                  Last Week
                </span>
              </div>
            </div>

            <div className="w-full h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="thisWeek"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="lastWeek"
                    stroke="#60a5fa"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#16345d]">
              Appointments by Department
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-6 items-center">
              <div className="w-full h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={1}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-5">
                {pieData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="text-gray-600 font-semibold">
                        {item.name}
                      </span>
                    </div>

                    <span className="font-bold text-[#16345d]">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1.9fr_0.9fr] gap-6">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#16345d]">
                Recent Appointments
              </h3>
              <button className="border border-blue-200 text-[#0ea5e9] px-4 py-2 rounded-lg font-bold">
                View All
              </button>
            </div>

            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#f8fafc] text-[#16345d]">
                <tr>
                  {[
                    "Patient Name",
                    "Doctor",
                    "Department",
                    "Date",
                    "Time",
                    "Status",
                  ].map((h) => (
                    <th key={h} className="p-3 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {appointments.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-b-0 border-gray-100"
                  >
                    {row.map((col, j) => (
                      <td key={j} className="p-3 text-gray-600 font-medium">
                        {j === 5 ? (
                          <span
                            className={`px-3 py-1 rounded-lg font-bold ${statusClass[col]}`}
                          >
                            {col}
                          </span>
                        ) : (
                          col
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#16345d]">
                  Revenue Overview
                </h3>
                <button className="border border-gray-200 px-3 py-2 rounded-lg text-sm">
                  This Year
                </button>
              </div>

              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#0ea5e9"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#16345d]">
                  Patient Overview
                </h3>
                <button className="border border-gray-200 px-3 py-2 rounded-lg text-sm">
                  This Year
                </button>
              </div>

              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={patientData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="patients"
                      fill="#0ea5e9"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm overflow-x-auto">
            <h3 className="text-xl font-bold text-[#16345d] mb-4">
              Recent Patients
            </h3>

            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-[#f8fafc] text-[#16345d]">
                <tr>
                  {[
                    "Patient Name",
                    "Age",
                    "Gender",
                    "Phone",
                    "Last Visit",
                    "Action",
                  ].map((h) => (
                    <th key={h} className="p-3 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patients.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-b-0 border-gray-100"
                  >
                    {row.map((col, j) => (
                      <td key={j} className="p-3 text-gray-600 font-medium">
                        {col}
                      </td>
                    ))}
                    <td className="p-3">
                      <button className="text-[#0ea5e9] bg-blue-50 px-3 py-1 rounded-full">
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-center mt-4">
              <button className="border border-blue-200 text-[#0ea5e9] px-5 py-2 rounded-lg font-bold cursor-pointer">
                View All
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-[#16345d] mb-4">
              Quick Actions
            </h3>

            {[
              "Add Appointment",
              "Add Patient",
              "Add Doctor",
              "Add Department",
            ].map((item) => (
              <button
                key={item}
                className="w-full mb-3 border border-gray-200 rounded-lg px-4 py-3 text-[#0ea5e9] font-bold flex items-center gap-3 hover:bg-blue-50"
              >
                <FaPlus /> {item}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-[#16345d] mb-5">
              Today’s Schedule
            </h3>

            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[90px_1fr_1fr] gap-3 text-sm"
                >
                  <span className="font-bold text-gray-600">{item[0]}</span>
                  <span className="text-gray-600">{item[1]}</span>
                  <span className="text-[#16345d]">{item[2]}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full border border-blue-200 text-[#0ea5e9] px-4 py-2 rounded-lg font-bold cursor-pointer">
              View Full Schedule
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xl font-bold text-[#16345d] mb-5">Messages</h3>

            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#16345d]">{msg[0]}</h4>
                    <p className="text-sm text-gray-500">{msg[1]}</p>
                  </div>
                  <span className="text-xs text-gray-400">{msg[2]}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full border border-blue-200 text-[#0ea5e9] cursor-pointer px-4 py-2 rounded-lg font-bold">
              View All Messages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
