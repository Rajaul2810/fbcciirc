import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";

const missions = [
  {
    id: 1,
    title: "Building a Network",
    des: "We aspire to establish and maintain a comprehensive network of research centers in both the public and private sectors, spanning every corner of Bangladesh. This network will serve as a hub for innovation, connecting diverse stakeholders.",
  },
  {
    id: 2,
    title: "Technological Advancement",
    des: "We are committed to driving the development, modification, and dissemination of new technologies that have a tangible impact on our society and economy",
  },
  {
    id: 3,
    title: "Policy Influence",
    des: "Collaboration with the government is central to our mission. We aim to work closely with governmental bodies to help shape innovation policies that foster growth and development",
  },
  {
    id: 4,
    title: "Industry Support",
    des: "By creating an innovation and research database for industries, we aim to provide the necessary foundation for commercial viability. Our goal is to bridge the gap between industry and researchers, leading to industry-led research, innovative concepts, and sustainable business models",
  },
  {
    id: 5,
    title: "Education and Skill Development",
    des: "We intend to establish educational institutions, including universities, colleges, and training centers, to promote education, science, literature, and fine arts. Skill development activities will be a priority to serve the needs of the business community",
  },
  {
    id: 6,
    title: "Social Welfare",
    des: "A key part of our mission is to engage in charitable and social welfare activities to uplift communities in Bangladesh and beyond. This includes initiatives such as free medical services, humanitarian programs, and disaster relief efforts.",
  },
];
const visions = [
  {
    id: 1,
    title: "A Dynamic Ecosystem",
    des: "A thriving ecosystem of interconnected research centers, both public and private, that collectively shape the innovative landscape of the country. ",
  },
  {
    id: 2,
    title: "Economic Growth",
    des: "Through our initiatives, we aim to determine the pace and direction of technological advancement, contributing significantly to economic growth and development.",
  },
  {
    id: 3,
    title: "Education and Empowerment",
    des: "Our educational institutions will empower individuals with knowledge and skills, while our social welfare activities will enhance the well-being of communities. ",
  },
  {
    id: 4,
    title: "Sustainable Progress",
    des: "Collaboration with the government, private sector, and academia will result in sustainable progress, with innovation at the core of our nation's development. ",
  },
  {
    id: 5,
    title: "Global Outreach",
    des: "We aim to extend our influence beyond borders by collaborating on cross-country analysis, regional integration, and international partnerships that benefit Bangladesh. ",
  },
  {
    id: 6,
    title: "Humanitarian Excellence",
    des: "Our commitment to humanitarian and charitable programs will make us a beacon of hope and support in times of need. In summary, the FBCCI Innovation & Research Centre's vision is to create a vibrant, interconnected, and innovative Bangladesh, where research and development thrive, education empowers, and communities prosper",
  },
];


const Mission = () => {
  return (
    <section className=" flex justify-center pt-5 pb-5 bg-slate-50">
        <div className=" w-11/12 p-5 bg-white shadow-md rounded-md">
          <section className="">
            <h1 className=" text-lg font-bold uppercase bg-amber-400 p-3 ">Mission</h1>
            <p className=" text-sm text-gray-700 text-justify pt-2">
              The mission of the FBCCI Innovation & Research Centre is to serve
              as a non-governmental, non-profit, non-political, and
              non-discriminatory organization that actively promotes,
              facilitates, and coordinates innovation and research activities
              throughout Bangladesh. Our mission encompasses building a robust
              network of research centers in both the public and the private
              sectors, with a focus on driving the development and diffusion of
              new technologies and economically useful knowledge. We aim to
              collaborate closely with the government to shape innovation
              policies and support industry-led research initiatives, bridging
              gaps between various sectors for sustainable growth.
            </p>
            <p className=" font-bold pt-3 pb-2 ps-5">
              Our multifaceted mission includes:
            </p>
            <div className=" flex justify-center">
              <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-3">
                {missions.map((item) => (
                  <div
                    key={item.id}
                    className=" shadow-md p-2 rounded-md bg-amber-100"
                  >
                    <div className="">
                      <BsFillCheckCircleFill
                        size={25}
                        className=" text-amber-600"
                      />
                    </div>
                    <div>
                      <p className=" text-sm font-semibold">{item.title}:</p>
                      <p className=" text-xs text-justify">{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="pt-5">
            <h1 className=" text-lg font-bold uppercase bg-amber-400 p-3">Vision</h1>
            <p className=" text-sm text-gray-700 text-justify pt-2">
              Our vision is to be a cornerstone of innovation and research in
              Bangladesh. We aspire to establish a dynamic ecosystem of
              interconnected centers that significantly contribute to the
              innovative performance of the private sector. Our efforts will
              determine the rate and direction of technological learning and
              change, fostering economic growth and sustainable development.
              Additionally, we aim to facilitate skill development, education,
              and social welfare initiatives to uplift communities and enhance
              the well-being of individuals and societies in Bangladesh and
              beyond.
            </p>
            <p className=" font-bold pt-3 pb-2 ps-5">We envision:</p>
            <div className=" flex justify-center">
              <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-3">
                {missions.map((item) => (
                  <div
                    key={item.id}
                    className=" shadow-md p-2 rounded-md bg-amber-100"
                  >
                    <div className="">
                      <BsFillCheckCircleFill
                        size={25}
                        className=" text-amber-600"
                      />
                    </div>
                    <div>
                      <p className=" text-sm font-semibold">{item.title}:</p>
                      <p className=" text-xs text-justify">{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Mission