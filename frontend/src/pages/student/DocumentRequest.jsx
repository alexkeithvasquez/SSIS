import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function DocumentRequest() {
  const [types, setTypes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [purpose, setPurpose] = useState("");
  const [copies, setCopies] = useState(1);
  const [requests, setRequests] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.get("/documents/types").then(({ data }) => setTypes(data.data ?? data)).catch(() => {});
    api.get("/documents/my-requests").then(({ data }) => setRequests(data.data ?? data)).catch(() => {});
  }, []);

  const total = selected ? selected.fee * copies : 0;

  const handleSubmit = async () => {
    if (!selected || !purpose) return;
    setSubmitting(true);
    try {
      const { data } = await api.post("/documents/request", {
        type_id: selected.id, purpose, copies,
      });
      setRequests([data.data ?? data, ...requests]);
      setSelected(null); setPurpose(""); setCopies(1);
    } catch (err) {
      alert("Failed to submit request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Request a Document</h1>

      <Card className="mb-6">
        <h2 className="font-semibold mb-3">1. Select Document Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {types.length === 0 && <p className="text-gray-400 text-sm">Loading...</p>}
          {types.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelected(d)}
              className={`text-left p-4 rounded-lg border-2 transition ${
                selected?.id === d.id ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <p className="font-medium text-gray-800">{d.name}</p>
              <p className="text-sm text-gray-500">Fee: P{Number(d.fee).toFixed(2)}</p>
            </button>
          ))}
        </div>
      </Card>

      {selected && (
        <Card className="mb-6">
          <h2 className="font-semibold mb-3">2. Details</h2>
          <label className="block mb-4">
            <span className="text-sm text-gray-700">Purpose</span>
            <textarea
              rows="3"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., Employment application"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Number of Copies</span>
            <input
              type="number" min="1" max="5"
              value={copies}
              onChange={(e) => setCopies(Number(e.target.value))}
              className="w-32 mt-1 border rounded-lg p-2"
            />
          </label>
        </Card>
      )}

      {selected && (
        <Card className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Total Fee</p>
            <p className="text-2xl font-bold text-blue-900">P{total.toFixed(2)}</p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting || !purpose}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </Card>
      )}

      <Card>
        <h2 className="font-semibold text-gray-800 mb-4">My Requests</h2>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Type</th>
              <th className="py-2">Copies</th>
              <th className="py-2">Fee</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 && (
              <tr><td colSpan="4" className="py-4 text-center text-gray-400">No requests yet</td></tr>
            )}
            {requests.map((r) => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{r.type?.name || r.type_name}</td>
                <td className="py-2">{r.copies}</td>
                <td className="py-2">P{Number(r.fee).toFixed(2)}</td>
                <td className="py-2"><Badge status={r.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}