import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaDownload,
  FaSearch,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaStar,
  FaUserMd,
  FaHome,
  FaCheckCircle,
  FaRegStar,
} from "react-icons/fa";

const Doctors = () => {
  const [activeTab, setActiveTab] = useState("Bio");
  const [activeCategory, setActiveCategory] = useState("All");

  const doctors = [
    {
      name: "Dr. Amelia Brooks",
      role: "Cardiologist",
      img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
      tag: "Cardiology",
      degree: "MD, FACC",
      location: "Downtown",
    },
    {
      name: "Dr. Noah Turner",
      role: "Pediatrician",
      img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
      tag: "Pediatrics",
      degree: "DO",
      location: "Westside",
    },
    {
      name: "Dr. Sofia Bennett",
      role: "Dermatologist",
      img: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg",
      tag: "Dermatology",
      degree: "MBBS, MD",
      location: "Riverside",
    },
    {
      name: "Dr. Ethan Cole",
      role: "Orthopedic Surgeon",
      img: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      tag: "Orthopedics",
      degree: "MS, FRCS",
      location: "Downtown",
    },
    {
      name: "Dr. Maya Patel",
      role: "Interventional Cardiologist",
      img: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg",
      tag: "Cardiology",
      degree: "MD",
      location: "Westside",
    },
    {
      name: "Dr. Oliver Hayes",
      role: "Pediatric Specialist",
      img: "https://images.pexels.com/photos/5452206/pexels-photo-5452206.jpeg",
      tag: "Pediatrics",
      degree: "MD",
      location: "Riverside",
    },
  ];

  const schedule = [
    ["Monday", "9:00 AM — 1:00 PM"],
    ["Tuesday", "12:00 PM — 6:00 PM"],
    ["Wednesday", "9:00 AM — 3:00 PM"],
    ["Thursday", "10:00 AM — 4:00 PM"],
    ["Friday", "Closed"],
  ];

  const categories = [
    "All",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Orthopedics",
  ];

  const filterdDoctors =
    activeCategory === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.tag === activeCategory);

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
            <span className="text-[#0ea5e9]">Doctors</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Doctors
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
            className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] shadow-sm"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
                alt="Featured Doctor"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />

              <span className="absolute top-5 left-5 bg-white rounded-full px-4 py-2 text-xs font-bold text-[#16345d]">
                ● Available This Week
              </span>
            </div>

            <div className="p-4 md:p-8 flex flex-col justify-center">
              <p className="text-[#0ea5e9] text-xs font-bold tracking-widest uppercase">
                Featured Specialist • General Surgery
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#16345d]">
                Dr. Natalia Rivera
              </h1>

              <p className="mt-2 text-gray-500">MD, FACS — Chief Surgeon</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {["Chief Surgeon", "12+ Years", "Board Certified"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="bg-[#0ea5e9]/10 text-[#16345d] border border-[#0ea5e9]/20 px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <p className="mt-6 text-gray-600 leading-7">
                Providing safe surgical care with modern treatment planning,
                compassionate support, and a patient-first approach for faster
                recovery.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 text-[#16345d]">
                <p>🏥 Residency: City Medical Center</p>
                <p>🎓 Fellowship: Advanced Laparoscopy</p>
                <p>📄 14 Peer-reviewed Publications</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-full cursor-pointer font-bold flex items-center justify-center gap-2">
                  <FaCalendarCheck /> Schedule Visit
                </button>

                <button className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-6 py-3 rounded-full cursor-pointer font-bold flex items-center justify-center gap-2">
                  <FaDownload /> Download CV
                </button>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-16">
            <h2 className="text-3xl font-bold text-[#16345d]">
              Browse Our Specialists
            </h2>
            <p className="text-gray-500 mt-2">
              Find the right physician for your care needs.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="mt-6 bg-white border border-gray-200 rounded-lg p-5 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="relative">
              <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Find by name or specialty"
                className="w-full border border-gray-300 rounded-md pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
              />
            </div>

            <select className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]">
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
            </select>

            <select className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]">
              <option>All Branches</option>
              <option>Downtown</option>
              <option>Westside</option>
            </select>

            <button className="bg-[#0ea5e9] text-white rounded-full font-bold hover:bg-[#0284c7] transition">
              Apply Filter
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`px-5 py-2 rounded-full border text-sm font-bold cursor-pointer ${
                  activeCategory === item
                    ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
                    : "bg-white text-[#16345d] border-gray-200 hover:bg-[#0ea5e9] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filterdDoctors.map((doctor, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-[#16345d]">{doctor.name}</h3>
                    <p className="text-gray-500 text-sm">{doctor.role}</p>
                  </div>

                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 px-3 py-1 rounded-full text-xs">
                    {doctor.tag}
                  </span>
                </div>

                <p className="mt-6 text-gray-600 leading-6">
                  Trusted specialist delivering accurate diagnosis, supportive
                  treatment, and clear patient communication.
                </p>

                <div className="mt-5 flex gap-5 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <FaGraduationCap /> {doctor.degree}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {doctor.location}
                  </span>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                  <span className="bg-gray-50 border border-gray-200 text-[#16345d] px-3 py-1 rounded-full text-xs font-bold">
                    {doctor.tag}
                  </span>

                  <div className="flex gap-2">
                    <button className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-4 py-2 rounded-md font-bold text-sm">
                      Profile
                    </button>
                    <button className="bg-[#0ea5e9] text-white px-4 py-2 rounded-md font-bold text-sm">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-14 bg-white border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-xl font-bold text-[#16345d]">Quick Roster</h3>
              <p className="text-gray-400 text-sm">
                Tap avatar to view profile
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:bg-gray-100 rounded-md px-3 py-2.5"
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-md font-bold text-[#16345d]">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-gray-400 uppercase">
                      {doctor.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-14 bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[0.55fr_1fr]"
          >
            <div>
              <img
                src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
                alt="Doctor"
                className="w-full h-[300px] object-cover"
              />

              <div className="p-6 bg-gray-100">
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                  Specialist Profile
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#16345d]">
                  Dr. Henry James
                </h3>
                <p className="text-gray-500">Oncology — MBBS, MD</p>

                <div className="mt-5 flex gap-3">
                  <span className="bg-[#0ea5e9]/10 text-[#16345d] px-3 py-1 rounded-full text-xs">
                    Board Certified
                  </span>
                  <span className="bg-[#0ea5e9]/10 text-[#16345d] px-3 py-1 rounded-full text-xs">
                    8 Years
                  </span>
                </div>

                <div className="mt-6 pt-5 border-t grid grid-cols-3 text-center">
                  <div>
                    <h4 className="font-bold text-[#16345d]">4.5</h4>
                    <p className="text-xs text-gray-400">RATING</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16345d]">320+</h4>
                    <p className="text-xs text-gray-400">PATIENTS</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16345d]">14</h4>
                    <p className="text-xs text-gray-400">PAPERS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="inline-flex border border-gray-200 rounded-md overflow-hidden">
                {["Bio", "Schedule", "Reviews"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`px-6 py-3 text-sm font-bold cursor-pointer ${
                      activeTab === item
                        ? "bg-white text-[#16345d]"
                        : "bg-gray-50 text-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {activeTab === "Bio" && (
                <div data-aos="fade-up" className="mt-10">
                  <p className="text-gray-600 text-lg leading-10">
                    Dr. Henry James is a highly experienced oncology specialist
                    dedicated to compassionate patient care, modern treatment
                    planning, and evidence-based medicine. He focuses on
                    improving patient outcomes through advanced therapies and
                    personalized healthcare support.
                  </p>

                  <div className="mt-10 space-y-6">
                    {[
                      "Special interest in immunotherapy",
                      "Member of ASCO",
                      "Community outreach programs",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-5">
                        <FaCheckCircle className="text-[#0ea5e9] text-xl" />

                        <span className="text-xl text-[#16345d] font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Schedule" && (
                <div data-aos="fade-up" className="mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 flex justify-between items-center hover:border-[#0ea5e9] transition"
                      >
                        <span className="font-bold text-[#16345d] text-lg">
                          {item[0]}
                        </span>

                        <span className="text-gray-500 text-lg">{item[1]}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 bg-[#0ea5e9] hover:bg-[#0284c7] transition text-white px-8 py-4 rounded-xl font-bold">
                    Reserve a Slot
                  </button>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div
                  data-aos="fade-up"
                  className="mt-10 border border-gray-200 rounded-2xl p-4 bg-white"
                >
                  <div className="flex flex-wrap items-center gap-3 text-[#0ea5e9]">
                    <FaStar className="text-xl" />
                    <FaStar className="text-xl" />
                    <FaStar className="text-xl" />
                    <FaStar className="text-xl" />
                    <FaRegStar className="text-xl" />

                    <span className="text-xl text-gray-500 ml-3">
                      4.5 / 5 — based on 32 reviews
                    </span>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="text-xl text-gray-600 leading-8">
                      Patients appreciate Dr. Henry James for his calm approach,
                      detailed consultation, and excellent treatment guidance.
                      He ensures every patient feels comfortable and informed
                      throughout the recovery journey.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
