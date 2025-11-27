import Header from "../components/Header";

export default function PatientReports() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Reports</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                MRI Brain Scan
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Uploaded: 12 Jan 2025
              </p>

              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700">
                  View
                </button>
                <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
