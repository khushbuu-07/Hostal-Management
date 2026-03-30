import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiOutlineViewGrid, HiOutlineUserGroup, HiOutlineHome, 
  HiOutlineCreditCard, HiOutlineAnnotation, HiOutlineLogout,
  HiChevronRight, HiSparkles
} from "react-icons/hi";

const Sidebar = ({ isOpen, isExpanded, setIsExpanded }) => {
  const isControlledExpanded = isExpanded !== undefined;
  const [localExpanded, setLocalExpanded] = useState(true);
  const expanded = isControlledExpanded ? isExpanded : localExpanded;
  const setExpanded = isControlledExpanded ? setIsExpanded : setLocalExpanded;

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <HiOutlineViewGrid /> },
    { name: "Students", path: "/students", icon: <HiOutlineUserGroup /> },
    { name: "Rooms", path: "/rooms", icon: <HiOutlineHome /> },
    { name: "Payments", path: "/payments", icon: <HiOutlineCreditCard /> },
    { name: "Complaints", path: "/complaints", icon: <HiOutlineAnnotation /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ width: expanded ? 280 : 88 }}
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-screen theme-card text-[var(--text)] flex flex-col relative theme-border shadow-2xl overflow-hidden fixed md:sticky z-50 left-0 top-0"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] pointer-events-none" />

          {/* Toggle Button Container */}
          <div className={`p-6 flex items-center ${expanded ? "justify-between" : "justify-center"}`}>
            {/* Logo is ONLY visible when expanded */}
            <AnimatePresence>
              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center text-[#050a0a] shadow-lg">
                    <HiSparkles size={20} />
                  </div>
                  <h1 className="font-black text-lg text-emerald-950 dark:text-white leading-none">TRICODE</h1>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-emerald-50 dark:bg-[#0d1a1a] border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 rounded-xl p-2 hover:text-white hover:bg-emerald-600 transition-all shadow-lg"
            >
              <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                <HiChevronRight size={20} />
              </motion.div>
            </button>
          </div>

          {/* Navigation - Stays visible, just hides text when collapsed */}
          <nav className="flex-1 px-4 space-y-3 mt-4">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center ${expanded ? "gap-4 px-4" : "justify-center px-0"} py-3.5 rounded-2xl transition-all duration-300 group ${
                    isActive 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" 
                      : "hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-slate-600 dark:text-emerald-100/60 hover:text-emerald-700 dark:hover:text-emerald-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div 
                        layoutId="pill"
                        className="absolute -left-1 w-1.5 h-7 bg-emerald-400 rounded-r-full shadow-[0_0_15px_#34d399]"
                      />
                    )}
                    <span className={`text-2xl transition-all ${isActive ? "text-emerald-600 dark:text-emerald-400 scale-110" : "group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:scale-110"}`}>
                      {item.icon}
                    </span>
                    {expanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-bold text-[14px] whitespace-nowrap tracking-wide"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer - Only Avatar stays visible when collapsed */}
          <div className="p-4 mb-4">
            <div className={`flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 ${!expanded && "justify-center"}`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex-shrink-0 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                <img 
                  className="w-full h-full object-cover rounded-xl"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="avatar" 
                />
              </div>
              {expanded && (
                <>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-black text-slate-900 dark:text-white truncate">TREX ADMIN</p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-700 font-bold truncate">Premium</p>
                  </div>
                  <button className="text-emerald-700 hover:text-rose-400 transition-colors">
                    <HiOutlineLogout size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;