import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "../../components/ui/Card";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(({ data }) => setUsers(data.data ?? data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Accounts</h1>
      <Card>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Username</th>
              <th className="py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr><td colSpan="3" className="py-4 text-center text-gray-400">No users loaded</td></tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{u.name}</td>
                <td className="py-2">{u.username}</td>
                <td className="py-2 capitalize">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}