import React from "react";
import {
  FaCheck,
  FaArrowRight,
  FaHeartbeat,
  FaBrain,
  FaCut,
  FaChild,
  FaEye,
  FaCapsules,
  FaHospital,
  FaThLarge,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Departments = () => {

  const navigate = useNavigate();

  const departments = [
    {
      icon: <FaHeartbeat />,
      title: "Heart Care",
      desc: "Complete cardiac care with expert cardiologists, ECG, echo, and advanced heart monitoring.",
      stat1: "18+",
      label1: "Doctors",
      stat2: "700+",
      label2: "Cases",
    },
    {
      icon: <FaBrain />,
      title: "Brain & Nerve Care",
      desc: "Specialized treatment for neurological conditions with modern diagnosis and recovery support.",
      stat1: "10+",
      label1: "Experts",
      stat2: "350+",
      label2: "Treatments",
    },
    {
      icon: <FaCut />,
      title: "Surgery Unit",
      desc: "Safe and advanced surgical care with experienced surgeons and modern operation theatres.",
      stat1: "15+",
      label1: "Surgeons",
      stat2: "1200+",
      label2: "Operations",
    },
    {
      icon: <FaChild />,
      title: "Child Care",
      desc: "Friendly pediatric care for infants, children, and teenagers with regular health checkups.",
      stat1: "12+",
      label1: "Pediatricians",
      stat2: "3K+",
      label2: "Kids Treated",
    },
    {
      icon: <FaEye />,
      title: "Eye Care",
      desc: "Eye testing, vision correction, cataract care, and complete ophthalmology support.",
      stat1: "8+",
      label1: "Eye Doctors",
      stat2: "900+",
      label2: "Eye Tests",
    },
    {
      icon: <FaCapsules />,
      title: "Skin & Allergy",
      desc: "Advanced skin, allergy, acne, hair, and cosmetic treatments with personalized care.",
      stat1: "9+",
      label1: "Dermatologists",
      stat2: "850+",
      label2: "Treatments",
    },
  ];

  return (
    <section className="w-full bg-[#f4f5f6] py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        
        <div
          data-aos="fade-up"
          className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-4 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold">
                ● ACTIVE 24/7
              </span>
              <span className="text-gray-400 text-xs font-bold tracking-widest">
                EMERGENCY MEDICAL UNIT
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-[#16345d] leading-tight">
              Fast Emergency Care When Every Second Matters
            </h2>

            <p className="mt-6 text-gray-500 leading-7 max-w-xl">
              Our emergency team is always ready with quick response, expert
              doctors, ambulance support, and critical care facilities for
              urgent medical situations.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["Quick Patient Assessment", "Initial checkup within minutes"],
                ["Advanced Emergency Support", "Experienced emergency doctors"],
                ["Critical Care Specialists", "ICU-ready treatment assistance"],
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-md bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xs">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16345d]">{item[0]}</h4>
                    <p className="text-sm text-gray-500">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-md font-semibold transition">
                View Emergency Unit
              </button>

              <button className="text-[#16345d] hover:text-[#0ea5e9] px-4 py-3 font-semibold flex items-center gap-2 transition">
                Read Guidelines <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="relative min-h-[380px]">
            <img
              src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg"
              alt="Emergency Response"
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute left-6 right-6 bottom-6 bg-white rounded-xl shadow-lg p-5 grid grid-cols-2 gap-5">
              <div>
                <h3 className="text-2xl font-bold text-[#16345d]">97.5%</h3>
                <p className="text-xs text-gray-400 font-bold tracking-wide">
                  CARE SUCCESS
                </p>
              </div>

              <div className="border-l pl-5">
                <h3 className="text-2xl font-bold text-[#16345d]">10 min</h3>
                <p className="text-xs text-gray-400 font-bold tracking-wide">
                  AVG. RESPONSE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <p className="text-gray-400 text-sm font-bold tracking-widest">
              OUR MEDICAL SPECIALTIES
            </p>
            <h2 className="text-3xl font-bold text-[#16345d] mt-2">
              Explore Care Departments
            </h2>
          </div>

          <button className="border border-gray-300 bg-white hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-6 py-3 rounded-md font-semibold flex items-center gap-3 transition w-fit">
            All Departments <FaThLarge />
          </button>
        </div>

        {/* Department Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {departments.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">
                  Specialty
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#16345d] mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                {item.desc}
              </p>

              <div className="border-t border-gray-200 mt-6 pt-5 flex items-center justify-between">
                <div className="flex gap-8">
                  <div>
                    <h4 className="font-bold text-[#16345d]">{item.stat1}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      {item.label1}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#16345d]">{item.stat2}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      {item.label2}
                    </p>
                  </div>
                </div>

                <button className="w-9 h-9 rounded-md border border-gray-200 hover:bg-[#0ea5e9] hover:text-white transition flex items-center justify-center">
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          className="mt-12 bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center justify-center md:text-left text-center gap-5">
            <div>
              <h3 className="text-xl font-bold text-[#16345d]">
                Find the Right Department for Your Health Needs
              </h3>
              <p className="text-gray-500 mt-2">
                Connect with expert doctors and choose the best care unit for
                your treatment journey.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-md font-semibold transition cursor-pointer">
              Browse Departments
            </button>

            <button onClick={()=> navigate("/appointment")} className="text-[#16345d] hover:text-[#0ea5e9] hover:bg-gray-100 rounded-md px-5 py-3 font-semibold transition cursor-pointer">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;