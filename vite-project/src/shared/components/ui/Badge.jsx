const Badge = ({ status, children }) => {
  const themes = {
    Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    Resolved: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
    Pending: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(244,63,94,0.1)]",
    Open: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/20",
  };

  const style = themes[status] || "bg-emerald-950/20 text-emerald-900 border-emerald-900/30";

  return (
    <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border ${style}`}>
      {children || status}
    </span>
  );
};
export default Badge;