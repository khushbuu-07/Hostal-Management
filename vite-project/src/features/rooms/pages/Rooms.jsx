import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineViewGrid, HiOutlineViewList, HiOutlineHome, HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
import RoomGrid from "../components/RoomGrid";
import RoomTable from "../components/RoomTable";
import { rooms } from "../data/roomsData";

const Rooms = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050a0a] text-slate-900 dark:text-emerald-100 p-4 md:p-8 space-y-8 relative overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-800">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
             <span className="text-[10px] font-black uppercase tracking-[4px]">Inventory Module</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
            Room <span className="text-emerald-500">Analytics</span>
          </h1>
        </div>

        {/* 2. Enhanced Switcher & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative flex bg-white dark:bg-[#0a1515] p-1 rounded-2xl border border-emerald-200 dark:border-emerald-900/30">
            {/* The Magnetic Slider Background */}
            <motion.div
              layoutId="viewSwitch" 
              className="absolute bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              initial={false}
              animate={{ 
                x: view === "grid" ? 0 : "100%", 
                width: "50%" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ top: 4, bottom: 4, left: 4, right: 4, width: 'calc(50% - 4px)' }}
            />

            <button
              onClick={() => setView("grid")}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-colors ${
                view === "grid" ? "text-slate-900 dark:text-black" : "text-emerald-700 dark:text-emerald-800 hover:text-emerald-400"
              }`}
            >
              <HiOutlineViewGrid size={16} /> GRID
            </button>
            <button
              onClick={() => setView("table")}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-colors ${ 
                view === "table" ? "text-slate-900 dark:text-black" : "text-emerald-700 dark:text-emerald-800 hover:text-emerald-400"
              }`}
            >
              <HiOutlineViewList size={16} /> LIST
            </button>
          </div>

          <button className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all shadow-lg">
            <HiOutlinePlus size={20} className="text-emerald-600 dark:text-emerald-500" />
          </button>
        </div>
      </div>

      {/* View Content Logic */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
        >
          {view === "grid" ? <RoomGrid /> : <RoomTable rooms={rooms} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Rooms;