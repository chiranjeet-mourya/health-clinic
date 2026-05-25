import React, { useEffect, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";
import DashboardFooter from "./DashboardFooter";

const DoctorDashboard = () => {

  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 768
  );

  useEffect(() =>{
    const handleResize = () =>{
      if(window.innerWidth < 768){
        setCollapsed(true)
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)

  },[]);

  return (
    <div className="w-full h-screen bg-[#f4f7fe] flex overflow-hidden">
      <DashboardSidebar collapsed={collapsed} />

      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>

        <DashboardFooter/>
      </div>
    </div>
  );
};

export default DoctorDashboard;
