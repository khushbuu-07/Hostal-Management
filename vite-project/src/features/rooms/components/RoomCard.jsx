import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";

const RoomCard = ({ room, capacity, occupied, index }) => {
  const isFull = occupied === capacity;
  const occupancyRate = (occupied / capacity) * 100;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white/60 dark:bg-[#0a1515]/60 backdrop-blur-xl border border-emerald-100 dark:border-emerald-500/10 rounded-[32px] p-6 shadow-2xl overflow-hidden group"
    >
      {/* Background Room Number (Watermark) */}
      <span className="absolute -right-2 -top-4 text-8xl font-black text-emerald-500/[0.03] select-none group-hover:text-emerald-500/[0.07] transition-colors">
        {room}
      </span>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Room {room}</h2>
          <div className="flex items-center gap-2 mt-1 text-emerald-700 dark:text-emerald-800">
             <HiOutlineUserGroup size={14} />
             <span className="text-[10px] font-bold uppercase tracking-widest">Type: Standard Suite</span>
          </div>
        </div>
        <div className={`p-2.5 rounded-xl border ${isFull ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'}`}>
          {isFull ? <HiOutlineShieldCheck size={20} /> : <HiOutlineSparkles size={20} />}
        </div>
      </div>

      {/* Occupancy Indicator */}
      <div className="space-y-3">
        <div className="flex justify-between items-end">
           <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-500 uppercase">Availability</span>
           <span className="text-xs font-bold text-slate-900 dark:text-white">{occupied} / {capacity} Beds</span>
        </div>
        <div className="h-2 w-full bg-emerald-50 dark:bg-emerald-950/40 rounded-full overflow-hidden p-[1px]">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${occupancyRate}%` }}
            transition={{ duration: 1, delay: index * 0.1 }} 
            className={`h-full rounded-full ${isFull ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'}`} 
          />
        </div>
      </div>

      {/* Footer Status */}
      <div className="mt-8 flex items-center justify-between border-t border-emerald-900/10 pt-4">
        <span className={`text-[9px] font-black uppercase tracking-[3px] ${isFull ? 'text-rose-500' : 'text-emerald-500'}`}>
          {isFull ? "FULLY OCCUPIED" : "VACANCIES AVAILABLE"}
        </span>
        <button className="text-[10px] font-bold text-emerald-700 dark:text-emerald-800 hover:underline">DETAILS</button>
      </div>
    </motion.div>
  );
};

export default RoomCard;