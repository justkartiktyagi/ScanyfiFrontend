import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/final_logo.png" alt="Scanyfi Logo" className="h-14 w-auto" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#centers" className="hover:text-yellow-400">
          Find Centers
        </a>
        <a href="#services" className="hover:text-yellow-400">
          Services
        </a>
        <a href="#reports" className="hover:text-yellow-400">
          Reports
        </a>
        <a href="#bookings" className="hover:text-yellow-400">
          Bookings
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact Us
        </a>
      </nav>

      {/* Login Button Desktop */}
      <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold">
        Login
      </button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-start px-6 py-4 gap-4 md:hidden text-sm font-medium shadow-lg border-t border-gray-700">
          <a
            href="#centers"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Find Centers
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#reports"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Reports
          </a>
          <a
            href="#bookings"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Bookings
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold w-full text-center"
            onClick={() => setOpen(false)}
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}
