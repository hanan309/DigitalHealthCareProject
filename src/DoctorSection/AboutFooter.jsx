import { Link } from "react-router-dom";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import apple from "../assets/apple.png";
import gpay from "../assets/gpay.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.jpg";
import linkedin from "../assets/linkedin.png";
import { FaHeartPulse } from "react-icons/fa6";

const AboutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:py-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-500 cursor-pointer">
            {" "}
            <FaHeartPulse className="inline-block text-green-500 cursor-pointer" />{" "}
            Meditics
          </h2>
          <p className="text-gray-300 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img src={gpay} alt="Google Pay" className="h-6" />
            <img src={apple} alt="Apple Pay" className="h-6" />
            <img src={paypal} alt="PayPal" className="h-6" />
            <img src={visa} alt="Visa" className="h-6" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <Link to="/blog-detail">
              <li className="cursor-pointer hover:text-blue-400">
                General Health Check-Ups
              </li>
            </Link>
            <Link to="/blog-detail">
              <li className="cursor-pointer hover:text-blue-400">
                Stress & Lifestyle Counseling
              </li>
            </Link>
            <Link to="/blog-detail">
              <li className="cursor-pointer hover:text-blue-400">
                Vaccinations & Immunizations
              </li>
            </Link>
            <Link to="/blog-detail">
              <li className="cursor-pointer hover:text-blue-400">
                Referral to Specialists
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Join The Newsletter</h4>
          <p className="text-gray-300 mb-4">
            Want to be notified about our services, just sign up and we will
            send you a notification by email.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-md bg-white text-gray-900 w-full sm:w-auto flex-grow"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© Meditics 2025, All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-2 flex-wrap">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Environmental Policy
          </a>
          <div className="flex gap-4 mt-2">
            <img src={facebook} alt="Facebook" className="h-5" />
            <img src={twitter} alt="Twitter" className="h-5" />
            <img src={instagram} alt="Instagram" className="h-5" />
            <img src={linkedin} alt="LinkedIn" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
