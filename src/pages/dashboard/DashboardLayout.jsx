import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function DashboardLayout() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1320,transparent)] text-gray-800">
      <div className="md:flex">
        <Sidebar centerName="CityScan MRI Center" />

        <div className="flex-1 p-4 md:p-8">
          <Topbar onMenuToggle={() => setShowMobileMenu((s) => !s)} />

          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
