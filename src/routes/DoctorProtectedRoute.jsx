import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashLoader from "../pages/DoctorDashboard/DashLoader";

const DoctorProtectedRoute = ({ children }) => {
  const { user, role, loading } = useAuth();

  if (loading) return <div className="py-20 text-center"><DashLoader/></div>;

  if (!user) return <Navigate to="/login" replace />;

  if (role !== "DOCTOR") return <Navigate to="/" replace />;

  return children;
};

export default DoctorProtectedRoute;