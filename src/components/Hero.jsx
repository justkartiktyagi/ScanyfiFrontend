import { useEffect, useState } from "react";

const images = ["/hero/2.jpg", "/hero/3.jpg", "/hero/1.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          src={images[index]}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Book MRI, CT Scan, X-Ray Online
        </h1>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl text-lg transition-all">
          Book a Scan
        </button>
      </div>
    </section>
  );
}
