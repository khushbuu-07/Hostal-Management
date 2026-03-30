import React from "react";
import Badge from "@/shared/components/ui/Badge";

function PaymentRow({ payment }) {
  return (
    <tr className="border-t">
      <td className="p-2">{payment.name}</td>
      <td className="p-2">{payment.room}</td>
      <td className="p-2">₹{payment.amount}</td>
      <td className="p-2">
        <Badge status={payment.status} />
      </td>
      <td className="p-2">{payment.date}</td>
    </tr>
  );
}

export default PaymentRow;