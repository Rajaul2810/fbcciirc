"use client";
import Image from "next/image";
import React, { useState } from "react";
import jashim from "../../../public/governing/jashim.jpg";
import bikarna from "../../../public/governing/bikarna.jpg";

const IntroChairmanCeo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <section className=" bg-slate-50 pt-10 pb-10">
      <div className=" flex justify-center">
        <div className="w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className="">
            <Image
              src={jashim}
              alt="chairman"
              className=" border-4 border-white rounded-md h-60 w-full shadow-md"
            />
          </div>
          <div>
            <h1 className=" text-3xl font-bold">MD. JASHIM UDDIN </h1>
            <p className=" text-slate-900 pb-1 text-xl font-bold">Chairman</p>
            <p className=" text-slate-900 ">
              FBCCI Innovation & Research Centre
            </p>
            <p className=" text-slate-900 pb-4 ">Email: juddin@bengal.com.bd</p>
            <p className=" text-justify text-sm text-gray-600">
              Md. Jashim Uddin is a business graduate, a leading business
              personality, an industrialist, and a social worker with a vision
              to develop the livelihood of the people of Bangladesh by providing
              income-generating opportunities by making them skilled manpower to
              reduce poverty, adding value to the economy and protecting the
              environment. His focus is developing green and environmentally
              friendly business practices and supporting sick industries through
              leadership and govt. involvement. <br />
              Md. Jashim Uddin is currently serving as the Chairman of the FBCCI
              Innovation & Research Centre. He was elected President of the
              Federation of Bangladesh Chambers of Commerce and Industry (FBCCI)
              in session 2021-23, the apex trade body of Bangladesh representing
              eighty-seven chambers and four hundred & nine associations. Before
              joining as the president of FBCCI, he was the President of
              Bangladesh Plastic Goods Manufacturers and Exporters Association.
              Earlier, he served as an elected First Vice President of FBCCI for
              the term 2010-2012 & as Director for the term 2008-2010. <br />
              He is leading from the front as the Chairman of Bengal Commercial
              Bank Ltd, Desh General Insurance Ltd, and Bangladesh Plastic
              Engineering & Technology (BPET). He is also the Founder Chairman
              of Bangladesh Plastic & Rubber Foundation and a Life Member of
              Noakhali Samity, Bangladesh. <br />
              {isOpen && (
                <span className=" text-justify text-sm text-gray-600">
                  Md. Jashim Uddin is playing the key strategic role of Bengal
                  Group of Industries, as Vice Chairman, one of the prime
                  conglomerates in the country that employs over 25000 people in
                  Bangladesh. The Group is made up of several different
                  industries that operate in diversified fields like plastic
                  processing, chemicals, food processing, cement, infrastructure
                  development, readymade garments, insurance, the financial
                  sector, five-star hotels, and trading. It has also a strong
                  leadership position in the plastic industry of the country,
                  being the largest manufacturer and exporter of plastic
                  extruded & injection molded products. The group is
                  significantly & continuously contributing to the economy in
                  the form of a foreign currency earner, producing import
                  substitute items and generating employment opportunities
                  regularly. He is holding the position of Vice Chairman of RTV,
                  Bangladesh. <br />
                  Mr. Md. Jashim Uddin’s remarkable social contributions include
                  the foundation of Jashim Uddin Kinder Garden & Morshed Alam,
                  High School at Nateswar, Sonaimury, Noakhali. He constructed
                  Madrashas & Masjids in Nateswar, Sonaimury, Noakhali, and
                  other places. He is a social activist within his native area
                  under Sonaimury, Noakhali, and working relentlessly for the
                  improvement of living standards of the people and eradication
                  of poverty in the neighborhood. <br />
                  In his journey in the business arena, he achieved the
                  prestigious CIP award in 1999, 2009-10, and 2010-18 from the
                  Government of Bangladesh for extraordinary contributions to
                  Bangladesh&apos;s economy. He is the recipient of the Prime
                  Minister’s National Export Trophy- Silver, during the FY
                  1997-98, 2009- 10, and Export Trophy- Gold during the FY
                  2000-2001, 2006-2007 & 2018- 2019. He is also the recipient of
                  the “Best Enterprise Award 2007” of Bangladesh.{" "}
                  <br className="py-[1px]" />
                  Mr. Md. Jashim Uddin is married and blessed with one daughter
                  and one son. His goal is to help his nation.
                </span>
              )}
            </p>
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xs bg-gray-600 rounded-full lowercase p-2 hover:scale-105 duration-150 transition"
              >
                see less
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className=" text-white text-xs bg-gray-600 rounded-full lowercase p-2 hover:scale-105 duration-150 transition"
              >
                see more
              </button>
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        <div className="w-11/12 md:w-3/4 grid gap-5 grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="order-last md:order-first ">
            <h1 className=" text-2xl font-bold">DR. BIKARNA KUMAR GHOSH </h1>
            <p className=" text-slate-900 pb-4 text-xl font-bold">
              Chief Executive Officer (CEO)
            </p>
            <p className=" text-slate-900 ">
              FBCCI Innovation & Research Centre
            </p>
            <p className=" text-slate-900 pb-4 ">Email: bikarnag@gmail.com</p>
            <p className=" text-justify text-sm text-gray-600">
              Dr. Bikarna Kumar Ghosh, at present, is serving as the Chief
              Executive Officer of FBCCI Innovation & Research Centre. Before
              joining the FBCCI Innovation & Research Centre, Dr. Bikarna Kumar
              Ghosh was promoted to Grade 1 and was re-assigned to the
              Bangladesh Hi-Tech Park Authority. Earlier, on May 30, 2021, he
              was appointed as the managing director of the Bangladesh Hi-Tech
              Park Authority (BHTPA). Before that, he was the Additional
              Secretary of the Department of Information and Communication
              Technology. For over 27 years he contributed to various posts
              under the government. During his tenure as Additional Secretary of
              the Department of Information and Communication Technology, he led
              a nationwide internet connectivity project that ensured seamless
              high-speed internet connectivity for everyone across the country.{" "}
              <br />
              Dr. Bikarna Kumar Ghosh, Vice-President of Greater Jessore
              Samiti-Dhaka was born in the village of Srirampur in Jhikargachha
              Upazila of the district. He grew up in the village. In his career,
              as a very humble government official, he always worked in the
              service of humanity. After passing HSC from Jessore MM College, he
              successfully passed MBBS from Rajshahi Medical College. <br />
              After completing a Bachelor of Medicine, and Bachelor of Surgery
              (MBBS) degree from Rajshahi Medical College, Dr. Bikarna joined
              Bangladesh civil service in 1993. He joined the Khulna district
              administration in 1993 as an Assistant Commissioner of
              Administration Cadre. In his colorful career, he successfully
              served in various positions of administration in Narail, Magura,
              Nilphamari, Rangamati, Mymensingh, Barguna, and Gazipur districts.
              He was promoted to the post of Deputy Secretary in 2008, joint
              secretary in 2016, and to the post of additional secretary in
              2019. <br />
              {isOpen2 && (
                <span>
                  Dr. Bikarna Kumar Ghosh received an MPH from the University of
                  New South Wales in Australia, an MBA from Northern University,
                  e-Government Leadership from the National University of
                  Singapore, Post Graduate Diploma in ICT from Sweden, and
                  advanced training in Project Management from Stanford
                  University, USA. <br />
                  Dr. Bikarna Kumar Ghosh is married and blessed with two
                  daughters. Serving his country is his goal.
                </span>
              )}
            </p>
            {isOpen2 ? (
              <button
                onClick={() => setIsOpen2(false)}
                className="text-white text-xs bg-gray-600 rounded-full lowercase p-2  hover:scale-105 duration-150 transition"
              >
                see less
              </button>
            ) : (
              <button
                onClick={() => setIsOpen2(true)}
                className="text-white text-xs bg-gray-600 rounded-full lowercase p-2  hover:scale-105 duration-150 transition"
              >
                see more
              </button>
            )}
          </div>
          <div className="order-first md:order-last">
            <Image
              src={bikarna}
              alt="bikarna ceo"
              className=" border-4 border-white rounded-md h-60 w-full shadow-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroChairmanCeo;
