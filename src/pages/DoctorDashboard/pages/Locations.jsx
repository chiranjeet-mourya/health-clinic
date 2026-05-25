import React, { useState } from "react";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const locationsData = [
  {
    id: 1,
    name: "Harmony Health Clinic",
    address: "California",
    isDefault: true,
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Harmony Health",
  },
  {
    id: 2,
    name: "WellCare Medical Center",
    address: "Texas",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=WellCare",
  },
  {
    id: 3,
    name: "VitalLife Clinic",
    address: "Florida",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=VitalLife",
  },
  {
    id: 4,
    name: "BrightPath Family Clinic",
    address: "New York",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BrightPath",
  },
  {
    id: 5,
    name: "Greeny Medical Clinic",
    address: "Illinois",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Greeny",
  },
  {
    id: 6,
    name: "CureWell Medical Hub",
    address: "Ohio",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CureWell",
  },
  {
    id: 7,
    name: "NovaCare Medical",
    address: "Washington",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=NovaCare",
  },
  {
    id: 8,
    name: "PrimeCare Clinic",
    address: "Arizona",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=PrimeCare",
  },
  {
    id: 9,
    name: "LifeSpring Hospital",
    address: "Nevada",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=LifeSpring",
  },
  {
    id: 10,
    name: "CarePoint Health",
    address: "Georgia",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CarePoint",
  },
  {
    id: 11,
    name: "Sunrise Medical Center",
    address: "Colorado",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Sunrise",
  },
  {
    id: 12,
    name: "BlueCross Clinic",
    address: "Michigan",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BlueCross",
  },
  {
    id: 13,
    name: "HealthBridge Clinic",
    address: "Oregon",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=HealthBridge",
  },
  {
    id: 14,
    name: "SilverLine Medical",
    address: "Virginia",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=SilverLine",
  },
  {
    id: 15,
    name: "MedStar Wellness",
    address: "Utah",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=MedStar",
  },
  {
    id: 16,
    name: "FamilyFirst Clinic",
    address: "Kentucky",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FamilyFirst",
  },
  {
    id: 17,
    name: "NorthCare Medical",
    address: "Minnesota",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=NorthCare",
  },
  {
    id: 18,
    name: "UrbanHealth Clinic",
    address: "New Jersey",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=UrbanHealth",
  },
  {
    id: 19,
    name: "Medico Family Hub",
    address: "Tennessee",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Medico",
  },
  {
    id: 20,
    name: "Apollo Care Clinic",
    address: "Massachusetts",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=Apollo",
  },
  {
    id: 21,
    name: "HopeLine Medical",
    address: "Pennsylvania",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=HopeLine",
  },
  {
    id: 22,
    name: "CityLife Clinic",
    address: "North Carolina",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=CityLife",
  },
];

const Locations = () => {
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(locationsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLocations = locationsData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const [formData, setFormData] = useState({
    name: "",
    locationType: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.file[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-[#16345d]">Locations</h1>

          <span className="border border-[#0ea5e9] text-[#0ea5e9] px-4 py-1 rounded-lg text-lg font-bold">
            Total Location : {locationsData.length}
          </span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-3 transition"
        >
          <FaPlus />
          New Location
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-2xl font-bold text-[#16345d]">
                New Location
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="text-2xl text-gray-700 hover:text-[#0284c7] bg-gray-200 p-2 rounded-full"
              >
                <FaXmark/>
              </button>
            </div>

            <form className="p-6 space-y-5">
              <div className="flex items-center gap-6">
                <h3 className="text-2xl font-bold text-[#16345d]">Image</h3>

                <label className="relative w-32 h-32 rounded-full bg-gray-100 overflow-hidden cursor-pointer flex items-center justify-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl text-gray-500">👤</span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 flex justify-center">
                    📷
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Select
                label="Location Type"
                name="locationType"
                value={formData.locationType}
                onChange={handleChange}
                options={["Clinic", "Hospital", "Medical Center", "Lab"]}
              />

              <Input
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                label="Address 1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
              />
              <Input
                label="Address 2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Select
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  options={["India", "USA", "UK", "Canada"]}
                />

                <Select
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  options={["Uttar Pradesh", "Delhi", "California", "Texas"]}
                />

                <Select
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  options={["Noida", "Delhi", "California", "Texas"]}
                />

                <Input
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-100 px-6 py-3 rounded-lg font-bold"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => {
                    console.log(formData, previewImage);
                    setShowModal(false);
                  }}
                  className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-lg font-bold"
                >
                  Add New Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-7 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="hidden md:grid grid-cols-[1.5fr_1fr_120px] border-b border-gray-200">
          <div className="px-6 py-5 text-xl font-bold text-[#16345d]">
            Clinic Name
          </div>
          <div className="px-6 py-5 text-xl font-bold text-[#16345d]">
            Address
          </div>
          <div className="px-6 py-5"></div>
        </div>

        {currentLocations.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_120px] items-center border-b last:border-b-0 border-gray-200 hover:bg-[#f8fafc] transition"
          >
            <div className="px-6 py-3 flex items-center gap-4">
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-md md:text-lg font-semibold text-[#16345d]">
                  {item.name}
                </h3>

                {item.isDefault && (
                  <span className="border border-green-500 text-green-600 px-3 py-1 rounded-md font-bold text-sm">
                    Default
                  </span>
                )}
              </div>
            </div>

            <div className="px-6 pb-4 md:py-5 text-gray-500 text-lg md:text-xl">
              <span className="md:hidden font-bold text-[#16345d] mr-2">
                Address:
              </span>
              {item.address}
            </div>

            <div className="px-6 pb-5 md:py-3 md:text-center">
              <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition">
                <FaEllipsisV />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-5 py-2 h-10 border border-gray-200 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
        >
          <FaLongArrowAltLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-lg font-bold transition ${
              currentPage === index + 1
                ? "bg-[#0ea5e9] text-white"
                : "border border-gray-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-5 py-2 h-10 border border-gray-200 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition"
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </section>
    
  );
};

export default Locations;

const Input = ({ label, required, ...props }) => (
  <div>
    <label className="block text-md font-bold text-[#16345d] mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-[#0ea5e9]"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-md font-bold text-[#16345d] mb-2">
      {label} <span className="text-red-500">*</span>
    </label>
    <select
      {...props}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0ea5e9]"
    >
      <option value="">Select</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);
