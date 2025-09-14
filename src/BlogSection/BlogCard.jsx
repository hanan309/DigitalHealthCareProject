import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const BlogCard = () => {
  const blogDetail = [
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
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogDetail.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full inline-block cursor-pointer">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <Link to="/blog-detail">
                <button className="bg-blue-600 rounded-2xl text-white px-2 py-1 cursor-pointer">
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

export default BlogCard;
