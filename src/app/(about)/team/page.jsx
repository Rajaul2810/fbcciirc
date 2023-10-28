"use client";
import React from "react";
import bikarna from "../../../../public/team/bikarna.png";
import dinar from "../../../../public/team/dinar.png";
import rafia from "../../../../public/team/rafia.png";
import zarin from "../../../../public/team/zarin.png";
import Image from "next/image";

const teams = [
  {
    id: 2,
    name: "Mr. Md. Entakhab Dinar",
    email: "mdshefat222@gmail.com",
    rule: "Executive",
    photo: dinar,
  },
  {
    id: 3,
    name: "Ms. Rafia Islam",
    email: "rafiafbcciirc@gmail.com",
    rule: "Executive",
    photo: rafia,
  },
  {
    id: 4,
    name: "Ms. Zarin Tasnim",
    email: "zarintasnim.firc@gmail.com",
    rule: "Executive",
    photo: zarin,
  },
];

const Team = () => {
  return (
    <section className=" pt-5 pb-5 bg-amber-50">
      <div className=" flex justify-center">
        <h1 className=" bg-amber-300 p-5 font-bold w-11/12 md:w-10/12 text-black">
          Core Team
        </h1>
      </div>
      <div className=" flex justify-center">
        <div className=" w-72  md:grid-cols-4 gap-4 mt-5 mb-5">
          <div className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105">
            <div className=" flex justify-center">
              <Image
                src={bikarna}
                alt="img"
                className=" h-52 w-52 rounded-md shadow-sm p-2 bg-white"
              />
            </div>
            <div className="flex-col justify-center p-4">
              <h1 className=" font-bold text-center ">
                Dr. Bikarna Kumar Ghosh
              </h1>
              <h1 className=" text-xs font-bold text-gray-700 text-center">
                bikarnag@gmail.com
              </h1>
              <h1 className=" text-sm text-gray-700 text-center">
                Chief Executive Officer
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" w-72 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-5">
          {teams.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              key={item.id}
              className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105 w-72"
            >
              <div className=" flex justify-center">
                <Image
                  src={item.photo}
                  alt="img"
                  className=" h-52 w-52 rounded-md shadow-sm bg-white"
                />
              </div>
              <div className="flex-col justify-center p-4">
                <h1 className=" font-bold text-center ">{item.name}</h1>
                <h1 className=" text-xs font-bold text-gray-700 text-center">
                  {item.email}
                </h1>
                <h1 className=" text-sm text-gray-700 text-center">
                  {item.rule}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
