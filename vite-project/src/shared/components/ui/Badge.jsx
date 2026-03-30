import React from "react";

function Badge({ status, children }) {
  // Define colors based on status
  const colors = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-red-100 text-red-700",
    Open: "bg-red-100 text-red-700",
    Resolved: "bg-green-100 text-green-700",
  };

  const style = colors[status] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full font-medium ${style}`}
    >
      {children || status}
    </span>
  );
}

export default Badge;