import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaPlayCircle,
  FaStar,
  FaCalendarAlt,
  FaComments,
  FaUserMd,
  FaUsers,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const heroImages = [
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2070&auto=format&fit=crop",
];

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-[#0a5d8f]/70"></div>

      <div className="relative z-10 pt-36 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-semibold">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              ACCREDITED MEDICAL NETWORK
            </div>

            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mt-4">
              Quality Healthcare,
              <br />
              Centered Around
              <br />
              Every Patient
            </h1>

            <p className="text-gray-100 text-base md:text-lg leading-relaxed mt-4 max-w-xl">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia. Donec rutrum congue leo eget malesuada.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-[#0ea5e9] hover:bg-[#0284c7] md:w-fit w-full text-center transition text-white px-8 py-4 rounded-full font-semiboldcursor-pointer">
                Schedule a Visit
              </div>

              <div className="border border-white/30 hover:bg-white/10 md:w-fit w-full text-center transition backdrop-blur-md text-white px-8 py-4 rounded-full cursor-pointer font-semibold flex items-center justify-center gap-3">
                <FaPlayCircle />
                Watch Our Story
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 border-t border-white/20 pt-4 text-white">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-white" />
                Open Slots Today
              </div>

              <div className="flex items-center gap-2">
                <FaComments className="text-white" />
                Speak With Us
              </div>

              <div className="flex items-center gap-2">
                <FaUserMd className="text-white" />
                Patient Login
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div data-aos="fade-left" className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-xl flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm font-semibold">
                    24/7 EMERGENCY HOTLINE
                  </p>

                  <h3 className="text-xl md:text-xl font-bold text-gray-900">
                    +1 (555) 482-7390
                  </h3>
                </div>
              </div>

              <div className="bg-[#0ea5e9] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-xl">
                ↗
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                  32K+
                </h2>
                <p className="text-gray-500 mt-2">Treated Patients</p>
              </div>

              <div className="border-l pl-6">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                  98%
                </h2>
                <p className="text-gray-500 mt-2">Satisfaction Rate</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h4 className="font-bold text-gray-700">4.9 / 5.0</h4>
              </div>

              <p className="text-gray-600 leading-relaxed mt-5">
                "The team went above and beyond. Compassionate, attentive, and
                genuinely caring throughout every step."
              </p>

              <div className="flex items-center gap-4 mt-6 border-t pt-5">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Patient"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-gray-900">Marisol Avery</h4>
                  <p className="text-gray-500 text-sm">Verified Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="container mx-auto mt-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#0ea5e9]/10 text-[#0ea5e9] p-4 rounded-xl">
                <FaStar />
              </div>
              <div>
                <h3 className="text-3xl font-bold">42+</h3>
                <p className="text-gray-500">Years In Service</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#0ea5e9]/10 text-[#0ea5e9] p-4 rounded-xl">
                <FaUsers />
              </div>
              <div>
                <h3 className="text-3xl font-bold">210+</h3>
                <p className="text-gray-500">Board-Certified Doctors</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#0ea5e9]/10 text-[#0ea5e9] p-4 rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-3xl font-bold">18</h3>
                <p className="text-gray-500">Locations Nationwide</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#0ea5e9]/10 text-[#0ea5e9] p-4 rounded-xl">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-3xl font-bold">A+</h3>
                <p className="text-gray-500">Joint Commission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;