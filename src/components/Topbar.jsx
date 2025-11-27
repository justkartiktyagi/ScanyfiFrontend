import React from "react";
import { Menu } from "lucide-react";

export default function Topbar({ onMenuToggle }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-lg bg-white/5"
          onClick={onMenuToggle}
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
        <div>
          <div className="text-sm text-gray-300">Welcome back</div>
          <div className="text-lg font-bold text-white">
            CityScan MRI Center
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-300">
          Today: <span className="font-medium text-white">Nov 27, 2025</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
          A
        </div>
      </div>
    </div>
  );
}
