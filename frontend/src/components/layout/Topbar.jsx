export default function Topbar() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="text-sm text-gray-500 capitalize">{user.role} Portal</h2>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">{user.name}</span>
        <div className="w-9 h-9 rounded-full bg-blue-900 text-white grid place-items-center text-sm">
          {user.name?.[0]?.toUpperCase()}
        </div>
      </div>
    </header>
  );
}