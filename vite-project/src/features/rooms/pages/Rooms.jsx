import { useState } from "react";
import RoomTable from "../components/RoomTable";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/roomsData";

const Rooms = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rooms</h1>

        <button
          onClick={() => setView(view === "grid" ? "table" : "grid")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Switch View
        </button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      ) : (
        <RoomTable />
      )}
    </div>
  );
};

export default Rooms;