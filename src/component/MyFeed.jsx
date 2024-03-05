import React, { useEffect, useState } from "react";
import puzzle from "../assets/images/puzzle.png";
import card1 from "../assets/images/crd1.png";
import card2 from "../assets/images/crd2.png";
import card3 from "../assets/images/crd3.png";
import psp from "../assets/images/psp.png";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function MyFeed() {
  const [blog, setBlog] = useState([]);

  const getBlog = async () => {
    const {
      data: { blog },
    } = await axios("https://postit-server.onrender.com/api/v1/posts");

    setBlog(blog);
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(blog);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-around items-center bg-gray-200 p-8 lg:p-0">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-left lg:text-6xl lg:ml-11">
            You’ve got a story, <br /> Post{" "}
            <span className="text-blue-500">it</span>.
          </h1>
          <p className="lg:text-left lg:ml-11">
            Lorem ipsum dolor sit ameetur adipiscing elit. Cocteturegestas{" "}
            <br />
            massa velit aliquam. Molestim bibendum hnt ipsum <br />
            orci, platea aliquam id ut.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <img src={puzzle} alt="" className="w-full lg:w-auto" />
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {blog.length < 1 && <h1 className="font-bold text-4xl text-center">No Post Yet</h1>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blog.map((blogs) => {
            const { _id, title, description, tags, image, updatedAt } = blogs;

            const formatDate = (date) => {
              const option = {year: "numeric", month: "long", day: "numeric"}
              return new Date(date).toLocaleDateString(option);
            }

            return (
              <div className="  rounded-md overflow-hidden" key={_id}>
                <div className="relative">
                  <img
                    src={image}
                    alt="Placeholder"
                    className="w-[379px] h-[296px] object-cover"
                  />

                  <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md absolute bottom-4 left-4 capitalize">
                    {tags}
                  </button>
                </div>

                <div className="p-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <span className="flex items-center gap-3">
                      <img src={psp} alt="" />
                      <p className="mt-3">
                        By<span className="font-medium"> Chizu Praise </span>-
                      </p>
                      <p className="mt-3">{formatDate(updatedAt)}</p>
                    </span>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <span className="flex items-center text-blue-500 gap-3">
                      <p>
                        <FaArrowRight />
                      </p>
                      <Link
                        to={`/readmore/${_id}`}
                        className="text-blue-700 hover:underline mb-3 font-medium no-underline"
                      >
                        Read More...
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyFeed;

