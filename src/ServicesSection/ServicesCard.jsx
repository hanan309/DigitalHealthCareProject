import { Link } from "react-router-dom";
import ghealth from "../assets/ghealth.webp";
import stress from "../assets/stress.png";
import specialist from "../assets/specialist.jpg";
import videoconsul from "../assets/videoconsul.jpg";
import women from "../assets/women.jpg";
import family from "../assets/family.jpg";

const ServicesCard = () => {
  const services = [
    {
      title: "General Health Check-Ups",
      description:
        "Regular health check-ups help detect potential issues early, ensuring timely treatment, better.",
      image: ghealth,
    },
    {
      title: "Stress & Lifestyle Counseling",
      description:
        "Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle.",
      image: stress,
    },
    {
      title: "Referral to Specialists",
      description:
        "Accurate assessments with timely referrals to trusted medical specialists, ensuring you receive expert care.",
      image: specialist,
    },
    {
      title: "Online Video Consultation",
      description:
        "Connect with your doctor anytime, anywhere. Our secure video consultations offer fast, private, and professional.",
      image: videoconsul,
    },
    {
      title: "Women's & Men's Health",
      description:
        "Our Women's & Men's Health services are tailored to address the unique physical, hormonal, and lifestyle in.",
      image: women,
    },
    {
      title: "Family Health Services",
      description:
        "Comprehensive care for all ages—children to seniors. We offer preventive checkups, chronic care, vaccinations.",
      image: family,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Health Services
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our wide range of personalized medical services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-12 h-12 object-contain rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link to='/blog-detail'>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              READ MORE
            </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
