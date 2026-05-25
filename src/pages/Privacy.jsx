import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaInfoCircle,
  FaDatabase,
  FaChartPie,
  FaShareAlt,
  FaShieldAlt,
  FaUserLock,
  FaSyncAlt,
  FaCheckCircle,
  FaLock,
  FaUsers,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const Privacy = () => {
  const navTabs = [
    { icon: <FaInfoCircle />, name: "Overview" },
    { icon: <FaDatabase />, name: "Data Collection" },
    { icon: <FaChartPie />, name: "Data Usage" },
    { icon: <FaShareAlt />, name: "Sharing" },
    { icon: <FaShieldAlt />, name: "Security" },
    { icon: <FaUserLock />, name: "Your Rights" },
  ];

  const sections = [
    {
      icon: <FaInfoCircle />,
      title: "Privacy Overview",
      desc: "At MediCare, your privacy is important to us. We protect your personal and medical information with care, transparency, and strict security practices.",
      extra:
        "This policy explains how we collect, use, store, and protect information when you use our website, appointment forms, contact forms, or healthcare services.",
    },
    {
      icon: <FaDatabase />,
      title: "Information We Collect",
      desc: "We collect only the information required to provide healthcare support, appointment booking, communication, and service improvement.",
      cards: [
        {
          title: "Information You Provide",
          points: [
            "Full name and contact details",
            "Appointment and department preferences",
            "Messages submitted through contact forms",
            "Basic health concerns shared voluntarily",
          ],
        },
        {
          title: "Automatic Information",
          points: [
            "Device and browser details",
            "Website usage and page activity",
            "Location data only when permitted",
            "Cookies and preference settings",
          ],
        },
      ],
    },
    {
      icon: <FaChartPie />,
      title: "How We Use Your Data",
      desc: "Your information helps us provide better healthcare support, faster communication, and safer digital experiences.",
      list: [
        "Schedule and confirm appointments",
        "Send reminders and service updates",
        "Respond to contact or support requests",
        "Improve website performance and user experience",
        "Maintain patient safety and service records",
      ],
    },
    {
      icon: <FaShareAlt />,
      title: "Data Sharing Practices",
      desc: "We do not sell your personal data. Information is shared only when needed for service delivery, legal compliance, or patient safety.",
      cards: [
        {
          title: "With Your Permission",
          points: [
            "Sharing reports with selected doctors",
            "Sending appointment updates to your contact details",
            "Processing requests submitted by you",
          ],
        },
        {
          title: "For Legal & Safety Needs",
          points: [
            "Complying with applicable regulations",
            "Preventing misuse or harmful activity",
            "Protecting patient and platform security",
          ],
        },
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Information Protection",
      desc: "We use secure systems, limited access controls, and technical safeguards to reduce unauthorized access, misuse, or disclosure.",
      list: [
        "Secure form handling and encrypted connections",
        "Restricted access to sensitive information",
        "Regular review of data protection practices",
      ],
    },
    {
      icon: <FaUserLock />,
      title: "Your Privacy Rights",
      desc: "You may request access, correction, or removal of your information based on applicable rules and service requirements.",
      list: [
        "Request a copy of your stored information",
        "Correct inaccurate contact details",
        "Request deletion of eligible data",
        "Limit non-essential communication",
      ],
    },
    {
      icon: <FaSyncAlt />,
      title: "Policy Updates",
      desc: "We may update this privacy policy when our services, legal obligations, or security practices change.",
      extra:
        "Any updated policy will be published on this page. Continued use of our website means you accept the latest privacy terms.",
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
            <span className="text-[#0ea5e9]">Privacy</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Privacy
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
          <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] px-5 py-2 rounded-full text-sm font-bold">
            Effective Date: March 15, 2026
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#16345d]">
            Privacy Policy
          </h1>

          <p className="mt-5 text-gray-500 leading-7 max-w-2xl mx-auto">
            Learn how MediCare collects, protects, and manages your information
            while you use our healthcare website and online services.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mt-10 border-y border-gray-200 py-5 overflow-x-auto no-scrollbar"
        >
          <div className="flex items-center justify-center gap-3 min-w-max">
            {navTabs.map((item, index) => (
              <button
                key={index}
                className="bg-white border border-gray-200 text-gray-500 hover:text-[#0ea5e9] hover:border-[#0ea5e9] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 space-y-7">
          {sections.map((section, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-9"
            >
              <div className="flex items-start gap-5">
                <span className="text-[#0ea5e9]/20 text-3xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-11 h-11 rounded-xl bg-[#0ea5e9] text-white flex items-center justify-center shrink-0">
                  {section.icon}
                </div>
              </div>

              <div className="mt-6 md:ml-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#16345d]">
                  {section.title}
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  {section.desc}
                </p>

                {section.extra && (
                  <p className="mt-4 text-gray-600 leading-7">
                    {section.extra}
                  </p>
                )}

                {section.cards && (
                  <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {section.cards.map((card, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-6 bg-[#f8fafc]"
                      >
                        <h3 className="font-bold text-[#16345d] flex items-center gap-2">
                          <FaUsers className="text-[#0ea5e9]" />
                          {card.title}
                        </h3>

                        <ul className="mt-5 space-y-3">
                          {card.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="flex gap-3 text-gray-600"
                            >
                              <span className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2 shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.list.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#f8fafc] rounded-lg p-4 flex items-center gap-3 text-[#16345d]"
                      >
                        <FaCheckCircle className="text-[#0ea5e9] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
    </>
  );
};

export default Privacy;
