import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  FaClock,
  FaShieldAlt,
  FaComments,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const FaqPage = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      tag: "APPOINTMENT",
      question: "How can I book an appointment with a doctor?",
      answer:
        "You can book an appointment by selecting your department, preferred doctor, date, and time. Our team will confirm your visit shortly after submission.",
    },
    {
      tag: "BILLING",
      question: "What payment options do you accept?",
      answer:
        "We accept cash, debit cards, credit cards, UPI payments, and selected insurance providers depending on your treatment plan.",
    },
    {
      tag: "ACCOUNT",
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, you can reschedule or cancel your appointment before the confirmed time by contacting our support team.",
    },
    {
      tag: "SECURITY",
      question: "How is my medical data protected?",
      answer:
        "Your medical records are handled securely and shared only with authorized healthcare professionals involved in your care.",
    },
    {
      tag: "REPORTS",
      question: "Can I receive my reports online?",
      answer:
        "Yes, diagnostic reports can be shared digitally through email or patient portal after verification.",
    },
    {
      tag: "SUPPORT",
      question: "Do you provide emergency support?",
      answer:
        "Yes, our emergency support is available 24/7 for urgent medical assistance.",
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
            <span className="text-[#0ea5e9]">Faq</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Frequenty Asked Questions
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.55fr] gap-8">
          {/* Left */}
          <div
            data-aos="fade-right"
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-7 md:p-10 lg:sticky lg:top-32 self-start"
          >
            <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-5 py-2 rounded-full text-sm font-bold">
              HELP CENTER
            </span>

            <h2 className="mt-8 text-xl md:text-3xl font-bold text-[#16345d] leading-tight">
              Common Questions, Clear Answers
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-8">
              Find quick answers about appointments, doctors, reports, billing,
              and emergency support. Our care team is always ready to help.
            </p>

            <div className="my-10 border-t border-gray-200"></div>

            <div className="space-y-7">
              <div className="flex items-center gap-5 text-gray-600 text-lg">
                <FaClock className="text-[#0ea5e9]" />
                Avg. response in 2 hours
              </div>

              <div className="flex items-center gap-5 text-gray-600 text-lg">
                <FaShieldAlt className="text-[#0ea5e9]" />
                Verified by medical experts
              </div>

              <div className="flex items-center gap-5 text-gray-600 text-lg">
                <FaComments className="text-[#0ea5e9]" />
                Live chat available 24/7
              </div>
            </div>

            <button className="mt-12 w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-4 rounded-full cursor-pointer font-bold flex items-center justify-between transition">
              Reach Our Team
              <FaArrowRight />
            </button>
          </div>

          <div data-aos="fade-left" className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`bg-white border rounded-xl shadow-sm overflow-hidden transition-all duration-500 ease-in-out ${
                  active === index
                    ? "border-[#0ea5e9] shadow-md"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-6 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`border px-4 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
                          active === index
                            ? "bg-[#0ea5e9]/10 border-[#0ea5e9]/30 text-[#0ea5e9]"
                            : "bg-gray-100 border-gray-200 text-gray-500"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-md md:text-xl font-bold text-[#16345d]">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      active === index
                        ? "bg-[#0ea5e9] text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {active === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active === index
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-500 text-lg leading-8">
                        {item.answer}
                      </p>
                    </div>
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

export default FaqPage;
