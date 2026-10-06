import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "../../components/ui/Card";

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/student/subjects")
      .then(({ data }) => setSubjects(data.data ?? data))
      .catch(() => setSubjects([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">Loading subjects...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.length === 0 && (
          <p className="text-gray-400">No subjects enrolled</p>
        )}
        {subjects.map((s) => (
          <Card key={s.id}>
            <p className="text-xs text-gray-500">{s.code}</p>
            <p className="font-semibold text-gray-800">{s.title}</p>
            <p className="text-sm text-gray-600 mt-1">{s.schedule || "Schedule TBA"}</p>
            <p className="text-xs text-gray-500 mt-1">{s.units} units</p>
          </Card>
        ))}
      </div>
    </div>
  );
}