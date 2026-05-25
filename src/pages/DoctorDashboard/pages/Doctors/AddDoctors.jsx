import React, { useState } from "react";
import { FaArrowLeft, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");

  const [toggles, setToggles] = useState({
    patientRecords: false,
    prescriptions: false,
    billing: false,
    reports: false,
    appointmentNotifications: true,
    patientUpdates: true,
    systemNotifications: true,
  });

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "professional", label: "Professional Details" },
    { id: "account", label: "Account Settings" },
  ];

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="w-full">
      <div>
        <h1 className="text-3xl font-bold text-[#16345d]">Add Doctor</h1>
        <p className="mt-2 text-gray-500">Add a new doctor to your clinic.</p>
      </div>

      <div className="mt-6 overflow-x-auto no-scrollbar">
        <div className="inline-flex bg-gray-100 rounded-lg p-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-md text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-white text-[#0ea5e9] shadow-sm"
                  : "text-gray-500 hover:text-[#0ea5e9]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 md:p-7 shadow-sm">
        {activeTab === "personal" && (
          <>
            <SectionTitle
              title="Personal Information"
              desc="Enter the doctor's personal details."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="First Name" placeholder="Enter first name" />
              <Input label="Last Name" placeholder="Enter last name" />
              <Input label="Date of Birth" type="date" />
              <Select label="Gender" options={["Male", "Female", "Other"]} />

              <div className="md:col-span-2">
                <Textarea label="Address" placeholder="Enter address" />
              </div>

              <Input label="City" placeholder="Enter city" />
              <Input label="State" placeholder="Enter state" />
              <Input label="Zip Code" placeholder="Enter zip code" />

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-[#111827]">
                  Contact Information
                </h3>
              </div>

              <Input
                label="Email"
                type="email"
                placeholder="Enter email address"
              />
              <Input label="Phone Number" placeholder="Enter phone number" />
              <Input
                label="Emergency Contact Name"
                placeholder="Enter emergency contact name"
              />
              <Input
                label="Emergency Contact Phone"
                placeholder="Enter emergency contact phone"
              />

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-[#111827]">
                  Profile Photo
                </h3>

                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-2xl">
                    <FaUpload />
                  </div>

                  <div>
                    <label className="inline-block cursor-pointer bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-5 py-3 rounded-lg font-bold transition">
                      Upload Photo
                      <input type="file" className="hidden" />
                    </label>

                    <p className="mt-2 text-gray-500 text-sm">
                      Upload a profile photo. JPG, PNG or GIF. Max 2MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "professional" && (
          <>
            <SectionTitle
              title="Professional Details"
              desc="Enter the doctor's professional information."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Select
                label="Primary Specialization"
                options={[
                  "Cardiology",
                  "Neurology",
                  "Pediatrics",
                  "Orthopedics",
                  "Dermatology",
                ]}
              />

              <Select
                label="Secondary Specialization (Optional)"
                options={[
                  "General Medicine",
                  "Emergency Care",
                  "Surgery",
                  "Radiology",
                ]}
              />

              <Input
                label="Medical License Number"
                placeholder="Enter license number"
              />

              <Input label="License Expiry Date" type="date" />

              <div className="md:col-span-2">
                <Textarea
                  label="Qualifications"
                  placeholder="Enter qualifications (MD, PhD, etc.)"
                />
              </div>

              <div className="md:col-span-2">
                <Input
                  label="Years of Experience"
                  placeholder="Enter years of experience"
                />
              </div>

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-[#111827]">
                  Education & Training
                </h3>
              </div>

              <div className="md:col-span-2">
                <Textarea
                  label="Education"
                  placeholder="Enter education details"
                />
              </div>

              <div className="md:col-span-2">
                <Textarea
                  label="Certifications"
                  placeholder="Enter certifications"
                />
              </div>

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-[#111827]">
                  Department & Position
                </h3>
              </div>

              <Select
                label="Department"
                options={[
                  "Cardiology",
                  "Neurology",
                  "Pediatrics",
                  "Orthopedics",
                  "Emergency",
                ]}
              />

              <Select
                label="Position"
                options={[
                  "Senior Doctor",
                  "Consultant",
                  "Surgeon",
                  "Resident Doctor",
                  "Department Head",
                ]}
              />
            </div>
          </>
        )}

        {activeTab === "account" && (
          <>
            <SectionTitle
              title="Account Settings"
              desc="Configure the doctor's account and system access."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Username" placeholder="Enter username" />
              <Input
                label="Temporary Password"
                type="password"
                placeholder="Enter temporary password"
              />

              <div className="md:col-span-2">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter email address"
                />
                <p className="mt-2 text-gray-500">
                  This will be used for login and notifications.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-7">
              <h3 className="text-xl font-bold text-[#111827]">
                System Access
              </h3>

              <div className="mt-5 space-y-5">
                <ToggleRow
                  title="Patient Records"
                  desc="Allow access to patient records"
                  value={toggles.patientRecords}
                  onClick={() => handleToggle("patientRecords")}
                />
                <ToggleRow
                  title="Prescriptions"
                  desc="Allow creating and managing prescriptions"
                  value={toggles.prescriptions}
                  onClick={() => handleToggle("prescriptions")}
                />
                <ToggleRow
                  title="Billing"
                  desc="Allow access to billing information"
                  value={toggles.billing}
                  onClick={() => handleToggle("billing")}
                />
                <ToggleRow
                  title="Reports"
                  desc="Allow access to reports and analytics"
                  value={toggles.reports}
                  onClick={() => handleToggle("reports")}
                />
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-7">
              <h3 className="text-xl font-bold text-[#111827]">
                Notifications
              </h3>

              <div className="mt-5 space-y-5">
                <ToggleRow
                  title="Appointment Notifications"
                  desc="Receive notifications for new appointments"
                  value={toggles.appointmentNotifications}
                  onClick={() => handleToggle("appointmentNotifications")}
                />
                <ToggleRow
                  title="Patient Updates"
                  desc="Receive notifications for patient updates"
                  value={toggles.patientUpdates}
                  onClick={() => handleToggle("patientUpdates")}
                />
                <ToggleRow
                  title="System Notifications"
                  desc="Receive system and administrative notifications"
                  value={toggles.systemNotifications}
                  onClick={() => handleToggle("systemNotifications")}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-6 py-3 rounded-lg font-bold transition"
        >
          Cancel
        </button>

        <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold transition">
          Save Doctor
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const SectionTitle = ({ title, desc }) => (
  <div>
    <h2 className="text-2xl font-bold text-[#16345d]">{title}</h2>
    <p className="mt-2 text-gray-500">{desc}</p>
  </div>
);

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3 text-sm">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3 text-sm">{label}</label>
    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]">
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3 text-sm">{label}</label>
    <textarea
      rows="4"
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
    />
  </div>
);

const ToggleRow = ({ title, desc, value, onClick }) => (
  <div className="flex items-center justify-between gap-5">
    <div>
      <h4 className="font-bold text-[#111827]">{title}</h4>
      <p className="mt-1 text-gray-500">{desc}</p>
    </div>

    <button
      type="button"
      onClick={onClick}
      className={`w-12 h-7 rounded-full p-1 transition ${
        value ? "bg-[#0ea5e9]" : "bg-slate-700"
      }`}
    >
      <span
        className={`block w-5 h-5 bg-white rounded-full transition ${
          value ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </button>
  </div>
);

export default AddDoctor;
