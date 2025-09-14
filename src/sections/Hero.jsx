import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import doctor from "../assets/doctor.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const quotes = [
    {
      text: "My mission is to treat every patient with care.",
      author: "Robel Roy .USY",
    },
    {
      text: "Compassion is the foundation of every healing journey",
      author: "Dr. Ayesha Khan",
    },
    {
      text: "Medicine is not just science — it's empathy in action",
      author: "Dr. Omar Farooq",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="bg-blue-950 text-white px-6 py-12 md:flex md:items-center md:justify-between gap-10">
      
      <div className="relative md:w-1/2 flex justify-center">
        <img
          src={doctor}
          alt="doctor"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-300 bg-opacity-60 p-4 rounded-lg text-center w-[80%] max-w-[90%] overflow-hidden">
          <p className="text-sm md:text-base font-medium leading-relaxed break-words">
            {quotes[index].text}
          </p>
          <span className="block mt-2 text-xs md:text-sm italic text-white">
            — {quotes[index].author}
          </span>
        </div>
      </div>

      <div className="md:w-1/2 space-y-4 mt-10 md:mt-0">
        <h2 className="text-lg tracking-wide text-green-400">Hi, I'm</h2>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug break-words">
          Meet Dr. Tushar Raja — Your Trusted Healthcare Partner
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed break-words">
          Dr. Tushar is a highly experienced and compassionate General Physician
          dedicated to providing personalized care and expert medical guidance.
        </p>

        <blockquote className="italic text-sm md:text-base text-gray-400 border-l-4 border-green-400 pl-4 break-words">
          "My mission is to treat every patient with care, respect, and the
          highest standard of medical knowledge — Rohit Roy, USY"
        </blockquote>

        <div className="flex flex-wrap gap-3 mt-4">
          <Link to="/book-appointment"> 
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition cursor-pointer">
            Book Appointment
          </button>
          </Link>
          <button className="border border-white hover:bg-white hover:text-blue-950 px-4 py-2 rounded transition cursor-pointer">
            View Schedule
          </button>
        </div>

        <div className="flex gap-4 mt-6 text-lg md:text-xl">
          <FaFacebookF className="hover:text-green-400 cursor-pointer transition" />
          <FaTwitter className="hover:text-green-400 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-green-400 cursor-pointer transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
