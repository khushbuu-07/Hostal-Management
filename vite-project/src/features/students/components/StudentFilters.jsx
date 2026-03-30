import Input from "../../../shared/components/ui/Input";

const StudentFilters = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Search student..." />

      <select className="border px-3 py-2 rounded-lg">
        <option value="">All</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default StudentFilters;