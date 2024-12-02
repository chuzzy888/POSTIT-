import { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-4 md:py-8 sticky top-0 z-50 bg-[#FDFEFF] backdrop-blur-md bg-opacity-70 shadow-md">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Postit Logo" className="h-6 " />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-josefin font-medium text-lg">
        <Link to={"/stories"}>
          <p className="text-[#292929] cursor-pointer hover:text-[#0086B0] ">
            Stories
          </p>
        </Link>
        <p className="text-[#292929] cursor-pointer hover:text-[#0086B0]">
          Contact
        </p>
        <Link to={"/login"}>
          <p className=" cursor-pointer text-[#0086B0] hover:text-[#005f80]">
            Sign In
          </p>
        </Link>
        <Link to={"/join"}>
          <button className="bg-[#0086B0] text-[#FFFBFB] px-4 py-1 rounded-lg text-sm font-lato hover:bg-[#005f80]">
            Join Postit
          </button>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button
          className="text-[#292929] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLargeFill className="text-2xl text-red-700" />
          ) : (
            <HiOutlineMenuAlt3 className="text-4xl text-[#0086B0] " />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-white backdrop-blur-md bg-opacity-100 shadow-lg p-6 flex justify-center  flex-col items-center gap-10 md:hidden">
          <Link to={"/stories"}>
            <p
              className="text-[#292929] cursor-pointer hover:text-[#0086B0] text-xl"
              onClick={() => setIsOpen(false)}
            >
              Stories
            </p>
          </Link>
          <p
            className="text-[#292929] cursor-pointer hover:text-[#0086B0] text-xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </p>
          <p
            className="text-[#292929] cursor-pointer hover:text-[#0086B0] text-xl"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </p>
          <Link to={"/join"}>
            <button
              className="text-[#0086B0]  rounded-lg text-xl font-lato hover:bg-[#005f80]"
              onClick={() => setIsOpen(false)}
            >
              Join Postit
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
