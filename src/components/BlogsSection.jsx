
const blogPosts = [
  {
    date: "January 10, 2024",
    title: "Why Data-Driven Decision Making is Key for Business Growth",
    content: "Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70aea78c6172c90cb280fde597b6b525fbab786bff9dda7e3fa8b349a3751585?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
  },
  {
    date: "September 1, 2024",
    title: "Top 5 Business Services to Boost Customer Satisfaction",
    content: "Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fe5563735eb2df21e5842d7ff37bca0477073328daa8b787f30abf72234a3c3?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
  },
  {
    date: "January 10, 2024",
    title: "Leveraging Software Solutions to Enhance Business Efficiency",
    content: "Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bcf4138c23fb025a145e36847088991e8ce0704ab761812a3ea239e16f4f6f0?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
  }
];

const BlogCard = ({ post }) => (
  <div className="flex flex-col grow shrink basis-0 p-6 bg-gray-50 rounded-3xl border border-gray-300 border-solid">
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full text-sm text-gray-700">
        <img
          loading="lazy"
          src={post.image}
          className="object-cover w-full rounded-lg aspect-[1.12]"
          alt={post.title}
        />
        <div className="gap-2.5 self-start px-6 py-2 mt-6 bg-white rounded-3xl border border-blue-800 border-solid max-md:px-5">
          {post.date}
        </div>
      </div>
      <div className="mt-3 text-2xl font-bold text-blue-800">{post.title}</div>
    </div>
    <div className="mt-5 text-lg text-slate-600 flex-grow">{post.content}</div>
  </div>
);

function BlogsSection() {
  return (
    <div className="flex flex-col px-32 py-16 max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full text-center w-[548px]">
          <div className="text-5xl font-semibold text-blue-800 max-md:max-w-full max-md:text-4xl">
            Blogs
          </div>
          <div className="mt-2 text-xl text-gray-500 max-md:max-w-full">
            Explore our blog for expert tips, industry insights, and engaging
            content on the latest trends. Stay informed and inspired!
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="flex gap-2.5 justify-center items-center self-center px-9 py-3.5 mt-8 text-base font-semibold text-center bg-white rounded-lg border border-blue-800 border-solid text-slate-800 max-md:px-5">
        <div className="self-stretch my-auto">View More</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34525eed8c08153000c95c53c95a7f56980533c3ab5ab8abf7a0cf380fe9ba6?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.63] w-[15px]"
          alt="Arrow"
        />
      </div>
    </div>
  );
}

export default BlogsSection;