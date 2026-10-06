import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, User, BookOpen, FileText, CreditCard,
  ClipboardCheck, Users, LogOut,
} from "lucide-react";

const menus = {
  student: [
    { to: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/student/profile", label: "My Profile", icon: User },
    { to: "/student/grades", label: "Grades", icon: BookOpen },
    { to: "/student/subjects", label: "Subjects", icon: BookOpen },
    { to: "/student/documents", label: "Document Request", icon: FileText },
  ],
  registrar: [
    { to: "/registrar/enrollment", label: "Enrollment", icon: ClipboardCheck },
    { to: "/registrar/grades", label: "Grades Encoding", icon: BookOpen },
  ],
  cashier: [
    { to: "/cashier/payments", label: "Payments", icon: CreditCard },
    { to: "/cashier/receipts", label: "Receipts", icon: FileText },
  ],
  department: [
    { to: "/department/clearance", label: "Clearance", icon: ClipboardCheck },
  ],
  admin: [
    { to: "/admin/users", label: "User Accounts", icon: Users },
  ],
};

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen flex flex-col">
      <div className="p-5 border-b border-blue-800">
        <h1 className="font-bold text-lg">CuyoTech</h1>
        <p className="text-xs text-blue-200">Student Services IS</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menus[user.role]?.map((m) => (
          <Link
            key={m.to}
            to={m.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
              pathname === m.to ? "bg-blue-800" : "hover:bg-blue-800/60"
            }`}
          >
            <m.icon className="w-4 h-4" />
            {m.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-5 py-4 text-sm border-t border-blue-800 hover:bg-blue-800/60"
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </aside>
  );
}