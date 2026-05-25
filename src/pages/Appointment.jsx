import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaWaveSquare,
  FaRegCalendarCheck,
  FaStopwatch,
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHospital,
  FaUserMd,
  FaNotesMedical,
  FaTimes,
} from "react-icons/fa";

const Appointment = () => {
  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    specialist: "",
    reason: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [showModel, setShowModel] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModel(true);
  };

  const handleReset = () => {
    setFormData(initialForm);
  };

  const fields = [
    { icon: <FaUser />, label: "Full Name", value: formData.fullName },
    { icon: <FaEnvelope />, label: "Email Address", value: formData.email },
    { icon: <FaPhoneAlt />, label: "Phone Number", value: formData.phone },
    { icon: <FaCalendarAlt />, label: "Preferred Date", value: formData.date },
    { icon: <FaHospital />, label: "Department", value: formData.department },
    { icon: <FaUserMd />, label: "Specialist", value: formData.specialist },
    {
      icon: <FaNotesMedical />,
      label: "Reason for Visit",
      value: formData.reason || "Not provided",
    },
  ];

  const steps = [
    {
      step: "STEP 01",
      icon: <FaUser />,
      title: "Share Your Details",
      desc: "Enter your basic information and select the care department that matches your needs.",
    },
    {
      step: "STEP 02",
      icon: <FaCalendarAlt />,
      title: "Choose Schedule",
      desc: "Pick a preferred date and time slot that fits comfortably with your routine.",
    },
    {
      step: "STEP 03",
      icon: <FaEnvelopeOpenText />,
      title: "Get Confirmation",
      desc: "Receive appointment details directly on your email or phone within a few minutes.",
    },
    {
      step: "STEP 04",
      icon: <FaWaveSquare />,
      title: "Visit Clinic",
      desc: "Arrive at the clinic and meet our specialist for personalized medical consultation.",
    },
  ];

  const benefits = [
    {
      icon: <FaRegCalendarCheck />,
      title: "Flexible Scheduling",
      desc: "Choose from multiple appointment slots available across departments.",
    },
    {
      icon: <FaStopwatch />,
      title: "Fast Response",
      desc: "Our team confirms your appointment within 15 minutes after submission.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Doctors",
      desc: "Consult with certified medical experts across multiple specialties.",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#f3f3f3] py-16 md:pt-42 px-4">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 text-gray-500 text-lg md:text-xl mb-3">
            <FaHome className="text-gray-500 text-base" />
            <span onClick={() => navigate("/")} className=" cursor-pointer">
              Home
            </span>
            <span>/</span>
            <span className="text-[#0ea5e9]">Appointment</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Appointment
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div
            data-aos="fade-up"
            className="bg-white border border-gray-200 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden"
          >
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-7 border-b md:border-b-0 lg:border-r last:border-r-0 border-gray-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                    {item.step}
                  </span>

                  <div className="w-11 h-11 rounded-lg bg-gray-100 text-[#0ea5e9] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#16345d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.15fr_0.8fr] gap-8 items-start">
            <div
              data-aos="fade-right"
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-9"
            >
              <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                BOOKING FORM
              </span>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#16345d]">
                Schedule Your Visit
              </h2>

              <p className="mt-3 text-gray-500 text-lg">
                Fill out the details below and our team will confirm your
                appointment within 15 minutes.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 pt-8 border-t border-gray-200 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jordan Reeves"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      We'll text appointment reminders.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    >
                      <option>Choose department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>Orthopedics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Specialist
                    </label>
                    <select
                      name="specialist"
                      value={formData.specialist}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      required
                    >
                      <option>Choose specialist</option>
                      <option>Dr. Aisha Verma</option>
                      <option>Dr. Rohan Mehta</option>
                      <option>Dr. Priya Sharma</option>
                      <option>Dr. Kabir Sinha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-[#16345d] font-bold">
                      Reason for Visit
                    </label>
                    <span className="text-gray-400">Optional</span>
                  </div>

                  <textarea
                    rows="6"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Briefly describe your symptoms or concern..."
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
                  ></textarea>
                </div>

                <div className="pt-7 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-md font-bold flex items-center justify-center gap-2 transition"
                  >
                    <FaRegCalendarCheck />
                    Confirm Appointment
                  </button>

                  <button
                    type="reset"
                    onClick={handleReset}
                    className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-7 py-3 rounded-md font-bold transition"
                  >
                    Reset Fields
                  </button>
                </div>
              </form>

            </div>
              {showModel && (
                <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
                  <div
                    data-aos="zoom-in"
                    className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
                  >
                    <div className="bg-[#0ea5e9] text-white p-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl md:text-2xl font-bold">
                          Appointment Confirmed
                        </h2>
                        <p className="text-white/90 mt-1">
                          Please review your appointment details below.
                        </p>
                      </div>

                      <button
                        onClick={() => setShowModel(false)}
                        className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer"
                      >
                        <FaTimes />
                      </button>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {fields.map((item, index) => (
                          <div
                            key={index}
                            className={`border border-gray-200 rounded-xl p-5 bg-[#f8fafc] ${
                              item.label === "Reason for Visit"
                                ? "md:col-span-2"
                                : ""
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-11 h-11 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
                                {item.icon}
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm font-bold uppercase">
                                  {item.label}
                                </p>
                                <h4 className="text-[#16345d] font-bold mt-1 break-words">
                                  {item.value}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-end">
                        <button
                          onClick={() => setShowModel(false)}
                          className="border border-gray-300 text-[#16345d] px-7 py-3 rounded-full cursor-pointer font-bold hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                        >
                          Edit Details
                        </button>

                        <button
                          onClick={() => {
                            setShowModel(false);
                            handleReset();
                          }}
                          className="bg-[#0ea5e9] text-white px-7 py-3 rounded-full cursor-pointer font-bold hover:bg-[#0284c7]"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            <div data-aos="fade-left" className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-7">
                <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                  ABOUT BOOKING
                </span>

                <h3 className="mt-5 text-2xl md:text-3xl font-bold text-[#16345d]">
                  Quick & Easy Online Booking
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  Reserve your consultation in a few simple steps. Our medical
                  team is ready to provide care tailored to your needs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="p-7 flex gap-5 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#16345d]">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 mt-2 leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-xl p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0ea5e9] text-white flex items-center justify-center text-2xl">
                    <FaPhoneAlt />
                  </div>

                  <span className="bg-white border border-[#0ea5e9]/30 text-[#0ea5e9] px-4 py-2 rounded-full text-sm font-bold">
                    24/7 HOTLINE
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#16345d]">
                  Need Urgent Care?
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  For immediate medical help, contact our emergency response
                  team any time.
                </p>

                <a
                  href="tel:+15559114567"
                  className="inline-block mt-6 bg-white border border-[#0ea5e9]/20 text-[#0ea5e9] px-6 py-3 rounded-md text-2xl font-bold"
                >
                  +1 (555) 911-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
