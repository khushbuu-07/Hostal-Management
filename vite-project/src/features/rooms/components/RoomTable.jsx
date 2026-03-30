import Table from "@/shared/components/ui/Table";
import { rooms } from "../data/roomsData";

const RoomTable = () => {
  const columns = ["Room No", "Capacity", "Occupied", "Status"];

  return (
    <Table
      columns={columns}
      data={rooms}
      renderRow={(room, index) => {
        const isFull = room.occupied === room.capacity;

        return (
          <tr key={index} className="border-t">
            <td className="p-2">{room.room}</td>
            <td className="p-2">{room.capacity}</td>
            <td className="p-2">{room.occupied}</td>
            <td className="p-2">
              <span
                className={`px-2 py-1 rounded text-sm ${
                  isFull
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {isFull ? "Full" : "Available"}
              </span>
            </td>
          </tr>
        );
      }}
    />
  );
};

export default RoomTable;