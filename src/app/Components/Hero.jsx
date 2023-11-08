"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import caro1 from "../../../public/carousel/caro1.jpeg";
import caro2 from "../../../public/carousel/caro2.jpeg";
import caro3 from "../../../public/carousel/caro3.jpeg";
import caro4 from "../../../public/carousel/caro4.jpeg";
import caro5 from "../../../public/carousel/caro5.jpeg";
import caro6 from "../../../public/carousel/caro6.jpeg";
import caro7 from "../../../public/carousel/caro7.jpeg";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Inauguration of Office Floor by Salman F Rahman MP",
    photo: caro1,
  },
  {
    id: 2,
    title: "2nd Board Meeting of Founding Governing Body Members",
    photo: caro2,
  },
  {
    id: 3,
    title:
      "Fire Service Mohora held at FBCCI Innovation and Research Centre (FIRC)",
    photo: caro4,
  },
  {
    id: 4,
    title: "2nd Board Meeting of Founding Governing Body Members",
    photo: caro3,
  },
  {
    id: 5,
    title: "Fire Service Mohora held at FBCCI Innovation and Research Centre",
    photo: caro5,
  },
  {
    id: 6,
    title: "Inauguration of Office Floor by Salman F Rahman MP",
    photo: caro6,
  },
  {
    id: 7,
    title: "FBCCI & FBCCI-IRC MoU Signing Ceremony",
    photo: caro7,
  },
];

const Hero = () => {
  return (
    <div className=" flex justify-center bg-indigo-950 pt-5 pb-5">
      <Carousel
        autoPlay
        className=" w-11/12"
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className=" grid grid-cols-1 md:grid-cols-3 bg-indigo-950 p-5 rounded-md place-items-center"
          >
            <Image
              alt="img"
              src={item.photo}
              className=" h-96 w-auto md:h-screen rounded-lg object-fill col-span-2"
            />
            <div  className={`text-2xl z-10 text-white font-bold p-5`}>{item.title}</div>
          </div>
          
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
