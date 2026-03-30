import { motion } from "framer-motion";
import { 
  HiOutlineLightningBolt, HiOutlineTrendingUp, HiOutlineCalendar,
  HiOutlineUserGroup, HiOutlineHome, HiOutlineCurrencyRupee, 
  HiOutlineExclamationCircle 
} from "react-icons/hi";

// Components
import StatsGrid from "../components/StatsGrid";
import RecentActivity from "../components/RecentActivity";
import ChartCard from "../components/ChartCard";
import SummaryCard from "../components/SummaryCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#050a0a] text-emerald-100 p-4 md:p-8 space-y-8 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <HiOutlineLightningBolt className="text-emerald-400" size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[4px] text-emerald-700">Management Suite v3.0</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Hostel <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">Intelligence</span>
          </h1>
        </div>

        <div className="flex items-center gap-3 bg-emerald-950/20 p-2 rounded-2xl border border-emerald-900/30 backdrop-blur-md">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <HiOutlineCalendar className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-100">March 30, 2026</span>
          </div>
          <button className="px-4 py-1.5 bg-emerald-500 text-[#050a0a] text-[10px] font-black rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] tracking-widest">
            EXPORT DATA
          </button>
        </div>
      </div>

      {/* 1. Primary Metrics (using StatsGrid which maps SummaryCards) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatsGrid />
      </motion.div>

      {/* 2. Main Analytics Section (Bento Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Left: Occupancy & Revenue Charts */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <ChartCard 
              title="Student Inflow" 
              subtitle="Monthly registration trends" 
            />
            <ChartCard 
              title="Revenue Stream" 
              subtitle="Pending vs Collected" 
            />
          </motion.div>

          {/* Deep Dive Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-[#0a1515]/40 backdrop-blur-xl border border-emerald-900/20 rounded-[32px] relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-white tracking-tight">System Health</h3>
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">ALL SYSTEMS NOMINAL</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Using individual SummaryCards for detailed health metrics */}
              <SummaryCard title="Server Latency" value="24ms" trend="Optimal" icon={<HiOutlineLightningBolt />} />
              <SummaryCard title="Database" value="Encrypted" trend="Secure" icon={<HiOutlineTrendingUp />} />
              <SummaryCard title="API Status" value="Online" trend="100% Uptime" icon={<HiOutlineLightningBolt />} />
              <SummaryCard title="Backup" value="Daily" trend="Synced" icon={<HiOutlineCalendar />} />
            </div>
          </motion.div>
        </div>

        {/* Right: Live Activity & Logs */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="bg-[#0a1515]/60 backdrop-blur-2xl border border-emerald-500/10 rounded-[40px] p-8 shadow-2xl h-full sticky top-24">
            <RecentActivity />
            
            {/* Quick Action Mini-Menu inside Sidebar */}
            <div className="mt-12 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
               <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[2px] mb-4 text-center">Quick Actions</p>
               <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-[#050a0a] border border-emerald-900/50 rounded-2xl text-[10px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all">ADD STUDENT</button>
                  <button className="p-3 bg-[#050a0a] border border-emerald-900/50 rounded-2xl text-[10px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all">BOOK ROOM</button>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;