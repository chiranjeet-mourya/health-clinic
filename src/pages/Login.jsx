import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { auth, db } from "../firebase/firebase";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userSnap = await getDoc(doc(db, "users", result.user.uid));

      if (!userSnap.exists()) {
        alert("User role not found");
        return;
      }

      const userData = userSnap.data();

      if (userData.role === "DOCTOR") {
        navigate("/");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-white to-[#f8fafc] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100">
        
        <div className="hidden lg:flex flex-col justify-between bg-[#0ea5e9] p-10 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/20 rounded-full"></div>
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>
            <p className="mt-4 text-white/90 leading-7">
              Login to manage your MediCare account, appointments, patients and doctor dashboard securely.
            </p>
          </div>

          <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-xl font-bold">MediCare Portal</h3>
            <p className="mt-2 text-white/80">
              Secure authentication for patients and doctors.
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="p-7 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16345d]">
              Login
            </h2>
            <p className="mt-3 text-gray-500">
              Enter your details to continue
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block font-bold text-[#16345d] mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl outline-none focus:border-[#0ea5e9] transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#16345d] mb-2">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-200 pl-12 pr-12 py-4 rounded-xl outline-none focus:border-[#0ea5e9] transition"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0ea5e9]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="accent-[#0ea5e9]" />
              Remember me
            </label>

            <button type="button" className="text-[#0ea5e9] font-bold">
              Forgot Password?
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full mt-7 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-4 rounded-xl font-bold transition disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? <Loader /> : "Login"}
          </button>

          <p className="text-center mt-6 text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#0ea5e9] font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;