"use client";
import React from "react";
import bikarna from "../../../../public/team/bikarna.png";
import dinar from "../../../../public/team/dinar.png";
import rafia from "../../../../public/team/rafia.png";
import zarin from "../../../../public/team/zarin.png";
import Image from "next/image";

const teams = [
  {
    id: 1,
    name: "Dr. Bikarna Kumar Ghosh",
    email: "bikarnag@gmail.com",
    rule: "Chief Executive Officer",
    photo: bikarna,
  },
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
        <h1 className=" bg-amber-300 p-5 font-bold w-11/12 md:w-10/12">
          Core Team
        </h1>
      </div>
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5 mb-5">
          {teams.map((item) => (
            <div
              key={item.id}
              className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105"
            >
              <div className=" flex justify-center">
                <Image
                  src={item.photo}
                  alt="img"
                  className=" h-52 w-full rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div className="flex-col justify-center p-4">
                <h1 className=" font-bold text-center ">
                  {item.name}
                </h1>
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
