import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlineUser, HiOutlinePhone, HiOutlineHashtag } from "react-icons/hi";

const AddStudentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} 
          className="absolute inset-0 bg-white/80 dark:bg-[#050a0a]/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }} 
          className="relative w-full max-w-lg bg-white dark:bg-[#0a1515] border border-emerald-200 dark:border-emerald-500/20 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b border-emerald-200 dark:border-emerald-500/10 flex justify-between items-center bg-emerald-50 dark:bg-emerald-500/[0.02]">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">New Resident</h2>
              <p className="text-[10px] text-emerald-700 dark:text-emerald-800 font-bold uppercase tracking-[2px] mt-1">Onboarding Module</p>
            </div>
            <button onClick={onClose} className="p-2 text-emerald-700 dark:text-emerald-800 hover:text-white transition-colors">
              <HiOutlineX size={24} />
            </button>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
            <ModalInput icon={<HiOutlineUser />} label="Full Name" placeholder="e.g. Rahul Sharma" />
            <div className="grid grid-cols-2 gap-4">
              <ModalInput icon={<HiOutlineHashtag />} label="Room" placeholder="101" />
              <ModalInput icon={<HiOutlinePhone />} label="Phone" placeholder="+91 ..." />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-emerald-700 dark:text-emerald-800 uppercase tracking-widest pl-1">Payment Status</label>
              <select className="w-full bg-emerald-50 dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-900/50 text-slate-900 dark:text-emerald-100 rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                <option>Paid Full</option>
                <option>Partial / Pending</option>
              </select>
            </div>

            <button className="w-full py-4 mt-4 bg-gradient-to-r from-emerald-600 to-emerald-400 text-[#050a0a] font-black rounded-[20px] shadow-[0_15px_30px_-5px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all uppercase text-xs tracking-widest">
              Confirm & Save Entry
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ModalInput = ({ icon, label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-emerald-700 dark:text-emerald-800 uppercase tracking-widest pl-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 dark:text-emerald-800 group-focus-within:text-emerald-500 transition-colors">
        {icon}
      </div>
      <input 
        {...props} 
        className="w-full bg-emerald-50 dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-900/50 text-slate-900 dark:text-emerald-100 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-emerald-500/50 transition-all placeholder:text-emerald-400 dark:placeholder:text-emerald-950 font-medium" 
      />
    </div>
  </div>
);

export default AddStudentModal;