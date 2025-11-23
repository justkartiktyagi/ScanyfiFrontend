// src/components/Services.jsx

const services = [
  {
    title: "MRI Scan",
    image: "/services/mri.png", // replace with actual paths
  },
  {
    title: "CT Scan",
    image: "/services/ct.png",
  },
  {
    title: "Sonography",
    image: "/services/sono.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 bg-gray-900 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-28 mb-6"
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
