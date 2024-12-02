import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Login() {
  return (
    <div>
      <div className=" flex items-center justify-center  bg-[#F0F0F0F0]">
        {/* Modal Container */}
        <div className="bg-white p-8 md:px-20 rounded-lg shadow-lg md:w-[90%] w-full max-w-xl relative h-screen flex justify-center items-center flex-col">
          <Link to={"/"}>
            <img src={logo} alt="Postit Logo" className="h-6 mb-10" />
          </Link>
          {/* Close Button */}
          <Link to={"/"}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <HiX className="text-2xl" />
            </button>
          </Link>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-10 text-[#292929] font-josefin">
            Welcome Back
          </h2>

          {/* Form */}
          <form className="space-y-10">
            <input
              type="email"
              placeholder="Your Email Address*"
              className="w-full border-b-2 border-gray-300 outline-none py-2 text-gray-700 focus:border-[#0086B0]"
            />
            <input
              type="password"
              placeholder="Password*"
              className="w-full border-b-2 border-gray-300 outline-none py-2 text-gray-700 focus:border-[#0086B0]"
            />
            <button
              type="submit"
              className="w-full bg-[#0086B0] text-white py-2 rounded-lg hover:bg-[#006b8a] transition-all duration-300"
            >
              Continue
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            No account?{" "}
            <Link className="text-[#0086B0] font-medium" to="/join">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
