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
import s1 from "../../../../public/gellary/s1.jpeg";
import s2 from "../../../../public/gellary/s2.jpeg";
import s3 from "../../../../public/gellary/s3.jpeg";
import s4 from "../../../../public/gellary/s4.jpeg";
import s5 from "../../../../public/gellary/s5.jpeg";
import s6 from "../../../../public/gellary/s6.jpeg";
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

const images = [
  {
    id: 1,
    link: img13,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 2,
    link: img18,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 3,
    link: img3,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 4,
    link: img4,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 5,
    link: img5,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 6,
    link: img6,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 7,
    link: img7,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 8,
    link: img8,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 9,
    link: img9,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 10,
    link: img10,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 11,
    link: img11,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 12,
    link: img12,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 13,
    link: img1,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 14,
    link: img14,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 15,
    link: img15,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 16,
    link: img16,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 17,
    link: img17,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 18,
    link: img2,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
    rule:'2nd'
  },
  {
    id: 19,
    link: g1,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g2,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g3,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g4,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g5,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g6,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g7,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g8,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g9,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 20,
    link: g10,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
      rule:'signing'
  },
  {
    id: 21,
    link: s1,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 22,
    link: s2,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 23,
    link: s3,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 24,
    link: s5,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 25,
    link: s6,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 25,
    link: s4,
    tittle: "AWS Startup Workshop",
    rule:'aws'
  },
  {
    id: 26,
    link: f1,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule:'fire'
  },
  {
    id: 27,
    link: f2,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule:'fire'
  },
  {
    id: 28,
    link: f3,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule:'fire'
  },
  {
    id: 29,
    link: f4,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule:'fire'
  },
  {
    id: 30,
    link: f5,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
    rule:'fire'
  },
  {
    id: 31,
    link: b,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
  {
    id: 32,
    link: b1,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
  {
    id: 33,
    link: b2,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
  {
    id: 34,
    link: b3,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
  {
    id: 35,
    link: b4,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
  {
    id: 36,
    link: b5,
    tittle: "Brainstorming Session on Public-Private Academia for Skills Development",
    rule:'session'
  },
];

const Gallery = () => {
  const [change, setChange] = useState('2nd')
  return (
    <div className=" bg-slate-100 py-5">
      <p className=" text-center font-bold text-3xl pt-5">OUR GALLARY</p>
      <div className="flex justify-center pb-5">
        <div className=" h-2 w-32 bg-amber-400 rounded-xl shadow-sm mt-1"></div>
      </div>
      <div className=" flex justify-center py-5">
        <ul className="menu menu-horizontal bg-white shadow-md border gap-3 rounded-md">
          <li onClick={()=>setChange('2nd')} className=" border shadow-sm rounded-md">
            <a>2nd Board Meeting</a>
          </li>
          <li onClick={()=>setChange('signing')} className=" border shadow-sm rounded-md">
            <a>Signing Ceremony</a>
          </li>
          <li onClick={()=>setChange('aws')} className=" border shadow-sm rounded-md">
            <a>AWS Startup Workshop</a>
          </li>
          <li onClick={()=>setChange('fire')} className=" border shadow-sm rounded-md">
            <a>Fire Service Mohora</a>
          </li>
          <li onClick={()=>setChange('session')} className=" border shadow-sm rounded-md">
            <a>Brainstorming Session</a>
          </li>
        </ul>
      </div>
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((image, i) => ( image.rule == change &&
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
              <p className=" font-bold pt-2 text-center">{image.tittle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
