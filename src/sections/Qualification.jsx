import { FaMedal, FaStar, FaTrophy } from "react-icons/fa";

const QualificationAwards = () => {
  const qualifications = Array(4).fill({
    university: "Oxford University",
    degree: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    period: "Jan 2014 – Dec 2018",
  });

  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-500">
          My Qualification & Awards
        </h2>

        {/* Qualification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="bg-blue-800 rounded-xl p-6 shadow-md space-y-2 text-center"
            >
              <h3 className="text-lg font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">{item.university}</h3>
              <p className="text-sm text-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer">{item.degree}</p>
              <p className="text-sm text-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer">{item.period}</p>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <FaStar className="text-blue-500 text-4xl" />
          <FaTrophy className="text-blue-500 text-4xl" />
          <FaMedal className="text-blue-500 text-4xl" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl font-semibold cursor-pointer">
            VIEW ALL AWARDS
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualificationAwards;
