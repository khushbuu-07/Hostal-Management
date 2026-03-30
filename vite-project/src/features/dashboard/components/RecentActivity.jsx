import { HiOutlineStatusOnline, HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi";

const RecentActivity = () => {
  const activities = [
    { text: "Rahul paid rent ₹8000", time: "2 mins ago", type: "payment" },
    { text: "Room 203 complaint submitted", time: "1 hour ago", type: "complaint" },
    { text: "New student added to Wing A", time: "3 hours ago", type: "user" },
    { text: "Monthly cleaning completed", time: "Yesterday", type: "system" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black text-emerald-600 dark:text-emerald-500 tracking-[3px] uppercase">Audit Trail</h3>
        <button className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 hover:underline">View History</button>
      </div>

      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-emerald-200 dark:before:bg-emerald-900/30">
        {activities.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#050a0a] border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-500 z-10 group-hover:border-emerald-400 transition-colors">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-bold text-slate-900 dark:text-emerald-100/90 group-hover:text-white transition-colors">
                {item.text}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <HiOutlineClock className="text-emerald-700 dark:text-emerald-900" size={12} />
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-900 uppercase">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;