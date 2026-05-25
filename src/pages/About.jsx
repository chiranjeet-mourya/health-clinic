import React from "react";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaHeartbeat,
  FaBrain,
  FaChild,
  FaCut,
  FaNotesMedical,
  FaHospital,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate()

  const values = [
    {
      icon: <FaHeart />,
      tag: "Mission",
      title: "Care that starts with trust",
      desc: "We provide patient-first healthcare with clear communication, expert guidance, and compassionate support.",
    },
    {
      icon: <FaEye />,
      tag: "Vision",
      title: "Building a smarter care future",
      desc: "Our goal is to make modern healthcare more accessible, accurate, and comfortable for every patient.",
    },
    {
      icon: <FaStar />,
      tag: "Promise",
      title: "Safety, dignity, and clarity",
      desc: "Every treatment journey is designed around comfort, transparency, and long-term wellness.",
    },
  ];

  const departments = [
    { icon: <FaHeartbeat />, name: "Cardiology" },
    { icon: <FaBrain />, name: "Neurology" },
    { icon: <FaChild />, name: "Pediatrics" },
    { icon: <FaCut />, name: "Surgery" },
    { icon: <FaNotesMedical />, name: "Oncology" },
    { icon: <FaHospital />, name: "Emergency" },
  ];

  return (
    <>
      <section className="w-full bg-[#f3f3f3] py-16 md:pt-42 px-4">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 text-gray-500 text-lg md:text-xl mb-3">
            <FaHome className="text-gray-500 text-base" />
            <span onClick={()=> navigate("/")} className=" cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-[#0ea5e9]">About</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            About
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Learn more about MediCare, our expert doctors, modern facilities,
            and patient-first healthcare services.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-gray-200 pb-8">
            <div data-aos="fade-right">
              <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                About Our Practice
              </p>

              <h1 className="mt-4 text-3xl lg:text-5xl font-bold leading-12 text-[#16345d]">
                Modern healthcare built around every patient.
              </h1>
            </div>

            <p
              data-aos="fade-left"
              className="text-gray-500 text-base md:text-lg leading-8 lg:pt-14"
            >
              We combine experienced doctors, advanced technology, and
              compassionate service to deliver reliable healthcare that supports
              every patient from consultation to recovery.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.85fr] gap-8">
            <div data-aos="fade-right">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
                  alt="Hospital Room"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                />

                <div className="absolute left-8 bottom-7 bg-white/90 backdrop-blur-md rounded-xl px-5 py-4 shadow-md">
                  <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold mb-2">
                    Accredited Facility
                  </span>

                  <h4 className="text-[#16345d] font-bold">
                    Trusted care with modern facilities
                  </h4>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <img
                  src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg"
                  alt="Doctor"
                  className="w-full h-[190px] object-cover rounded-lg"
                />

                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                  alt="Medical Discussion"
                  className="w-full h-[190px] object-cover rounded-lg"
                />
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm"
            >
              <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                Performance
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#16345d]">
                A reliable partner in complete care delivery
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Our medical teams follow evidence-based practices with modern
                diagnostics, accurate treatment planning, and continuous patient
                support.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  [
                    "24500",
                    "Treatments Completed",
                    "Across primary and specialty programs",
                  ],
                  ["97%", "Positive Feedback", "From verified patient reviews"],
                  [
                    "120+",
                    "Certified Clinicians",
                    "Working across multiple specialties",
                  ],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md p-4 flex items-center gap-6"
                  >
                    <h3 className="text-3xl font-bold text-[#16345d] min-w-[100px]">
                      {item[0]}
                    </h3>

                    <div>
                      <h4 className="font-bold text-[#16345d]">{item[1]}</h4>
                      <p className="text-gray-500 text-sm">{item[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`bg-white border rounded-lg p-7 transition hover:border-[#0ea5e9] ${
                  index === 1 ? "border-gray-200" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#16345d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div data-aos="fade-right">
              <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                Departments
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#16345d]">
                Specialties working together
              </h2>
            </div>

            <p data-aos="fade-left" className="text-gray-500 leading-7">
              Multidisciplinary teams work together so every diagnosis benefits
              from the right expertise at the right moment.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {departments.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-[#0ea5e9] transition"
              >
                <div className="w-10 h-10 rounded-md bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
                  {item.icon}
                </div>

                <h4 className="font-bold text-[#16345d] text-sm">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Accreditation */}
          <div
            data-aos="fade-up"
            className="mt-16 bg-white border border-gray-200 rounded-lg p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.8fr] gap-8 items-center"
          >
            <div>
              <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                Accreditations
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#16345d]">
                Recognized by trusted healthcare review boards
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "HealthPlus",
                "MediTrust",
                "CareMark",
                "SafeCare",
                "ClinicPro",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="h-16 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold text-lg"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
