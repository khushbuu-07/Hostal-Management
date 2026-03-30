import Badge from "@/shared/components/ui/Badge";
import { HiOutlineUserCircle, HiOutlineDotsVertical, HiOutlineCreditCard } from "react-icons/hi";

const PaymentRow = ({ payment }) => (
  <tr className="group hover:bg-emerald-500/[0.02] transition-colors border-b border-emerald-900/10">
    <td className="px-8 py-5"> 
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
          <HiOutlineUserCircle size={20} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">{payment.name}</p>
          <p className="text-[10px] text-emerald-700 dark:text-emerald-500 font-bold uppercase tracking-tighter">Transaction #{Math.floor(Math.random() * 10000)}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-5">
      <div className="flex items-center gap-2 text-slate-900 dark:text-emerald-100 font-mono text-xs">
        <span className="text-emerald-700 dark:text-emerald-800">RM</span> {payment.room}
      </div>
    </td>
    <td className="px-6 py-5">
      <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-black text-sm">
        <HiOutlineCreditCard className="text-emerald-700 dark:text-emerald-800" size={14} />
        ₹{payment.amount}
      </div>
    </td>
    <td className="px-6 py-5">
      <Badge status={payment.status} />
    </td>
    <td className="px-6 py-5 text-right">
       <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-500 uppercase">{payment.date}</p>
    </td>
  </tr>
);
export default PaymentRow;
