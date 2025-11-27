import React from "react";
import MiniCalendar from "../../components/MiniCalendar";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Calendar</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MiniCalendar />
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-6">
          <div className="text-gray-500">Full calendar placeholder.</div>
          <div className="mt-4 text-sm text-gray-600">
            Integrate FullCalendar or similar later for real scheduling view.
          </div>
        </div>
      </div>
    </div>
  );
}
