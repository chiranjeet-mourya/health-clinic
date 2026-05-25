import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import DoctorProtectedRoute from "./routes/DoctorProtectedRoute";

import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import DoctorProfile from "./pages/DoctorProfile";
import Departments from "./pages/Departments";
import MedicalServices from "./pages/MedicalServices";
import Doctors from "./pages/Doctors";
import DepartmentDetails from "./pages/DepartmentDetails";
import Appointment from "./pages/Appointment";
import ServiceDetail from "./pages/ServiceDetail";
import Testimonials from "./pages/Testimonials";
import FaqPage from "./pages/FaqPage";
import Gallery from "./pages/Gallery";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorDashboard from "./pages/DoctorDashboard/DoctorDashboard";

import DashboardHome from "./pages/DoctorDashboard/pages/DashboardHome";
import Patients from "./pages/DoctorDashboard/pages/Patients";
import AllAppointments from "./pages/DoctorDashboard/pages/Appointments/AllAppointments";
import AddAppointment from "./pages/DoctorDashboard/pages/Appointments/AddAppointment";
import AllDoctors from "./pages/DoctorDashboard/pages/Doctors/AllDoctors";
import AddDoctors from "./pages/DoctorDashboard/pages/Doctors/AddDoctors";
import AllDepartments from "./pages/DoctorDashboard/pages/Departments/AllDepartments";
import AddDepartment from "./pages/DoctorDashboard/pages/Departments/AddDepartment";
import Locations from "./pages/DoctorDashboard/pages/Locations";
import Settings from "./pages/DoctorDashboard/pages/Settings";
import Attendance from "./pages/DoctorDashboard/pages/Attendance";
import AllPayroll from "./pages/DoctorDashboard/pages/Payrolls/AllPayrolls";
import AddPayroll from "./pages/DoctorDashboard/pages/Payrolls/AddPayrolls";
import Overview from "./pages/DoctorDashboard/pages/Reports/Overview";
import AppointmentReports from "./pages/DoctorDashboard/pages/Reports/AppointmentReports";
import FinancialReports from "./pages/DoctorDashboard/pages/Reports/FinancialReports";
import InventoryReports from "./pages/DoctorDashboard/pages/Reports/InventoryReports";
import PatientVisit from "./pages/DoctorDashboard/pages/Reports/PatientVisit";
import DocDashProfile from "./pages/DoctorDashboard/pages/DocDashProfile";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    AOS.refresh();
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/admin-dashboard");

  const isLogin = location.pathname.startsWith("/login");
  const isRegister = location.pathname.startsWith("/register");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      disable: () => window.innerWidth < 768,
    });
  }, []);

  return (
    <>
      <ScrollToTop />

      {!isDashboard && !isLogin && !isRegister && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Departments />} />
        <Route path="/services" element={<MedicalServices />} />
        <Route path="/docters" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/department-details" element={<DepartmentDetails />} />
        <Route path="/service-details" element={<ServiceDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin-dashboard"
          element={
            <DoctorProtectedRoute>
              <DoctorDashboard />
            </DoctorProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />

          {/* Appointments Routes */}
          <Route path="/admin-dashboard/all-appointments" element={<AllAppointments />} />
          <Route path="/admin-dashboard/add-appointments" element={<AddAppointment />} />

          <Route path="/admin-dashboard/patients" element={<Patients />} />

          {/* Doctors Routes */}
          <Route path="/admin-dashboard/all-doctors" element={<AllDoctors />} />
          <Route path="/admin-dashboard/add-doctors" element={<AddDoctors />} />

          {/* Departments Routes */}
          <Route path="/admin-dashboard/all-departments" element={<AllDepartments />} />
          <Route path="/admin-dashboard/add-departments" element={<AddDepartment />} />

          <Route path="/admin-dashboard/locations" element={<Locations />} />
          <Route path="/admin-dashboard/attendance" element={<Attendance />} />
          <Route path="/admin-dashboard/settings" element={<Settings />} />

          {/* Payrolls Routes */}
          <Route path="/admin-dashboard/all-payrolls" element={<AllPayroll />} />
          <Route path="/admin-dashboard/add-payrolls" element={<AddPayroll />} />

          {/* Reports Routes */}
          <Route path="/admin-dashboard/reports/Overview" element={<Overview />} />
          <Route path="/admin-dashboard/reports/appointments" element={<AppointmentReports />} />
          <Route path="/admin-dashboard/reports/financial" element={<FinancialReports />} />
          <Route path="/admin-dashboard/reports/inventory" element={<InventoryReports />} />
          <Route path="/admin-dashboard/reports/patient-visit" element={<PatientVisit />} />

          <Route path="/admin-dashboard/doctor-profile" element={<DocDashProfile />} />
          
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isDashboard && !isLogin && !isRegister && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
