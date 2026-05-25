import React, { useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const staffList = [
  "James Adair",
  "Adam Milne",
  "Richard Clark",
  "Robert Reid",
  "Dottie Jeny",
  "Cheryl Bilodeau",
  "Valerie Padgett",
  "Diane Nash",
];

const AddPayroll = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    staff: "",
    basicSalary: 0,
    da: 0,
    hra: 0,
    conveyance: 0,
    medicalAllowance: 0,
    earningOthers: 0,
    tds: 0,
    esi: 0,
    pf: 0,
    profTax: 0,
    labourWelfare: 0,
    deductionOthers: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const totalEarnings = useMemo(() => {
    return (
      Number(formData.basicSalary || 0) +
      Number(formData.da || 0) +
      Number(formData.hra || 0) +
      Number(formData.conveyance || 0) +
      Number(formData.medicalAllowance || 0) +
      Number(formData.earningOthers || 0)
    );
  }, [formData]);

  const totalDeductions = useMemo(() => {
    return (
      Number(formData.tds || 0) +
      Number(formData.esi || 0) +
      Number(formData.pf || 0) +
      Number(formData.profTax || 0) +
      Number(formData.labourWelfare || 0) +
      Number(formData.deductionOthers || 0)
    );
  }, [formData]);

  const netSalary = totalEarnings - totalDeductions;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      totalEarnings,
      totalDeductions,
      netSalary,
    });

    alert("Payslip added successfully!");
  };

  return (
    <section className="w-full">
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden"
      >
          <h1 className="text-2xl md:text-3xl font-bold text-[#16345d] mb-6">
            Add Employee Salary
          </h1>

        <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <Label title="Select Staff" />
              <select
                name="staff"
                value={formData.staff}
                onChange={handleChange}
                required
                className="w-full h-[50px] border border-gray-200 rounded-lg px-5 text-lg outline-none focus:border-[#0ea5e9]"
              >
                <option value="">Select staff</option>
                {staffList.map((staff) => (
                  <option key={staff} value={staff}>
                    {staff}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label title="Net Salary" />
              <input
                type="text"
                value={`$ ${netSalary}`}
                readOnly
                className="w-full h-[50px] border border-gray-200 rounded-lg px-5 text-lg bg-gray-50 outline-none"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold text-[#16345d] mb-3">
                Earnings ($)
              </h2>

              <div className="space-y-4">
                <Input label="Basic Salary" name="basicSalary" value={formData.basicSalary} onChange={handleChange} required />
                <Input label="DA (40%)" name="da" value={formData.da} onChange={handleChange} required />
                <Input label="HRA (15%)" name="hra" value={formData.hra} onChange={handleChange} required />
                <Input label="Conveyance" name="conveyance" value={formData.conveyance} onChange={handleChange} required />
                <Input label="Medical Allowance" name="medicalAllowance" value={formData.medicalAllowance} onChange={handleChange} required />
                <Input label="Others" name="earningOthers" value={formData.earningOthers} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#16345d] mb-3">
                Deductions ($)
              </h2>

              <div className="space-y-4">
                <Input label="TDS" name="tds" value={formData.tds} onChange={handleChange} required />
                <Input label="ESI" name="esi" value={formData.esi} onChange={handleChange} />
                <Input label="PF" name="pf" value={formData.pf} onChange={handleChange} required />
                <Input label="Prof Tax" name="profTax" value={formData.profTax} onChange={handleChange} required />
                <Input label="Labour Welfare" name="labourWelfare" value={formData.labourWelfare} onChange={handleChange} required />
                <Input label="Others" name="deductionOthers" value={formData.deductionOthers} onChange={handleChange} required />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-8 py-3 rounded-lg font-bold text-[#16345d] transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-lg font-bold transition"
          >
            Add Payslip
          </button>
        </div>
      </form>
    </section>
  );
};

const Label = ({ title }) => (
  <label className="block text-md md:text-lg font-semibold text-[#16345d] mb-2">
    {title}
  </label>
);

const Input = ({ label, required, ...props }) => (
  <div>
    <label className="block text-md md:text-lg font-semibold text-[#16345d] mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <input
      type="number"
      min="0"
      placeholder="0"
      {...props}
      className="w-full h-[50px] border border-gray-200 rounded-lg px-5 text-lg outline-none focus:border-[#0ea5e9]"
    />
  </div>
);

export default AddPayroll;