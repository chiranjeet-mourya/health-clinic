import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaRedoAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const statusData = [
  { name: "Completed", value: 70, color: "#0ea5e9" },
  { name: "Scheduled", value: 8, color: "#10b981" },
  { name: "Canceled", value: 15, color: "#f59e0b" },
  { name: "No-Show", value: 7, color: "#fb923c" },
];

const departmentData = [
  { name: "Cardiology", appointments: 245 },
  { name: "Neurology", appointments: 188 },
  { name: "Orthopedics", appointments: 202 },
  { name: "Pediatrics", appointments: 225 },
  { name: "Dermatology", appointments: 165 },
  { name: "General Medicine", appointments: 230 },
];


const AppointmentReports = () => {

  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#111827]">
          Appointment Reports
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Analyze appointment data, track trends, and generate detailed reports
        </p>
      </div>

      <div className="mt-7 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-white border border-gray-200 px-5 py-3 rounded-lg flex items-center gap-3 font-semibold">
            <FaCalendarAlt />
            May 24, 2026 - May 24, 2026
          </button>

          <select className="bg-white border border-gray-200 px-5 py-3 rounded-lg outline-none focus:border-[#0ea5e9]">
            <option>All Departments</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>

          <select className="bg-white border border-gray-200 px-5 py-3 rounded-lg outline-none focus:border-[#0ea5e9]">
            <option>All Doctors</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Michael Chen</option>
          </select>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Appointments"
          value="1,248"
          desc="+12.5% from last month"
          icon={<FaCalendarAlt />}
          progress="75%"
          color="bg-[#111827]"
        />
        <StatCard
          title="Completed"
          value="876"
          desc="70.2% completion rate"
          icon={<FaCheckCircle />}
          progress="70%"
          color="bg-green-500"
        />
        <StatCard
          title="Canceled"
          value="187"
          desc="15% cancellation rate"
          icon={<FaTimesCircle />}
          progress="15%"
          color="bg-red-500"
        />
        <StatCard
          title="No-Shows"
          value="85"
          desc="6.8% no-show rate"
          icon={<FaClock />}
          progress="7%"
          color="bg-orange-500"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
            Appointment Status Distribution
          </h2>
          <p className="mt-2 text-gray-500 text-md">
            Breakdown of appointments by their current status
          </p>

          <div className="mt-8 h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {statusData.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
            Appointments by Department
          </h2>
          <p className="mt-2 text-gray-500 text-md">
            Distribution of appointments across different departments
          </p>

          <div className="mt-8 h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={130} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="appointments"
                  name="Appointments"
                  fill="#8b83d8"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const StatCard = ({ title, value, desc, icon, progress, color }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
      <span className="text-3xl text-gray-500">{icon}</span>
    </div>

    <h2 className="mt-6 text-xl lg:text-3xl font-bold text-[#111827]">{value}</h2>
    <p className="mt-2 text-gray-500">{desc}</p>

    <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: progress }}></div>
    </div>
  </div>
);

export default AppointmentReports;