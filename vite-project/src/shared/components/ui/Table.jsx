const Table = ({ columns, data, renderRow }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="p-2 border">{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => renderRow(item, i))}
      </tbody>
    </table>
  );
};

export default Table;