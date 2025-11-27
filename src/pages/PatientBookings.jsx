import Header from "../components/Header";

export default function PaientBookings() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Bookings</h1>

        <div className="space-y-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    MRI Spine Scan
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Booked for: 18 Jan 2025
                  </p>
                  <p className="text-gray-500 text-sm">
                    Center: Arogya Diagnostics
                  </p>
                </div>

                <span className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium">
                  Confirmed
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700">
                  View Details
                </button>
                <button className="px-4 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
