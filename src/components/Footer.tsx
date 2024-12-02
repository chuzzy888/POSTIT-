import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import abt from "../assets/images/About Postit..png";
import { IoMdArrowForward } from "react-icons/io";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="bg-[#292929] text-white py-8">
      <Layout>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-0">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <img src={abt} alt="About Postit" className="max-w-full h-auto" />
            </h3>
            <p className="text-[#FFFFFF] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              id sem vel quis in turpis sit eget pellentesque. Nunc etlicies in
              rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet,
              que maaeae tortoere necsem commodo ac.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="text-md font-bold mb-4 text-[#FDFEFF]">
              Quick Menu
            </h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 text-[#FFFFFF] text-sm">
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Stories
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Trending Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Popular Stories
                  </a>
                </li>
              </ul>
              <ul>
                <li className="mb-2 text-[#FFFFFF]">
                  <a href="#" className="hover:text-white">
                    Sign Up
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-md font-bold mb-4 text-[#FDFEFF]">
              Subscribe to our newsletter
            </h3>
            <form className="flex flex-wrap  items-center  space-y-3 rounded">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded bg-[#FDFEFF] text-gray-300 placeholder-gray-500 focus:outline-none font-lato"
              />
              <button
                type="submit"
                className="bg-[#0086B0] px-4 py-2 rounded text-white hover:bg-blue-600 font-lato w-full flex justify-center gap-2 items-center"
              >
                Subscribe
                <IoMdArrowForward className="text-lg" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-[#FDFEFF] pt-4 flex flex-col sm:flex-row justify-between items-center text-sm container mx-auto space-y-4 sm:space-y-0">
          <p className="text-[#FDFEFF] font-lato">Terms and Policy</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#FDFEFF] text-xl hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#FDFEFF] text-xl hover:text-white">
              <RiFacebookFill />
            </a>
            <a href="#" className="text-[#FDFEFF] text-xl hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
