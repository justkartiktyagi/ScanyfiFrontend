// src/components/StatCard.jsx
import React from "react";

export default function StatCard({ title, value, small }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 min-w-[180px]">
      <div className="text-xs text-gray-500">{title}</div>
      <div
        className={`mt-2 font-extrabold ${
          small ? "text-lg" : "text-2xl"
        } text-gray-900`}
      >
        {value}
      </div>
    </div>
  );
}
