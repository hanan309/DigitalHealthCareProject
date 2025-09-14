import { Link } from "react-router-dom";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";

const OnlineConsultation = () => {
  return (
    <section className="bg-blue-800 text-white px-4 sm:px-6 lg:px-12 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white uppercase">
            YOUR HEALTH, YOUR CONVENIENCE
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Consult Your Doctor Online — Anytime, Anywhere
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Say goodbye to long queues and unnecessary travel. With our secure
            video consultation service, you can now talk to experienced doctors
            from the comfort of your home.
          </p>

          {/* Features */}
          <ol className="space-y-2 text-sm text-gray-200">
            <li>1. Speak with certified specialists in real time</li>
            <li>2. Easy appointment booking via mobile or web</li>
            <li>3. Private, secure, and confidential video calls</li>
            <li>4. Available 7 days a week, including evenings</li>
          </ol>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="mt-6 bg-green-600 hover:bg-white hover:text-blue-600 transition-colors px-6 py-3 rounded-2xl font-semibold text-white cursor-pointer">
              Book A Video Call
            </button>
          </Link>
        </div>

        {/* Right: Mobile Screens */}
        <div className="flex justify-center lg:justify-end gap-6">
          <img
            src={doctor1}
            alt="Dr. Tiffany Rizka"
            className="w-40 sm:w-48 md:w-56 rounded-xl shadow-lg object-cover"
          />
          <img
            src={doctor2}
            alt="Doctor"
            className="w-40 sm:w-48 md:w-56 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultation;
