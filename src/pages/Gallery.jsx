import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  FaExpandArrowsAlt,
  FaArrowRight,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import img_1 from "../assets/gallery/gallery-1.webp";
import img_2 from "../assets/gallery/gallery-2.webp";
import img_3 from "../assets/gallery/gallery-3.webp";
import img_4 from "../assets/gallery/gallery-4.webp";
import img_5 from "../assets/gallery/gallery-5.webp";
import img_6 from "../assets/gallery/gallery-6.webp";
import img_7 from "../assets/gallery/gallery-7.webp";
import img_8 from "../assets/gallery/gallery-8.webp";

const Gallery = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const gallery = [
    {
      tag: "Nature",
      title: "Healing Green Spaces",
      desc: "Peaceful outdoor views designed to support calm recovery.",
      img: img_1,
    },
    {
      tag: "Architecture",
      title: "Modern Care Facility",
      desc: "Clean hospital architecture with patient-friendly spaces.",
      img: img_2,
    },
    {
      tag: "People",
      title: "Compassionate Support",
      desc: "Real care moments with doctors, nurses, and patients.",
      img: img_3,
    },
    {
      tag: "Nature",
      title: "Peaceful Recovery Area",
      desc: "Fresh and calming surroundings for better wellness.",
      img: img_4,
    },
    {
      tag: "Architecture",
      title: "Advanced Medical Rooms",
      desc: "Organized clinical spaces with modern healthcare systems.",
      img: img_5,
    },
    {
      tag: "People",
      title: "Expert Medical Team",
      desc: "Dedicated professionals focused on patient-first care.",
      img: img_6,
    },
    {
      tag: "Nature",
      title: "Reflective Shores",
      desc: "Calm coastal moments where water and sky share a single horizon.",
      img: img_7,
    },
    {
      tag: "Architecture",
      title: "Heritage Stonework",
      desc: "Documentation of preserved buildings and the craft of older eras.",
      img: img_8,
    },
  ];

  const tags = ["All", "Nature", "Architecture", "People"];

  const filteredGallery =
    activeTag === "All"
      ? gallery
      : gallery.filter((item) => item.tag === activeTag);

  const openModal = (index) => {
    const actualIndex = gallery.findIndex(
      (item) => item.title === filteredGallery[index].title,
    );
    setSelectedIndex(actualIndex);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

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
            <span className="text-[#0ea5e9]">Gallery</span>
          </div>

          <span className="text-2xl md:text-5xl font-bold text-[#16345d]">
            Gallery
          </span>

          <p className="mt-4 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div
            data-aos="fade-up"
            className="bg-white border border-gray-200 rounded-xl p-4 overflow-x-auto"
          >
            <div className="flex items-center gap-4 min-w-max">
              <span className="text-gray-400 font-bold text-sm tracking-widest whitespace-nowrap">
                BROWSE
              </span>

              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-5 py-2 rounded-md text-sm font-bold transition cursor-pointer whitespace-nowrap flex items-center ${
                    activeTag === tag
                      ? "bg-[#0ea5e9] text-white"
                      : "bg-transparent text-[#16345d] hover:bg-[#0ea5e9]/10 hover:text-[#0ea5e9]"
                  }`}
                >
                  {tag}

                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {tag === "All"
                      ? gallery.length
                      : gallery.filter((item) => item.tag === tag).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-white text-[#16345d] px-4 py-2 rounded-full text-sm font-bold shadow">
                    {item.tag}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#16345d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-500 leading-7">{item.desc}</p>

                  <div className="mt-3 pt-5 border-t border-gray-200 flex items-center justify-between">
                    <button
                      onClick={() => openModal(index)}
                      className="border border-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] px-4 py-2 rounded-md font-bold flex items-center gap-2 transition cursor-pointer"
                    >
                      <FaExpandArrowsAlt />
                      Preview
                    </button>

                    <button className="text-[#0ea5e9] font-bold flex items-center gap-2">
                      Details <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center px-4">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-[#0ea5e9] transition cursor-pointer"
            >
              <FaTimes />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 z-50 text-white text-2xl bg-white/10 hover:bg-[#0ea5e9] w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition"
            >
              <FaChevronLeft />
            </button>

            <div
              data-aos="zoom-in"
              className="w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={gallery[selectedIndex].img}
                alt={gallery[selectedIndex].title}
                className="w-full h-[350px] md:h-[650px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-2xl font-semibold text-[#16345d]">
                  {gallery[selectedIndex].title}
                </h3>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 z-50 text-white text-2xl bg-white/10 hover:bg-[#0ea5e9] w-14 h-14 rounded-full cursor-pointer flex items-center justify-center transition"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
