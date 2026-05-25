import React from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaCapsules,
  FaChild,
  FaShieldAlt,
  FaVial,
  FaArrowRight,
} from "react-icons/fa";

const ServicesGrid = () => {

  const services = [
    {
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      tag: "SPECIALTY",
      icon: <FaHeartbeat />,
      title: "Advanced Cardiac Solutions",
      desc: "Comprehensive heart care with modern screening, expert consultation, and personalized cardiac support.",
      number: "01 / SERVICE",
    },
    {
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      tag: "SPECIALTY",
      icon: <FaBrain />,
      title: "Comprehensive Neurology",
      desc: "Advanced diagnosis and treatment support for brain, spine, nerve, and neurological disorders.",
      number: "02 / SERVICE",
    },
    {
      image:
        "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg",
      tag: "SPECIALTY",
      icon: <FaCapsules />,
      title: "Orthopedic Procedures",
      desc: "Bone, joint, fracture, sports injury, and mobility care with experienced orthopedic specialists.",
      number: "03 / SERVICE",
    },
    {
      image:
        "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      tag: "SPECIALTY",
      icon: <FaChild />,
      title: "Pediatric Wellness Unit",
      desc: "Friendly child healthcare, routine checkups, vaccination support, and growth monitoring.",
      number: "04 / SERVICE",
      active: true,
    },
    {
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",
      tag: "SPECIALTY",
      icon: <FaShieldAlt />,
      title: "Oncology Treatment Plans",
      desc: "Patient-focused cancer care with screening, therapy planning, treatment support, and recovery guidance.",
      number: "05 / SERVICE",
    },
    {
      image:
        "https://images.pexels.com/photos/3735784/pexels-photo-3735784.jpeg",
      tag: "DIAGNOSTIC",
      icon: <FaVial />,
      title: "Diagnostic Laboratory",
      desc: "Fast and accurate lab testing with digital reports, advanced equipment, and expert analysis.",
      number: "06 / SERVICE",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group grid grid-cols-1 md:grid-cols-[0.85fr_1.2fr] ${
                item.active ? "border-[#0ea5e9]" : "border-gray-200"
              }`}
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute top-5 left-5 bg-white rounded-full shadow px-4 py-2 text-[#0ea5e9] text-sm font-bold flex items-center gap-2">
                  {item.icon}
                  {item.tag}
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-[#16345d] leading-snug">
                      {item.title}
                    </h3>

                    <span className="text-gray-400 text-sm font-bold tracking-widest whitespace-nowrap">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-500 text-base md:text-lg leading-7">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <button className="text-[#16345d] group-hover:text-[#0ea5e9] font-bold flex items-center gap-3 transition">
                    Explore Details <FaArrowRight />
                  </button>

                  <span className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;