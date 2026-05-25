import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaExternalLinkAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "OFFICE LOCATION",
      lines: ["Sector 62, Noida Uttar Pradesh, India"],
    },
    {
      icon: <FaPhoneAlt />,
      title: "PHONE NUMBERS",
      lines: ["+91 9999999999, +91 9999999999"],
    },
    {
      icon: <FaEnvelope />,
      title: "EMAIL ADDRESS",
      lines: ["contact@medicalcare.com, support@medicalcare.com"],
    },
    {
      icon: <FaClock />,
      title: "WORKING HOURS",
      lines: ["Mon - Fri: 9:00 - 18:00, Sat: 10:00 - 14:00"],
    },
  ];

  const socials = [
    <FaTwitter />,
    <FaFacebookF />,
    <FaInstagram />,
    <FaLinkedinIn />,
    <FaYoutube />,
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
            <span className="text-[#0ea5e9]">Contact</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Contact
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.05fr] gap-8">
          <div
            data-aos="fade-right"
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col"
          >
            <div>
              <span className="inline-block bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-full text-sm font-bold">
                GET IN TOUCH
              </span>

              <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#16345d]">
                Reach Out to Our Medical Team
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Have questions about appointments, departments, doctors, or
                treatment support? Our team will respond as soon as possible.
              </p>
            </div>

            <div className="mt-12 space-y-7">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 border-b border-gray-200 pb-7 last:border-b-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-gray-400 text-sm font-bold tracking-wide">
                      {item.title}
                    </h4>

                    {item.lines.map((line, i) => (
                      <p key={i} className="text-[#16345d] font-semibold mt-2">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-gray-200">
              <h4 className="text-gray-400 text-sm font-bold tracking-wide">
                FOLLOW US
              </h4>

              <div className="flex flex-wrap gap-3 mt-5">
                {socials.map((icon, index) => (
                  <button
                    key={index}
                    className="w-11 h-11 rounded-md border border-gray-200 text-gray-500 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition flex items-center justify-center cursor-pointer"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              data-aos="fade-left"
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6"
            >
              <h2 className="text-xl md:text-3xl font-bold text-[#16345d]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-gray-500 text-lg">
                Fill out the form below and our team will get back to you
                shortly.
              </p>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#16345d] font-bold mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#16345d] font-bold mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#16345d] font-bold mb-3">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      placeholder="Type your message here..."
                      className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9] resize-none"
                    ></textarea>

                    <p className="text-gray-400 text-sm mt-2">
                      Minimum 20 characters. We respect your privacy.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-full cursor-pointer font-bold flex items-center gap-3 transition"
                  >
                    Submit Inquiry <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[320px]"
            >
              <iframe
                title="MedicalCare Location"
                src="https://www.google.com/maps?q=Noida%20Sector%2062&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Noida%20Sector%2062"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 left-4 bg-white text-[#0ea5e9] px-4 py-2 rounded-md font-bold shadow flex items-center gap-2"
              >
                Open in Maps <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
