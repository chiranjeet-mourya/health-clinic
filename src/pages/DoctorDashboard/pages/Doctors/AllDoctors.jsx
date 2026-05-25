import React, { useMemo, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import { downloadTablePDF } from "../../../../utils/downloadPDF";
import { HiOutlineDownload } from "react-icons/hi";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    status: "Active",
    patients: 120,
    experience: "8 years",
    email: "sarah.johnson@medixpro.com",
    phone: "+1 (555) 123-4567",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    status: "Active",
    patients: 85,
    experience: "12 years",
    email: "michael.chen@medixpro.com",
    phone: "+1 (555) 234-5678",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Lisa Patel",
    specialty: "Pediatrics",
    status: "On Leave",
    patients: 150,
    experience: "10 years",
    email: "lisa.patel@medixpro.com",
    phone: "+1 (555) 345-6789",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    status: "Active",
    patients: 95,
    experience: "15 years",
    email: "james.wilson@medixpro.com",
    phone: "+1 (555) 456-7890",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    status: "Active",
    patients: 110,
    experience: "7 years",
    email: "emily.rodriguez@medixpro.com",
    phone: "+1 (555) 567-8901",
    img: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Psychiatry",
    status: "Inactive",
    patients: 75,
    experience: "9 years",
    email: "robert.kim@medixpro.com",
    phone: "+1 (555) 678-9012",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const statusStyle = {
  Active: "bg-green-100 text-green-600",
  "On Leave": "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-600",
};

const AllDoctors = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
        doctor.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleDownload = () => {
    downloadTablePDF({
      title: "Doctors List",
      fileName: "doctors.pdf",
      columns: [
        "Name",
        "Specialty",
        "Status",
        "Patients",
        "Experience",
        "Email",
        "Phone",
      ],
      rows: filteredDoctors.map((doctor) => [
        doctor.name,
        doctor.specialty,
        doctor.status,
        doctor.patients,
        doctor.experience,
        doctor.email,
        doctor.phone,
      ]),
    });
  };

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#16345d]">
            Doctors
          </h1>
          <p className="mt-2 text-gray-500 text-base md:text-lg">
            Manage your medical staff and their information.
          </p>
        </div>
      </div>

      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-6">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#16345d]">
              Doctors List
            </h2>
            <p className="mt-2 text-gray-500">
              A list of all doctors in your clinic with their details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-[320px] border border-gray-200 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
              />
            </div>
            <button
              onClick={handleDownload}
              className="px-4 border border-gray-200 rounded-lg flex gap-2 items-center justify-center hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition cursor-pointer"
            >
              <HiOutlineDownload size={22} /> Download
            </button>
          </div>
        </div>

        <div className="mt-10 hidden xl:block overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                {[
                  "Name",
                  "Specialty",
                  "Status",
                  "Patients",
                  "Experience",
                  "Contact",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-4 font-bold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-[#f8fafc] transition"
                >
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="font-bold text-[#111827]">
                        {doctor.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-5 text-[#111827]">
                    {doctor.specialty}
                  </td>

                  <td className="px-4 py-5">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-bold ${
                        statusStyle[doctor.status]
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-[#111827]">
                    {doctor.patients}
                  </td>

                  <td className="px-4 py-5 text-[#111827]">
                    {doctor.experience}
                  </td>

                  <td className="px-4 py-5">
                    <p className="font-semibold text-[#111827]">
                      {doctor.email}
                    </p>
                    <p className="mt-1 text-gray-500">{doctor.phone}</p>
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
        </div>

        <div className="xl:hidden mt-8 space-y-5">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border border-gray-200 rounded-2xl p-5 hover:border-[#0ea5e9]/40 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-[#111827]">{doctor.name}</h3>
                  <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                </div>

                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                  <FaEllipsisH />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Status</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      statusStyle[doctor.status]
                    }`}
                  >
                    {doctor.status}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Patients</span>
                  <span className="font-semibold">{doctor.patients}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-semibold">{doctor.experience}</span>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-gray-500">Contact</p>
                  <p className="font-semibold text-[#111827] break-all">
                    {doctor.email}
                  </p>
                  <p className="text-gray-500">{doctor.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No doctors found.
          </div>
        )}
      </div>
    </section>
  );
};

export default AllDoctors;
