import { Card } from "../../components/ui/Card";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
      <Card>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium text-gray-800">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium text-gray-800">{user.username}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Student Number</p>
            <p className="font-medium text-gray-800">{user.student_no || "2026-00123"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Program</p>
            <p className="font-medium text-gray-800">{user.program || "BS Information Technology"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Year Level</p>
            <p className="font-medium text-gray-800">{user.year_level || "3rd Year"}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}