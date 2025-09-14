import location from '../assets/location.jpg';
import email from '../assets/email.png';
import phone from '../assets/phone.png';

const ContactCard = () => {
  const contacts = [
    {
      icon: location,
      title: "Our Location",
      details: ["House #5, Street Number #8A", "Brasilia-70000-000, Brazil"],
    },
    {
      icon: email,
      title: "Email Us",
      details: ["info@example.com", "info@exemple.com"],
    },
    {
      icon: phone,
      title: "Call Us",
      details: ["+200-666-01112", "+39061361877"],
    },
  ];

  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={contact.icon}
              alt={contact.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {contact.title}
            </h3>
            <div className="text-gray-600 space-y-1">
              {contact.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;
