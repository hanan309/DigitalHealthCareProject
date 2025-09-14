import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';

const DoctorList = () => {
  const doctors = [
    {
      name: "Dr. Sohel Islam",
      title: "Chief Pathologist",
      image: doc1,
    },
    {
      name: "Dr. Tanvir Alam",
      title: "Consultant Pathologist",
      image: doc2,
    },
    {
      name: "Dr. Nafisa Rahman",
      title: "Family Physician",
      image: doc3,
    },
    {
      name: "Dr. Tania Akter",
      title: "Physician",
      image: doc4,
    },
    {
      name: "Dr. Sumiya Ahmed",
      title: "Women's Health Specialist",
      image: doc5,
    },
    {
      name: "Dr. Arif Hossain",
      title: "Online Consultation Expert",
      image: doc6,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Meet Our Medical Experts
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted professionals dedicated to your health and well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center hover:border-4 hover:border-blue-600"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 hover:border-4 hover:border-blue-600"
            />
            <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{doc.title}</p>
            <div className="flex justify-center gap-4 text-blue-600">
              <a href="#"><i className="fab fa-facebook-f"><FaFacebook /></i></a>
              <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
              <a href="#"><i className="fab fa-instagram text-red-500"><FaInstagramSquare /></i></a>
              <a href="#"><i className="fab fa-linkedin-in"><FaLinkedin /></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorList;
