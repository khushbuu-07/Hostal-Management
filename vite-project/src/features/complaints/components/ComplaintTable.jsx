import Table from "@/shared/components/ui/Table";
import ComplaintRow from "./ComplaintRow";
import { complaints } from "../data/complaintsData";

const ComplaintTable = () => {
  const columns = ["Resident Info", "Location", "Nature of Issue", "Status", "Timestamp"];

  return (
    <div className="relative z-10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/[0.01] dark:bg-rose-500/[0.02] blur-[120px] pointer-events-none" />
      
      <Table
        columns={columns}
        data={complaints}
        renderRow={(item, index) => (
          <ComplaintRow key={index} complaint={item} index={index} />
        )}
      />
    </div>
  );
};

export default ComplaintTable;