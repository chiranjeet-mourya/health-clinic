import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaRedoAlt,
  FaSearch,
  FaUsers,
  FaUser,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


const monthlyVisitData = [
  { month: "Jan", totalVisits: 320, newPatients: 45 },
  { month: "Feb", totalVisits: 340, newPatients: 50 },
  { month: "Mar", totalVisits: 360, newPatients: 55 },
  { month: "Apr", totalVisits: 400, newPatients: 62 },
  { month: "May", totalVisits: 420, newPatients: 68 },
  { month: "Jun", totalVisits: 450, newPatients: 74 },
  { month: "Jul", totalVisits: 480, newPatients: 82 },
  { month: "Aug", totalVisits: 460, newPatients: 76 },
  { month: "Sep", totalVisits: 440, newPatients: 70 },
  { month: "Oct", totalVisits: 420, newPatients: 64 },
  { month: "Nov", totalVisits: 400, newPatients: 58 },
  { month: "Dec", totalVisits: 380, newPatients: 52 },
];

const visitByDayData = [
  { day: "Monday", visits: 180 },
  { day: "Tuesday", visits: 200 },
  { day: "Wednesday", visits: 210 },
  { day: "Thursday", visits: 190 },
  { day: "Friday", visits: 170 },
  { day: "Saturday", visits: 120 },
  { day: "Sunday", visits: 80 },
];

const PatientVisit = () => {

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-[#111827]">
            Patient Visit Report
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            Track patient visits, demographics, and health trends
          </p>
        </div>

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
            <option>Pediatrics</option>
          </select>

          <select className="bg-white border border-gray-200 px-5 py-3 rounded-lg outline-none focus:border-[#0ea5e9]">
            <option>All Doctors</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Michael Chen</option>
          </select>
        </div>

        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full xl:w-[360px] bg-white border border-gray-200 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Visits"
          value="3,842"
          desc="+12.5% from previous period"
          icon={<FaUsers />}
          descColor="text-green-500"
        />

        <StatCard
          title="New Patients"
          value="428"
          desc="+8.2% from previous period"
          icon={<FaUser />}
          descColor="text-green-500"
        />

        <StatCard
          title="Avg. Visit Duration"
          value="32 min"
          desc="-2.5 min from previous period"
          badge="32 min"
          descColor="text-red-500"
        />

        <StatCard
          title="No-Show Rate"
          value="6.8%"
          desc="-0.5% from previous period"
          badge="6.8%"
          descColor="text-green-500"
        />
      </div>


      <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Visit Trends"
          desc="Patient visits over time"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyVisitData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalVisits"
                name="Total Visits"
                stroke="#ef6f55"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="newPatients"
                name="New Patients"
                stroke="#14b8a6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Visit Distribution by Day"
          desc="Patient visits by day of week"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={visitByDayData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="visits"
                name="Visits"
                fill="#ef6f55"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const StatCard = ({
  title,
  value,
  desc,
  icon,
  badge,
  descColor = "text-gray-500",
}) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <h3 className="text-md lg:text-xl font-bold text-[#111827]">
        {title}
      </h3>

      {icon && <span className="text-2xl text-gray-500">{icon}</span>}

      {badge && (
        <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-bold">
          {badge}
        </span>
      )}
    </div>

    <h2 className="mt-6 text-xl lg:text-3xl font-bold text-[#111827]">{value}</h2>
    <p className={`mt-1 ${descColor}`}>{desc}</p>
  </div>
);

const ChartCard = ({ title, desc, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
    <h2 className="text-xl md:text-2xl font-bold text-[#111827]">
      {title}
    </h2>
    <p className="mt-2 text-gray-500 text-lg">{desc}</p>

    <div className="mt-8 h-[380px]">{children}</div>
  </div>
);

export default PatientVisit;
