import { motion } from "framer-motion";
import { 
  HiOutlineUserGroup, HiOutlineHome, 
  HiOutlineCurrencyRupee, HiOutlineExclamationCircle,
  HiOutlineArrowNarrowUp 
} from "react-icons/hi";

const StatsGrid = () => {
  const stats = [
    { 
      title: "Total Students", 
      value: 48, 
      icon: <HiOutlineUserGroup />, 
      color: "from-emerald-400 to-teal-600",
      trend: "+12% this month"
    },
    { 
      title: "Rooms Occupied", 
      value: "22 / 30", 
      icon: <HiOutlineHome />, 
      color: "from-blue-400 to-indigo-600",
      trend: "8 rooms available"
    },
    { 
      title: "Pending Rent", 
      value: "₹85,000", 
      icon: <HiOutlineCurrencyRupee />, 
      color: "from-amber-400 to-orange-600",
      trend: "4 invoices overdue"
    },
    { 
      title: "Active Complaints", 
      value: 6, 
      icon: <HiOutlineExclamationCircle />, 
      color: "from-rose-400 to-red-600",
      trend: "2 high priority"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative group p-6 rounded-[24px] bg-[#0a1515]/40 backdrop-blur-xl border border-emerald-900/20 overflow-hidden"
        >
          {/* Subtle Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[2px] text-emerald-800 mb-1">{item.title}</p>
              <h3 className="text-2xl font-black text-white tracking-tight">{item.value}</h3>
            </div>
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-[#050a0a] shadow-lg`}>
              {item.icon}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-1.5 relative z-10">
             <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-tighter">
               {item.trend}
             </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;