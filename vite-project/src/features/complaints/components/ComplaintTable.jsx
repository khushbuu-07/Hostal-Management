import Table from "@/shared/components/ui/Table";
import ComplaintRow from "./ComplaintRow";
import { complaints } from "../data/complaintsData";

const ComplaintTable = () => {
  const columns = ["Student", "Room", "Issue", "Status", "Date"];

  return (
    <Table
      columns={columns}
      data={complaints}
      renderRow={(item, index) => (
        <ComplaintRow key={index} complaint={item} />
      )}
    />
  );
};

export default ComplaintTable;