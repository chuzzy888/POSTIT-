import { Link } from "react-router-dom";
import story from "../assets/images/story.png";
import Layout from "../components/Layout";
export default function Stories() {
  return (
    <div className="bg-[#F5F6F8]">
      <Layout>
        <div className="flex flex-col md:flex-row items-center justify-between   ">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#292929] mb-4 font-josefin">
              Welcome Maria,
            </h1>
            <p className="text-[#000000] leading-relaxed mb-6">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.Lorem ipsum dolor sit ameetur adipiscing elit.
              Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum
              orci, platea aliquam id ut.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link to={"/Mystories"}>
                <button className="bg-[#0086B0] text-[#F0F8FF] px-4 py-1 font-lato font-[700]  transition-all duration-300 rounded">
                  My Stories
                </button>
              </Link>
              <Link to={"/feeds"}>
                <button className="border border-[#0086B0] text-[#0086B0] font-[700] px-4 py-1 font-lato transition-all duration-300 rounded">
                  Go to Feed
                </button>
              </Link>
            </div>
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
  );
}
