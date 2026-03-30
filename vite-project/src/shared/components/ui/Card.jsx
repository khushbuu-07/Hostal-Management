const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/60 dark:bg-[#0a1515]/40 backdrop-blur-2xl border border-emerald-100 dark:border-emerald-500/10 rounded-[32px] p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};