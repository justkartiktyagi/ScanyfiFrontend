import React from "react";

export default function MiniCalendar() {
  // Simple placeholder mini-calendar.
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <div className="text-sm text-gray-600 mb-3">Mini Calendar</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d} className="text-gray-400">
            {d}
          </div>
        ))}
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="p-2 rounded-md hover:bg-sky-50 cursor-pointer"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
