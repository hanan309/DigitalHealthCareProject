import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HealthSection = () => {
  const watermarks = ["envato", "meddtics", "healthcare", "wellness"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % watermarks.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-blue-950 text-white px-4 sm:px-6 lg:px-12 py-16 overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-6xl md:text-8xl font-bold text-white/5 uppercase tracking-widest animate-pulse">
          {watermarks[current]}
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Do You Have Health Problems
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-2xl font-semibold text-sm cursor-pointer">
            <FaHeart className="text-white" />
            Do You Need Emergency Care
          </button>
          <Link to="/contact">
            <button className="flex items-center gap-2 border border-white hover:bg-white hover:text-blue-700 px-5 py-3 rounded-2xl font-semibold text-sm cursor-pointer">
              I NEED HELP
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
