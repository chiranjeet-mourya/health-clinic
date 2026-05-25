import React from "react";
import {
  FaShieldAlt,
  FaAward,
  FaHeartbeat,
  FaStethoscope,
  FaUserNurse,
  FaNotesMedical,
  FaAmbulance,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HealthcareStandards = () => {

  const navigate = useNavigate()

  const stats = [
    { value: "50K+", label: "PATIENTS TREATED" },
    { value: "120+", label: "EXPERT DOCTORS" },
    { value: "25+", label: "MEDICAL DEPARTMENTS" },
    { value: "24/7", label: "EMERGENCY SUPPORT" },
  ];

  const features = [
    {
      icon: <FaStethoscope />,
      title: "Expert Medical Consultation",
      desc: "Get trusted consultation from experienced doctors with personalized treatment plans.",
    },
    {
      icon: <FaUserNurse />,
      title: "Qualified Care Team",
      desc: "Our trained nurses and support staff ensure safe, comfortable, and friendly care.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Digital Health Records",
      desc: "Manage patient history, reports, prescriptions, and appointments in one secure system.",
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency Response",
      desc: "Fast emergency support with critical care access whenever patients need urgent help.",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 text-[#0ea5e9] px-4 py-2 rounded-full text-xs font-bold tracking-wide">
              <FaShieldAlt />
              TRUSTED MEDICAL PARTNER
            </div>

            <h2 className="mt-6 text-3xl lg:text-5xl font-bold leading-tight text-[#16345d]">
              Your Health, Our Priority With Advanced Care
            </h2>
          </div>

          <p
            data-aos="fade-left"
            className="text-gray-500 text-base md:text-lg leading-8 lg:pt-12"
          >
            MediCare provides modern healthcare solutions with expert doctors,
            advanced diagnostics, digital patient records, and compassionate
            care designed to deliver a safe and smooth treatment experience.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mt-14 bg-white border border-gray-200 rounded-lg grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 lg:p-6 border-b sm:border-b-0 lg:border-r last:border-r-0 border-gray-200"
            >
              <h3 className=" text-2xl md:text-4xl font-bold text-[#16345d]">
                {item.value}
              </h3>

              <p className="mt-2 text-xs md:text-sm font-bold tracking-wide text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.2fr] gap-8">
          <div data-aos="fade-right" className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
                alt="Modern Medical Team"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute top-5 left-5 bg-white rounded-full shadow px-4 py-2 text-[#16345d] text-sm font-bold flex items-center gap-2">
                <FaAward className="text-[#0ea5e9]" />
                Certified Care
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
              alt="Doctor Consultation"
              className="w-full h-[170px] md:h-[200px] object-cover rounded-lg"
            />

            <img
              src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
              alt="Medical Support"
              className="w-full h-[170px] md:h-[200px] object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">
            {/* Main Info Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-2xl shrink-0">
                  <FaHeartbeat />
                </div>

                <div>
                  <p className="text-gray-400 text-sm font-bold tracking-wide">
                    PATIENT CARE SYSTEM
                  </p>

                  <h3 className="text-lg md:text-3xl font-bold text-[#16345d] mt-2">
                    Complete Healthcare Support
                  </h3>
                </div>
              </div>

              <p className="text-gray-500 leading-7 mt-6">
                From appointment booking to diagnosis, treatment, recovery, and
                follow-up care, our healthcare system helps patients receive
                reliable medical support at every step.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#16345d]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-500 leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-7 pt-5 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <div onClick={()=> navigate("/about")} className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-full cursor-pointer font-semibold flex items-center justify-center gap-2 transition">
                Explore Our Services
                <FaArrowRight />
              </div>

              <div onClick={()=> navigate("/contact")} className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-7 py-3 rounded-full cursor-pointer font-semibold flex items-center justify-center gap-2 transition">
                <FaPhoneAlt />
                Talk To Doctor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareStandards;