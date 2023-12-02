import React from "react";
import logo from '../../../public/logo.png';
import Image from "next/image";

const Intro = () => {
  return (
    <section className=" flex justify-center bg-slate-50 pt-10 pb-10 min-h-screen">
      <div className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 bg-white shadow-sm rounded-md">
         <div className="">
         <Image src={logo} alt="logo" className=" h-80 w-80"/>
         </div>
        <div className=" p-5">
          <h1 className=" text-lg font-bold uppercase bg-amber-300 p-5 mb-3">Introduction</h1>
          <p className=" text-md text-gray-700 text-justify pt-5">
            FBCCI Innovation and Research Centre (FIRC) stands as a dedicated
            institution, firmly committed to advancing the realms of innovation
            and research within the borders of Bangladesh aiming to collaborate
            closely with the government to shape innovation policies and support
            industry-led research initiatives, bridging gaps between various
            sectors for sustainable growth. FBCCI Innovation and Research Centre
            (FIRC) will be organized to promote Innovation and Research for all
            commercial organizations of Bangladesh especially member
            organizations of FBCCI. FBCCI Innovation and Research Centre (FIRC)
            has formed a Panel of Advisors, who will provide advisory support to
            FIRC on policy advocacy, skill development, education, and social
            welfare initiatives facilitation that will determine the rate and
            direction of technological learning and change, fostering economic
            growth and sustainable development of individuals and societies in
            Bangladesh and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
