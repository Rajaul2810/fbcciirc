import React from "react";
import logo from '../../../public/logo.png';
import Image from "next/image";

const Intro = () => {
  return (
    <section className=" flex justify-center bg-slate-50 pt-5 pb-5">
      <div className=" w-11/12 grid grid-cols-1 md:grid-cols-2 p-5 place-items-center bg-white shadow-md rounded-md">
          <Image src={logo} alt="logo" className=" h-96 w-full"/>
        <div>
          <h1 className=" text-lg font-bold uppercase">Introduction</h1>
          <p className=" text-sm text-gray-700 text-justify">
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
