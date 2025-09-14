const AppointmentSection = () => {
  return (
    <section className="bg-blue-100 text-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl font-semibold cursor-pointer">
            Appointment
          </button>
          <h2 className="text-2xl font-bold">Apply for Appointment</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Dhaka Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.379879051647!2d90.42387607538312!3d23.80536107861159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c796c3e3b6f3%3A0x9f6e5c3b4b2c7b3e!2sSouth%20Badda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-72"
            ></iframe>
          </div>
        </div>

        <form className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded bg-blue-500 text-white placeholder-gray-200 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded bg-blue-500 text-white placeholder-gray-200 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="w-full px-4 py-2 rounded bg-blue-500 text-white placeholder-gray-200 focus:outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 rounded bg-blue-500 text-white placeholder-gray-100 focus:outline-none"
          />
          <select className="w-full px-4 py-2 rounded bg-blue-500 text-white focus:outline-none">
            <option>Select Doctor</option>
            <option>Dr. Rizka</option>
            <option>Dr. Tushar</option>
          </select>
          <select className="w-full px-4 py-2 rounded bg-blue-500 text-white focus:outline-none">
            <option>Select Treatment</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
          </select>

          <label className="flex items-center gap-2 text-sm text-blue-600">
            <input type="checkbox" className="accent-blue-600 cursor-pointer" />
            I agree terms and conditions
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold cursor-pointer"
          >
            Appointment Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
