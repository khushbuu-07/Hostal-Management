import Badge from "@/shared/components/ui/Badge";

const ComplaintRow = ({ complaint }) => {
  return (
    <tr className="border-t">
      <td className="p-2">{complaint.name}</td>
      <td className="p-2">{complaint.room}</td>
      <td className="p-2">{complaint.issue}</td>
      <td className="p-2">
        <Badge status={complaint.status} />
      </td>
      <td className="p-2">{complaint.date}</td>
    </tr>
  );
};

export default ComplaintRow;