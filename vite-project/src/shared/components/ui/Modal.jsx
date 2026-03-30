import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} 
            className="absolute inset-0 bg-white/90 dark:bg-[#050a0a]/90 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }} 
            className="relative bg-white dark:bg-[#0a1515] border border-emerald-200 dark:border-emerald-500/20 rounded-[40px] w-full max-w-md shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden"
          >
            <div className="p-8 flex justify-between items-center border-b border-emerald-200 dark:border-emerald-500/10 bg-emerald-50 dark:bg-emerald-500/[0.02]">
              <h3 className="text-slate-900 dark:text-white font-black text-lg tracking-tight">{title}</h3>
              <button onClick={onClose} className="p-2 text-emerald-700 dark:text-emerald-900 hover:text-white transition-colors">
                <HiOutlineX size={20} />
              </button>
            </div>
            <div className="p-8">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};