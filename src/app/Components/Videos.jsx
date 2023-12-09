import React, { useState } from "react";
import th from "../../../public/th.jpg";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";

const Videos = () => {
  const [vid, setVid] = useState(false);
  return (
    <div className="relative">
      <Image src={th} alt="" className=" min-h-screen w-full " />
      <div className="absolute inset-0 flex justify-center items-center  bg-opacity-80">
        <div>
          <button
            onClick={() => setVid(true)}
            className=" btn btn-lg btn-circle bg-amber-300 my-10 ms-32 shadow-2xl shadow-amber-100 flex justify-center items-center animate-bounce"
          >
            <FiPlay size={30} />
          </button>
          <p className=" text-5xl font-extrabold text-white text-center">
            Connecting Ideas
          </p>
        </div>
      </div>

      {vid && (
        <div className=" absolute flex justify-center items-center inset-0">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LN7EMKyNNOE?si=qX8iiahgvdvVV9ZF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button onClick={()=> setVid(false)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Videos;
