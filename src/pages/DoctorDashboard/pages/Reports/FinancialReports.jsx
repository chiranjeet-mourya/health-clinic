import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaRedoAlt,
  FaDollarSign,
  FaWallet,
  FaChartLine,
  FaCreditCard,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 100000, expenses: 76000, profit: 24000 },
  { month: "Feb", revenue: 98000, expenses: 74000, profit: 24000 },
  { month: "Mar", revenue: 108000, expenses: 81000, profit: 27000 },
  { month: "Apr", revenue: 128000, expenses: 87000, profit: 41125 },
  { month: "May", revenue: 116000, expenses: 82000, profit: 34000 },
  { month: "Jun", revenue: 122000, expenses: 84000, profit: 38000 },
];

const deptData = [
  { name: "Cardiology", value: 27, color: "#0ea5e9" },
  { name: "Orthopedics", value: 22, color: "#10b981" },
  { name: "Neurology", value: 14, color: "#f59e0b" },
  { name: "Pediatrics", value: 12, color: "#fb923c" },
  { name: "Dermatology", value: 10, color: "#8b5cf6" },
  { name: "Other", value: 14, color: "#86efac" },
];


const FinancialReports = () => {

  return (
    <section className="w-full">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-[#111827]">
          Financial Reports
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Track revenue, expenses, and financial performance metrics
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
            <option>Pediatrics</option>
          </select>

          <select className="bg-white border border-gray-200 px-5 py-3 rounded-lg outline-none focus:border-[#0ea5e9]">
            <option>All Services</option>
            <option>Consultation</option>
            <option>Surgery</option>
          </select>
        </div>

      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Revenue"
          value="$128,450"
          desc="+18.2% from last month"
          icon={<FaDollarSign />}
          progress="75%"
          color="bg-[#111827]"
          descColor="text-green-500"
        />
        <StatCard
          title="Total Expenses"
          value="$87,325"
          desc="+5.4% from last month"
          icon={<FaWallet />}
          progress="68%"
          color="bg-red-500"
          descColor="text-red-500"
        />
        <StatCard
          title="Net Profit"
          value="$41,125"
          desc="+12.8% from last month"
          icon={<FaChartLine />}
          progress="32%"
          color="bg-green-500"
          descColor="text-green-500"
        />
        <StatCard
          title="Outstanding Payments"
          value="$23,540"
          desc="+3.2% from last month"
          icon={<FaCreditCard />}
          progress="18%"
          color="bg-orange-500"
          descColor="text-red-500"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-[#111827]">
            Revenue vs Expenses
          </h2>
          <p className="mt-2 text-gray-500 text-lg">
            Monthly comparison of revenue and expenses
          </p>

          <div className="mt-8 h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#ef6f55" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="#2ca58d" radius={[4, 4, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#16345d"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-[#111827]">
            Revenue by Department
          </h2>
          <p className="mt-2 text-gray-500 text-lg">
            Distribution of revenue across different departments
          </p>

          <div className="mt-8 h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deptData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={115}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {deptData.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
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

const StatCard = ({ title, value, desc, icon, progress, color, descColor }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
      <span className="text-3xl text-gray-500">{icon}</span>
    </div>

    <h2 className="mt-6 text-3xl font-bold text-[#111827]">{value}</h2>
    <p className={`mt-2 ${descColor}`}>{desc}</p>

    <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: progress }}></div>
    </div>
  </div>
);

export default FinancialReports;