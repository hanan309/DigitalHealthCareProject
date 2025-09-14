import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';

const comments = [
  {
    image: doctor1,
    name: "Muhammad Hanan",
    date: "March 20, 2023 at 2:37 pm",
    avatar: "/assets/leslie.jpg",
    text: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
  },
  {
    image: doctor2,
    name: "Hanan Ali",
    date: "March 20, 2023 at 2:37 pm",
    avatar: "/assets/ralph.jpg",
    text: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummys",
  },
];

const CommentsSection = () => (
  <section className="bg-white px-4 py-12 md:py-16 lg:px-32">
    <div className="max-w-4xl mx-auto space-y-8">
      <h3 className="text-2xl font-bold text-gray-800">02 Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 border-b pb-6">
          <img
            src={comment.image}
            alt={comment.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-lg font-semibold text-gray-900">{comment.name}</h4>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {comment.text}
            </p>
            <button className="self-start mt-2 px-4 py-1 text-sm font-medium border-2 border-blue-600 bg-white text-blue-600 rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition">
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CommentsSection;
