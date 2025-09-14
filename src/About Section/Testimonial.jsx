import React, { useState, useEffect } from "react";
import feedback1 from "../assets/feedback1.jpeg";
import feedback2 from "../assets/feedback2.jpeg";
import feedback3 from "../assets/feedback3.jpg";
import { FaHeart } from "react-icons/fa";

const testimonial = [
  {
    name: "Hanan Ali",
    role: "Medical Assistant",
    image: feedback1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula",
  },
  {
    name: "Hanan Awan",
    role: "Cardiologist",
    image: feedback2,
    message:
      "Exceptional care and attention. The team made me feel safe and supported throughout my treatment.",
  },
  {
    name: "Muhammad Hanan",
    role: "Pediatric Nurse",
    image: feedback3,
    message:
      "The environment is warm and welcoming. Truly a place where compassion meets excellence.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % testimonial.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, role, image, message } = testimonial[current];

  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <button className="border-2 border-blue-600 rounded-3xl">
        <h2 className="text-medium font-bold text-blue-600 uppercase tracking-wide mb-2 mx-1 my-1">
          <FaHeart className="inline-block"/> Patient Says
        </h2>
        </button>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Happy Patients Says
        </h3>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-500">
          <p className="text-gray-700 italic mb-4">“{message}”</p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
