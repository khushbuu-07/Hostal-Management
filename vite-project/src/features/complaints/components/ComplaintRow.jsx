import { motion } from "framer-motion";
import Badge from "@/shared/components/ui/Badge";
import { HiOutlineUser, HiOutlineHashtag, HiOutlineChatAlt2, HiOutlineDotsHorizontal } from "react-icons/hi";

const ComplaintRow = ({ complaint, index }) => {
  const isOpen = complaint.status === "Open" || complaint.status === "Pending";

  return (
    <motion.tr 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }} 
      className="group hover:bg-emerald-50/50 dark:hover:bg-white/[0.02] transition-all border-b border-emerald-200 dark:border-emerald-900/10 last:border-none"
    >
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-500/10 flex items-center justify-center text-emerald-700 dark:text-emerald-800 group-hover:text-emerald-400 transition-colors">
            <HiOutlineUser size={16} />
          </div>
          <p className="text-sm font-bold text-slate-900 dark:text-emerald-100">{complaint.name}</p>
        </div>
      </td>

      <td className="px-6 py-6 text-xs font-mono text-emerald-700">
        <div className="flex items-center gap-1.5">
          <HiOutlineHashtag size={12} className="text-emerald-600 dark:text-emerald-700" />
          <span>RM-{complaint.room}</span>
        </div>
      </td>

      <td className="px-6 py-6 max-w-md">
        <div className="flex items-start gap-3">
          <HiOutlineChatAlt2 className={`mt-0.5 ${isOpen ? 'text-rose-500' : 'text-emerald-900'}`} size={16} />
          <p className="text-sm font-medium text-slate-700 dark:text-emerald-200/80 group-hover:text-white transition-colors leading-relaxed">
            {complaint.issue}
          </p>
        </div>
      </td>

      <td className="px-6 py-6">
        <Badge status={complaint.status} />
      </td>

      <td className="px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-500 uppercase tracking-widest">{complaint.date}</span>
          <button className="p-2 opacity-0 group-hover:opacity-100 text-emerald-700 dark:text-emerald-900 hover:text-white transition-all">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </td>
    </motion.tr>
  );
};

export default ComplaintRow;