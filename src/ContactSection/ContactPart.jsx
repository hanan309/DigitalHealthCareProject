const ContactPart = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Dhaka Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902621416884!2d90.38805407510783!3d23.75088507869359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5b3e3e2e3b%3A0x7c3b7e3b7e3b7e3b!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's talk...</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPart;
