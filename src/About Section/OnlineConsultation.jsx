import { Link } from "react-router-dom";
import videocall from "../assets/videocall.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const OnlineConsultation = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
            <button className="border-2 border-blue-600 rounded-2xl">
          <h2 className="text-medium font-bold text-blue-600 uppercase tracking-wide mx-1 my-1">
            <FaHeart className="inline-block text-blue-600" /> Your Health, Your Convenience
          </h2>
          </button>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Consult Your Doctor Online — Anytime, Anywhere
          </h3>
          <p className="text-gray-600 mb-6">
            Say goodbye to long queues and unnecessary travel. With our secure video consultation service, you can now talk to experienced doctors from the comfort of your home.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li><IoIosArrowDroprightCircle className="inline-block text-blue-600" /> Speak with certified specialists in real time</li>
            <li><IoIosArrowDroprightCircle className="inline-block text-blue-600" /> Easy appointment booking via mobile or web</li>
            <li><IoIosArrowDroprightCircle className="inline-block text-blue-600" /> Private, secure, and confidential video calls</li>
            <li><IoIosArrowDroprightCircle className="inline-block text-blue-600" /> Available 7 days a week, including evenings</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to='/contact'>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
              Book A Video Call
            </button>
            </Link>
            <Link to='/team'>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition cursor-pointer">
              See Available Doctors
            </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={videocall} // Replace with your actual image path
            alt="Online Doctor Consultation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultation;
