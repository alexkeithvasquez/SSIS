import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "../../components/ui/Card";

export default function Grades() {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/student/grades")
      .then(({ data }) => setGrades(data.data ?? data))
      .catch(() => setGrades([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">Loading grades...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Grades</h1>
      <Card>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Course</th>
              <th className="py-2">Title</th>
              <th className="py-2">Units</th>
              <th className="py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.length === 0 && (
              <tr><td colSpan="4" className="py-4 text-center text-gray-400">No grades yet</td></tr>
            )}
            {grades.map((g) => (
              <tr key={g.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{g.course?.code}</td>
                <td className="py-2">{g.course?.title}</td>
                <td className="py-2">{g.course?.units}</td>
                <td className="py-2 font-semibold">{g.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}