import React, { useMemo, useState } from "react";
import {
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
  FaSort,
  FaTimes,
  FaPrint,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

const employeesData = [
  {
    id: 1,
    name: "James Adair",
    email: "james@gmail.com",
    joiningDate: "01 Jan 2024",
    role: "Admin",
    salary: "$1200",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Adam Milne",
    email: "esther@gmail.com",
    joiningDate: "04 Jan 2023",
    role: "Reception",
    salary: "$2000",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Richard Clark",
    email: "judi@gmail.com",
    joiningDate: "26 Jan 2022",
    role: "Admin",
    salary: "$1500",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 4,
    name: "Robert Reid",
    email: "robert@gmail.com",
    joiningDate: "04 Feb 2022",
    role: "Admin",
    salary: "$1200",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Dottie Jeny",
    email: "dottie@gmail.com",
    joiningDate: "03 Mar 2021",
    role: "Nurse",
    salary: "$1500",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 6,
    name: "Cheryl Bilodeau",
    email: "cheryl@gmail.com",
    joiningDate: "08 May 2021",
    role: "Nurse (RN)",
    salary: "$2500",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 7,
    name: "Valerie Padgett",
    email: "valerie@gmail.com",
    joiningDate: "29 Mar 2021",
    role: "Nurse Practitioner",
    salary: "$1000",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 8,
    name: "Diane Nash",
    email: "diane@gmail.com",
    joiningDate: "01 Apr 2020",
    role: "Nurse",
    salary: "$1250",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 9,
    name: "Sally Cavazos",
    email: "sally@gmail.com",
    joiningDate: "01 May 2020",
    role: "Nurse",
    salary: "$1550",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 10,
    name: "Forest Heath",
    email: "forest@gmail.com",
    joiningDate: "27 May 2020",
    role: "Reception",
    salary: "$1250",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const AllPayroll = () => {
  const [showPayslip, setShowPayslip] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    return employeesData.filter((item) =>
      `${item.name} ${item.email} ${item.role}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;

  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleGenerateSlip = (employee) => {
    setSelectedEmployee(employee);
    setShowPayslip(true);
  };

  if (showPayslip) {
    return (
      <PayslipSection
        employee={selectedEmployee}
        onBack={() => setShowPayslip(false)}
      />
    );
  }

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-[#16345d]">Payrolls</h1>

          <span className="border border-[#0ea5e9] text-[#0ea5e9] px-3 py-1 rounded-md font-bold">
            Total Payrolls : {employeesData.length}
          </span>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-200 pt-3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-[300px] bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
        />
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-left">
            <thead>
              <tr className="border-b border-gray-100">
                {[
                  "Employee",
                  "Email",
                  "JoiningDate",
                  "Role",
                  "Salary",
                  "Status",
                  "",
                ].map((head, index) => (
                  <th
                    key={index}
                    className="px-6 py-5 text-lg font-bold text-[#111827]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{head}</span>
                      {head && <FaSort className="text-gray-300 text-sm" />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentEmployees.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-50 last:border-b-0 hover:bg-[#f8fafc] transition"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <h3 className="font-bold text-[#16345d]">{item.name}</h3>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-500 font-medium">
                    {item.email}
                  </td>

                  <td className="px-6 py-5 text-gray-500 font-medium">
                    {item.joiningDate}
                  </td>

                  <td className="px-6 py-5 text-gray-500 font-medium">
                    {item.role}
                  </td>

                  <td className="px-6 py-5 text-gray-500 font-medium">
                    {item.salary}
                  </td>

                  <td className="px-6 py-5">
                    <button
                      onClick={() => handleGenerateSlip(item)}
                      className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-5 py-3 rounded-lg font-bold text-[#16345d] transition"
                    >
                      Generate Slip
                    </button>
                  </td>

                  <td className="px-6 py-5">
                    <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3 text-gray-500 font-bold">
          <span>Rows per page:</span>

          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0ea5e9]"
          >
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>

          <span>of {filteredEmployees.length} Entries</span>
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
    </section>
  );
};

const PayslipSection = ({ employee, onBack }) => {
  return (
    <section className="w-full">
      <button
        onClick={onBack}
        className="mb-5 flex items-center gap-2 text-[#fff] px-3 py-2 rounded-full font-bold bg-[#0ea5e9] hover:bg-[#0692d2] transition"
      >
        <FaArrowLeft />
        Back to Payrolls
      </button>

      <div className="bg-white border border-gray-200 rounded-[24px] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h2 className="text-xl lg:text-3xl font-bold text-[#16345d]">
                Payroll
              </h2>

              <p className="text-gray-500 mt-2">
                Salary Month: March, 2025
              </p>
            </div>

            <div className="lg:text-right">
              <h2 className="text-xl lg:text-2xl font-bold text-[#16345d]">
                Payslip for the Month of March 2025
              </h2>

              <div className="mt-2 flex lg:justify-end items-center gap-3">
                <span className="font-bold text-[#16345d]">Status:</span>

                <span className="bg-green-500 text-white px-4 py-1 rounded-lg font-bold">
                  Success
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-200 pb-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white text-2xl font-bold">
                  P
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#16345d]">
                  Preclinic
                </h2>
              </div>

              <div className="mt-5 text-gray-500 space-y-1 text-lg">
                <p>3864 Quiet Valley Lane,</p>
                <p>Sherman Oaks, CA, 91403</p>
                <p>GST No:2941035</p>
              </div>
            </div>

            <div className="lg:text-right">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#16345d]">
                {employee?.name || "Andrew Fletcher"}
              </h2>

              <div className="mt-2 text-gray-500 text-lg space-y-1">
                <p>
                  Employee ID:
                  <span className="font-bold text-[#16345d] ml-2">
                    ST-000{employee?.id || 1}
                  </span>
                </p>

                <p>
                  Joining Date:
                  <span className="font-bold text-[#16345d] ml-2">
                    {employee?.joiningDate || "7 May 2015"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mt-6">
            <div>
              <h2 className="text-2xl font-bold text-[#16345d] mb-4">
                Earnings
              </h2>

              <div className="space-y-3 lg:space-y-5">
                <Input title="Basic Salary" placeholder="Basic Salary" />
                <Input title="House Rent Allowance (H.R.A)" placeholder="House Rent Allowance (H.R.A)" />
                <Input title="Conveyance" placeholder="Conveyance" />
                <Input title="Other Allowance" placeholder="Other Allowance" />
                <Input title="Total Earnings" placeholder="Total Earnings" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#16345d] mb-4">
                Deductions
              </h2>

              <div className="space-y-3 lg:space-y-5">
                <Input title="Tax Deducted at Sources (T.D.S)" placeholder="Tax Deducted at Sources (T.D.S)" />
                <Input title="Provident Fund" placeholder="Provident Fund" />
                <Input title="ESI" placeholder="ESI" />
                <Input title="Loan" placeholder="Loan" />
                <Input title="Total Deductions" placeholder="Total Deductions" />
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#16345d]">
              Net Salary:
              <span className="text-[#0ea5e9] ml-3">
                $9698
              </span>
            </h2>

            <p className="mt-2 text-gray-500 leading-8 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed dictum ligula, cursus blandit risus. Maecenas eget metus non
              tellus dignissim aliquam ut a ex.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition">
              <FaEnvelope />
              Send Payslip
            </button>

            <button
              onClick={() => window.print()}
              className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
            >
              <FaPrint />
              Print
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ title, placeholder }) => {
  return (
    <div>
      <label className="block text-md font-bold text-[#16345d] mb-2">
        {title}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[50px] border border-gray-200 rounded-xl px-5 outline-none focus:border-[#0ea5e9]"
      />
    </div>
  );
};

export default AllPayroll;