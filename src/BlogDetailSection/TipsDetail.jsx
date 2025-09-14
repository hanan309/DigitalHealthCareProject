import { Link } from "react-router-dom";
import detail from "../assets/detail.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const categories = [
  { label: "Health & Wellness", count: 8 },
  { label: "Preventive Care", count: 11 },
  { label: "Nutrition & Lifestyle", count: 18 },
  { label: "Senior & Geriatric Care", count: 11 },
  { label: "Medical Education & Tips", count: 7 },
  { label: "Surgery & Recovery", count: 7 },
];

const tips = [
  {
    title: "Prioritize Balanced, Quick Meals",
    content:
      "Choose whole foods like fruits, vegetables, lean meats, and whole grains. Prepare meals in advance or opt for healthier options when eating out. Keep healthy snacks on hand for busy days.",
  },
  {
    title: "Move Throughout the Day",
    content:
      "If you can’t hit the gym, aim for short bursts of activity like take stairs, walking breaks, or do a 10-minute stretch session. Every bit of movement adds up.",
  },
  {
    title: "Stay Hydrated",
    content:
      "Drink at least 8 cups of water a day. Avoid sugary drinks and limit caffeine. Hydration boosts energy, focus, and productivity killers.",
  },
  {
    title: "Protect Your Sleep",
    content:
      "Stick to a consistent sleep schedule, aim for 7–8 hours of rest. Sleep is essential for immune function, mental clarity, and long-term health.",
  },
  {
    title: "Manage Stress Effectively",
    content:
      "Try mindfulness apps, deep breathing, or short meditation sessions. Even small moments can make a difference in your mental well-being.",
  },
  {
    title: "Schedule Health Checkups",
    content: "Visit your doctor regularly for screenings and preventive care.",
  },
];

const recentPosts = [
  {
    title: "A Day in the Life of a Hospital Nurse",
    date: "May 12, 2025",
    image: blog1,
  },
  {
    title: "Choosing the Right Doctor for Your Needs",
    date: "May 12, 2025",
    image: blog2,
  },
  {
    title: "Why Annual Health Screenings Are Essential",
    date: "May 12, 2025",
    image: blog3,
  },
];

// Sidebar: Categories
const CategoriesSidebar = () => (
  <aside className="w-full bg-gray-100 p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
      Categories
    </h3>
    <ul className="flex flex-col gap-3">
      {categories.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white text-blue-600 px-4 py-2 rounded-2xl cursor-pointer hover:scale-105 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          <span className="font-medium text-sm sm:text-base">{item.label}</span>
          <span className="text-sm font-semibold">
            ({item.count.toString().padStart(2, "0")})
          </span>
        </li>
      ))}
    </ul>
  </aside>
);

// Sidebar: Recent Posts
const RecentPostsSidebar = () => (
  <aside className="w-full bg-gray-50 rounded-2xl shadow-md p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
      Recent Posts
    </h3>
    <ul className="space-y-5">
      {recentPosts.map((post, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 hover:scale-105 transition duration-300"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-sm font-semibold text-blue-900 leading-snug">
              {post.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

// Sidebar: Contact Box
const ContactSidebar = () => (
  <aside className="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
    {/* Overlay background doctor image (optional) */}
    <div className="absolute inset-0 opacity-10 bg-cover bg-center"></div>

    <h3 className="text-xl font-bold mb-3 relative z-10">
      Have Additional Questions?
    </h3>
    <hr className="border-blue-300 mb-4 relative z-10" />
    <p className="mb-2 relative z-10">
      3rd Avenue, 83 Manhattan, London, UK
    </p>
    <p className="font-bold text-lg mb-2 relative z-10">+1890 123 456</p>
    <p className="mb-4 relative z-10">support@example.com</p>

    <Link to='/contact'>
    <button className="bg-white border-3 border-white text-blue-600 px-4 py-2 rounded-3xl font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition relative z-10 cursor-pointer">
      CONTACT US 
    </button>
    </Link>
  </aside>
);

const TipsDetail = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Blog Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow">
            <img
              src={detail}
              alt="Healthy Habits"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Blog Title */}
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            Healthy Habits for Busy Professionals
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-blue-600">
            <span className="border-2 border-blue-600 rounded-2xl px-2 py-0.5">
              By Admin
            </span>
            <span>•</span>
            <span className="border-2 border-blue-600 rounded-2xl px-2 py-0.5">
              4 min read
            </span>
            <span>•</span>
            <span className="border-2 border-blue-600 rounded-2xl px-2 py-0.5">
              0 Comments
            </span>
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p>
              Busy professionals often struggle to maintain healthy habits due
              to demanding schedules and limited time. This article offers
              practical, doctor-recommended strategies to stay well without
              sacrificing productivity.
            </p>
            <p>
              From mindful nutrition to short daily exercises, these tips are
              designed to fit seamlessly into your routine and support long-term
              wellness.
            </p>
          </article>

          {/* Highlighted Quote */}
          <blockquote className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md text-blue-800 text-sm md:text-base italic">
            “This blog post hits the mark perfectly for our target audience —
            busy professionals who care about their health but struggle with
            time.” — John Doe
          </blockquote>

          {/* Practical Health Tips */}
          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Practical Health Tips
            </h3>
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-2 border-l-4 border-blue-500 bg-gray-50 rounded-md hover:bg-blue-50 transition"
              >
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {String(index + 1).padStart(2, "0")}. {tip.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebars */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <CategoriesSidebar />
          <RecentPostsSidebar />
          <ContactSidebar />
        </div>
      </div>
      
    </section>
  );
};

export default TipsDetail;
