import Layout from "./Layout";
import story from "../assets/images/story.png";
import rct from "../assets/images/rct.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "The 20 Biggest Fintech Companies In Nigeria 2022",
      category: "Technology",
      image: rct,
      date: "May 21, 2022",
    },
    {
      id: 2,
      title: "The 20 Biggest Agro Companies In Nigeria 2022",
      category: "Nature",
      image: rct,
      date: "May 21, 2022",
    },
    {
      id: 3,
      title: "The 20 Biggest Fashion Companies In Nigeria 2022",
      category: "Lifestyle",
      image: rct,
      date: "May 21, 2022",
    },
    {
      id: 1,
      title: "The 20 Biggest Fintech Companies In Nigeria 2022",
      category: "Technology",
      image: rct,
      date: "May 21, 2022",
    },
    {
      id: 2,
      title: "The 20 Biggest Agro Companies In Nigeria 2022",
      category: "Nature",
      image: rct,
      date: "May 21, 2022",
    },
    {
      id: 3,
      title: "The 20 Biggest Fashion Companies In Nigeria 2022",
      category: "Lifestyle",
      image: rct,
      date: "May 21, 2022",
    },
  ];
  return (
    <div>
      <div className="bg-[#F5F6F8]">
        <Layout>
          <div className="flex flex-col md:flex-row items-center justify-between   ">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left  md:mb-0">
              <h1 className="text-4xl font-bold text-[#292929] mb-4 font-josefin">
                You’ve got a story, Post
                <span className="text-[#0086B0]">it.</span>
              </h1>
              <p className="text-[#000000] leading-relaxed mb-6">
                Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
                massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
                aliquam id ut.Lorem ipsum dolor sit ameetur adipiscing elit.
                Coctetur egestas massa velit aliquam. Molestim bibendum hnt
                ipsum orci, platea aliquam id ut.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={story}
                alt="People Remember Stories"
                className="w-full max-w-sm object-cover "
              />
            </div>
          </div>
        </Layout>
      </div>
      <div className="bg-[#FDFEFF]">
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <div key={blog.id} className="relative   overflow-hidden">
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Tag (Category) */}
                  <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h2 className="text-xl font-[600] text-[#292929] font-josefin mb-3">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <img
                      src={blog.image}
                      alt=""
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="mr-2 font-bold">
                      <span className="text-[#9A9A9A]"> By </span> Maria Davies
                    </span>
                    <span className="ml-2 text-[#9A9A9A]">• {blog.date}</span>
                  </div>
                  <p className="text-[#7B7B7B] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    ornare leo consequat.
                  </p>
                  {/* Read More */}
                  <Link
                    className="text-[#0086B0] hover:underline flex gap-1 items-center font-josefin"
                    to={"/blogdetails"}
                  >
                    <FaArrowRight className=" w-4 h-4" />
                    Read More...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
}
