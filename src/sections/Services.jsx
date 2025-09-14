import { Link } from "react-router-dom";
import { FaClipboardCheck, FaUserCog, FaUsers, FaHeart } from "react-icons/fa";

const MedicalServices = () => {
  return (
    <section className="bg-blue-100 text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <button className="justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl cursor-pointer font-semibold">
          <FaHeart className="inline-block mr-1" />
          Services I Provide
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-blue-800 rounded-xl p-6 shadow-lg space-y-4 text-center hover:scale-105 transform transition shadow-cyan-50 cursor-pointer">
          <FaClipboardCheck className="text-4xl text-white mx-auto" />
          <h3 className="text-xl font-semibold">General Health Check-Ups</h3>
          <p className="text-sm text-gray-300">
            Regular health checkups help detect potential issues early, ensuring
            timely treatment better.
          </p>
          <Link to="/blog-detail">
            <a
              href="#"
              className="text-white text-sm font-medium hover:underline"
            >
              READ MORE
            </a>
          </Link>
        </div>

        <div className="bg-blue-800 rounded-xl p-6 shadow-lg space-y-4 text-center hover:scale-105 transform transition shadow-cyan-50 cursor-pointer">
          <FaUserCog className="text-4xl text-white mx-auto" />
          <h3 className="text-xl font-semibold">
            Stress & Lifestyle Counseling
          </h3>
          <p className="text-sm text-gray-300">
            Personalized counseling to manage stress, improve sleep, build
            healthy habits, and create a balanced lifestyle.
          </p>
          <Link to="/blog-detail">
            <a
              href="#"
              className="text-white text-sm font-medium hover:underline"
            >
              READ MORE
            </a>
          </Link>
        </div>

        <div className="bg-blue-800 rounded-xl p-6 shadow-lg space-y-4 text-center hover:scale-105 transform transition shadow-cyan-50 cursor-pointer">
          <FaUsers className="text-4xl text-white mx-auto" />
          <h3 className="text-xl font-semibold">Referral to Specialists</h3>
          <p className="text-sm text-gray-300">
            Accurate assessments with timely referrals to trusted medical
            specialists, ensuring you receive expert care.
          </p>
          <Link to="/blog-detail">
            <a
              href="#"
              className="text-white text-sm font-medium hover:underline"
            >
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
