import { payments } from "../data/paymentsData";

const PaymentSummary = () => {
  const totalPending = payments
    .filter((p) => p.status === "Pending")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="text-gray-500 text-sm">Total Pending</h3>
      <h2 className="text-2xl font-bold text-red-500 mt-1">
        ₹{totalPending}
      </h2>
    </div>
  );
};

export default PaymentSummary;