import { CreditCard, Clock } from "lucide-react";
import { Card } from "../../components/ui/Card";

export default function Payments() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Payments</h1>
      <Card className="text-center py-16 px-4 flex flex-col items-center justify-center border border-gray-200/80">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center mb-4 shadow-xs">
          <CreditCard className="w-8 h-8" />
        </div>
        <h2 className="text-lg font-bold text-gray-800">Cashier Payment Processing</h2>
        <p className="text-sm text-gray-500 max-w-md mt-1 mb-6">
          The tuition fee collection, assessment balances, and student payment transaction ledger will be managed from this terminal.
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <Clock className="w-3.5 h-3.5" />
          Scheduled for Payment Cycle
        </span>
      </Card>
    </div>
  );
}