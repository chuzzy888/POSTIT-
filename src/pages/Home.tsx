import hero from "../assets/images/bg-hero.png";
import rct1 from "../assets/images/rct1.png";
import rct2 from "../assets/images/rct2.png";
import rct3 from "../assets/images/rct3.png";
import rct4 from "../assets/images/Rectangle 38.png";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-[#FDFEFF]">
      <div className="relative flex items-center justify-between h-[550px] bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glass Effect with Blurred Background (only on mobile screens) */}
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm md:hidden z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-20 text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#000000] font-josefin mb-8 leading-tight">
            Stay Curious.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 text-[#000000] font-medium leading-relaxed max-w-md mx-auto sm:mx-0 font-josefin">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <button className="mt-6 px-6 py-2 font-lato bg-[#0086B0] text-[#FFFBFB] rounded-lg  transition-all duration-300">
            Join Postit
          </button>
        </div>
      </div>

      <Layout>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-100">
          {/* Card 1 */}
          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              src={rct1}
              alt="Lifestyle"
              className="w-1/3 h-32 object-cover"
            />
            <div className="p-4 w-2/3 ">
              <span className="bg-yellow-400 text-white text-sm px-2 py-1 rounded">
                Lifestyle
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                The 20 Biggest Fashion Companies In Nigeria 2022
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
            <img src={rct2} alt="Nature" className="w-1/3 h-32 object-cover" />
            <div className="p-4 w-2/3">
              <span className="bg-green-400 text-white text-sm px-2 py-1 rounded">
                Nature
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                The 20 Biggest Agro Companies In Nigeria 2022
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              src={rct3}
              alt="Technology"
              className="w-1/3 h-32 object-cover"
            />
            <div className="p-4 w-2/3">
              <span className="bg-blue-400 text-white text-sm px-2 py-1 rounded">
                Technology
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                The 20 Biggest Fintech Companies In Nigeria 2022
              </h3>
            </div>
          </div>
        </div>
      </Layout>

      <div
        className="h-64 flex justify-center items-center bg-cover bg-center my-8"
        style={{ backgroundImage: `url(${rct4})` }}
      >
        <div className="text-center p-6  rounded-lg  max-w-2xl w-full">
          <h2 className="text-gray-800 text-2xl font-bold mb-2">
            Try <span className="text-blue-500">Postit</span>.
          </h2>
          <p className="text-gray-700 mb-4 font-josefin md:text-lg">
            Do you want to write or discover stories from writers on any topic?
          </p>
          <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 items-center">
            <input
              type="email"
              placeholder="Enter Email address"
              className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none font-josefin w-full rounded-r-lg md:rounded-r-none"
            />
            <button className="bg-[#0086B0] text-[#FFFBFB] px-1 font-bold py-2 rounded-l-lg md:rounded-l-none rounded-r-lg hover:bg-blue-600 font-josefin w-full md:w-1/2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
