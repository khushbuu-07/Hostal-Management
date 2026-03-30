import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineUserAdd, HiOutlineCollection } from "react-icons/hi";
import StudentTable from "../components/StudentTable";
import StudentFilters from "../components/StudentFilters";
import AddStudentModal from "../components/AddStudentModal";

const Students = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050a0a] p-4 md:p-8 space-y-8 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-800">
             <HiOutlineCollection size={18} />
             <span className="text-[10px] font-black uppercase tracking-[4px]">Records Management</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Resident <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">Directory</span>
          </h1>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-6 py-3 bg-emerald-500 text-[#050a0a] rounded-2xl font-black text-xs hover:bg-emerald-400 transition-all shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] group"
        > 
          <HiOutlineUserAdd size={20} className="group-hover:rotate-12 transition-transform" /> 
          ADD NEW STUDENT
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 dark:bg-[#0a1515]/40 backdrop-blur-xl border border-emerald-100 dark:border-emerald-900/20 p-4 rounded-[28px] relative z-10">
        <StudentFilters />
      </div>

      {/* Table Section */}
      <div className="relative z-10">
        <StudentTable />
      </div>

      <AddStudentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Students;