import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import blog1 from "../assets/blog1.jpg"; 
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const blogPosts = [
  {
    title: "The Medical Minute Quick Tips for Better Living",
    date: "11 March 2025",
    category: "Event",
    image: blog1, 
  },
  {
    title: "Healthy Habits for Busy Professionals",
    date: "11 March 2025",
    category: "Event",
    image: blog2,
  },
  {
    title: "Ask the Doctor Real Answers, Real Care",
    date: "11 March 2025",
    category: "Event",
    image: blog3,
  },
];

const DoctorsBlog = () => {
  return (
    <section className="bg-white text-black px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-10">
        <button className="border-2 border-blue-600 rounded-3xl"><h2 className="text-3xl font-bold text-blue-500 px-1 py-1"> <FaHeart className="inline-block"/> Doctor's Blog</h2></button> 
        <p className="text-sm text-gray-400">Your Health, My Words</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full inline-block">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <Link to='/blog-detail'>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl text-sm font-medium cursor-pointer">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsBlog;
