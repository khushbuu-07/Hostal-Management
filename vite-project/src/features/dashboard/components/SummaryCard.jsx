import { motion } from "framer-motion";

const SummaryCard = ({ title, value, icon, trend }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }} 
      className="relative overflow-hidden bg-white/60 dark:bg-[#0a1515]/60 backdrop-blur-xl border border-emerald-100 dark:border-emerald-500/10 rounded-[28px] p-6 shadow-lg group"
    >
      {/* Decorative Background Element */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[2px] text-emerald-700 dark:text-emerald-500 group-hover:text-emerald-600 transition-colors">
            {title}
          </p>
          <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tighter">
            {value}
          </h2>
        </div>

        {/* Icon with Soft Glow Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-8 h-8 flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-inner group-hover:text-white group-hover:bg-emerald-500 transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>

      {/* Footer Trend or Status */}
      <div className="mt-6 pt-4 border-t border-emerald-500/5 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
        <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-900 uppercase tracking-widest">
          {trend || "Live Update"}
        </span>
      </div>
    </motion.div>
  );
};

export default SummaryCard;