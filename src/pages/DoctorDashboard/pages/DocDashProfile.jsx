import React, { useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhoneAlt,
  FaUserMd,
  FaEdit,
  FaSave,
  FaLock,
} from "react-icons/fa";

const DocDashProfile = () => {
  const [edit, setEdit] = useState(false);
  const [preview, setPreview] = useState(
    "https://randomuser.me/api/portraits/men/32.jpg"
  );

  const [profile, setProfile] = useState({
    name: "Dr. Rahul Sharma",
    email: "doctor@medicare.com",
    phone: "+91 9876543210",
    role: "Senior Cardiologist",
    department: "Cardiology",
    experience: "12 Years",
    address: "Noida Sector 62, India",
    bio: "Experienced cardiologist focused on patient-first treatment and modern healthcare solutions.",
  });

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = () => {
    setEdit(false);
    alert("Profile updated successfully");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (password.newPassword !== password.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    alert("Password updated successfully");

    setPassword({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="w-full">
      <div className="mb-7">
        <h1 className="text-xl md:text-3xl font-bold text-[#16345d]">
          Doctor Profile
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your profile details and account security.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={preview}
                alt="doctor"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#0ea5e9]/20"
              />

              {edit && (
                <label className="absolute bottom-2 right-2 w-11 h-11 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center cursor-pointer">
                  <FaCamera />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#16345d]">
              {profile.name}
            </h2>
            <p className="text-[#0ea5e9] font-semibold">{profile.role}</p>

            <div className="mt-6 w-full space-y-4 text-left">
              <Info icon={<FaEnvelope />} label="Email" value={profile.email} />
              <Info icon={<FaPhoneAlt />} label="Phone" value={profile.phone} />
              <Info
                icon={<FaUserMd />}
                label="Department"
                value={profile.department}
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#16345d]">
                Profile Information
              </h2>
              <p className="text-gray-500 mt-1">
                Update your personal and professional details.
              </p>
            </div>

            <button
              onClick={() => (edit ? handleSaveProfile() : setEdit(true))}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-5 py-3 rounded-lg font-bold flex items-center gap-2 transition"
            >
              {edit ? <FaSave /> : <FaEdit />}
              {edit ? "Save" : "Edit"}
            </button>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <Input
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <Input
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <Input
              label="Role"
              name="role"
              value={profile.role}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <Input
              label="Department"
              name="department"
              value={profile.department}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <Input
              label="Experience"
              name="experience"
              value={profile.experience}
              onChange={handleProfileChange}
              disabled={!edit}
            />

            <div className="md:col-span-2">
              <Input
                label="Address"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
                disabled={!edit}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-bold text-[#16345d] mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleProfileChange}
                disabled={!edit}
                rows="4"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0ea5e9] disabled:bg-gray-50 resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleChangePassword}
        className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <FaLock className="text-[#0ea5e9] text-2xl" />
          <div>
            <h2 className="text-2xl font-bold text-[#16345d]">
              Change Password
            </h2>
            <p className="text-gray-500 mt-1">
              Update your account password securely.
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Input
            label="Old Password"
            type="password"
            name="oldPassword"
            value={password.oldPassword}
            onChange={handlePasswordChange}
          />

          <Input
            label="New Password"
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
          />
        </div>

        <button className="mt-6 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold transition">
          Update Password
        </button>
      </form>
    </section>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 flex items-center gap-4">
    <span className="w-11 h-11 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
      {icon}
    </span>

    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <h4 className="font-bold text-[#16345d]">{value}</h4>
    </div>
  </div>
);

const Input = ({ label, disabled = false, ...props }) => (
  <div>
    <label className="block font-bold text-[#16345d] mb-2">{label}</label>
    <input
      {...props}
      disabled={disabled}
      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0ea5e9] disabled:bg-gray-50"
    />
  </div>
);

export default DocDashProfile;
