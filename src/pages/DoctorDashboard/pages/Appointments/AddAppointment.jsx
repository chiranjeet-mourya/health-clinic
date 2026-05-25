import React, { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "",
    date: "",
    time: "",
    duration: "30 minutes",
    reason: "",
    status: "Scheduled",
    notes: "",
    patient: "",
    doctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Appointment scheduled successfully!");
  };

  return (
    <section className="w-full">
      <div className="flex items-start gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#16345d]">
            Add Appointment
          </h1>
          <p className="mt-2 text-gray-500">
            Schedule a new appointment for a patient.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 xl:grid-cols-[1.4fr_0.7fr] gap-6"
      >
        {/* Left Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[#16345d]">
            Appointment Details
          </h2>
          <p className="mt-2 text-gray-500">
            Enter the details for the new appointment.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <label className="block font-bold text-[#111827] mb-3">
                Appointment Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
                required
              >
                <option value="">Select appointment type</option>
                <option value="Check-up">Check-up</option>
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Dental Cleaning">Dental Cleaning</option>
                <option value="X-Ray">X-Ray</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#111827] mb-3">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-[#111827] mb-3">
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
                required
              >
                <option value="">Select time slot</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:15 PM">02:15 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#111827] mb-3">
                Duration (minutes)
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
              >
                <option value="15 minutes">15 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="60 minutes">60 minutes</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#111827] mb-3">
                Reason for Visit
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Enter the reason for the appointment"
                rows="5"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
              ></textarea>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Appointment Status
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Scheduled",
                  "Tentative (Pending Confirmation)",
                  "Add to Waitlist",
                ].map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-3 font-semibold cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={formData.status === status}
                      onChange={handleChange}
                      className="accent-[#0ea5e9]"
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Additional Information
              </h3>

              <div className="mt-5">
                <label className="block font-bold text-[#111827] mb-3">
                  Notes for Staff
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Enter any additional notes for staff"
                  rows="4"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-[#16345d]">
              Select Patient
            </h2>
            <p className="mt-2 text-gray-500">
              Search and select a patient for this appointment.
            </p>

            <div className="mt-10 relative">
              <input
                type="text"
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                placeholder="Search patients..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-11 outline-none focus:border-[#0ea5e9]"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button
              type="button"
              className="mt-4 w-full border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] rounded-lg py-3 font-bold transition"
            >
              Register New Patient
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-[#16345d]">Select Doctor</h2>
            <p className="mt-2 text-gray-500">
              Choose a doctor for this appointment.
            </p>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="mt-10 w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
              required
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
              <option value="Dr. Michael Chen">Dr. Michael Chen</option>
              <option value="Dr. Lisa Patel">Dr. Lisa Patel</option>
              <option value="Dr. James Wilson">Dr. James Wilson</option>
            </select>
          </div>
          <div className="xl:col-span-2 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-6 py-3 rounded-lg font-bold transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold transition"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddAppointment;
