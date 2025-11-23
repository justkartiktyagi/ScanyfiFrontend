import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <img
            src="/final_logo.png" // keep correct path
            alt="Scanyfi Logo"
            className="h-16 w-auto mb-4"
          />

          <p className="text-sm leading-6">
            Advanced diagnostic scanning services with accuracy, speed, and
            care. Your health trusted with technology.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-500">
                Services
              </a>
            </li>
            <li>
              <a href="#centers" className="hover:text-yellow-500">
                Centers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/onboard-center"
                className="hover:text-yellow-500 font-semibold"
              >
                Onboard a New Center
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} /> +91 9876543210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> support@scanyfi.com
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a href="#" className="hover:text-yellow-500">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Scanyfi. All rights reserved.
      </div>
    </footer>
  );
}
