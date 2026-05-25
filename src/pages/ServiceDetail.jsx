import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaCheckCircle,
  FaHeartbeat,
  FaHospital,
  FaShieldAlt,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const included = [
    "Cardiac examinations",
    "Diagnostic imaging",
    "Preventive screening",
    "Cardiac rehabilitation",
    "Emergency intervention",
    "Post-operative monitoring",
  ];

  const programs = [
    {
      icon: <FaHeartbeat />,
      title: "Heart Diagnostics",
      desc: "Advanced ECG, echo, and heart health testing with detailed medical reports.",
      btn: "Reserve Now",
    },
    {
      icon: <FaHospital />,
      title: "Surgical Support",
      desc: "Expert surgical planning and recovery care for complex cardiovascular conditions.",
      btn: "Plan Surgery",
    },
    {
      icon: <FaShieldAlt />,
      title: "Preventive Care",
      desc: "Lifestyle guidance, risk screening, and wellness plans for long-term heart health.",
      btn: "Get Screened",
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
            <span className="text-[#0ea5e9]">Service Details</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Service Details
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.8fr] gap-6">
            <div
              data-aos="fade-right"
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-9 shadow-sm"
            >
              <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                SPECIALTY DEPARTMENT
              </span>

              <h1 className="mt-6 text-2xl md:text-4xl font-bold text-[#16345d]">
                Complete Cardiology Care Solutions
              </h1>

              <p className="mt-4 text-gray-500 text-lg leading-7">
                Precision-driven heart care supported by advanced technology,
                experienced specialists, and a compassionate clinical team.
              </p>

              <p className="mt-6 text-gray-600 leading-7">
                Our cardiology department provides complete diagnosis,
                treatment, rehabilitation, and preventive care for patients with
                heart-related concerns.
              </p>

              <div className="mt-7 border border-gray-200 rounded-lg p-6 bg-[#f8fafc]">
                <p className="text-gray-400 text-sm font-bold uppercase mb-5">
                  What&apos;s Included
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#16345d] font-medium"
                    >
                      <FaCheckCircle className="text-[#0ea5e9]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-6 flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-full cursor-pointer font-bold transition">
                  Reserve Consultation
                </button>

                <button className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] px-7 py-3 rounded-full cursor-pointer font-bold transition">
                  Discover More
                </button>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm min-h-[380px]"
            >
              <img
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                alt="Cardiology Center"
                className="w-full h-full object-cover"
              />

              <div className="absolute left-5 right-5 bottom-5 bg-white rounded-xl p-5 shadow-lg">
                <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-3 py-1 rounded-full text-xs font-bold">
                  DEPARTMENT
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#16345d]">
                  Cardiac Center
                </h3>
              </div>
            </div>
          </div>

          <div className="my-14"></div>

          {/* Programs */}
          <div data-aos="fade-up">
            <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
              CARE MODULES
            </span>

            <h2 className="mt-5 text-xl md:text-3xl font-bold text-[#16345d]">
              Specialized Programs Built Around Your Needs
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-3 py-1 rounded-full text-xs font-bold">
                    AVAILABLE
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#16345d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">{item.desc}</p>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-[#0ea5e9] font-bold flex items-center gap-2">
                    {item.btn} <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="my-12"></div>

          {/* Appointment */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.2fr_0.85fr] shadow-sm">
            <div data-aos="fade-right" className="p-6 md:p-9">
              <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                SCHEDULE YOUR VISIT
              </span>

              <h2 className="mt-5 text-xl md:text-3xl font-bold text-[#16345d]">
                Connect With a Heart Specialist Today
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Our cardiology team welcomes new patients Monday through Friday.
                Same-day appointments are reserved for urgent matters.
              </p>

              <div className="mt-8 space-y-4">
                <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
                    <FaClock />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#16345d]">Office Hours</h4>
                    <p className="text-gray-500">
                      Mon to Fri, 8:00 AM — 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#16345d]">Emergency Line</h4>
                    <p className="text-gray-500">+1 (555) 482-9013</p>
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#16345d]">Location</h4>
                    <p className="text-gray-500">
                      742 Evergreen Terrace, Boston, MA 02101
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-[#f8fafc] border-t lg:border-t-0 lg:border-l border-gray-200 p-6 md:p-9 flex items-center justify-center"
            >
              <div className="w-full max-w-md text-center">
                <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                  BOOK ONLINE
                </span>

                <h3 className="mt-6 text-3xl font-bold text-[#16345d]">
                  Plan Your Appointment
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  Effortless online scheduling with instant confirmation.
                </p>

                <button onClick={()=> navigate("/appointment")} className="mt-8 w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-full cursor-pointer font-bold">
                  Reserve Appointment
                </button>

                <div className="my-6 flex items-center gap-3 text-gray-400">
                  <div className="h-px bg-gray-200 flex-1"></div>
                  OR
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <p className="text-gray-500">Call our team directly</p>
                <a
                  href="tel:+15554829013"
                  className="inline-block mt-2 text-[#0ea5e9] text-xl font-bold"
                >
                  +1 (555) 482-9013
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
