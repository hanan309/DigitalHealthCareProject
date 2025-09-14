import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const AboutDoctor = () => {
  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Schedule & Emergency */}
        <div className="bg-blue-800 rounded-xl p-4 shadow-lg space-y-4 max-w-sm mx-auto text-center">
          <h2 className="text-lg font-semibold text-green-400">
            Time For Meet
          </h2>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="font-medium">Monday - Friday:</span> 9:00 PM -
              9:00 PM
            </li>
            <li>
              <span className="font-medium">Saturday - Sunday:</span> 9:00 PM -
              9:00 PM
            </li>
          </ul>

          <div className="mt-4">
            <h3 className="text-base font-semibold text-green-400">
              For Emergency Care
            </h3>
            <p className="text-white text-sm mt-1">+208-6066-1012</p>
          </div>
        </div>

        {/* Right: Bio & Quote */}
        <div className="space-y-6">
          <button className="border border-blue-600 rounded-2xl px-1 py-1 text-blue-600 flex items-center "> <FaHeart/> About Me</button>
          <h2 className="text-3xl font-bold text-black">
            {" "}
            My Journey in Medicine
          </h2>
          <p className="text-black text-sm leading-relaxed">
            I'm Dr. Tushar Raje (Specialization: Internal Medicine Specialist)
            with a passion for providing holistic, evidence-based medical care.
            With over 12 years of experience, I've had the privilege of treating
            thousands of patients with empathy, accuracy, and dedication.
            <br />
            <br />I strongly believe that medicine is not just about treating
            diseases, but about understanding people, building trust, and
            guiding them toward long-term wellness.
          </p>

          {/* Quote */}
          <blockquote className="bg-blue-800 text-white italic text-sm p-4 rounded-lg border-l-4 border-green-400">
            “Doctor's Moto or Belief: Healing begins with listening.”
          </blockquote>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/contact">
            <button className="bg-green-600 hover:bg-green-700 transition-colors px-5 py-2 rounded-2xl font-semibold cursor-pointer">
              SEND MESSAGE
            </button>
            </Link>
            <Link to="/contact">
            <button className="border border-blue-700 hover:bg-white hover:text-blue-600 bg-blue-600 transition-colors px-5 py-2 rounded-2xl cursor-pointer font-semibold">
              VIDEO CALL
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
