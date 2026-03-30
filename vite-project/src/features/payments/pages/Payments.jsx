import PaymentSummary from "../components/PaymentSummary";
import PaymentTable from "../components/PaymentTable";

const Payments = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payments</h1>

      <PaymentSummary />

      <PaymentTable />
    </div>
  );
};

export default Payments;