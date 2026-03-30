const Table = ({ columns, data, renderRow }) => {
  return (
    <div className="w-full overflow-x-auto rounded-[32px] border border-emerald-200 dark:border-emerald-500/10 bg-white/60 dark:bg-[#0a1515]/30 backdrop-blur-xl shadow-2xl">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-emerald-50 dark:bg-emerald-500/5 border-b border-emerald-200 dark:border-emerald-500/10">
            {columns.map((col, i) => (
              <th key={i} className="px-8 py-5 text-[10px] font-black text-emerald-700 dark:text-emerald-500 uppercase tracking-[3px]">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-200 dark:divide-emerald-900/10">
          {data.map((item, i) => renderRow(item, i))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;