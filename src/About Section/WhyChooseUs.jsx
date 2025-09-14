import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <button className="border-2 border-blue-600 rounded-3xl">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 mx-1 my-1">
            <FaHeart className="inline-block" /> Why Choose Us
          </h2>
        </button>
        <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Where Compassion Meets Excellence
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          That's why we are committed to delivering world-class medical services
          with compassion, innovation, and integrity — putting your health and
          comfort first.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <h4 className="text-xl font-bold mb-2 hover:text-white">
            Personalized Patient Care
          </h4>
          <p>
            Our team includes highly-trained doctors, nurses, and specialists,
            each dedicated to providing the best possible care.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <h4 className="text-xl font-bold mb-2 hover:text-white">
            World-Class Medical Experts
          </h4>
          <p>
            Our team includes highly-trained doctors, nurses, and specialists,
            each dedicated to providing the best possible care.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg hover:scale-105 transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <h4 className="text-xl font-bold mb-2 hover:text-white">
            24/7 Emergency Services
          </h4>
          <p>
            We are always ready to respond with advanced equipment and
            compassionate care, anytime you need us.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/book-appointment">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
            Appointment Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
