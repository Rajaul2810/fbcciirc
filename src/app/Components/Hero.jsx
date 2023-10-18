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

const items = [
  {
    id: 1,
    title:
      "Inauguration of office floor by Salman F Rahman MP & 2nd board meeting pictures",
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
    title:
      "Inauguration of office floor by Salman F Rahman MP & 2nd board meeting pictures",
    photo: caro3,
  },
  {
    id: 5,
    title:
      "Fire Service Mohora held at FBCCI Innovation and Research Centre",
    photo: caro5,
  },
  {
    id: 6,
    title:
      "Inauguration of office floor by Salman F Rahman MP & 2nd board meeting pictures",
    photo: caro6,
  },
];

const Hero = () => {
  return (
    <div className=" flex justify-center pt-10 pb-10 bg-amber-100">
      <Carousel autoPlay className=" w-11/12 md:w-10/12 "showArrows={true} showThumbs={false}infiniteLoop={true}>
        {items.map((item) => (
          <div key={item.id} className="">
            <Image alt="" src={item.photo} className=" h-96  rounded-lg object-cover" />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
