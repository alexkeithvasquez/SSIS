import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});
  setLoading(true);

  try {
    const useMock = import.meta.env.VITE_USE_MOCK === "true";
    const { data } = useMock
      ? await (await import("../services/mockApi")).mockLogin(form.username, form.password)
      : await api.post("/login", form);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    const routes = {
      student: "/student/dashboard",
      registrar: "/registrar/enrollment",
      cashier: "/cashier/payments",
      department: "/department/clearance",
      admin: "/admin/users",
    };
    navigate(routes[data.user.role] || "/");
  } catch (err) {
    if (err.response?.status === 422) {
      setErrors(err.response.data.errors);
    } else {
      setErrors({ general: ["Invalid username or password."] });
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-900 text-center">CuyoTech University</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Student Services Information System</p>

        {errors.general && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded mb-4">
            {errors.general[0]}
          </div>
        )}

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Username</span>
          <div className="relative mt-1">
            <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              required
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter username"
            />
          </div>
          {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username[0]}</p>}
        </label>

        <label className="block mb-6">
          <span className="text-sm font-medium text-gray-700">Password</span>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type={showPw ? "text" : "password"}
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-2.5"
            >
              {showPw ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password[0]}</p>}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2.5 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}