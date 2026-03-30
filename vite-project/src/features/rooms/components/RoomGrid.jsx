import RoomCard from "./RoomCard";
import { rooms } from "../data/roomsData";

const RoomGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {rooms.map((room, index) => (
        <RoomCard key={room.room} {...room} index={index} />
      ))}
    </div>
  );
};

export default RoomGrid;
