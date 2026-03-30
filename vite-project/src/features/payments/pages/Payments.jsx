import { motion } from "framer-motion";
import { HiOutlineCurrencyRupee, HiOutlineFilter, HiOutlineDownload } from "react-icons/hi";
import PaymentSummary from "../components/PaymentSummary";
import PaymentTable from "../components/PaymentTable";

const Payments = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050a0a] p-4 md:p-8 space-y-8 relative overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-800">
             <HiOutlineCurrencyRupee size={18} />
             <span className="text-[10px] font-black uppercase tracking-[4px]">Financial Ledger</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
            Revenue <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">Streams</span>
          </h1>
        </div>

        <div className="flex gap-3"> 
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0a1515] border border-emerald-200 dark:border-emerald-900/30 rounded-2xl text-[10px] font-black text-emerald-600 dark:text-emerald-700 hover:text-emerald-400 transition-all">
            <HiOutlineFilter size={16} /> FILTERS
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white dark:text-[#050a0a] rounded-2xl text-[10px] font-black shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all">
            <HiOutlineDownload size={16} /> STATEMENT
          </button>
        </div>
      </div>

      <PaymentSummary />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <PaymentTable />
      </motion.div>
    </div>
  );
};

export default Payments;