import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import gpay from "../assets/gpay.png";
import apple from "../assets/apple.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:py-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-lg font-semibold mb-4">Payment Partners</h4>
          <div className="flex flex-wrap gap-4">
            <img src={gpay} alt="Google Pay" className="h-8" />
            <img src={apple} alt="Apple Pay" className="h-8" />
            <img src={paypal} alt="PayPal" className="h-8" />
            <img src={visa} alt="Visa" className="h-8" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="cursor-pointer hover:text-blue-400">General Health Check-Ups</li>
            <li className="cursor-pointer hover:text-blue-400">Stress & Lifestyle Counseling</li>
            <li className="cursor-pointer hover:text-blue-400">Vaccinations & Immunizations</li>
            <li className="cursor-pointer hover:text-blue-400">Referral to Specialists</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Join The Newsletter</h4>
          <p className="text-gray-300 mb-4">
            Subscribe to get updates on services and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-500 w-full sm:w-auto flex-grow bg-white"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© Meditics 2023. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-2 flex-wrap">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
