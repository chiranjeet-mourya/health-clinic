import React from "react";
import { FaHome, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Cardiology Patient",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "MediCare made my treatment journey smooth and stress-free. The doctors explained everything clearly and the support team was always helpful.",
    },
    {
      name: "Neha Kapoor",
      role: "Patient Guardian",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The appointment process was quick, the staff was professional, and the doctor gave us complete guidance with great care.",
    },
    {
      name: "Rohan Mehta",
      role: "Health Checkup Patient",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "I booked a full body checkup online and received reports on time. The overall experience was clean, fast, and very reliable.",
    },
    {
      name: "Priya Verma",
      role: "Pediatric Care",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "The pediatric team treated my child with patience and kindness. The environment felt safe and comfortable from start to finish.",
    },
    {
      name: "Sameer Khan",
      role: "Emergency Patient",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "Their emergency response was fast and well-managed. The medical team handled everything professionally during a critical time.",
    },
    {
      name: "Ananya Singh",
      role: "Dermatology Patient",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      text: "I received excellent skin care consultation and follow-up support. The treatment plan was simple, effective, and easy to follow.",
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
            <span className="text-[#0ea5e9]">Testimonials</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Testimonials
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-10 px-4">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-5 py-2 rounded-full text-sm font-bold">
              TESTIMONIALS
            </span>

            <h2 className="mt-5 text-2xl md:text-4xl font-bold text-[#16345d]">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {reviews.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-md font-bold">
                    VERIFIED
                  </span>

                  <div className="flex text-yellow-500 text-xl gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <p className="mt-8 text-gray-600 text-md leading-7">
                  {item.text}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-[#16345d]">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-md">{item.role}</p>
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

export default Testimonials;
