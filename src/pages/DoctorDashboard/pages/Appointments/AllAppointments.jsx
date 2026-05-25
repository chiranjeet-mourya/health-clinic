import React, { useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaPlus,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { HiOutlineDownload } from "react-icons/hi";

const appointments = [
  {
    patient: "John Smith",
    doctor: "Dr. Sarah Johnson",
    date: "2023-07-15",
    time: "10:00 AM",
    status: "Confirmed",
    type: "Check-up",
    duration: "30 min",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    patient: "Emily Davis",
    doctor: "Dr. Michael Chen",
    date: "2026-05-24",
    time: "11:30 AM",
    status: "In Progress",
    type: "Consultation",
    duration: "45 min",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    patient: "Robert Wilson",
    doctor: "Dr. Lisa Patel",
    date: "2026-05-24",
    time: "02:15 PM",
    status: "Completed",
    type: "Follow-up",
    duration: "20 min",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    patient: "Jessica Brown",
    doctor: "Dr. James Wilson",
    date: "2023-07-25",
    time: "09:00 AM",
    status: "Confirmed",
    type: "Dental Cleaning",
    duration: "60 min",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    patient: "Sarah Thompson",
    doctor: "Dr. Robert Kim",
    date: "2023-07-10",
    time: "01:45 PM",
    status: "Cancelled",
    type: "Therapy Session",
    duration: "45 min",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    patient: "David Miller",
    doctor: "Dr. Jennifer Lee",
    date: "2023-07-05",
    time: "11:00 AM",
    status: "Completed",
    type: "Annual Physical",
    duration: "60 min",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    patient: "Kevin Martinez",
    doctor: "Dr. Sarah Johnson",
    date: "2026-05-27",
    time: "02:00 PM",
    status: "Confirmed",
    type: "Check-up",
    duration: "30 min",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const tabs = [
  "All Appointments",
  "Upcoming",
  "Today",
  "Completed",
  "Cancelled",
];

const statusStyle = {
  Confirmed: "bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30",
  "In Progress": "bg-orange-100 text-orange-600 border border-orange-200",
  Completed: "bg-green-100 text-green-600 border border-green-200",
  Cancelled: "bg-red-100 text-red-600 border border-red-200",
};

const AllAppointments = () => {
  const [activeTab, setActiveTab] = useState("All Appointments");
  const [search, setSearch] = useState("");

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => {
      const matchesSearch =
        item.patient.toLowerCase().includes(search.toLowerCase()) ||
        item.doctor.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      if (activeTab === "All Appointments") return matchesSearch;
      if (activeTab === "Completed")
        return matchesSearch && item.status === "Completed";
      if (activeTab === "Cancelled")
        return matchesSearch && item.status === "Cancelled";
      if (activeTab === "Today")
        return matchesSearch && item.date === "2026-05-24";
      if (activeTab === "Upcoming")
        return matchesSearch && item.status === "Confirmed";

      return matchesSearch;
    });
  }, [activeTab, search]);

  const downloadAppointmentsPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Appointments List", 14, 18);

  autoTable(doc, {
    startY: 28,
    head: [["Patient", "Doctor", "Date", "Time", "Status", "Type", "Duration"]],
    body: filteredAppointments.map((item) => [
      item.patient,
      item.doctor,
      item.date,
      item.time,
      item.status,
      item.type,
      item.duration,
    ]),
  });

  doc.save("appointments.pdf");
};

  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#16345d]">Appointments</h1>
        <p className="mt-2 text-gray-500">
          Manage your clinic&apos;s appointments and schedules.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto no-scrollbar">
        <div className="inline-flex bg-gray-100 rounded-lg p-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 rounded-md text-sm font-bold transition whitespace-nowrap cursor-pointer ${
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

      <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-7">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold text-[#16345d]">{activeTab}</h2>
            <p className="mt-2 text-gray-500">
              View and manage all scheduled appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search appointments..."
                className="w-full sm:w-[300px] border border-gray-200 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
              />
            </div>

            <button onClick={downloadAppointmentsPDF} className="px-4 border border-gray-200 rounded-lg flex gap-2 items-center justify-center hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition cursor-pointer">
              <HiOutlineDownload size={22}/> Download
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                {[
                  "Patient",
                  "Doctor",
                  "Date & Time",
                  "Status",
                  "Type",
                  "Duration",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-4 font-bold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-[#f8fafc] transition"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.patient}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <span className="font-bold text-[#111827]">
                        {item.patient}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-[#111827]">{item.doctor}</td>

                  <td className="px-4 py-4">
                    <p className="font-semibold text-[#111827]">{item.date}</p>
                    <p className="text-gray-500">{item.time}</p>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        statusStyle[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-[#111827]">{item.type}</td>
                  <td className="px-4 py-4 text-[#111827]">{item.duration}</td>

                  <td className="px-4 py-4">
                    <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAppointments.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              No appointments found.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AllAppointments;
