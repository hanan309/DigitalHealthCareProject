import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import feedback1 from "../assets/feedback1.jpeg";
import feedback2 from "../assets/feedback2.jpeg";
import feedback3 from "../assets/feedback3.jpg";

const testimonials = [
  {
    name: "Hanan",
    title: "Medical Assistant",
    quote:
      "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.",
    image: feedback1, // Replace with actual image path
  },
  {
    name: "Hanan Ali",
    title: "Medical Assistant",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: feedback2,
  },
  {
    name: "Muhammad Hanan",
    title: "Medical Assistant",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: feedback3,
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index) => (index + 1) % testimonials.length);
  const prev = () => setIndex((index) => (index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000); 
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-blue-100 text-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Section Title */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl cursor-pointer font-semibold">
            <FaHeart className="inline-block mr-1"/>
          Client's Testimonial
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">Clients Feedbacks</h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 sm:left-4 text-white bg-blue-800 p-2 rounded-full hover:bg-green-600"
          >
            <FaArrowLeft />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white text-blue-950 rounded-xl p-6 shadow-lg max-w-md mx-auto space-y-4">
            <img
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full mx-auto object-cover"
            />
            <button className="bg-blue-400 rounded-2xl"><h3 className="text-lg font-semibold text-white px-1 py-1">{current.name}</h3></button>
            <p className="text-sm text-gray-600">{current.title}</p>
            <p className="text-sm text-gray-700 italic">{current.quote}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 sm:right-4 text-white bg-blue-800 p-2 rounded-full hover:bg-green-600"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
