import { motion } from "framer-motion";
import { HiOutlineKey, HiOutlineIdentification, HiOutlineStatusOnline } from "react-icons/hi";

const RoomTable = ({ rooms = [] }) => {
  return (
    <div className="w-full overflow-hidden rounded-[32px] border border-emerald-200 dark:border-emerald-900/20 bg-white/60 dark:bg-[#0a1515]/20 backdrop-blur-md">
      <table className="w-full border-separate border-spacing-y-2 px-4"> 
        <thead>
          <tr className="text-emerald-900 text-[10px] font-black uppercase tracking-[3px]">
            <th className="px-6 py-8 text-left">Unit Identifier</th>
            <th className="px-6 py-8 text-left">Classification</th>
            <th className="px-6 py-8 text-left">Load Capacity</th>
            <th className="px-6 py-8 text-right">System Status</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, idx) => (
            <motion.tr 
              key={idx}
              whileHover={{ scale: 1.005, backgroundColor: "rgba(16, 185, 129, 0.03)" }}
              className="group bg-white/60 dark:bg-[#0a1515]/40 border border-emerald-100 dark:border-emerald-500/5 rounded-2xl transition-all"
            >
              <td className="px-6 py-5 rounded-l-3xl border-y border-l border-emerald-900/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500 group-hover:border-emerald-500/40 transition-all">
                    <HiOutlineKey size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">ROOM-{room.room}</p>
                    <p className="text-[9px] text-emerald-700 dark:text-emerald-500 font-bold uppercase">Wing A • Level 2</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 border-y border-emerald-900/10">
                 <div className="flex items-center gap-2">
                    <HiOutlineIdentification className="text-emerald-700 dark:text-emerald-900" />
                    <span className="text-xs font-bold text-slate-900 dark:text-emerald-100 uppercase">Executive Suite</span>
                 </div>
              </td>
              <td className="px-6 py-5 border-y border-emerald-900/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(room.occupied)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a1515] bg-emerald-500/20 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+room.room}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-700">{room.occupied}/{room.capacity} BEDS</span>
                </div>
              </td>
              <td className="px-6 py-5 rounded-r-3xl border-y border-r border-emerald-900/10 text-right">
                <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${
                  room.occupied === room.capacity 
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-500 border-rose-200 dark:border-rose-500/20' 
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-emerald-200 dark:border-emerald-500/20'
                }`}>
                  {room.occupied === room.capacity ? "Full Load" : "Operational"}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RoomTable;