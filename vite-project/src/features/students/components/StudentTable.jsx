import Table from "@/shared/components/ui/Table";
import Badge from "@/shared/components/ui/Badge";
import { students } from "../data/studentsData";

const StudentTable = () => {
  const columns = [
    "Name",
    "Room",
    "Phone",
    "Status",
    "Joining Date",
  ];

  return (
    <Table
      columns={columns}
      data={students}
      renderRow={(item, index) => (
        <tr key={index} className="border-t">
          <td className="p-2">{item.name}</td>
          <td className="p-2">{item.room}</td>
          <td className="p-2">{item.phone}</td>
          <td className="p-2">
            <Badge status={item.rent} />
          </td>
          <td className="p-2">{item.joiningDate}</td>
        </tr>
      )}
    />
  );
};

export default StudentTable;