import React from "react";
import {
  FaSearch,
  FaFilter,
  FaStar,
  FaRegHospital,
  FaBriefcaseMedical,
  FaUserMd,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Doctor = () => {

  const navigate = useNavigate();

  const doctors = [
    {
      id: "1",
      name: "Dr. Aisha Verma",
      role: "Senior Heart Specialist",
      img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
      rating: "4.9",
      reviews: "148 reviews",
      tags: ["MD, FACC", "18 yrs", "City Care Hospital"],
      status: "green",
      btn: "Book Consult",
      featured: true,
    },
    {
      id: "2",
      name: "Dr. Rohan Mehta",
      role: "Lead Neurosurgeon",
      img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
      rating: "4.8",
      reviews: "96 reviews",
      tags: ["MD, PhD", "24 yrs", "Metro Hospital"],
      status: "orange",
      btn: "Schedule Visit",
    },
    {
      id: "3",
      name: "Dr. Priya Sharma",
      role: "Child Care Specialist",
      img: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg",
      rating: "5.0",
      reviews: "162 reviews",
      tags: ["MD, FAAP", "12 yrs", "Family Clinic"],
      status: "green",
      btn: "Reserve Slot",
    },
    {
      id: "4",
      name: "Dr. Kabir Sinha",
      role: "Orthopedic Surgeon",
      img: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      rating: "4.7",
      reviews: "132 reviews",
      tags: ["MD, FAAOS", "20 yrs", "Bone Care Unit"],
      status: "gray",
      btn: "Request Visit",
    },
    {
      id: "5",
      name: "Dr. Neha Kapoor",
      role: "Dermatology Specialist",
      img: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg",
      rating: "4.6",
      reviews: "89 reviews",
      tags: ["MD, FAAD", "15 yrs", "Skin Clinic"],
      status: "green",
      btn: "Book Consult",
    },
    {
      id: "6",
      name: "Dr. Sameer Khan",
      role: "Cancer Care Consultant",
      img: "https://images.pexels.com/photos/5452206/pexels-photo-5452206.jpeg",
      rating: "4.9",
      reviews: "214 reviews",
      tags: ["MD, FASCO", "21 yrs", "Oncology Center"],
      status: "green",
      btn: "Set Appointment",
    },
  ];

  const statusColor = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    gray: "bg-gray-400",
  };

  return (
    <section className="w-full bg-[#f8fafc] pb-16 pt-4 px-4">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#16345d]">
            Find A Doctor
          </h2>

          <div className="w-24 h-[3px] bg-[#0ea5e9] mx-auto mt-2"></div>

          <p className="mt-3 text-gray-600 text-lg">
            Choose trusted medical specialists and book your consultation
            easily.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mt-14 bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8"
        >
          <span className="inline-block bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] px-4 py-2 rounded-full text-sm font-bold">
            PROVIDER DIRECTORY
          </span>

          <h3 className="mt-6 text-xl md:text-3xl font-bold text-[#16345d]">
            Find a Specialist That Matches Your Care Needs
          </h3>

          <p className="mt-3 text-gray-500">
            Search doctors by name, specialty, or hospital and book your visit
            in minutes.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.1fr_0.8fr_0.8fr_0.5fr] gap-5">
            <div>
              <label className="block mb-2 text-[#16345d] font-bold text-sm">
                Practitioner
              </label>
              <div className="relative">
                <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type a name"
                  className="w-full border border-gray-300 rounded-md pl-11 pr-4 py-3 outline-none focus:border-[#0ea5e9]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-[#16345d] font-bold text-sm">
                Specialty
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]">
                <option>Any specialty</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#16345d] font-bold text-sm">
                Facility
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#0ea5e9]">
                <option>All facilities</option>
                <option>City Care Hospital</option>
                <option>Metro Hospital</option>
              </select>
            </div>

            <button onClick={()=> navigate("/docters")} className="self-end bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full py-3 font-bold flex items-center justify-center gap-2 transition cursor-pointer">
              <FaFilter />
              Apply
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-gray-200 pb-5"
        >
          <p className="text-gray-500">
            <span className="text-2xl font-bold text-[#16345d]">26</span>{" "}
            specialists available
          </p>

          <div className="flex flex-wrap gap-3">
            {["Top Rated", "Available Today", "Most Reviewed"].map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full border text-sm font-semibold transition ${
                    index === 0
                      ? "bg-[#0ea5e9]/10 border-[#0ea5e9]/30 text-[#0ea5e9]"
                      : "bg-white border-gray-200 text-gray-500 hover:text-[#0ea5e9] hover:border-[#0ea5e9]"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className={`bg-white border rounded-xl p-5 md:p-6 shadow-sm hover:border-[#0ea5e9] transition ${
                doctor.featured ? " border-gray-200" : "border-gray-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-[#16345d]">
                          {doctor.name}
                        </h3>

                        {doctor.featured && (
                          <span className="bg-[#0ea5e9]/10 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <p className="text-gray-500 mt-1">{doctor.role}</p>
                    </div>

                    <div className="text-right">
                      <div className="flex text-yellow-400 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <h4 className="font-bold text-[#16345d] mt-1">
                        {doctor.rating}
                      </h4>
                      <p className="text-gray-400 text-sm">{doctor.reviews}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {doctor.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 border border-gray-200 text-gray-500 px-3 py-1 rounded-md text-sm flex items-center gap-2"
                      >
                        {i === 0 && <FaUserMd className="text-[#0ea5e9]" />}
                        {i === 1 && (
                          <FaBriefcaseMedical className="text-[#0ea5e9]" />
                        )}
                        {i === 2 && (
                          <FaRegHospital className="text-[#0ea5e9]" />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        statusColor[doctor.status]
                      }`}
                    ></span>

                    <Link
                      to={`/doctor/${doctor.id}`}
                      className="w-full sm:flex-1 text-center border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9] text-[#16345d] py-3 rounded-full font-bold transition cursor-pointer"
                    >
                      View Profile
                    </Link>

                    <button onClick={()=>navigate("/appointment")} className="w-full sm:flex-1 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-3 rounded-full font-bold transition cursor-pointer">
                      {doctor.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="mt-8 bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <p className="text-gray-500">
            Showing 6 of 26 specialists in our network
          </p>

          <button className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
            Open Full Directory <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
