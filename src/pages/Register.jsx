import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserMd,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { auth, db } from "../firebase/firebase";
import Loader from "../components/Loader";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      alert("Please select role");
      return;
    }

    try {
      setLoading(true);

      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(result.user, {
        displayName: formData.name,
      });

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        createdAt: serverTimestamp(),
      });

      alert("Register successful");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-white to-[#f8fafc] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100">
        
        <form onSubmit={handleRegister} className="p-7 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16345d]">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Register as patient or doctor
            </p>
          </div>

          <div className="space-y-5">
            <InputBox
              icon={<FaUser />}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <InputBox
              icon={<FaEnvelope />}
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

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

            <div>
              <label className="block font-bold text-[#16345d] mb-2">
                Select Role
              </label>

              <div className="relative">
                <FaUserMd className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl outline-none focus:border-[#0ea5e9] transition"
                  required
                >
                  <option value="">Choose your role</option>
                  <option value="PATIENT">Patient</option>
                  <option value="DOCTOR">Doctor</option>
                </select>
              </div>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full mt-7 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-4 rounded-xl font-bold transition disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? <Loader /> : "Create Account"}
          </button>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0ea5e9] font-bold">
              Login
            </Link>
          </p>
        </form>

        <div className="hidden lg:flex flex-col justify-between bg-[#0ea5e9] p-10 text-white relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/20 rounded-full"></div>
          <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold">
              Join MediCare
            </h1>

            <p className="mt-4 text-white/90 leading-7">
              Create your account and access secure healthcare services. Doctors can manage dashboards, while patients can explore website features.
            </p>
          </div>

          <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-xl font-bold">Role Based Access</h3>
            <p className="mt-2 text-white/80">
              Patient: Website access. Doctor: Website + Dashboard access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputBox = ({
  icon,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label className="block font-bold text-[#16345d] mb-2">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl outline-none focus:border-[#0ea5e9] transition"
          required
        />
      </div>
    </div>
  );
};

export default Register;