// src/components/Centers.jsx

const centers = [
  {
    name: "Medico Scan Center",
    distance: "1.2 km",
    rating: 4.6,
  },
  {
    name: "City MRI & CT Hub",
    distance: "2.4 km",
    rating: 4.8,
  },
  {
    name: "Prime Diagnostics Lab",
    distance: "3.1 km",
    rating: 4.5,
  },
];

export default function Centers() {
  return (
    <section id="centers" className="w-full py-16 bg-white text-gray-900">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Nearby Centers
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {centers.map((center, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold">{center.name}</h3>
            <p className="text-gray-600">Distance: {center.distance}</p>
            <p className="text-yellow-600 font-bold">⭐ {center.rating}</p>

            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
