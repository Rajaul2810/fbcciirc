"use client";
import Image from "next/image";
import React, { useState } from "react";

import img1 from "../../../../public/gellary/1.jpeg";
import img2 from "../../../../public/gellary/2.jpeg";
import img3 from "../../../../public/gellary/3.jpeg";
import img4 from "../../../../public/gellary/4.jpeg";
import img5 from "../../../../public/gellary/5.jpeg";
import img6 from "../../../../public/gellary/6.jpeg";
import img7 from "../../../../public/gellary/7.jpeg";
import img8 from "../../../../public/gellary/8.jpeg";
import img9 from "../../../../public/gellary/9.jpeg";
import img10 from "../../../../public/gellary/10.jpeg";
import img11 from "../../../../public/gellary/11.jpeg";
import img12 from "../../../../public/gellary/12.jpeg";
import img13 from "../../../../public/gellary/13.jpeg";
import img14 from "../../../../public/gellary/14.jpeg";
import img15 from "../../../../public/gellary/15.jpeg";
import img16 from "../../../../public/gellary/16.jpeg";
import img17 from "../../../../public/gellary/17.jpeg";
import img18 from "../../../../public/gellary/18.jpeg";
import g1 from "../../../../public/gellary/g1.JPG";
import g2 from "../../../../public/gellary/g2.JPG";
import g3 from "../../../../public/gellary/g3.JPG";
import g4 from "../../../../public/gellary/g4.jpg";
import g5 from "../../../../public/gellary/g5.jpg";
import g6 from "../../../../public/gellary/g6.jpg";
import g7 from "../../../../public/gellary/g7.jpg";
import g8 from "../../../../public/gellary/g8.JPG";
import g9 from "../../../../public/gellary/g9.JPG";
import g10 from "../../../../public/gellary/g10.JPG";
import g13 from "../../../../public/gellary/g13.jpeg";
import g14 from "../../../../public/gellary/g14.jpeg";
import g15 from "../../../../public/gellary/g15.jpeg";
import g16 from "../../../../public/gellary/g16.jpeg";
import g17 from "../../../../public/gellary/g17.jpeg";
import g18 from "../../../../public/gellary/g18.jpeg";
import g19 from "../../../../public/gellary/g19.jpeg";
import g20 from "../../../../public/gellary/g20.jpg";
import g21 from "../../../../public/gellary/g21.jpg";
import g22 from "../../../../public/gellary/g22.jpeg";
import g23 from "../../../../public/gellary/g23.jpeg";
import g24 from "../../../../public/gellary/g24.jpeg";
import g25 from "../../../../public/gellary/g25.jpeg";
import g26 from "../../../../public/gellary/g26.jpeg";
import g27 from "../../../../public/gellary/g27.jpeg";
import g28 from "../../../../public/gellary/g28.jpg";
import g29 from "../../../../public/gellary/g29.jpeg";
import g30 from "../../../../public/gellary/g30.jpeg";
import s1 from "../../../../public/gellary/s1.jpeg";
import s2 from "../../../../public/gellary/s2.jpeg";
import s3 from "../../../../public/gellary/s3.jpeg";
import s4 from "../../../../public/gellary/s4.jpeg";
import s5 from "../../../../public/gellary/s5.jpeg";
import s6 from "../../../../public/gellary/s6.jpeg";
import s7 from "../../../../public/gellary/s7.jpeg";
import s8 from "../../../../public/gellary/s8.jpeg";
import s9 from "../../../../public/gellary/s9.jpeg";
import s12 from "../../../../public/gellary/s12.jpg";
import s10 from "../../../../public/gellary/s10.jpg";
import s13 from "../../../../public/gellary/s13.jpeg";
import s14 from "../../../../public/gellary/s14.jpeg";
import s15 from "../../../../public/gellary/s15.jpeg";
import f1 from "../../../../public/gellary/f1.jpeg";
import f2 from "../../../../public/gellary/f2.jpeg";
import f3 from "../../../../public/gellary/f3.jpeg";
import f4 from "../../../../public/gellary/f4.jpeg";
import f5 from "../../../../public/gellary/f5.jpeg";
import b from "../../../../public/gellary/b.jpg";
import b1 from "../../../../public/gellary/b1.jpg";
import b2 from "../../../../public/gellary/b2.jpg";
import b3 from "../../../../public/gellary/b3.jpg";
import b4 from "../../../../public/gellary/b4.jpg";
import b5 from "../../../../public/gellary/b5.jpg";
import b6 from "../../../../public/carousel/car.jpg";

const images = [
  {
    id: 1,
    link: img13,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 2,
    link: img18,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 3,
    link: img3,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 4,
    link: img4,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 5,
    link: img5,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 6,
    link: img6,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 7,
    link: img7,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 8,
    link: img8,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 9,
    link: img9,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 10,
    link: img10,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 11,
    link: img11,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 12,
    link: img12,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 13,
    link: img1,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 14,
    link: img14,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 15,
    link: img15,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 16,
    link: img16,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 17,
    link: img17,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 18,
    link: img2,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule: "2nd",
    date: "01 October 2023",
  },
  {
    id: 39,
    link: g13,
    tittle:
      "MoU with Nijer Bolar Moto Ekta Golpo Foundation",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 40,
    link: g14,
    tittle:
      "MoU with Nijer Bolar Moto Ekta Golpo Foundation",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 41,
    link: g15,
    tittle:
      "MoU with CTO Forum",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 42,
    link: g16,
    tittle:
      "MoU with Nijer Bolar Moto Ekta Golpo Foundation",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 43,
    link: g17,
    tittle:
      "MoU with CTO Forum",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 44,
    link: g18,
    tittle:
      "MoU with CTO Forum",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 45,
    link: g19,
    tittle:
      "MoU with CTO Forum",
    rule: "signing",
    date: "19-12-2023",
  },
  {
    id: 46,
    link: g20,
    tittle:
      "MoU with Faction AI USA",
    rule: "signing",
    date: "18-06-2023",
  },
  {
    id: 47,
    link: g21,
    tittle:
      "MoU with Orel IT ",
    rule: "signing",
    date: "22-02-2024",
  },
  {
    id: 48,
    link: g22,
    tittle:
      "MoU with Orel IT ",
    rule: "signing",
    date: "22-02-2024",
  },
  {
    id: 49,
    link: g23,
    tittle:
      "MoU with Orel IT ",
    rule: "signing",
    date: "22-02-2024",
  },
  {
    id: 50,
    link: g24,
    tittle:
      "MoU with Orel IT ",
    rule: "signing",
    date: "22-02-2024",
  },
  {
    id: 51,
    link: g25,
    tittle:
      "MoU with Orel IT ",
    rule: "signing",
    date: "22-02-2024",
  },
  {
    id: 52,
    link: g26,
    tittle:
      "MoU with AI CERTs  ",
    rule: "signing",
    date: "05-02-2024",
  },
  {
    id: 53,
    link: g27,
    tittle:
      "MoU with AI CERTs",
    rule: "signing",
    date: "05-02-2024",
  },
  {
    id: 54,
    link: g28,
    tittle:
      "MoU among CIDAUK_RISE BUET_FBCCI IRC ",
    rule: "signing",
    date: "27-02-2024",
  },
  {
    id: 55,
    link: g29,
    tittle:
      "MoU among CIDAUK_RISE BUET_FBCCI IRC",
    rule: "signing",
    date: "27-02-2024",
  },
  {
    id: 56,
    link: g30,
    tittle:
      "MoU among CIDAUK_RISE BUET_FBCCI IRC",
    rule: "signing",
    date: "27-02-2024",
  },
  {
    id: 19,
    link: g1,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 68,
    link: g2,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 67,
    link: g3,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 66,
    link: g4,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 65,
    link: g5,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 64,
    link: g6,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 63,
    link: g7,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 62,
    link: g8,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 61,
    link: g9,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  {
    id: 60,
    link: g10,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
    rule: "signing",
    date: "21 October 2023",
  },
  
  {
    id: 21,
    link: s1,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 22,
    link: s2,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 23,
    link: s3,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 24,
    link: s5,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 25,
    link: s6,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 25,
    link: s4,
    tittle: "AWS Startup Workshop",
    rule: "aws",
    date: "08 October 2023",
  },
  {
    id: 26,
    link: f1,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule: "fire",
    date: "03 October 2023",
  },
  {
    id: 27,
    link: f2,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule: "fire",
    date: "03 October 2023",
  },
  {
    id: 28,
    link: f3,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule: "fire",
    date: "03 October 2023",
  },
  {
    id: 29,
    link: f4,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule: "fire",
    date: "03 October 2023",
  },
  {
    id: 30,
    link: f5,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule: "fire",
    date: "03 October 2023",
  },
  {
    id: 59,
    link: s10,
    tittle: "Seminar on “Artificial Intelligence; Its Potential and challenges in Bangladesh Perspective",
    rule: "session",
    date: " 05-02-2024",
  },
  {
    id: 59,
    link: s7,
    tittle: "Seminar on “Artificial Intelligence; Its Potential and challenges in Bangladesh Perspective",
    rule: "session",
    date: " 05-02-2024",
  },
  {
    id: 57,
    link: s8,
    tittle: "Seminar on “Artificial Intelligence; Its Potential and challenges in Bangladesh Perspective",
    rule: "session",
    date: "05-02-2024",
  },
  {
    id: 58,
    link: s9,
    tittle: "Seminar on “Artificial Intelligence; Its Potential and challenges in Bangladesh Perspective",
    rule: "session",
    date: " 05-02-2024",
  },
  {
    id: 58,
    link: s13,
    tittle: "Seminar on Business Innovation_Prospects and Challenges And MoU among CIDAUK, RISE BUET and FBCCI IRC",
    rule: "session",
    date: " 27-02-2024",
  },
  {
    id: 58,
    link: s14,
    tittle: "Seminar on Business Innovation_Prospects and Challenges And MoU among CIDAUK, RISE BUET and FBCCI IRC",
    rule: "session",
    date: " 27-02-2024",
  },
  {
    id: 58,
    link: s9,
    tittle: "Seminar on Business Innovation_Prospects and Challenges And MoU among CIDAUK, RISE BUET and FBCCI IRC",
    rule: "session",
    date: " 27-02-2024",
  },
  {
    id: 31,
    link: b,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 32,
    link: b1,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 33,
    link: b2,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 34,
    link: b3,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 35,
    link: b4,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 36,
    link: b5,
    tittle:
      "Brainstorming Session on Public-Private Academia for Skills Development",
    rule: "session",
    date: "18 June 2023",
  },
  {
    id: 37,
    link: b6,
    tittle: "FBCCI-IRC & Faction MoU Signing Ceremony",
    rule: "signing",
    date: "18 June 2023",
  },
  {
    id: 38,
    link: s12,
    tittle: "FBCCI & FBCCI-IRC MoU Signing Ceremony",
    rule: "signing",
    date: "24 July 2023",
  },
];

const Gallery = () => {
  const [change, setChange] = useState("2nd");
  return (
    <div className=" bg-slate-100 py-5">
      <p className=" text-center font-bold text-3xl pt-5">OUR GALLERY</p>
      <div className="flex justify-center pb-5">
        <div className=" h-2 w-32 bg-amber-400 rounded-xl shadow-sm mt-1"></div>
      </div>
      <div className=" flex justify-center py-5">
        <ul className="menu menu-horizontal bg-white shadow-md border gap-3 rounded-md">
          <li
            onClick={() => setChange("2nd")}
            className=" border shadow-sm rounded-md"
          >
            <a>2nd Board Meeting</a>
          </li>
          <li
            onClick={() => setChange("signing")}
            className=" border shadow-sm rounded-md"
          >
            <a>Signing Ceremony</a>
          </li>
          <li
            onClick={() => setChange("aws")}
            className=" border shadow-sm rounded-md"
          >
            <a>AWS Startup Workshop</a>
          </li>
          <li
            onClick={() => setChange("fire")}
            className=" border shadow-sm rounded-md"
          >
            <a>Fire Service Mohora</a>
          </li>
          <li
            onClick={() => setChange("session")}
            className=" border shadow-sm rounded-md"
          >
            <a>Brainstorming Session</a>
          </li>
        </ul>
      </div>
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map(
            (image, i) =>
              image.rule == change && (
                <div
                  key={i}
                  className=" bg-white p-2 shadow-md rounded-md hover:shadow-xl hover:scale-105 duration-150 transition-all"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Image
                    src={image.link}
                    className="rounded-t-md w-full h-60"
                    alt=""
                  />
                  <div className=" flex items-center">
                    <p className=" font-bold text-sm pt-2 text-center grow">
                      {image.tittle}
                    </p>
                    <p className=" w-24 bg-indigo-500 break-words text-sm p-2 text-center text-white font-bold">{image.date}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
