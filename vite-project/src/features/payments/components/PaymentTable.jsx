import Table from "@/shared/components/ui/Table";
import PaymentRow from "./PaymentRow";
import { payments } from "../data/paymentsData";

const PaymentTable = () => {
  const columns = ["Student", "Room", "Amount", "Status", "Date"];

  return (
    <Table
      columns={columns}
      data={payments}
      renderRow={(item, index) => (
        <PaymentRow key={index} payment={item} />
      )}
    />
  );
};

export default PaymentTable;