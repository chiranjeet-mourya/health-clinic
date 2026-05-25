import React, { useRef, useState } from "react";
import {
  FaSave,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaBuilding,
  FaClock,
  FaCalendarAlt,
  FaPalette,
  FaShieldAlt,
  FaDatabase,
  FaSyncAlt,
  FaUpload,
  FaHeart,
  FaKey,
} from "react-icons/fa";

const tabs = ["Clinic Info", "Preferences", "Branding", "Security", "System"];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Clinic Info");

  const [toggle, setToggle] = useState({
    weekends: true,
    onlineBooking: true,
    approval: false,
    reminders: true,
    uppercase: true,
    numbers: true,
    special: true,
    twoFactor: false,
    encrypt: true,
    audit: true,
    maintenance: false,
  });

  const handleToggle = (key) => {
    setToggle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl font-bold text-[#16345d]">General Settings</h1>
        <p className="mt-2 text-gray-500">
          Configure your clinic settings and preferences
        </p>
      </div>

      <div className="mt-6 overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-5 min-w-[800px] bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 rounded-md font-bold transition ${
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

      {activeTab === "Clinic Info" && (
        <div className="mt-6 space-y-6">
          <Card
            title="Clinic Information"
            desc="Update your clinic's basic information and contact details"
            icon={<FaBuilding />}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input label="Clinic Name" defaultValue="MedixPro Clinic" />
              <Input
                label="Clinic ID/Registration Number"
                defaultValue="MC-12345-XYZ"
              />

              <div className="lg:col-span-2">
                <Textarea
                  label="Address"
                  defaultValue="123 Medical Plaza, Healthcare District, City, State, 12345"
                />
              </div>

              <Input
                label="Email Address"
                icon={<FaEnvelope />}
                defaultValue="contact@medixpro-clinic.com"
              />
              <Input
                label="Phone Number"
                icon={<FaPhoneAlt />}
                defaultValue="+1 (555) 123-4567"
              />
              <Input
                label="Website"
                icon={<FaGlobe />}
                defaultValue="https://medixpro-clinic.com"
              />
              <Input label="Tax ID" defaultValue="TAX-987654321" />

              <div className="lg:col-span-2 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-[#111827]">
                  Operating Hours
                </h3>
              </div>

              <Input label="Weekdays" defaultValue="8:00 AM - 6:00 PM" />
              <Input label="Weekends" defaultValue="9:00 AM - 2:00 PM" />
            </div>

            <ActionButtons saveText="Save Changes" />
          </Card>

          <Card
            title="Emergency Contact"
            desc="Set up emergency contact information for your clinic"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input label="Contact Name" defaultValue="Dr. Sarah Johnson" />
              <Input label="Emergency Phone" defaultValue="+1 (555) 987-6543" />
              <div className="lg:col-span-2">
                <Textarea
                  label="Emergency Instructions"
                  defaultValue="In case of system failure, contact the emergency number immediately. For power outages, the backup generator should activate automatically."
                />
              </div>
            </div>

            <ActionButtons saveText="Save Changes" />
          </Card>
        </div>
      )}

      {activeTab === "Preferences" && (
        <div className="mt-6 space-y-6">
          <Card
            title="Regional Settings"
            desc="Configure time, date, and regional preferences"
            icon={<FaClock />}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Select
                label="Timezone"
                options={[
                  "America/New York (UTC-05:00)",
                  "Asia/Kolkata (UTC+05:30)",
                ]}
              />
              <Select
                label="Date Format"
                options={["MM/DD/YYYY", "DD/MM/YYYY"]}
              />
              <Select
                label="Time Format"
                options={["12-hour (AM/PM)", "24-hour"]}
              />
              <Select
                label="First Day of Week"
                options={["Sunday", "Monday"]}
              />
              <div className="lg:col-span-2">
                <Select label="Language" options={["English", "Hindi"]} />
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Calendar Settings
              </h3>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Select
                  label="Default Calendar View"
                  options={["Week", "Month", "Day"]}
                />
                <Select
                  label="Default Appointment Duration"
                  options={["30 minutes", "45 minutes", "60 minutes"]}
                />
              </div>

              <div className="mt-5">
                <ToggleRow
                  title="Show weekends in calendar"
                  value={toggle.weekends}
                  onClick={() => handleToggle("weekends")}
                />
              </div>
            </div>

            <ActionButtons
              saveText="Save Preferences"
              resetText="Reset to Defaults"
            />
          </Card>

          <Card
            title="Appointment Settings"
            desc="Configure appointment scheduling preferences"
            icon={<FaCalendarAlt />}
          >
            <div className="space-y-4">
              <ToggleRow
                title="Allow online appointment booking"
                value={toggle.onlineBooking}
                onClick={() => handleToggle("onlineBooking")}
              />
              <ToggleRow
                title="Require approval for online bookings"
                value={toggle.approval}
                onClick={() => handleToggle("approval")}
              />
              <ToggleRow
                title="Send appointment reminders"
                value={toggle.reminders}
                onClick={() => handleToggle("reminders")}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Select
                label="Reminder Time"
                options={[
                  "24 hours before",
                  "12 hours before",
                  "1 hour before",
                ]}
              />
              <Select
                label="Buffer Time Between Appointments"
                options={["15 minutes", "30 minutes", "45 minutes"]}
              />
            </div>

            <ActionButtons saveText="Save Settings" />
          </Card>
        </div>
      )}

      {activeTab === "Branding" && (
        <div className="mt-6">
          <Card
            title="Branding & Appearance"
            desc="Customize your clinic's visual identity"
            icon={<FaPalette />}
          >
            <UploadBox
              title="Clinic Logo"
              button="Upload New Logo"
              size="Recommended size: 512×512px. Max file size: 2MB. Formats: PNG, JPG, SVG"
            />
            <UploadBox
              title="Favicon"
              button="Upload Favicon"
              size="Recommended size: 32×32px. Format: ICO, PNG"
              small
            />

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">Color Scheme</h3>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ColorInput label="Primary Color" defaultValue="#0ea5e9" />
                <ColorInput
                  label="Secondary Color"
                  defaultValue="#7c3aed"
                  light
                />
              </div>

              <div className="mt-5">
                <Select
                  label="Theme Mode"
                  options={["Light", "Dark", "System"]}
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#111827]">
                Email Template
              </h3>
              <div className="mt-5 space-y-5">
                <Input
                  label="Email Header Text"
                  defaultValue="MedixPro Clinic - Your Health, Our Priority"
                />
                <Textarea
                  label="Email Footer Text"
                  defaultValue="© 2023 MedixPro Clinic. All rights reserved. 123 Medical Plaza, Healthcare District, City, State, 12345"
                />
              </div>
            </div>

            <ActionButtons
              saveText="Save Branding"
              resetText="Reset to Defaults"
            />
          </Card>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="mt-6 space-y-6">
          <Card
            title="Security Settings"
            desc="Configure security and privacy settings for your clinic"
            icon={<FaShieldAlt />}
          >
            <h3 className="text-lg font-bold text-[#111827]">
              Password Policy
            </h3>

            <div className="mt-5 space-y-5">
              <Select
                label="Password Expiry"
                options={["90 days", "60 days", "30 days"]}
              />
              <Select
                label="Minimum Password Length"
                options={["8 characters", "10 characters", "12 characters"]}
              />

              <ToggleRow
                title="Require uppercase letters"
                value={toggle.uppercase}
                onClick={() => handleToggle("uppercase")}
              />
              <ToggleRow
                title="Require numbers"
                value={toggle.numbers}
                onClick={() => handleToggle("numbers")}
              />
              <ToggleRow
                title="Require special characters"
                value={toggle.special}
                onClick={() => handleToggle("special")}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 space-y-5">
              <h3 className="text-lg font-bold text-[#111827]">
                Login Security
              </h3>
              <ToggleRow
                title="Enforce two-factor authentication"
                value={toggle.twoFactor}
                onClick={() => handleToggle("twoFactor")}
              />
              <Select
                label="Session Timeout"
                options={["30 minutes", "1 hour", "2 hours"]}
              />
              <Select
                label="Maximum Login Attempts"
                options={["5 attempts", "3 attempts", "10 attempts"]}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 space-y-5">
              <h3 className="text-lg font-bold text-[#111827]">
                Data Protection
              </h3>
              <ToggleRow
                title="Encrypt sensitive data"
                value={toggle.encrypt}
                onClick={() => handleToggle("encrypt")}
              />
              <ToggleRow
                title="Enable audit logs"
                value={toggle.audit}
                onClick={() => handleToggle("audit")}
              />
              <Select
                label="Log Retention Period"
                options={["1 year", "6 months", "2 years"]}
              />
            </div>

            <ActionButtons
              saveText="Save Security Settings"
              resetText="Reset to Defaults"
            />
          </Card>

          <Card
            title="API Access"
            desc="Manage API keys and external integrations"
            icon={<FaKey />}
          >
            <ToggleRow
              title="Enable API access"
              value={toggle.audit}
              onClick={() => handleToggle("audit")}
            />

            <div className="mt-5">
              <Input
                label="API Key"
                defaultValue="••••••••••••••••••••••••••••"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Select
                label="Requests per Minute"
                options={["100 requests", "500 requests", "1000 requests"]}
              />
              <Textarea
                label="Allowed Origins"
                defaultValue="https://medixpro-clinic.com https://api.medixpro-clinic.com"
              />
            </div>

            <ActionButtons saveText="Save API Settings" />
          </Card>
        </div>
      )}

      {activeTab === "System" && (
        <div className="mt-6">
          <Card
            title="System Configuration"
            desc="Advanced system settings and maintenance options"
            icon={<FaDatabase />}
          >
            <h3 className="text-xl font-bold text-[#111827]">
              System Maintenance
            </h3>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <OutlineButton icon={<FaSyncAlt />} text="Clear Cache" />
              <OutlineButton icon={<FaDatabase />} text="Optimize Database" />
            </div>

            <div className="mt-6">
              <ToggleRow
                title="Enable maintenance mode"
                desc="This will make the system inaccessible to regular users"
                value={toggle.maintenance}
                onClick={() => handleToggle("maintenance")}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Backup & Restore
              </h3>

              <div className="mt-5 space-y-5">
                <Select
                  label="Automatic Backup Frequency"
                  options={["Daily", "Weekly", "Monthly"]}
                />
                <Select
                  label="Backup Retention"
                  options={["30 days", "60 days", "90 days"]}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <OutlineButton
                    icon={<FaDatabase />}
                    text="Create Manual Backup"
                  />
                  <OutlineButton
                    icon={<FaUpload />}
                    text="Restore from Backup"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#111827]">
                System Information
              </h3>

              {[
                ["Version", "v2.5.3"],
                ["Last Updated", "2023-11-10"],
                ["Database Size", "1.2 GB"],
                ["Storage Usage", "45.8 GB / 100 GB"],
              ].map(([key, value]) => (
                <div key={key} className="flex justify-between py-2">
                  <span className="font-bold text-[#111827]">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <ActionButtons
              saveText="Save System Settings"
              resetText="Reset to Defaults"
            />
          </Card>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const Card = ({ title, desc, icon, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-7 shadow-sm">
    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
      {icon}
      {title}
    </h2>
    <p className="mt-2 text-gray-500">{desc}</p>
    <div className="mt-10">{children}</div>
  </div>
);

const Input = ({ label, icon, ...props }) => (
  <div>
    <label className="font-bold text-[#111827] mb-3 flex items-center gap-2">
      {icon}
      {label}
    </label>
    <input
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <textarea
      rows="4"
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]">
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  </div>
);

const ToggleRow = ({ title, desc, value, onClick }) => (
  <div className="flex items-center justify-between gap-5">
    <div>
      <h4 className="font-bold text-[#111827]">{title}</h4>
      {desc && <p className="text-gray-500 mt-1">{desc}</p>}
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

const ActionButtons = ({ saveText, resetText = "Cancel" }) => (
  <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
    <button className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-6 py-3 rounded-lg font-bold transition">
      {resetText}
    </button>

    <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition">
      <FaSave />
      {saveText}
    </button>
  </div>
);

const UploadBox = ({ title, button, size, small }) => {
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="font-bold text-[#111827]">{title}</h3>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* IMAGE PREVIEW */}
        <div
          className={`border border-dashed border-gray-300 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 ${
            small ? "w-16 h-16" : "w-28 h-28"
          }`}
        >
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUpload className="text-3xl text-gray-400" />
          )}
        </div>

        <div>
          {/* HIDDEN INPUT */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />

          {/* BUTTON */}
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-white border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-5 py-3 rounded-lg font-bold transition"
          >
            {button}
          </button>

          <p className="mt-2 text-gray-500 text-sm">{size}</p>
        </div>
      </div>
    </div>
  );
};

const ColorInput = ({ label, defaultValue, light }) => (
  <div>
    <label className="block font-bold text-[#111827] mb-3">{label}</label>
    <div className="flex items-center gap-3">
      <span
        className={`w-8 h-8 rounded-full ${
          light ? "bg-gray-100" : "bg-[#0ea5e9]"
        }`}
      ></span>
      <input
        defaultValue={defaultValue}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
      />
    </div>
  </div>
);

const OutlineButton = ({ icon, text }) => (
  <button className="w-full border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-5 py-3 rounded-lg font-bold flex items-center justify-center gap-3 transition">
    {icon}
    {text}
  </button>
);

export default Settings;
