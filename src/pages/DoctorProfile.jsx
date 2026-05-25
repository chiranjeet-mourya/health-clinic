import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaHome,
  FaUserMd,
  FaHospital,
  FaBriefcaseMedical,
  FaLanguage,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowLeft,
  FaMapMarkerAlt,
} from "react-icons/fa";

const doctors = [
  {
    id: "1",
    name: "Dr. Aisha Verma",
    role: "Senior Heart Specialist",
    img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    rating: "4.9",
    reviews: "148 reviews",
    experience: "18 Years",
    hospital: "City Care Hospital",
    phone: "+91 90129 22055",
    email: "aisha.verma@medicalcare.com",
    availability: "Mon - Fri, 10:00 AM - 5:00 PM",
    education: "MD, FACC - Cardiology",
    languages: "English, Hindi",
    location: "Sector 62, Noida",
    specialties: ["Heart Disease", "ECG", "Blood Pressure", "Cardiac Care"],
    about:
      "Dr. Aisha Verma is a highly experienced cardiologist focused on preventive heart care, accurate diagnosis, and patient-friendly treatment planning.",
  },
  {
    id: "2",
    name: "Dr. Rohan Mehta",
    role: "Lead Neurosurgeon",
    img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    rating: "4.8",
    reviews: "96 reviews",
    experience: "24 Years",
    hospital: "Metro Hospital",
    phone: "+91 90130 12345",
    email: "rohan.mehta@medicalcare.com",
    availability: "Tue - Sat, 11:00 AM - 4:00 PM",
    education: "MD, PhD - Neurosurgery",
    languages: "English, Hindi",
    location: "Noida Extension",
    specialties: ["Brain Surgery", "Spine Care", "Nerve Pain", "Migraine"],
    about:
      "Dr. Rohan Mehta specializes in complex neurological disorders, brain surgery, spine conditions, and advanced nerve care.",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    role: "Child Care Specialist",
    img: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg",
    rating: "5.0",
    reviews: "162 reviews",
    experience: "12 Years",
    hospital: "Family Clinic",
    phone: "+91 90129 88011",
    email: "priya.sharma@medicalcare.com",
    availability: "Mon - Sat, 9:00 AM - 2:00 PM",
    education: "MD, FAAP - Pediatrics",
    languages: "English, Hindi",
    location: "Ghaziabad",
    specialties: ["Child Checkup", "Vaccination", "Growth Care", "Nutrition"],
    about:
      "Dr. Priya Sharma provides gentle and complete pediatric care for infants, children, and teenagers.",
  },
  {
    id: "4",
    name: "Dr. Kabir Sinha",
    role: "Orthopedic Surgeon",
    img: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    rating: "4.7",
    reviews: "132 reviews",
    experience: "20 Years",
    hospital: "Bone Care Unit",
    phone: "+91 90129 77880",
    email: "kabir.sinha@medicalcare.com",
    availability: "Mon - Fri, 12:00 PM - 6:00 PM",
    education: "MD, FAAOS - Orthopedics",
    languages: "English, Hindi",
    location: "Delhi NCR",
    specialties: ["Joint Pain", "Fracture Care", "Sports Injury", "Back Pain"],
    about:
      "Dr. Kabir Sinha offers advanced orthopedic care for bones, joints, fractures, and movement-related issues.",
  },
  {
    id: "5",
    name: "Dr. Neha Kapoor",
    role: "Dermatology Specialist",
    img: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg",
    rating: "4.6",
    reviews: "89 reviews",
    experience: "15 Years",
    hospital: "Skin Clinic",
    phone: "+91 90129 33221",
    email: "neha.kapoor@medicalcare.com",
    availability: "Wed - Sun, 10:30 AM - 5:30 PM",
    education: "MD, FAAD - Dermatology",
    languages: "English, Hindi",
    location: "Noida Sector 18",
    specialties: ["Skin Allergy", "Acne", "Hair Fall", "Laser Treatment"],
    about:
      "Dr. Neha Kapoor provides advanced skin, hair, and allergy treatments with personalized care plans.",
  },
  {
    id: "6",
    name: "Dr. Sameer Khan",
    role: "Cancer Care Consultant",
    img: "https://images.pexels.com/photos/5452206/pexels-photo-5452206.jpeg",
    rating: "4.9",
    reviews: "214 reviews",
    experience: "21 Years",
    hospital: "Oncology Center",
    phone: "+91 90129 55443",
    email: "sameer.khan@medicalcare.com",
    availability: "Mon - Sat, 11:00 AM - 3:00 PM",
    education: "MD, FASCO - Oncology",
    languages: "English, Hindi",
    location: "Greater Noida",
    specialties: ["Cancer Screening", "Chemotherapy", "Tumor Care", "Recovery"],
    about:
      "Dr. Sameer Khan is a cancer care specialist with expertise in diagnosis, therapy planning, and recovery support.",
  },
];

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return (
      <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-[#16345d]">
            Doctor not found
          </h2>
          <button
            onClick={() => navigate("/doctors")}
            className="mt-6 bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-bold cursor-pointer"
          >
            Back To Doctors
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative bg-[#f3f7fb] pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 text-gray-500 text-base md:text-lg mb-5">
            <FaHome className="text-gray-500" />
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span>/</span>
            <span>Doctors</span>
            <span>/</span>
            <span className="text-[#0ea5e9]">Doctor Profile</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#16345d]">
            Doctor Profile
          </h1>

          <p className="mt-5 text-gray-500 text-lg max-w-3xl mx-auto leading-8">
            View complete doctor information, experience, specialties,
            availability, and book your consultation easily.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-[#f8fafc] py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-white bg-[#0ea5e9] py-2 px-5 rounded-full cursor-pointer font-bold transition"
          >
            <FaArrowLeft /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-8">
            {/* Left Card */}
            <div
              data-aos="fade-right"
              className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-[420px] object-cover"
                />

                <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2 text-[#0ea5e9] font-bold text-sm shadow">
                  Available Today
                </div>

                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow">
                  <h2 className="text-3xl font-bold text-[#16345d]">
                    {doctor.name}
                  </h2>
                  <p className="text-[#0ea5e9] font-semibold mt-1">
                    {doctor.role}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0ea5e9]/10 rounded-xl p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#16345d]">
                      {doctor.rating}
                    </h3>
                    <p className="text-gray-500 text-sm">Rating</p>
                  </div>

                  <div className="bg-[#0ea5e9]/10 rounded-xl p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#16345d]">
                      {doctor.experience}
                    </h3>
                    <p className="text-gray-500 text-sm">Experience</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                  >
                    <FaPhoneAlt /> Call Doctor
                  </a>

                  <Link
                    to="/appointment"
                    className="border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                  >
                    <FaEnvelope /> Send Email
                  </Link>

                  <Link
                    to="/appointment"
                    className="border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                  >
                    <FaCalendarAlt /> Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div data-aos="fade-left" className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 text-[#0ea5e9] px-4 py-2 rounded-full text-sm font-bold">
                      <FaUserMd /> Verified Specialist
                    </span>

                    <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#16345d]">
                      About {doctor.name}
                    </h2>
                  </div>

                  <div className="text-left md:text-right">
                    <div className="flex gap-1 text-yellow-400 md:justify-end">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="font-bold text-[#16345d] mt-1">
                      {doctor.rating} / 5.0
                    </p>
                    <p className="text-gray-500 text-sm">{doctor.reviews}</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 leading-8">{doctor.about}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    icon: <FaHospital />,
                    title: "Hospital",
                    value: doctor.hospital,
                  },
                  {
                    icon: <FaBriefcaseMedical />,
                    title: "Availability",
                    value: doctor.availability,
                  },
                  {
                    icon: <FaGraduationCap />,
                    title: "Education",
                    value: doctor.education,
                  },
                  {
                    icon: <FaLanguage />,
                    title: "Languages",
                    value: doctor.languages,
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Location",
                    value: doctor.location,
                  },
                  {
                    icon: <FaEnvelope />,
                    title: "Email",
                    value: doctor.email,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 80}
                    className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#0ea5e9] hover:shadow-md transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center text-xl">
                      {item.icon}
                    </div>

                    <h4 className="mt-4 font-bold text-[#16345d]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-gray-500">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#16345d]">
                  Specialties & Treatments
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {doctor.specialties.map((item, index) => (
                    <span
                      key={index}
                      className="bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 px-4 py-2 rounded-full font-semibold flex items-center gap-2"
                    >
                      <FaCheckCircle />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorProfile;