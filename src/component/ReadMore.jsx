import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import psp from "../assets/images/psp.png";
import axios from "axios";

function ReadMore() {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  const getBlog = async () => {
    const {
      data: { post },
    } = await axios(`https://postit-server.onrender.com/api/v1/posts/${id}`);
    setSingle(post);
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(single);
  return (
    <div className="mb-10">
      <div className="flex justify-around  flex-col gap-3 w-2/4 ml-24 mt-5">
        <button className="bg-blue-500 w-36 text-white font-medium py-1 rounded capitalize">
          {single.tags}
        </button>
        <h1>{single.title}</h1>
        <span className="flex items-center gap-3">
          <img src={psp} alt="" />
          <p className="mt-3">
            By<span className="font-medium"> Chizu Praise </span>-
          </p>
          <p className="mt-3">{single.updatedAt}</p>
        </span>
      </div>
      <div className="bg-gray-500 h-px w-full lg:w-11/12 mx-5 w-4/5 mx-4 lg:mx-9 mt-3 mb-8"/>

      <img src={single.image} alt="" className="w-[1100px] h-[437px] object-cover mx-auto max-w-full"/>

      <p className="ms-5 mt-2">{single.description}</p>
    </div>
  );
}

export default ReadMore;
