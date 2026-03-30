import Input from "../../../shared/components/ui/Input";

const StudentFilters = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Search student..." />

      <select className="bg-white dark:bg-[#050a0a]/50 border border-emerald-200 dark:border-emerald-900/40 text-slate-900 dark:text-emerald-100 text-sm rounded-2xl px-5 py-3 outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all">
        <option value="">All</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default StudentFilters;