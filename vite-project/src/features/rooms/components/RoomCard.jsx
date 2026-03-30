import React from "react";

function RoomCard({ room, capacity, occupied }) {
  const isFull = occupied === capacity;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
      
      {/* Room Number */}
      <h2 className="text-lg font-semibold">Room {room}</h2>

      {/* Info */}
      <div className="text-gray-600 text-sm space-y-1">
        <p>Capacity: {capacity}</p>
        <p>Occupied: {occupied}</p>
      </div>

      {/* Status */}
      <span
        className={`inline-block px-3 py-1 text-sm rounded-full ${
          isFull
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {isFull ? "Full" : "Available"}
      </span>
    </div>
  );
}

export default RoomCard;