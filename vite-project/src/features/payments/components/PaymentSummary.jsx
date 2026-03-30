import { HiOutlineTrendingUp, HiOutlineTrendingDown, HiOutlineClock } from "react-icons/hi";

const PaymentSummary = () => {
  // Logic remains the same, but with visual upgrades
  const totalPending = 85000; // Mocked for design
  const totalReceived = 142000;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
      <SummaryItem 
        label="Total Revenue" 
        value={`₹${totalReceived + totalPending}`} 
        icon={<HiOutlineTrendingUp />} 
        color="text-emerald-400" 
        glow="bg-emerald-500/5"
      />
      <SummaryItem 
        label="Received" 
        value={`₹${totalReceived}`} 
        icon={<HiOutlineTrendingUp />} 
        color="text-emerald-400" 
        glow="bg-emerald-500/5"
      />
      <SummaryItem 
        label="Outstanding" 
        value={`₹${totalPending}`} 
        icon={<HiOutlineClock />} 
        color="text-rose-500" 
        glow="bg-rose-500/5"
      />
    </div>
  );
};

const SummaryItem = ({ label, value, icon, color, glow }) => (
  <div className={`relative overflow-hidden bg-white/60 dark:bg-[#0a1515]/60 border border-emerald-100 dark:border-emerald-900/20 p-6 rounded-[32px] backdrop-blur-xl group hover:border-emerald-500/30 transition-all`}>
    <div className={`absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-20 ${glow}`} />
    <div className="flex justify-between items-start mb-4">
      <p className="text-[10px] font-black uppercase tracking-[3px] text-emerald-700 dark:text-emerald-500">{label}</p>
      <div className={`p-2 rounded-xl bg-white dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-900/50 ${color}`}>{icon}</div>
    </div>
    <h2 className={`text-3xl font-black tracking-tight ${color}`}>{value}</h2>
  </div>
);
export default PaymentSummary;