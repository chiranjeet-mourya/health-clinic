import React, { useMemo, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaEllipsisH,
  FaBuilding,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";

const departmentsData = [
  {
    id: 1,
    name: "Cardiology",
    head: "Dr. Sarah Johnson",
    staff: 8,
    services: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Neurology",
    head: "Dr. Michael Chen",
    staff: 6,
    services: 9,
    status: "Active",
  },
  {
    id: 3,
    name: "Pediatrics",
    head: "Dr. Emily Rodriguez",
    staff: 10,
    services: 15,
    status: "Active",
  },
  {
    id: 4,
    name: "Orthopedics",
    head: "Dr. James Wilson",
    staff: 7,
    services: 11,
    status: "Active",
  },
  {
    id: 5,
    name: "Dermatology",
    head: "Dr. Lisa Thompson",
    staff: 4,
    services: 8,
    status: "Active",
  },
  {
    id: 6,
    name: "Ophthalmology",
    head: "Dr. Robert Kim",
    staff: 5,
    services: 7,
    status: "Active",
  },
  {
    id: 7,
    name: "Psychiatry",
    head: "Dr. Jennifer Martinez",
    staff: 6,
    services: 10,
    status: "Active",
  },
  {
    id: 8,
    name: "Radiology",
    head: "Dr. David Brown",
    staff: 4,
    services: 6,
    status: "Inactive",
  },
  {
    id: 9,
    name: "Oncology",
    head: "Dr. Susan Lee",
    staff: 7,
    services: 9,
    status: "Active",
  },
  {
    id: 10,
    name: "Endocrinology",
    head: "Dr. Thomas Garcia",
    staff: 3,
    services: 5,
    status: "Inactive",
  },
];

const tabs = ["All Departments", "Active", "Inactive"];

const AllDepartments = () => {
  const [activeTab, setActiveTab] = useState("All Departments");
  const [search, setSearch] = useState("");

  const filteredDepartments = useMemo(() => {
    return departmentsData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.head.toLowerCase().includes(search.toLowerCase());

      if (activeTab === "All Departments") return matchesSearch;

      return matchesSearch && item.status === activeTab;
    });
  }, [activeTab, search]);

  const cards = [
    {
      title: "Total Departments",
      value: "12",
      desc: "+2 from last month",
      icon: <FaBuilding />,
    },
    {
      title: "Total Staff",
      value: "48",
      desc: "+5 from last month",
      icon: <FaUsers />,
    },
    {
      title: "Services Offered",
      value: "86",
      desc: "+12 from last month",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#16345d]">
            Departments
          </h1>
          <p className="mt-2 text-gray-500">
            Manage your clinic&apos;s departments and staff assignments
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-[#111827]">
                {item.title}
              </h3>

              <div className="text-2xl text-gray-500">{item.icon}</div>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#111827]">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#16345d]">
              Department List
            </h2>
            <p className="mt-2 text-gray-500">
              View and manage all departments in your clinic
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search departments..."
              className="w-full lg:w-[320px] border border-gray-200 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
            />
          </div>
        </div>

        <div className="mt-8 overflow-x-auto no-scrollbar">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-md text-sm font-bold transition whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-[#0ea5e9] shadow-sm"
                    : "text-gray-500 hover:text-[#0ea5e9]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                {[
                  "Department Name",
                  "Head of Department",
                  "Staff Count",
                  "Services",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-4 font-bold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredDepartments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-[#f8fafc] transition"
                >
                  <td className="px-4 py-5 font-bold text-[#111827]">
                    {item.name}
                  </td>

                  <td className="px-4 py-5 text-[#111827]">{item.head}</td>

                  <td className="px-4 py-5 text-[#111827]">{item.staff}</td>

                  <td className="px-4 py-5 text-[#111827]">{item.services}</td>

                  <td className="px-4 py-5">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-bold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-5">
                    <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredDepartments.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              No departments found.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AllDepartments;