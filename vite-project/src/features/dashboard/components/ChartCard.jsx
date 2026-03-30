import { HiOutlineDotsHorizontal, HiOutlinePresentationChartLine } from "react-icons/hi";

const ChartCard = ({ title, subtitle = "Real-time Analytics" }) => {
  return (
    <div className="bg-[#0a1515]/40 backdrop-blur-xl border border-emerald-900/30 rounded-[32px] p-6 relative overflow-hidden group">
      
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-500">
            <HiOutlinePresentationChartLine size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black text-white tracking-wide uppercase">{title}</h3>
            <p className="text-[10px] font-bold text-emerald-900 uppercase tracking-tighter">{subtitle}</p>
          </div>
        </div>
        
        <button className="p-2 text-emerald-900 hover:text-emerald-400 transition-colors">
          <HiOutlineDotsHorizontal size={20} />
        </button>
      </div>

      {/* Chart Area Visualization */}
      <div className="h-64 w-full bg-emerald-950/10 rounded-[24px] border border-emerald-500/5 flex flex-col items-center justify-center relative group-hover:border-emerald-500/20 transition-all overflow-hidden">
        {/* Animated "Scanning" Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-scan" />
        
        <div className="text-center space-y-2 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-end gap-1.5 h-12 mb-4 justify-center">
            <div className="w-2 bg-emerald-500/20 rounded-t-sm animate-bounce [animation-delay:-0.4s]" style={{height: '40%'}} />
            <div className="w-2 bg-emerald-500/40 rounded-t-sm animate-bounce [animation-delay:-0.2s]" style={{height: '70%'}} />
            <div className="w-2 bg-emerald-500/60 rounded-t-sm animate-bounce" style={{height: '55%'}} />
            <div className="w-2 bg-emerald-500/30 rounded-t-sm animate-bounce [animation-delay:-0.1s]" style={{height: '90%'}} />
          </div>
          <p className="text-[10px] font-black text-emerald-800 tracking-[4px] uppercase">
            Data Stream Initializing
          </p>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-emerald-900/20 pt-6">
        <ChartMiniStat label="Peak" val="94%" />
        <ChartMiniStat label="Avg" val="62%" />
        <ChartMiniStat label="Uptime" val="99.9%" />
      </div>
    </div>
  );
};

const ChartMiniStat = ({ label, val }) => (
  <div className="text-center">
    <p className="text-[8px] font-black text-emerald-900 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-xs font-bold text-emerald-500">{val}</p>
  </div>
);

export default ChartCard;