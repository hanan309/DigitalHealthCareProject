const AppointmentForm = () => (
  <section className="px-4 py-12 mx-auto bg-white max-w-2xl rounded-lg shadow">
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Apply For Appointment</h1>
    <form className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
      </div>

      {/* Phone & Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Your Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Your Number"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="date" className="text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="date" className="text-sm font-medium text-gray-700">Select Time</label>
          <input
            type="time"
            id="time"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
      </div>

      {/* Doctor & Treatment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="doctor" className="text-sm font-medium text-gray-700">Select Doctor</label>
          <select
            id="doctor"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          >
            <option>Select Doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. Khan</option>
            <option>Dr. Patel</option>
          </select>
        </div>
        <div>
          <label htmlFor="treatment" className="text-sm font-medium text-gray-700">Select Treatment</label>
          <select
            id="treatment"
            className="mt-1 block w-full px-4 py-2 border-2 border-blue-600 rounded-md focus:ring-blue-600 focus:border-blue-600"
          >
            <option>Select Treatment</option>
            <option>Dental</option>
            <option>Cardiology</option>
            <option>Orthopedics</option>
          </select>
        </div>
      </div>

      {/* Terms & Submit */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 text-blue-600 focus:ring-blue-600 rounded"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I agree terms and conditions
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Appointment Now
      </button>
    </form>
  </section>
);

export default AppointmentForm;
