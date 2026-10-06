import { BookOpen, FileText, CreditCard, ClipboardCheck } from "lucide-react";
import { StatCard, Card } from "../../components/ui/Card";

export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Welcome back, {user.name}!
      </h1>
      <p className="text-gray-500 mb-6">Here's your academic overview.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={BookOpen} title="Enrolled Subjects" value="6" color="bg-blue-500" />
        <StatCard icon={FileText} title="Pending Documents" value="2" color="bg-amber-500" />
        <StatCard icon={CreditCard} title="Outstanding Balance" value="P3,500" color="bg-red-500" />
        <StatCard icon={ClipboardCheck} title="Clearance" value="In Progress" color="bg-emerald-500" />
      </div>

      <Card className="mt-6">
        <h2 className="font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>Requested Transcript of Records - Pending approval</li>
          <li>Grades for 1st Semester 2026 are now available</li>
          <li>Clearance from Library approved</li>
        </ul>
      </Card>
    </div>
  );
}