import React, { useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { downloadTablePDF } from "../../../utils/downloadPDF";

const patientsData = [
  {
    id: 1,
    name: "John Smith",
    age: 45,
    gender: "Male",
    status: "Active",
    lastVisit: "2023-06-15",
    condition: "Hypertension",
    doctor: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Emily Davis",
    age: 32,
    gender: "Female",
    status: "Active",
    lastVisit: "2023-07-02",
    condition: "Diabetes Type 2",
    doctor: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Robert Wilson",
    age: 58,
    gender: "Male",
    status: "Inactive",
    lastVisit: "2023-05-20",
    condition: "Arthritis",
    doctor: "Dr. Lisa Patel",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Jessica Brown",
    age: 27,
    gender: "Female",
    status: "Active",
    lastVisit: "2023-07-10",
    condition: "Asthma",
    doctor: "Dr. James Wilson",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Michael Johnson",
    age: 41,
    gender: "Male",
    status: "Active",
    lastVisit: "2023-06-28",
    condition: "Migraine",
    doctor: "Dr. Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 6,
    name: "Sarah Thompson",
    age: 63,
    gender: "Female",
    status: "Active",
    lastVisit: "2023-07-05",
    condition: "Osteoporosis",
    doctor: "Dr. Robert Kim",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 7,
    name: "David Lee",
    age: 52,
    gender: "Male",
    status: "Inactive",
    lastVisit: "2023-04-18",
    condition: "COPD",
    doctor: "Dr. Jennifer Martinez",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 8,
    name: "Amanda Clark",
    age: 36,
    gender: "Female",
    status: "Active",
    lastVisit: "2023-07-08",
    condition: "Anxiety",
    doctor: "Dr. Thomas Wright",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 9,
    name: "James Rodriguez",
    age: 70,
    gender: "Male",
    status: "Active",
    lastVisit: "2023-06-30",
    condition: "Coronary Artery Disease",
    doctor: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 10,
    name: "Lisa Chen",
    age: 29,
    gender: "Female",
    status: "Active",
    lastVisit: "2023-07-12",
    condition: "Allergies",
    doctor: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 11,
    name: "Kevin Martin",
    age: 49,
    gender: "Male",
    status: "Active",
    lastVisit: "2023-07-13",
    condition: "Heart Disease",
    doctor: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 12,
    name: "Sophia White",
    age: 38,
    gender: "Female",
    status: "Inactive",
    lastVisit: "2023-06-01",
    condition: "Depression",
    doctor: "Dr. Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
];

const Patients = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const patientsPerPage = 5;

  const filteredPatients = patientsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;

  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient,
  );

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

const handleDownload = () => {
  downloadTablePDF({
    title: "Patients List",
    fileName: "patients.pdf",
    columns: ["Name", "Age/Gender", "Status", "Last Visit", "Condition", "Doctor"],
    rows: filteredPatients.map((item) => [
      item.name,
      `${item.age} • ${item.gender}`,
      item.status,
      item.lastVisit,
      item.condition,
      item.doctor,
    ]),
  });
};

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold text-[#16345d]">Patients</h1>

          <p className="mt-2 text-gray-500">
            Manage your patients and their medical records.
          </p>
        </div>
      </div>

      <div className="mt-7 bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm overflow-hidden">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold text-[#16345d]">Patients List</h2>

            <p className="mt-2 text-gray-500">
              A list of all patients in your clinic with their details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-[280px] border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
              />

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button
             onClick={handleDownload}
              className="px-4 py-3 border border-gray-200 rounded-lg flex gap-2 items-center justify-center hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition cursor-pointer"
            >
              <HiOutlineDownload size={22} /> Download
            </button>
          </div>
        </div>

        <div className="hidden xl:block overflow-x-auto mt-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-4 text-gray-500 font-semibold">Name</th>
                <th className="pb-4 text-gray-500 font-semibold">Age/Gender</th>
                <th className="pb-4 text-gray-500 font-semibold">Status</th>
                <th className="pb-4 text-gray-500 font-semibold">Last Visit</th>
                <th className="pb-4 text-gray-500 font-semibold">Condition</th>
                <th className="pb-4 text-gray-500 font-semibold">Doctor</th>
                <th className="pb-4 text-gray-500 font-semibold text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {currentPatients.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <h3 className="font-semibold text-[#16345d]">
                        {item.name}
                      </h3>
                    </div>
                  </td>

                  <td className="py-5 font-medium text-gray-700">
                    {item.age} • {item.gender}
                  </td>

                  <td className="py-5">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-5 text-gray-700">{item.lastVisit}</td>

                  <td className="py-5 text-gray-700">{item.condition}</td>

                  <td className="py-5 text-gray-700">{item.doctor}</td>

                  <td className="py-5 text-right">
                    <button className="text-gray-500 hover:text-[#0ea5e9] transition">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="xl:hidden mt-8 space-y-5">
          {currentPatients.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-[#16345d]">{item.name}</h3>

                  <p className="text-gray-500 text-sm">
                    {item.age} • {item.gender}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between gap-5">
                  <span className="text-gray-500">Status</span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-gray-500">Condition</span>
                  <span className="font-medium text-right">
                    {item.condition}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-gray-500">Doctor</span>
                  <span className="font-medium text-right">{item.doctor}</span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-gray-500">Last Visit</span>
                  <span>{item.lastVisit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-5 h-11 py-2 rounded-xl border transition ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
            }`}
          >
            <FaLongArrowAltLeft />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-11 h-11 rounded-xl font-semibold transition ${
                currentPage === index + 1
                  ? "bg-[#0ea5e9] text-white"
                  : "border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-5 py-2 h-11 rounded-xl border transition ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
            }`}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Patients;
