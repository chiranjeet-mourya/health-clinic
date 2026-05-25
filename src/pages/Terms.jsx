import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaBan,
  FaInfoCircle,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

const Terms = () => {
  const navItems = [
    "Acceptance of Terms",
    "Proprietary Rights",
    "Account Management",
    "Restricted Conduct",
    "Warranty Notice",
    "Liability Scope",
    "Hold Harmless",
    "Account Closure",
    "Applicable Law",
    "Policy Updates",
  ];

  const sections = [
    {
      title: "Acceptance of Terms",
      text: "By accessing and using our MedicalCare platform, you agree to follow these service terms, policies, and usage guidelines.",
      note: "These provisions apply to every user who interacts with our healthcare services.",
    },
    {
      title: "Proprietary Rights",
      text: "All website content, designs, service materials, graphics, and platform features remain the property of MedicalCare.",
      list: [
        "All materials are owned by us",
        "Copying or modification is prohibited",
        "Brand usage needs permission",
        "Content is for personal use only",
      ],
    },
    {
      title: "Account Management",
      text: "Users must provide accurate information while booking appointments or creating accounts on our platform.",
      note: "You are responsible for protecting your login details and account activity.",
    },
    {
      title: "Restricted Conduct",
      text: "Our platform must only be used for lawful healthcare-related purposes.",
      danger: [
        "Automated data extraction",
        "Sharing harmful content",
        "Unauthorized access attempts",
        "Bypassing security systems",
      ],
    },
    {
      title: "Warranty Notice",
      text: "MedicalCare provides digital services and content for general support. We do not guarantee uninterrupted access at all times.",
      bullets: [
        "The platform will always meet all expectations",
        "Availability will always be uninterrupted",
        "Every medical outcome can be predicted",
        "All technical issues will be instantly resolved",
      ],
    },
    {
      title: "Liability Scope",
      text: "MedicalCare is not responsible for indirect, incidental, or consequential losses related to platform usage.",
    },
    {
      title: "Hold Harmless",
      text: "You agree to protect and hold MedicalCare harmless from claims related to misuse of the website or services.",
    },
    {
      title: "Account Closure",
      text: "We may suspend or close accounts if users violate these terms or misuse our services.",
    },
    {
      title: "Applicable Law",
      text: "These terms are governed by applicable local laws and healthcare service regulations.",
    },
    {
      title: "Policy Updates",
      text: "We may update these terms whenever required. Continued platform use means you accept the latest version.",
      note: "Please review this page regularly to stay updated with our current policies.",
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
            <span className="text-[#0ea5e9]">Terms</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Terms
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-8">
            <span className="bg-[#0ea5e9] text-white px-5 py-2 rounded-full text-sm font-bold">
              Revised: May 21, 2026
            </span>

            <h1 className="mt-6 text-2xl md:text-4xl font-bold text-[#16345d]">
              Service Agreement
            </h1>

            <p className="mt-4 text-gray-500">
              Kindly review the following terms before accessing or using our
              MedicalCare platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
            <aside
              data-aos="fade-right"
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:sticky lg:top-32 self-start"
            >
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-6">
                Quick Navigation
              </h3>

              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="flex items-center gap-3 text-md text-[#16345d] hover:text-[#0ea5e9] transition"
                    >
                      <FaCheckCircle className="text-[#0ea5e9] text-xs" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Right Content */}
            <div className="space-y-6">
              {sections.map((item, index) => (
                <div
                  id={`section-${index}`}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 scroll-mt-28"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-[#0ea5e9] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-xl md:text-2xl font-bold text-[#16345d]">
                      {item.title}
                    </h2>
                  </div>

                  <p className="mt-6 text-gray-600 leading-7">{item.text}</p>

                  {item.note && (
                    <div className="mt-6 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-lg p-5 flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
                        <FaShieldAlt />
                      </div>
                      <p className="text-gray-600 leading-7">{item.note}</p>
                    </div>
                  )}

                  {item.list && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.list.map((listItem, i) => (
                        <div
                          key={i}
                          className="bg-[#f8fafc] rounded-lg p-4 flex items-center gap-3 text-[#16345d]"
                        >
                          <FaCheckCircle className="text-[#0ea5e9]" />
                          {listItem}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.danger && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.danger.map((dangerItem, i) => (
                        <div
                          key={i}
                          className="bg-red-50 rounded-lg p-4 flex items-center gap-3 text-red-600"
                        >
                          <FaBan />
                          {dangerItem}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.bullets && (
                    <div className="mt-6 bg-gray-50 rounded-lg p-6">
                      <h4 className="font-bold text-[#16345d] mb-4">
                        We make no assurance that:
                      </h4>

                      <ul className="space-y-3">
                        {item.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-600"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div
                data-aos="fade-up"
                className="bg-[#0ea5e9] rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <FaInfoCircle />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Need Clarification on Our Terms?
                    </h3>
                    <p className="text-white/90 mt-2">
                      Our support team is available to help you understand any
                      policy or agreement detail.
                    </p>
                  </div>
                </div>

                <button className="bg-white text-[#0ea5e9] px-7 py-3 rounded-full font-bold flex items-center justify-center gap-2">
                  Reach Our Team <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
