const CommentForm = () => (
  <section className="bg-white px-4 py-12 md:py-16 lg:px-32">
    <div className="max-w-4xl mx-auto space-y-8">
      <h3 className="text-2xl font-bold text-gray-800">Leave a Comment</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Type your message"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer"
        >
          SEND MESSAGE 
        </button>
      </form>
    </div>
  </section>
);

export default CommentForm;
