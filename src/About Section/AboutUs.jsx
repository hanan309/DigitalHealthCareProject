import about1 from "../assets/about1.jpg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <button className="border-2 border-blue-600 rounded-2xl">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mx-1 my-1">
             <FaHeart className="inline-block"/> About Us
            </h2>
          </button>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Committed to Your Care Every Step of the Way
          </h3>
          <p className="text-gray-600 mb-6">
            With a team of world-class doctors, experienced nurses, and
            dedicated healthcare professionals, we deliver compassionate,
            high-quality medical care at every stage.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-3 text-gray-700">
            <li>
              {" "}
              <IoIosArrowDroprightCircle className="inline-block text-blue-600" />{" "}
              Highly Qualified Specialists
            </li>
            <li>
              <IoIosArrowDroprightCircle className="inline-block  text-blue-600" />{" "}
              Safe, Comfortable Environment
            </li>
            <li>
              {" "}
              <IoIosArrowDroprightCircle className="inline-block text-blue-600" />{" "}
              Patient-Centered Approach
            </li>
            <li>
              {" "}
              <IoIosArrowDroprightCircle className="inline-block text-blue-600" />{" "}
              Advanced Medical Equipment
            </li>
            <li>
              {" "}
              <IoIosArrowDroprightCircle className="inline-block text-blue-600" />{" "}
              24/7 Emergency Services
            </li>
            <li>
              {" "}
              <IoIosArrowDroprightCircle className="inline-block text-blue-600" />{" "}
              Affordable, Transparent Pricing
            </li>
          </ul>
          <div className="mt-8">
            <p className="font-bold text-2xl text-gray-800">Muhammad Hanan</p>
            <p className="text-sm text-gray-500">
              CEO, Founder Of Medical Health Care
            </p>
          </div>
        </div>

        <div className="w-full h-full md:h-full lg:h-[80%] rounded-lg overflow-hidden shadow-lg">
          <img
            src={about1} 
            alt="CarePoint Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
