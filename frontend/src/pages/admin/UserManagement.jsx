import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import api from "../../services/api";
import { Card } from "../../components/ui/Card";

const roleBadges = {
  admin: "bg-blue-900 text-white",
  registrar: "bg-purple-50 text-purple-700 border border-purple-200",
  cashier: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  department: "bg-slate-100 text-slate-700 border border-slate-200",
  student: "bg-amber-50 text-amber-700 border border-amber-200",
};

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(({ data }) => setUsers(data.data ?? data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Accounts</h1>
      <Card className="overflow-hidden p-0 border border-gray-200/80">
        <div className="p-5 pb-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-base">System Accounts Directory</h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
            {users.length} Total Users
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/80 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-3.5 px-4 font-semibold">User</th>
                <th className="py-3.5 px-4 font-semibold">Username</th>
                <th className="py-3.5 px-4 font-semibold">Assigned Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="py-12 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Users className="w-8 h-8 text-gray-300" />
                      <p className="font-medium text-gray-600">No users found</p>
                      <p className="text-xs text-gray-400">System user records will be listed here.</p>
                    </div>
                  </td>
                </tr>
              )}
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-semibold text-xs flex items-center justify-center shrink-0">
                        {u.name?.[0]?.toUpperCase() || "U"}
                      </div>
                      <span>{u.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600">
                    <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                      {u.username}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${roleBadges[u.role] || "bg-gray-100 text-gray-700"}`}>
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}