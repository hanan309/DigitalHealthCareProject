import { TfiHeartBroken } from "react-icons/tfi";
import { FaCcPaypal, FaCcVisa, FaApplePay, FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Branding & Subscription */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-400"> <TfiHeartBroken className="inline-block"/> Meditics</h2>
          <p className="text-sm text-gray-300">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded bg-white text-blue placeholder-gray-400 focus:outline-none w-full sm:w-auto"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-2xl font-semibold text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>General Health Check-Ups</li>
            <li>Stress & Lifestyle Counselling</li>
            <li>Vaccinations & Immunizations</li>
            <li>Referral to Specialists</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li> 100/2 Street, New Elephant Road, Sandigo, USA</li>
            <li> info@example.com</li>
            <li> +208-6666-7112</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© Meditics 2023. All Rights Reserved.</p>
        <div className="flex items-center gap-4 text-white text-4xl">
          <FaGooglePay />
          <FaApplePay />
          <FaCcPaypal />
          <FaCcVisa />
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
