"use client";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
import g1 from "../../../../public/gellary/g1.jpg";
import g2 from "../../../../public/gellary/g2.jpg";
import g3 from "../../../../public/gellary/g3.jpg";
import g4 from "../../../../public/gellary/g4.jpg";
import g5 from "../../../../public/gellary/g5.jpg";
import g6 from "../../../../public/gellary/g6.jpg";
import g7 from "../../../../public/gellary/g7.jpg";
import g8 from "../../../../public/gellary/g8.jpg";
import g9 from "../../../../public/gellary/g9.jpg";
import g10 from "../../../../public/gellary/g10.jpg";
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


const images = [
  {
    id: 1,
    link: img1,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 2,
    link: img2,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 3,
    link: img3,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 4,
    link: img4,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 5,
    link: img5,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 6,
    link: img6,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 7,
    link: img7,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 8,
    link: img8,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 9,
    link: img9,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 10,
    link: img10,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 11,
    link: img11,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 12,
    link: img12,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 13,
    link: img13,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 14,
    link: img14,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 15,
    link: img15,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 16,
    link: img16,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 17,
    link: img17,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 18,
    link: img18,
    tittle: "Inauguration of FBCCI-IRC Office Floor & 2nd Board Meeting",
  },
  {
    id: 19,
    link: g1,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g2,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g3,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g4,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g5,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g6,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g7,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g8,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g9,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 20,
    link: g10,
    tittle:
      "FBCCI-IRC & GEN Bangladesh and FBCCI-IRC & WUST MoU Signing Ceremony",
  },
  {
    id: 21,
    link: s1,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 22,
    link: s2,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 23,
    link: s3,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 24,
    link: s5,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 25,
    link: s6,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 25,
    link: s4,
    tittle: "AWS Startup Workshop",
  },
  {
    id: 26,
    link: f1,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
  },
  {
    id: 27,
    link: f2,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
  },
  {
    id: 28,
    link: f3,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
  },
  {
    id: 29,
    link: f4,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
  },
  {
    id: 30,
    link: f5,
    tittle: "Fire Service Mohora held at FBCCI-IRC",
  },
];

const Gallery = () => {
  return (
    <div className="py-10 px-10 bg-slate-100">
      <p className=" text-center font-bold text-3xl pb-5">OUR GALLARY</p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px" >
          {images.map((image, i) => (
            <div key={i} className=" bg-white p-5 shadow-sm rounded-md hover:shadow-xl hover:scale-105 duration-150 transition-all group/item" 
            data-aos="fade-up"
            data-aos-duration="1000"
            >
              <Image
                src={image.link}
                width={200}
                style={{ width: "100%", display: "block" }}
                className="rounded-t-md  group-hover/item:opacity-50 duration-200 transition-all"
                alt=""
              />
              <p className=" font-bold pt-2 text-center">{image.tittle}</p>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
