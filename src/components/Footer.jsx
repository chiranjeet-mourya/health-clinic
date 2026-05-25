import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#16345d] text-white">
      <div className="container mx-auto py-10 md:px-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold">
              Medi<span className="text-[#0ea5e9]">Care</span>
            </h2>

            <div className="mt-10 space-y-4 text-gray-300 leading-8">
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
              </p>

              <p>
                <span className="font-bold text-white">Phone:</span> +1 5589
                55488 55
              </p>

              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                info@example.com
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold">Useful Links</h3>

            <div className="w-10 h-[3px] bg-[#0ea5e9] mt-4 mb-8"></div>

            <ul className="space-y-5 text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/service-details" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-[#0ea5e9] transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold">Our Services</h3>

            <div className="w-10 h-[3px] bg-[#0ea5e9] mt-4 mb-8"></div>

            <ul className="space-y-5 text-gray-300">
              {[
                { name: "Cardiology", path: "/cardiology" },
                { name: "Neurology", path: "/neurology" },
                { name: "Emergency Care", path: "/emergency-care" },
                { name: "Surgery", path: "/surgery" },
                { name: "Health Checkup", path: "/health-checkup" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-[#0ea5e9] transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold">Healthcare</h3>

            <div className="w-10 h-[3px] bg-[#0ea5e9] mt-4 mb-8"></div>

            <ul className="space-y-5 text-gray-300">
              {[
                { name: "Patient Support", path: "/patient-support" },
                { name: "Appointment", path: "/appointment" },
                { name: "Medical Records", path: "/medical-records" },
                { name: "Emergency Unit", path: "/emergency-unit" },
                { name: "Specialists", path: "/specialists" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-[#0ea5e9] transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold">Resources</h3>

            <div className="w-10 h-[3px] bg-[#0ea5e9] mt-4 mb-8"></div>

            <ul className="space-y-5 text-gray-300">
              {[
                { name: "Doctors", path: "/docters" },
                { name: "Departments", path: "/department" },
                { name: "Health Blogs", path: "/blogs" },
                { name: "FAQs", path: "/faq" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-[#0ea5e9] transition cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#102845] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-0 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-lg">
              © Copyright
              <span className="font-bold text-white">MediCare</span>. All Rights
              Reserved
            </p>

            <p className="mt-3 text-gray-400">
              Designed by
              <span className="text-[#0ea5e9]">Chiranjeet Mourya</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              <FaTwitter />,
              <FaFacebookF />,
              <FaInstagram />,
              <FaLinkedinIn />,
            ].map((icon, index) => (
              <button
                key={index}
                className="w-14 h-14 rounded-lg bg-white/10 hover:bg-[#0ea5e9] transition text-[#0ea5e9] hover:text-white flex items-center justify-center text-2xl"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
