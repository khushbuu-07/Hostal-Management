import { motion } from "framer-motion";
import { HiOutlineExclamationCircle, HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi";
import ComplaintTable from "../components/ComplaintTable";

const Complaints = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050a0a] p-4 md:p-8 space-y-8 relative overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-800">
             <HiOutlineExclamationCircle size={18} className="animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[4px]">Issue Tracking System</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
            Service <span className="text-rose-500 underline decoration-rose-500/20 underline-offset-8">Tickets</span>
          </h1>
        </div>

        {/* Quick Summary Pills */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-2xl flex items-center gap-2">
            <HiOutlineClock className="text-rose-600 dark:text-rose-500" />
            <span className="text-[10px] font-black text-rose-600 dark:text-rose-500 uppercase">4 Open Tickets</span>
          </div>
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl flex items-center gap-2">
            <HiOutlineCheckCircle className="text-emerald-600 dark:text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase">12 Resolved</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <ComplaintTable />
      </motion.div>
    </div>
  );
};

export default Complaints;