import React from "react";
import StatCard from "../../components/StatCard";
import BookingTable from "../../components/BookingTable";
import MiniCalendar from "../../components/MiniCalendar";
import {
  DUMMY_BOOKINGS_TODAY,
  DUMMY_PENDING,
  WEEK_STATS,
} from "../../data/dummyCenters";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Top stat row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Today's Bookings"
          value={WEEK_STATS.bookingsThisWeek}
        />
        <StatCard
          title="Pending Approvals"
          value={WEEK_STATS.pendingApprovals}
        />
        <StatCard
          title="Weekly Bookings"
          value={WEEK_STATS.weeklyRevenue}
          small
        />
        <StatCard title="Monthly Bookings" value={WEEK_STATS.monthlyBookings} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Today's Bookings
            </h3>
            <div className="text-sm text-gray-500">Updated just now</div>
          </div>

          <BookingTable rows={DUMMY_BOOKINGS_TODAY} />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Pending Requests
          </h3>
          <BookingTable rows={DUMMY_PENDING} />
          <MiniCalendar />
        </div>
      </div>
    </div>
  );
}
