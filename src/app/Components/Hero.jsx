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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            key={item.id}
            className="  items-center bg-indigo-950 p-5 rounded-md"
          >
            <div className="text-2xl z-10 text-white font-bol">{item.title}</div>
            <Image
              alt="img"
              src={item.photo}
              className=" h-screen rounded-lg object-fill"
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
