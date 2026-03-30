import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineHome, HiOutlineDotsVertical } from "react-icons/hi";

const StudentTable = () => {
  const students = [
    { name: "Rahul Sharma", room: "204", phone: "+91 98765-43210", status: "Paid", date: "Mar 12, 2026" },
    { name: "Aman Verma", room: "102", phone: "+91 88221-11004", status: "Pending", date: "Mar 28, 2026" },
    // ... more data
  ];

  return (
    <div className="w-full overflow-hidden rounded-[32px] border border-emerald-200 dark:border-emerald-900/20 bg-white/60 dark:bg-[#0a1515]/20 backdrop-blur-md">
      <table className="w-full text-left border-collapse">
        <thead className="bg-emerald-50 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-500 text-[10px] font-black uppercase tracking-[2px]">
          <tr className="border-b border-emerald-200 dark:border-emerald-900/10">
            <th className="px-8 py-5">Resident Info</th>
            <th className="px-6 py-5">Room</th>
            <th className="px-6 py-5">Contact</th>
            <th className="px-6 py-5">Fee Status</th>
            <th className="px-6 py-5 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-900/10">
          {students.map((student, idx) => (
            <motion.tr 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              key={idx}
              className="group hover:bg-emerald-50 dark:hover:bg-emerald-500/[0.03] transition-colors cursor-pointer"
            >
              <td className="px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500 font-bold">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">{student.name}</p>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-500 font-bold uppercase tracking-tighter">Joined {student.date}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-emerald-100 font-mono text-xs">
                  <HiOutlineHome className="text-emerald-700 dark:text-emerald-800" />
                  {student.room}
                </div>
              </td>
              <td className="px-6 py-5">
                 <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-700 text-xs">
                  <HiOutlinePhone size={14} />
                  {student.phone}
                </div>
              </td>
              <td className="px-6 py-5">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  student.status === 'Paid' 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border border-emerald-200 dark:border-emerald-500/20' 
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-500 border border-rose-200 dark:border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]'
                }`}>
                  {student.status}
                </span>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="p-2 text-emerald-700 dark:text-emerald-900 hover:text-white transition-colors">
                  <HiOutlineDotsVertical />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;