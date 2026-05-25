import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaHeartbeat,
  FaEye,
  FaShieldAlt,
  FaNotesMedical,
  FaCalendarCheck,
  FaPhoneAlt,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DepartmentDetails = () => {

    const navigate = useNavigate();

  const stats = [
    { label: "SUCCESS RATE", value: "97%" },
    { label: "PATIENTS TREATED", value: "15K+" },
    { label: "SPECIALISTS", value: "42" },
    { label: "YEARS OF CARE", value: "28" },
  ];

  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiac Surgery",
      desc: "Advanced heart procedures with expert surgical care and recovery planning.",
    },
    {
      icon: <FaEye />,
      title: "Diagnostic Imaging",
      desc: "Modern imaging support for accurate diagnosis and faster treatment decisions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Preventive Wellness",
      desc: "Regular heart screening, lifestyle support, and risk prevention programs.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Rehabilitation",
      desc: "Personalized recovery plans after treatment for long-term wellness.",
    },
  ];

  const reasons = [
    "Modern cardiac catheterization lab with advanced monitoring.",
    "High-quality diagnostic imaging including echo and stress testing.",
    "Minimally invasive procedures designed for faster recovery.",
    "Personalized rehabilitation and long-term heart health planning.",
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
            <span className="text-[#0ea5e9]">Department Details</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Department Details
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
            className="bg-white border border-gray-200 rounded-xl p-4 md:p-8 shadow-sm"
          >
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                Cardiology
              </span>
              <span className="bg-green-50 text-green-600 border border-green-200 px-4 py-2 rounded-full text-sm font-bold">
                ● Now Accepting Patients
              </span>
            </div>

            <h1 className="mt-8 text-2xl md:text-5xl font-bold text-[#16345d] leading-tight">
              Advanced Cardiovascular Care Center
            </h1>

            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-3xl">
              Get complete heart care with expert cardiologists, modern
              diagnosis, surgical support, and personalized recovery plans for
              every patient.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={()=> navigate("/appointment")} className="bg-[#0ea5e9] text-white px-7 py-3 rounded-md font-bold flex items-center justify-center gap-2 cursor-pointer">
                <FaCalendarCheck /> Schedule a Visit
              </button>

              <a
                href="tel:+15554329870"
                className="border border-gray-300 text-[#16345d] px-7 py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
              >
                <FaPhoneAlt /> Emergency: +1 (555) 432-9870
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-8 bg-white border border-gray-200 rounded-xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-4 lg:p-7 border-b sm:border-b-0 lg:border-r last:border-r-0 border-gray-200"
              >
                <p className="text-gray-400 text-sm font-bold tracking-wide">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl lg:text-4xl font-bold text-[#16345d]">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
            <div className="space-y-8">
              <div
                data-aos="fade-right"
                className="bg-white border border-gray-200 rounded-xl p-7 md:p-8 shadow-sm"
              >
                <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                  Specialized Services
                </p>

                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-[#16345d]">
                  Care built around the heart
                </h2>

                <p className="mt-4 text-gray-500 leading-7">
                  Our cardiology department provides complete heart care through
                  advanced testing, expert consultation, and recovery-focused
                  treatment programs.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      className="border border-gray-200 rounded-lg p-6 hover:border-[#0ea5e9] hover:shadow-md transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#16345d]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-500 leading-6">
                        {item.desc}
                      </p>

                      <button className="mt-5 text-[#0ea5e9] font-bold flex items-center gap-2">
                        Learn more <FaArrowRight />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="bg-white border border-gray-200 rounded-xl p-7 md:p-8 shadow-sm"
              >
                <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                  Why Choose Us
                </p>

                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-[#16345d]">
                  Expert care you can trust
                </h2>

                <p className="mt-4 text-gray-500 leading-7">
                  We focus on safe treatment, modern equipment, clear guidance,
                  and continuous care before and after every procedure.
                </p>

                <div className="mt-8 space-y-6">
                  {reasons.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-b border-gray-200 pb-5 last:border-b-0"
                    >
                      <div className="w-7 h-7 rounded-md bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
                        <FaCheck />
                      </div>
                      <p className="text-gray-600 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside
              data-aos="fade-left"
              className="space-y-6 lg:sticky lg:top-32 self-start"
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                  alt="Department Tour"
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">
                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 px-4 py-2 rounded-full text-sm font-bold">
                    Department Tour
                  </span>

                  <p className="mt-4 text-gray-500 leading-7">
                    Take a virtual walk through our facility and meet the team
                    behind every heart care procedure.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#16345d]">
                    Department Hours
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Walk-in evaluations available during business hours.
                  </p>
                </div>

                {[
                  ["Mon — Fri", "7:00 AM – 8:00 PM"],
                  ["Saturday", "8:00 AM – 5:00 PM"],
                  ["Sunday", "Emergency Only"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-200 px-6 py-4 flex justify-between gap-4"
                  >
                    <span className="text-gray-500 font-semibold">
                      {item[0]}
                    </span>
                    <span className="text-[#16345d] font-bold">{item[1]}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#16345d]">
                    Quick Links
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Useful resources for patients.
                  </p>
                </div>

                {[
                  "All Cardiology Services",
                  "Meet Our Specialists",
                  "Insurance Information",
                  "Patient Portal",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-200 px-6 py-4 flex justify-between hover:text-[#0ea5e9] cursor-pointer"
                  >
                    <span className="font-bold text-[#16345d]">{item}</span>
                    <span>↗</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentDetails;
