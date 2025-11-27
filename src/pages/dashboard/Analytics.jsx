import React from "react";
import StatCard from "../../components/StatCard";

export default function Analytics() {
  // placeholder charts: you can integrate charting libs later (recharts, chart.js)
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Analytics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Bookings (Mtd)" value="120" />
        <StatCard title="Revenue (Mtd)" value="₹1,20,000" />
        <StatCard title="Avg Daily Bookings" value="6" />
        <StatCard title="Conversion" value="72%" />
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="text-gray-500">Booking trends (chart placeholder)</div>
        <div className="h-48 flex items-center justify-center text-gray-300">
          Chart area — integrate chart library later
        </div>
      </div>
    </div>
  );
}
