import React from "react";

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[58px] bg-white border-t border-gray-200 px-4 md:px-6 flex items-center justify-center md:justify-between shrink-0">
      <p className="text-sm md:text-base text-gray-500 text-center">
        © {currentYear}{" "}
        <span className="font-bold text-[#0ea5e9]">
          Medical Health Care
        </span>
        , All Rights Reserved
      </p>

      <p className="hidden md:block text-sm text-gray-400">
        Designed by{" "}
        <span className="font-semibold text-[#16345d]">
          Chiranjeet Mourya
        </span>
      </p>
    </footer>
  );
};

export default DashboardFooter;