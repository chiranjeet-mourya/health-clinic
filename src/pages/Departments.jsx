import React from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaFlask,
  FaAmbulance,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Departments = () => {
  const departments = [
    {
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      badge: "Heart & Vascular",
      icon: <FaHeartbeat />,
      title: "Cardiology",
      department: "DEPARTMENT 01",
      desc: "Advanced cardiac screening, ECG monitoring, and emergency heart care provided by experienced specialists.",
      features: ["24/7 Emergency", "Advanced Diagnostics"],
    },
    {
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      badge: "Brain & Nervous System",
      icon: <FaBrain />,
      title: "Neurology",
      department: "DEPARTMENT 02",
      desc: "Comprehensive neurological treatment for brain, spine, nerve disorders, and migraine conditions.",
      features: ["MRI Available", "Specialist Team"],
    },
    {
      image:
        "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg",
      badge: "Bones & Joints",
      icon: <FaBone />,
      title: "Orthopedics",
      department: "DEPARTMENT 03",
      desc: "Expert orthopedic care for fractures, sports injuries, mobility improvement, and joint replacement.",
      features: ["Sports Medicine", "Joint Replacement"],
    },
    {
      image:
        "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      badge: "Children's Health",
      icon: <FaBaby />,
      title: "Pediatrics",
      department: "DEPARTMENT 04",
      desc: "Friendly child healthcare services with vaccination programs, nutrition support, and wellness checkups.",
      features: ["Child-Friendly", "Vaccination Center"],
    },
    {
      image:
        "https://images.pexels.com/photos/3735784/pexels-photo-3735784.jpeg",
      badge: "Diagnostic Services",
      icon: <FaFlask />,
      title: "Laboratory",
      department: "DEPARTMENT 05",
      desc: "Modern pathology and laboratory testing with fast reporting and accurate digital records.",
      features: ["Quick Results", "Digital Reports"],
    },
    {
      image:
        "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
      badge: "24/7 Critical Care",
      icon: <FaAmbulance />,
      title: "Emergency",
      department: "DEPARTMENT 06",
      desc: "Immediate trauma and emergency response supported by highly trained medical teams and ICU units.",
      features: ["Round-the-Clock", "Trauma Center"],
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
            <span className="text-[#0ea5e9]">Departments</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Departments
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center">
            <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 px-5 py-2 rounded-full text-sm font-bold tracking-wide">
              OUR DEPARTMENTS
            </span>

            <h2 className="mt-6 text-2xl md:text-4xl font-bold text-[#16345d]">
              Specialized Medical Departments
            </h2>

            <p className="mt-4 text-gray-500 text-lg max-w-3xl mx-auto leading-8">
              Explore our expert medical departments delivering trusted
              healthcare, advanced treatments, and patient-focused care
              services.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {departments.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[260px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-5 left-5 bg-white text-[#16345d] px-4 py-2 rounded-full text-sm font-bold shadow">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#16345d]">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm font-bold tracking-wide mt-1">
                        {item.department}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-500 leading-8 text-base flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-4 space-y-4">
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[#16345d] font-semibold"
                      >
                        <FaCheckCircle className="text-[#0ea5e9]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <button className="text-[#16345d] hover:text-[#0ea5e9] font-bold cursor-pointer flex items-center gap-3 transition">
                      Discover More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
