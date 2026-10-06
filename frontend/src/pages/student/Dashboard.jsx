import { BookOpen, FileText, CreditCard, ClipboardCheck } from "lucide-react";
import { StatCard, Card } from "../../components/ui/Card";

export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user.name}!
        </h1>
        <p className="text-sm text-gray-500 mt-1">Here's your academic overview and current service status.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={BookOpen} title="Enrolled Subjects" value="6" color="bg-blue-900" />
        <StatCard icon={FileText} title="Pending Documents" value="2" color="bg-amber-500" />
        <StatCard icon={CreditCard} title="Outstanding Balance" value="P3,500" color="bg-red-500" />
        <StatCard icon={ClipboardCheck} title="Clearance" value="In Progress" color="bg-emerald-500" />
      </div>

      <Card className="mt-6">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-2">
          <h2 className="font-bold text-gray-800 text-base">Recent Activity</h2>
          <span className="text-xs text-gray-400 font-medium">Latest updates</span>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="py-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">Requested Transcript of Records</p>
              <p className="text-xs text-amber-600 font-medium">Pending approval</p>
            </div>
          </div>

          <div className="py-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">Grades for 1st Semester 2026 are now available</p>
              <p className="text-xs text-gray-500">Official release</p>
            </div>
          </div>

          <div className="py-3 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
              <ClipboardCheck className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">Clearance from Library approved</p>
              <p className="text-xs text-emerald-600 font-medium">Completed</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}