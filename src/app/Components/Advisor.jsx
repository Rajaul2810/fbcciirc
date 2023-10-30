"use client";
import React from "react";
import azad from "../../../public/advisor/azad.jpg";
import abid from "../../../public/advisor/abid.jpg";
import akhter from "../../../public/advisor/akhter.jpg";
import anindya from "../../../public/advisor/anindya.jpg";
import anisuzzaman from "../../../public/advisor/anisuzzaman.png";
import arefe from "../../../public/advisor/arefe.jpg";
import bari from "../../../public/advisor/bari.png";
import enamul from "../../../public/advisor/enamul.jpg";
import farid from "../../../public/advisor/farid.jpg";
import golam from "../../../public/advisor/golam.jpg";
import habib from "../../../public/advisor/habib.jpg";
import kabir from "../../../public/advisor/kabir.jpg";
import lijaz from "../../../public/advisor/lijaz.jpg";
import mamun from "../../../public/advisor/mamun.jpg";
import nurul from "../../../public/advisor/nurul.jpg";
import rashid from "../../../public/advisor/rashid.jpg";
import razzaque from "../../../public/advisor/razzaque.jpg";
import reaz from "../../../public/advisor/reaz.jpg";
import sami from "../../../public/advisor/sami.jpg";
import seraj from "../../../public/advisor/seraj.jpg";
import siddhartho from "../../../public/advisor/siddhartho.jpg";
import Image from "next/image";

const advisors = [
  {
    id: "1",
    name: "Mr. Md. Abul Kalam Azad",
    designation:
      " Former Principal Secretary &n Principal Coordinator (SDG Affairs), PMO",
    photo: azad,
  },
  {
    id: "2",
    name: "Dr. Muhammad Anisuzzaman Talukder",
    designation: " Director & Professor, RISE, BUET",
    photo: anisuzzaman,
  },
  {
    id: "11",
    name: "Dr. M. Masrur Reaz",
    designation: " Founder Chairman, Policy Exchange, Bangladesh",
    photo: reaz,
  },
  {
    id: "10",
    name: "Mr. Mamun Rashid",
    designation: " Managing Partner, PwC Bangladesh",
    photo: rashid,
  },
  {
    id: "3",
    name: "Prof. Dr. Syed Akhter Hossain",
    designation:
      " Dean, Department of Computer Science and Engineering, Daffodil International University-DIU",
    photo: akhter,
  },
  {
    id: "4",
    name: "Mr. Farid Uddin",
    designation: " Panel Advisor, FBCCI Former Member, NBR",
    photo: farid,
  },
  {
    id: "5",
    name: "Mr. Shykh Seraj",
    designation: " Founder Director and Head of News, Channel I",
    photo: seraj,
  },
  {
    id: "6",
    name: "Dr. Ijaz Hossain",
    designation: " Professor (Rtd.), BUET",
    photo: lijaz,
  },
  {
    id: "7",
    name: "Dr. M.A. Razzaque",
    designation:
      " Research Director, Policy Research Institute of Bangladesh (PRI).",
    photo: razzaque,
  },
  {
    id: "8",
    name: "Prof. Dr. Khondaker A. Mamun",
    designation:
      " Professor & Director, IRIIC, United International University (UIU)",
    photo: mamun,
  },
  {
    id: "9",
    name: "Mr. Sami Ahmed",
    designation: " Managing Director, Startup Bangladesh Limited",
    photo: sami,
  },
  
  {
    id: "12",
    name: "Mr. Abdul Bari",
    designation:
      " Policy Advisor, Establishing Digital Government and Economy Project, ICT Division",
    photo: bari,
  },
  {
    id: "13",
    name: "Mr. Siddhartho Goushami",
    designation: " Sr. Consultant, IDEA Project, ICT Division",
    photo: siddhartho,
  },
  {
    id: "14",
    name: "Mr. Anindya Sengupta",
    designation:
      " Director, ADCOR International Limited & Former Director, PwC",
    photo: anindya,
  },
  {
    id: "15",
    name: "Mr. Arfe Elahi",
    designation:
      " Chief Digital Transformation Specialist, UNDP Regional Office, Bangkok",
    photo: arefe,
  },
  {
    id: "16",
    name: "Mr. Khandaker Golam Moazzem",
    designation: " Research Director, Center for Policy Dialogue (CPD)",
    photo: golam,
  },
  {
    id: "17",
    name: "Mr. Mohammed Humayun Kabir (FCA)",
    designation: " Member, Association of Ship Recycling in Bangladesh",
    photo: kabir,
  },
  {
    id: "18",
    name: "Mr. Mohammed Nurul Amin",
    designation: " Member, Bangladesh Freight Forwarders Association",
    photo: nurul,
  },
  {
    id: "19",
    name: "Dr. A.K. Enamul Haque",
    designation: " Professor of Economics, East West University",
    photo: enamul,
  },
  {
    id: "20",
    name: "Architect Mr. Iqbal Habib",
    designation: " Member Secretary, Bangladesh Poribesh Andolon (BAPA)",
    photo: habib,
  },
  {
    id: "21",
    name: "Dr. Mostafa Abid Khan",
    designation: " Trade Policy Analyst and Trade Negotiator",
    photo: abid,
  },
];

const Advisor = () => {
  return (
    <section className="pt-5 pb-5 bg-amber-50">
      <div>
        <div className=" flex justify-center ">
          <div className="">
            <div className=" flex justify-center">
              <h1 className=" bg-amber-300 p-5 font-bold w-11/12 md:w-10/12 uppercase text-lg">
                Expert Panel of Advisors
              </h1>
            </div>
            <div className=" flex justify-center">
              <div className=" w-72 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 mb-5">
                {advisors.map((item) => (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={item.id}
                    className=" bg-white shadow-md hover:shadow-md rounded-md transition duration-150 hover:scale-105"
                  >
                    <div className=" flex justify-center">
                      <Image
                        src={item.photo}
                        alt="img"
                        className=" h-52 w-52 rounded-md shadow-sm p-2 bg-white object-fill"
                      />
                    </div>
                    <div className="flex-col justify-center p-4">
                      <h1 className=" font-bold text-center text-md">
                        {item.name}
                      </h1>
                      <h1 className=" text-sm text-gray-700 text-center">
                        {item.designation}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisor;
