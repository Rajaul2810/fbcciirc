"use client";
import React from "react";
import plastic from "../../../public/sector/plastic.jpeg";
import agro from "../../../public/sector/agro.jpg";
import building from "../../../public/sector/building.jpeg";
import light from "../../../public/sector/light.jpg";
import Image from "next/image";

const sectors = [
  {
    id: 1,
    title: "Plastic",
    photo: plastic,
  },
  {
    id: 2,
    title: "Food & Agro Products",
    photo: agro,
  },
  {
    id: 3,
    title: "Light Engineering",
    photo: light,
  },
  {
    id: 4,
    title: "Capacity Development",
    photo: building,
  },
];

const WorkingSector = () => {
  return (
    <section>
      <div className="pt-10 pb-10 bg-amber-50">
        <h1 className=" font-extrabold text-center text-2xl pt-5 uppercase">
          Primary Working Sectors
        </h1>
        <div className="flex justify-center">
          <div className=" h-2 w-32 bg-amber-400 rounded-xl shadow-sm mt-1"></div>
        </div>
        <div className=" flex justify-center">
          <div className="w-11/12 md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mb-5">
            {sectors.map((item) => (
              <div
                className="relative group"
                data-aos="fade-up"
                data-aos-duration="3000"
                key={item.id}
              >
                <div className=" h-72">
                  <Image
                    src={item.photo}
                    alt="b"
                    className=" h-full w-full object-cover rounded-md shadow-xl group-hover:scale-105 duration-150 transition-transform"
                  />
                </div>
                <div className="absolute bottom-0 left-0 ">
                  <p className=" bg-amber-400 text-black p-3 rounded-sm shadow-sm font-bold group-hover:scale-105 duration-150 transition-transform">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSector;
