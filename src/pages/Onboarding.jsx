import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Onboarding() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [centerName, setCenterName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [photo, setPhoto] = useState(null);
  const [services, setServices] = useState([]);
  const [machineDescription, setMachineDescription] = useState("");

  const availableServices = ["MRI SCAN", "CT SCAN", "ULTRASOUND"];

  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({
      name,
      centerName,
      address,
      contact,
      photo,
      services,
      machineDescription,
    });
  };

  const handleCenterLogin = (e) => {
    e.preventDefault();
    console.log("Center Login:", { email, password });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 w-full max-w-md rounded-2xl p-8 shadow-2xl text-white border border-gray-700">
        {/* Header Tabs */}
        <div className="flex w-full mb-6 border-b border-gray-700">
          <button
            onClick={() => setIsSignup(true)}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              isSignup
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400"
            }`}
          >
            Signup
          </button>

          <button
            onClick={() => setIsSignup(false)}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              !isSignup
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400"
            }`}
          >
            Login as Center
          </button>
        </div>

        {/* SIGNUP FORM */}
        {isSignup ? (
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-5 max-h-[70vh] overflow-y-auto pr-2"
          >
            {/* PERSONAL INFO */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-yellow-400">
                Personal Details
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Center Name"
                value={centerName}
                onChange={(e) => setCenterName(e.target.value)}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="Center Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* PHOTO UPLOAD */}
            <div>
              <h2 className="text-lg font-semibold text-yellow-400 mb-2">
                Upload Center Photo
              </h2>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="w-full bg-gray-700 px-4 py-3 rounded-lg cursor-pointer"
              />
            </div>

            {/* SERVICES SECTION */}
            <div>
              <h2 className="text-lg font-semibold text-yellow-400 mb-2">
                Services Offered
              </h2>

              <div className="bg-gray-700 p-3 rounded-lg">
                <select
                  onChange={(e) => toggleService(e.target.value)}
                  className="w-full bg-gray-600 px-3 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select a service</option>
                  {availableServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* MACHINE INFO */}
            {services.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">
                  Machine Description (Based on Selected Services)
                </h2>
                <textarea
                  placeholder="Describe your machines..."
                  value={machineDescription}
                  onChange={(e) => setMachineDescription(e.target.value)}
                  className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 h-24"
                />
              </div>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg mt-2"
            >
              Create Center Account
            </button>
          </form>
        ) : (
          /* LOGIN AS CENTER FORM */
          <form onSubmit={handleCenterLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email/Mobile No"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Login Button */}
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
              >
                Login as Center
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
