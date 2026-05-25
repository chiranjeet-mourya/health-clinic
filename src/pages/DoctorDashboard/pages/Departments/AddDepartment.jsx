import React, { useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const doctors = [
  { name: "Dr. Sarah Johnson", role: "Cardiologist" },
  { name: "Dr. Michael Chen", role: "Neurologist" },
  { name: "Dr. Emily Rodriguez", role: "Pediatrician" },
  { name: "Nurse Robert Taylor", role: "Head Nurse" },
  { name: "Nurse Jessica Adams", role: "Registered Nurse" },
  { name: "Dr. James Wilson", role: "Orthopedic Surgeon" },
];

const services = [
  { name: "General Consultation", desc: "Initial patient assessment and diagnosis" },
  { name: "Specialized Treatment", desc: "Advanced procedures specific to department" },
  { name: "Diagnostic Testing", desc: "Comprehensive tests and screenings" },
  { name: "Emergency Care", desc: "Urgent medical attention" },
  { name: "Follow-up Visits", desc: "Post-treatment monitoring and care" },
  { name: "Preventive Care", desc: "Health maintenance and disease prevention" },
];

const AddDepartment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    departmentName: "",
    head: "",
    location: "",
    status: "Active",
    email: "",
    phone: "",
    description: "",
    staff: [],
    services: [],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Department created successfully!");
  };

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#16345d]">Add Department</h1>
          <p className="mt-2 text-gray-500">
            Create a new department in your clinic
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-5 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
        >
          <FaArrowLeft />
          Back to Departments
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm p-5 md:p-7"
      >
        <div>
          <h2 className="text-2xl font-bold text-[#16345d]">
            Department Information
          </h2>
          <p className="mt-2 text-gray-500">
            Enter the details for the new department
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Input
            label="Department Name"
            name="departmentName"
            value={formData.departmentName}
            onChange={handleChange}
            placeholder="e.g. Cardiology"
            hint="The official name of the department"
          />

          <Select
            label="Head of Department"
            name="head"
            value={formData.head}
            onChange={handleChange}
            options={[
              "Dr. Sarah Johnson",
              "Dr. Michael Chen",
              "Dr. Emily Rodriguez",
              "Dr. James Wilson",
            ]}
            hint="The doctor who will lead this department"
          />

          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Building A, Floor 3"
            hint="Physical location of the department"
          />

          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={["Active", "Inactive"]}
            hint="Current operational status"
          />

          <Input
            label="Contact Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="department@clinic.com"
            hint="Department contact email"
          />

          <Input
            label="Contact Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            hint="Department contact phone"
          />

          <div className="lg:col-span-2">
            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a description of the department's purpose, specialties, and functions..."
              hint="Detailed description of the department"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#111827]">Assign Staff</h3>
          <p className="mt-1 text-gray-500">
            Select staff members to assign to this department
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {doctors.map((item) => (
              <label
                key={item.name}
                className="border border-gray-200 rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:border-[#0ea5e9] transition"
              >
                <input
                  type="checkbox"
                  checked={formData.staff.includes(item.name)}
                  onChange={() => toggleArrayValue("staff", item.name)}
                  className="mt-1 accent-[#0ea5e9]"
                />

                <div>
                  <h4 className="font-bold text-[#111827]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#111827]">
            Available Services
          </h3>
          <p className="mt-1 text-gray-500">
            Select services that will be offered by this department
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((item) => (
              <label
                key={item.name}
                className="border border-gray-200 rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:border-[#0ea5e9] transition"
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(item.name)}
                  onChange={() => toggleArrayValue("services", item.name)}
                  className="mt-1 accent-[#0ea5e9]"
                />

                <div>
                  <h4 className="font-bold text-[#111827]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition"
          >
            <FaSave />
            Create Department
          </button>
        </div>
      </form>
    </section>
  );
};

const Input = ({ label, hint, ...props }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
    />
    {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
  </div>
);

const Select = ({ label, options, hint, ...props }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <select
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
    >
      <option value="">Select a doctor</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
    {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
  </div>
);

const Textarea = ({ label, hint, ...props }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <textarea
      {...props}
      rows="5"
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
    />
    {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
  </div>
);

export default AddDepartment;