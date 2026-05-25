import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

const days = Array.from({ length: 30 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

const staffData = [
  {
    name: "James Adair",
    percent: 100,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Adam Milne",
    percent: 70,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Richard Clark",
    percent: 75,
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Robert Reid",
    percent: 40,
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dottie Jeny",
    percent: 85,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Cheryl Bilodeau",
    percent: 92,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Valerie Padgett",
    percent: 55,
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Diane Nash",
    percent: 70,
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Sally Cavazos",
    percent: 60,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Forest Heath",
    percent: 80,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Sharma",
    percent: 88,
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Amit Verma",
    percent: 66,
    img: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const statusColors = {
  present: "bg-green-500",
  absent: "bg-red-500",
  holiday: "bg-blue-500",
};

const getStatus = (staffIndex, dayIndex) => {
  if ([5, 6, 12, 13, 19, 20, 26, 27].includes(dayIndex)) return "holiday";
  if ((staffIndex + dayIndex) % 7 === 0) return "absent";
  if ((staffIndex * dayIndex) % 11 === 0 && staffIndex !== 0) return "absent";
  return "present";
};

const getPercentColor = (percent) => {
  if (percent >= 80) return "border-green-400 text-green-600 bg-green-50";
  if (percent >= 70) return "border-yellow-400 text-yellow-600 bg-yellow-50";
  if (percent >= 50) return "border-blue-400 text-blue-600 bg-blue-50";
  return "border-red-400 text-red-600 bg-red-50";
};

const dateOptions = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "Custom Range",
];

const Attendance = () => {
  const [search, setSearch] = useState("");
  const [rowPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Month");

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredStaff = useMemo(() => {
    return staffData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const totalPages = Math.ceil(filteredStaff.length / rowPerPage);
  const startIndex = (currentPage - 1) * rowPerPage;
  const currentStaff = filteredStaff.slice(startIndex, startIndex + rowPerPage);

  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-[#16345d]">Attendance</h1>

      <div className="mt-6 border-t border-gray-200 pt-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-[260px] bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
            />

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="bg-white border border-gray-200 rounded-xl px-5 py-3 flex items-center gap-3 text-[#16345d] shadow-sm hover:border-[#0ea5e9] transition"
              >
                <FaCalendarAlt className="text-gray-500" />

                <span className="font-semibold text-md">
                  1 May 26 - 31 May 26
                </span>
              </button>

              {open && (
                <div className="absolute left-0 top-full mt-3 w-[220px] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-fadeIn">
                  {dateOptions.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-6 py-2 text-[14px] font-medium transition ${
                        selected === item
                          ? "bg-[#16345d] text-white"
                          : "text-[#16345d] hover:bg-gray-100"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md border border-green-400 text-green-600 bg-green-50 text-sm font-bold">
              Present
            </span>
            <span className="px-3 py-1 rounded-md border border-red-400 text-red-600 bg-red-50 text-sm font-bold">
              Absent
            </span>
            <span className="px-3 py-1 rounded-md border border-blue-400 text-blue-600 bg-blue-50 text-sm font-bold">
              Holiday
            </span>
          </div>
        </div>

        <div className="mt-5 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1700px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="sticky left-0 z-20 bg-white px-5 py-4 text-[#16345d] min-w-[250px]">
                    Staff
                  </th>

                  <th className="sticky left-[250px] z-20 bg-white px-5 py-4 text-[#16345d] min-w-[80px]">
                    %
                  </th>

                  {days.map((day) => (
                    <th
                      key={day}
                      className="px-4 py-4 text-center text-[#16345d] font-bold min-w-[55px]"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentStaff.map((staff, staffIndex) => (
                  <tr
                    key={staff.name}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-[#f8fafc]"
                  >
                    <td className="sticky left-0 z-10 bg-white px-5 py-4 min-w-[250px]">
                      <div className="flex items-center gap-4">
                        <img
                          src={staff.img}
                          alt={staff.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <h3 className="font-bold text-[#16345d]">
                          {staff.name}
                        </h3>
                      </div>
                    </td>

                    <td className="sticky left-[250px] z-10 bg-white px-5 py-4 min-w-[80px]">
                      <span
                        className={`px-3 py-1 rounded-md border text-sm font-bold ${getPercentColor(
                          staff.percent,
                        )}`}
                      >
                        {staff.percent}%
                      </span>
                    </td>

                    {days.map((day, dayIndex) => {
                      const status = getStatus(
                        startIndex + staffIndex,
                        dayIndex,
                      );

                      return (
                        <td key={day} className="px-4 py-4 text-center">
                          <span
                            title={status}
                            className={`inline-block w-4 h-4 rounded-[4px] ${statusColors[status]}`}
                          ></span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 text-gray-500 font-bold">
            <span>Row Per Page</span>

            <select
              value={rowPerPage}
              onChange={(e) => {
                setRowPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0ea5e9]"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <span>Entries</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="w-11 h-11 bg-white border border-gray-200 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
            >
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-11 h-11 rounded-lg font-bold transition ${
                  currentPage === index + 1
                    ? "bg-[#0ea5e9] text-white"
                    : "bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-11 h-11 bg-white border border-gray-200 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attendance;
