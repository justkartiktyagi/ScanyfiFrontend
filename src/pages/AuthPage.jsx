import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 w-full max-w-md rounded-2xl p-8 shadow-2xl text-white border border-gray-700">
        {/* Header Tabs */}
        <div className="flex w-full mb-6 border-b border-gray-700">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              isLogin
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              !isLogin
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Forms */}
        {isLogin ? (
          // ---------------- LOGIN ----------------
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Normal Login */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
            >
              Login
            </button>
            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            {/* Login as Center */}
            <Link to="/onboard">
              <button
                type="button"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg border border-gray-600"
              >
                Login as Center
              </button>
            </Link>
          </form>
        ) : (
          // ---------------- SIGNUP ----------------
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Normal Signup */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
            >
              Create Account
            </button>
            {/* Google Signup */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <FcGoogle className="text-2xl" />
              Signup with Google
            </button>
            {/* Signup as Center */}
            <Link to="/onboard">
              <button
                type="button"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg border border-gray-600"
              >
                Signup as Center
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
