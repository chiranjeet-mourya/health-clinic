import React from "react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaFlask,
  FaAmbulance,
  FaFemale,
  FaTint,
  FaCheck,
  FaArrowRight,
  FaPhoneAlt,
  FaRegCalendarCheck,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MedicalServices = () => {

   const navigate = useNavigate();

  const services = [
    {
      icon: <FaHeartbeat />,
      tag: "Primary Care",
      title: "Family Health Checkups",
      desc: "Complete wellness checkups, regular monitoring, and preventive care plans for every family member.",
      points: [
        "Routine Monitoring",
        "Wellness Planning",
        "Preventive Screening",
      ],
      button: "Reserve a Slot",
    },
    {
      icon: <FaHeartbeat />,
      tag: "Specialty",
      title: "Advanced Cardiology Care",
      desc: "Heart diagnosis, ECG, cardiac imaging, and recovery programs managed by experienced specialists.",
      points: ["Cardiac Surgery", "ECG & Imaging", "Recovery Programs"],
      button: "Reserve Consultation",
      popular: true,
    },
    {
      icon: <FaFlask />,
      tag: "Diagnostics",
      title: "Modern Lab Testing",
      desc: "Accurate laboratory testing with fast sample collection, verified reports, and digital results.",
      points: ["Blood Test Panels", "Pathology Review", "Same-Day Reports"],
      button: "Order Test Panel",
    },
    {
      icon: <FaShieldAlt />,
      tag: "Emergency",
      title: "Emergency Care Unit",
      desc: "Fast emergency response with trauma support, critical care beds, and urgent medical assistance.",
      points: ["Trauma Intake", "Critical Care Bay", "Rapid Surgery Team"],
      button: "Dial Emergency",
      emergency: true,
    },
    {
      icon: <FaFemale />,
      tag: "Women Care",
      title: "Women & Maternity Care",
      desc: "Prenatal checkups, pregnancy care, birth support, and postnatal guidance from expert doctors.",
      points: ["Pregnancy Care", "Birth Support", "Family Counselling"],
      button: "Discover More",
    },
    {
      icon: <FaTint />,
      tag: "Prevention",
      title: "Vaccination Programs",
      desc: "Immunization plans for children, adults, seasonal protection, and travel vaccine guidance.",
      points: ["Travel Vaccines", "Seasonal Shots", "Pediatric Coverage"],
      button: "Plan Visit",
    },
  ];

  const stats = [
    { label: "PATIENTS", value: "30K+", desc: "Across our network" },
    { label: "SPECIALISTS", value: "180+", desc: "Board certified" },
    { label: "DEPARTMENTS", value: "24", desc: "Active care units" },
    { label: "COVERAGE", value: "24/7", desc: "Always available" },
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
            <span className="text-[#0ea5e9]">Services</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Services
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
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-gray-200 pb-7"
          >
            <div>
              <p className="text-[#0ea5e9] text-sm font-bold tracking-widest uppercase">
                Medical Services
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16345d]">
                Complete Healthcare Programs
              </h2>
            </div>

            <span className="w-fit bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
              ● All care units available
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`bg-white border rounded-xl p-6 md:p-7 shadow-sm hover:shadow-lg transition flex flex-col ${
                  item.popular
                    ? "border-[#0ea5e9]"
                    : item.emergency
                      ? "border-l-4 border-l-red-500 border-gray-200"
                      : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                      {item.icon}
                    </div>

                    <span className="bg-gray-100 border border-gray-200 text-[#16345d] px-3 py-1 rounded-full text-xs font-bold">
                      {item.tag}
                    </span>
                  </div>

                  {item.popular && (
                    <span className="bg-[#0ea5e9] text-white px-3 py-1 rounded-md text-xs font-bold">
                      POPULAR
                    </span>
                  )}

                  {item.emergency && (
                    <span className="bg-red-100 text-red-600 border border-red-300 px-3 py-1 rounded-md text-xs font-bold">
                      ● 24 / 7 LIVE
                    </span>
                  )}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#16345d]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500 leading-7">{item.desc}</p>

                <div className="mt-6 space-y-3 flex-1">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-[#16345d] text-sm"
                    >
                      <FaCheck className="text-[#0ea5e9]" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-gray-200">
                  <button
                    className={`w-full px-5 py-3 rounded-full cursor-pointer font-bold flex items-center justify-center gap-2 transition ${
                      item.emergency
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : item.popular
                          ? "bg-[#0ea5e9] hover:bg-[#0284c7] text-white"
                          : "border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d]"
                    }`}
                  >
                    {item.emergency && <FaPhoneAlt />}
                    {item.button}
                    {!item.emergency && <FaArrowRight />}
                  </button>
                </div>
              </div>
            ))}
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
                  {item.label}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-[#16345d]">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-14 bg-[#0ea5e9] rounded-xl p-4 md:p-8 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-lg"
          >
            <div>
              <span className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-4 py-2 rounded-full text-sm font-bold">
                <FaRegCalendarCheck />
                Book in seconds
              </span>

              <h2 className="mt-4 text-xl md:text-3xl font-bold">
                Need Medical Support Today?
              </h2>

              <p className="mt-4 max-w-2xl text-white/90 leading-7">
                Connect with our medical specialists and get qualified care,
                appointment support, and trusted health guidance without delay.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=> navigate("/appointment")} className="bg-white text-[#0ea5e9] px-7 py-3 rounded-full cursor-pointer font-bold">
                Reserve Appointment
              </button>

              <a
                href="tel:+15552468910"
                className="border border-white/40 px-7 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-[#0ea5e9] transition"
              >
                <FaPhoneAlt />
                +1 (555) 246-8910
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalServices;
