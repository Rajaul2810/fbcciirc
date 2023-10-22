"use client";
import React from "react";
import jashim from "../../../../public/governing/jashim.jpg";
import salman from "../../../../public/governing/salman.jpg";
import azad from "../../../../public/governing/azad.jpg";
import alamgir from "../../../../public/governing/alamgir.jpg";
import amin from "../../../../public/governing/amin.jpg";
import bikarna from "../../../../public/governing/bikarna.jpg";
import habib from "../../../../public/governing/habib.jpg";
import kashem from "../../../../public/governing/kashem.jpg";
import khakon from "../../../../public/governing/khakon.jpg";
import mahbubul from "../../../../public/governing/mahbubul.png";
import momen from "../../../../public/governing/momen.jpg";
import mostafa from "../../../../public/governing/mostafa.jpg";
import nazia from "../../../../public/governing/nazia.jpg";
import salahuddin from "../../../../public/governing/salahuddin.jpg";
import shafiul from "../../../../public/governing/shafiul.jpg";
import shamim from "../../../../public/governing/shamim.jpg";
import sheikh from "../../../../public/governing/sheikh.jpg";
import shomi from "../../../../public/governing/shomi.jpg";
import Image from "next/image";
import bg from "../../../../public/zbg.jpg";
const governing = [
  // {
  //   id: "1",
  //   Names: "Mr. Md. Jashim Uddin",
  //   Designation: "Chairman ",
  //   Photo: jashim,
  // },
  // {
  //   id: "2",
  //   Names: "Mr. Mostafa Azad Chowdhury Babu",
  //   Designation: "Senior Vice Chairman",
  //   Photo: mostafa,
  // },
  // {
  //   id: "3",
  //   Names: "Mr. M. A Momen",
  //   Designation: "Vice Chairman",
  //   Photo: momen,
  // },
  {
    id: "4",
    Names: "Mr. Salman F Rahman MP",
    Designation: "Director",
    Photo: salman,
  },
  {
    id: "5",
    Names: "Mr. Md. Mahbubul Alam",
    Designation: "Director",
    Photo: mahbubul,
  },
  {
    id: "6",
    Names: "Mr. Md. Amin Helaly",
    Designation: "Director",
    Photo: amin,
  },
  {
    id: "7",
    Names: "Mr. A. K. Azad",
    Designation: "Director",
    Photo: azad,
  },
  {
    id: "8",
    Names: "Mr. Md. Shafiul Islam Mohiuddin, MP",
    Designation: "Director",
    Photo: shafiul,
  },
  {
    id: "9",
    Names: "Mr. Sheikh Fazle Fahim",
    Designation: "Director",
    Photo: sheikh,
  },
  {
    id: "10",
    Names: "Mr. Salahuddin Alamgir",
    Designation: "Director",
    Photo: salahuddin,
  },
  {
    id: "11",
    Names: "Mr. Md. Habib Ullah Dawn",
    Designation: "Director",
    Photo: habib,
  },
  {
    id: "12",
    Names: "Engr. Ghulam Mohammed Alamgir",
    Designation: "Director",
    Photo: alamgir,
  },
  {
    id: "13",
    Names: "Ms. Shomi Kaiser",
    Designation: "Director",
    Photo: shomi,
  },
  {
    id: "14",
    Names: "Mr. Abul Kashem Khan",
    Designation: "Director",
    Photo: kashem,
  },
  {
    id: "15",
    Names: "Mr. Mohammad Ali Khokon",
    Designation: "Director",
    Photo: khakon,
  },
  {
    id: "16",
    Names: "Mr. Shamim Ahmed",
    Designation: "Director",
    Photo: shamim,
  },
  {
    id: "17",
    Names: "Dr. Nazia Binte Amin",
    Designation: "Director",
    Photo: nazia,
  },
  {
    id: "18",
    Names: "Dr. Bikarna Kumar Ghosh",
    Designation: "Member Secretary",
    Photo: bikarna,
  },
];
const Governing = () => {
  return (
    <section className=" pt-5 pb-5 bg-amber-50">
      <div className=" flex justify-center">
        <h1 className=" bg-amber-300 p-5 font-bold w-11/12 md:w-10/12">
          Governing Body Members
        </h1>
      </div>
      <div className=" flex justify-center">
        <div className="mt-5 w-72">
          <div className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105">
            <div className=" flex justify-center">
              <Image
                src={jashim}
                alt="img"
                className=" h-52 w-52 rounded-md shadow-sm p-3 bg-white"
              />
            </div>
            <div className="flex-col justify-center p-4">
              <h1 className=" font-semibold text-center text-sm">
                Mr. Md. Jashim Uddin
              </h1>
              <h1 className=" text-sm text-gray-700 text-center">Chairman</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="mt-5 w-72">
            <div className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105">
              <div className=" flex justify-center">
                <Image
                  src={mostafa}
                  alt="img"
                  className=" h-52 w-52 rounded-md shadow-sm p-3 bg-white"
                />
              </div>
              <div className="flex-col justify-center p-4">
                <h1 className=" font-semibold text-center text-sm">
                  Mr. Mostafa Azad Chowdhury Babu
                </h1>
                <h1 className=" text-sm text-gray-700 text-center">
                  Senior Vice Chairman
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5 w-72">
            <div className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105">
              <div className=" flex justify-center">
                <Image
                  src={momen}
                  alt="img"
                  className=" h-52 w-52 rounded-md shadow-sm p-3 bg-white"
                />
              </div>
              <div className="flex-col justify-center p-4">
                <h1 className=" font-semibold text-center text-sm">
                  Mr. M. A Momen
                </h1>
                <h1 className=" text-sm text-gray-700 text-center">
                  Vice Chairman
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" w-72 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 mb-5">
          {governing.map((item) => (
            <div
              key={item.id}
              className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105"
            >
              <div className=" flex justify-center">
                <Image
                  src={item.Photo}
                  alt="img"
                  className=" h-52 w-52 rounded-md shadow-sm p-2 bg-white"
                />
              </div>
              <div className="flex-col justify-center p-4">
                <h1 className=" font-semibold text-center text-sm">
                  {item.Names}
                </h1>
                <h1 className=" text-sm text-gray-700 text-center">
                  {item.Designation}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governing;
