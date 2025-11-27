// src/components/BookingTable.jsx
import React from "react";

export default function BookingTable({ rows = [], actions = true }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="py-2 px-3">Patient</th>
              <th className="py-2 px-3">Scan</th>
              <th className="py-2 px-3">Time / Date</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Status</th>
              {actions && <th className="py-2 px-3">Action</th>}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={actions ? 6 : 5}
                  className="p-6 text-center text-gray-400"
                >
                  No bookings
                </td>
              </tr>
            )}
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-3 px-3 font-medium">{r.name}</td>
                <td className="py-3 px-3 text-gray-600">{r.scan}</td>
                <td className="py-3 px-3 text-gray-600">{r.time || r.date}</td>
                <td className="py-3 px-3 text-gray-600">{r.phone || "-"}</td>
                <td className="py-3 px-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      r.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                {actions && (
                  <td className="py-3 px-3">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded-full bg-sky-600 text-white text-xs">
                        View
                      </button>
                      {r.status === "Pending" && (
                        <button className="px-3 py-1 rounded-full bg-green-600 text-white text-xs">
                          Accept
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
