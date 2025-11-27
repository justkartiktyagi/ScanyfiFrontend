import React from "react";
import {
  Home,
  Calendar,
  BarChart2,
  Settings,
  LogOut,
  CheckCircle,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ centerName = "Center Name" }) {
  const navItem = (to, Icon, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
          isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </NavLink>
  );

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-[#071020] text-white p-5 gap-6 min-h-screen">
      <Link to="/dashboard" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold">
          CM
        </div>
        <div>
          <div className="text-sm font-bold">{centerName}</div>
          <div className="text-xs text-gray-400">Center Dashboard</div>
        </div>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItem("/dashboard", Home, "Overview")}
        {navItem("/dashboard/bookings", CheckCircle, "Bookings")}
        {navItem("/dashboard/calendar", Calendar, "Calendar")}
        {navItem("/dashboard/analytics", BarChart2, "Analytics")}
        {navItem("/dashboard/profile", Settings, "Profile")}
      </nav>

      <div>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-gray-200">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
