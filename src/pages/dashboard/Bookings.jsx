import React, { useState } from "react";
import BookingTable from "../../components/BookingTable";
import {
  DUMMY_BOOKINGS_TODAY,
  DUMMY_UPCOMING,
  DUMMY_PENDING,
} from "../../data/dummyCenters";

export default function Bookings() {
  const [tab, setTab] = useState("today");

  const rows =
    tab === "today"
      ? DUMMY_BOOKINGS_TODAY
      : tab === "upcoming"
      ? DUMMY_UPCOMING
      : DUMMY_PENDING;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Bookings</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTab("today")}
            className={`px-3 py-2 rounded-full ${
              tab === "today"
                ? "bg-sky-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTab("upcoming")}
            className={`px-3 py-2 rounded-full ${
              tab === "upcoming"
                ? "bg-sky-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setTab("pending")}
            className={`px-3 py-2 rounded-full ${
              tab === "pending"
                ? "bg-sky-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      <BookingTable rows={rows} />
    </div>
  );
}
