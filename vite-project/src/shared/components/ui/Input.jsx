const Input = ({ className = "", ...props }) => {
  return (
    <div className="relative group">
      <input
        className={`w-full bg-white dark:bg-[#050a0a]/50 border border-emerald-200 dark:border-emerald-900/40 text-slate-900 dark:text-emerald-100 text-sm rounded-2xl px-5 py-3 outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all placeholder:text-emerald-400 dark:placeholder:text-emerald-950 font-medium ${className}`}
        {...props}
      />
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
    </div>
  );
};

export default Input;