import React from "react";
import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaHeartbeat,
  FaWaveSquare,
  FaNotesMedical,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MedicineCare = () => {

  const navigate = useNavigate();

  const stats = [
    { title: "YEARS OF CARE", value: "30+", desc: "Trusted since 1995" },
    { title: "PATIENTS HELPED", value: "25K+", desc: "Across all units" },
    { title: "EXPERT DOCTORS", value: "80+", desc: "Certified specialists" },
    { title: "URGENT SUPPORT", value: "24/7", desc: "Always available" },
  ];

  const cards = [
    {
      icon: <FaHeartbeat />,
      title: "Heart Health",
      desc: "Complete heart screening, ECG monitoring, blood pressure care, and expert cardiac guidance.",
    },
    {
      icon: <FaWaveSquare />,
      title: "Neuro Care",
      desc: "Advanced support for brain, spine, nerve pain, headache, and neurological conditions.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Health Checkups",
      desc: "Preventive screenings, lifestyle counselling, and regular health assessments for every age.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6f8] py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm"
        >
          <div className="p-7 md:p-8">
            <span className="inline-flex items-center gap-2 border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 text-[#0ea5e9] px-4 py-2 rounded-full text-xs font-bold tracking-wide">
              <FaShieldAlt />
              TRUSTED MEDICAL PROVIDER
            </span>

            <h1 className="mt-8 text-2xl md:text-4xl font-bold leading-tight text-[#16345d]">
              Advanced Care With a Human Touch
            </h1>

            <p className="mt-6 text-gray-500 text-base md:text-lg leading-8 max-w-xl">
              Get reliable healthcare supported by experienced doctors, modern
              treatment facilities, and a patient-first approach designed for
              your complete wellness.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={()=>navigate("/appointment")} className="bg-[#0ea5e9] hover:bg-[#0284c7] cursor-pointer text-white px-7 py-3 rounded-full font-bold transition">
                Book an Appointment
              </button>

              <button className="text-[#16345d] hover:text-[#0ea5e9] hover:bg-gray-100 rounded-full cursor-pointer px-5 py-3 font-bold flex items-center gap-2 transition">
                Explore Services <FaArrowRight />
              </button>
            </div>

            <div className="mt-10 pt-7 border-t border-gray-200 flex flex-wrap gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#0ea5e9]" />
                NABH Standard
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-[#0ea5e9]" />
                24/7 Emergency
              </div>

              <div className="flex items-center gap-2">
                <FaUsers className="text-[#0ea5e9]" />
                Expert Team
              </div>
            </div>
          </div>

          <div className="min-h-[360px]">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
              alt="Modern Hospital"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-14 bg-white border border-gray-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-7 md:p-8 border-b sm:border-b-0 lg:border-r last:border-r-0 border-gray-200"
            >
              <p className="text-gray-400 text-xs font-bold tracking-widest">
                {item.title}
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#16345d]">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-16">
          <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
            Specialties
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16345d]">
            Care designed around your health goals
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-lg flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <span className="bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold">
                  ACTIVE
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#16345d]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-6">{item.desc}</p>

              <div className="mt-8 pt-5 border-t border-gray-200">
                <button className="text-[#0ea5e9] font-bold flex items-center gap-2 cursor-pointer">
                  View Department <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="mt-14 bg-[#0ea5e9] rounded-xl p-4 md:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-white"
        >
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-2xl shrink-0">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-white/80 text-xs font-bold tracking-widest">
                ON-CALL SUPPORT
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Need medical guidance right now?
              </h3>

              <p className="mt-2 text-white/90 max-w-xl">
                Speak directly with our care team or schedule a same-day
                consultation with an experienced specialist.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15557890123"
              className="bg-white text-[#0ea5e9] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <FaPhoneAlt /> +1 (555) 789-0123
            </a>

            <button className="border border-white cursor-pointer text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#0ea5e9] transition">
              Plan a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineCare;