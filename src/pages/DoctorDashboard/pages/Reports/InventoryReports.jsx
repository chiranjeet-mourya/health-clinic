import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaRedoAlt,
  FaSearch,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


const categoryData = [
  { name: "Medications", value: 428, color: "#8b83d8" },
  { name: "Medical Supplies", value: 350, color: "#7ec99a" },
  { name: "Equipment", value: 120, color: "#fbbf24" },
  { name: "Office Supplies", value: 190, color: "#fb7c43" },
  { name: "Laboratory", value: 157, color: "#0ea5e9" },
];

const stockData = [
  { name: "In Stock", value: 82, color: "#4ade80" },
  { name: "Low Stock", value: 12, color: "#facc15" },
  { name: "Out of Stock", value: 6, color: "#f87171" },
];

const InventoryReport = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-[#111827]">
            Inventory Report
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            Track inventory levels, usage patterns, and supply chain metrics
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
            <option>All Categories</option>
            <option>Medications</option>
            <option>Medical Supplies</option>
            <option>Equipment</option>
          </select>

          <select className="bg-white border border-gray-200 px-5 py-3 rounded-lg outline-none focus:border-[#0ea5e9]">
            <option>All Suppliers</option>
            <option>MedPlus Supply</option>
            <option>Care Pharma</option>
          </select>
        </div>

        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search inventory items..."
            className="w-full xl:w-[360px] bg-white border border-gray-200 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Items"
          value="1,245"
          desc="+28 items since last month"
          icon={<FaBoxOpen />}
        />

        <StatCard
          title="Low Stock Items"
          value="2.6%"
          desc="+0.8% from previous period"
          badge="32"
          badgeColor="bg-red-500"
          descColor="text-red-500"
        />

        <StatCard
          title="Expiring Soon"
          value="1.4%"
          desc="-0.5% from previous period"
          badge="18"
          badgeColor="bg-yellow-500"
          descColor="text-green-500"
        />

        <StatCard
          title="Inventory Value"
          value="$248,320"
          desc="+4.3% from previous period"
          icon={<FaTruck />}
          descColor="text-green-500"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title="Inventory by Category"
          desc="Distribution of inventory items by category"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={110}>
                {categoryData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Stock Status Distribution"
          desc="Current stock status of inventory items"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stockData}
                dataKey="value"
                nameKey="name"
                innerRadius={80}
                outerRadius={110}
              >
                {stockData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
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
  badgeColor,
  descColor = "text-gray-500",
}) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <h3 className="text-xl font-bold text-[#111827]">{title}</h3>

      {icon && <span className="text-3xl text-gray-500">{icon}</span>}

      {badge && (
        <span className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
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

export default InventoryReport;