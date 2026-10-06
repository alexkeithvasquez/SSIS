export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border p-5 ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({ icon: Icon, title, value, color = "bg-blue-500" }) {
  return (
    <Card>
      <div className={`${color} w-10 h-10 rounded-lg grid place-items-center mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </Card>
  );
}