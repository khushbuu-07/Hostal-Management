import { motion } from "framer-motion";

const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-emerald-500 text-[#050a0a] shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400",
    outline: "border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-500/10",
    ghost: "text-emerald-700 dark:text-emerald-800 hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96, y: 1 }}
      className={`px-6 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-[2px] transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;