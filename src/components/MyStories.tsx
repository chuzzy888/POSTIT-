import { Link } from "react-router-dom";
import Layout from "./Layout";

const stories = [
  {
    title: "The 20 Biggest Fintech Companies In Nigeria 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, metus auam acing massa. Nec ornare leo consequat...",
    status: "Published",
  },
  {
    title: "The 20 Biggest Fintech Companies In Nigeria 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, metus auam acing massa. Nec ornare leo consequat...",
    status: "Drafts",
  },
];

export default function MyStories() {
  return (
    <div className="bg-[#FDFEFF]">
      <Layout>
        <div className=" py-8 ">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#292929]">My Stories</h1>
            <Link to={"/create"}>
              <button className="bg-[#292929] text-[#F0F8FF] px-4 py-2 rounded-lg hover:bg-gray-800 text-sm transition duration-200">
                Write Story
              </button>
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button className="py-2 px-4 text-[#292929] border-b-2 border-black font-[400] focus:outline-none">
              All
            </button>
            <button className="py-2 px-4 text-[#757575] hover:text-gray-800 transition duration-200">
              Drafts
            </button>
            <button className="py-2 px-4 text-[#757575] hover:text-gray-800 transition duration-200">
              Published
            </button>
          </div>

          {/* Story List */}
          <div className="space-y-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="border-b pb-6 flex flex-col lg:flex-row justify-between"
              >
                <div className="mb-4 lg:mb-0 lg:w-3/4">
                  <h2 className="text-xl font-[600] text-[#292929] mb-2">
                    {story.title}
                  </h2>
                  <p className="text-[#7B7B7B] text-sm mb-2">
                    {story.description}
                  </p>
                  <span className="text-[#7B7B7B] text-sm italic">
                    {story.status}
                  </span>
                </div>
                {/* Action Buttons */}
                <div className=" space-x-2 lg:space-x-4 lg:justify-end">
                  <Link to={"/edit"}>
                    <button className="bg-[#0086B0] text-[#F0F8FF] px-4 py-2 rounded-lg text-sm transition duration-200">
                      Edit Post
                    </button>
                  </Link>
                  <button className="border border-[#0086B0] text-[#0086B0] px-4 py-2 rounded-lg  transition duration-200 text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
