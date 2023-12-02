import React from "react";
import {
  FiAward,
  FiBarChart,
  FiBox,
  FiFile,
  FiLayers,
  FiSettings,
} from "react-icons/fi";
import Image from "next/image";
import incub from "../../../public/others/incub.jpg";

const sz = 25;
const incubs = [
  {
    id: 1,
    title: "Mentorship and advice",
    des: "Our organization will provide experienced mentors who can provide guidance on business development, marketing, finance, and other critical areas.",
    icon: <FiSettings size={sz} />,
  },
  {
    id: 2,
    title: "Access to networks and resources",
    des: "We will help connecting startups with potential investors, partners, and customers. We will also provide access to shared workspaces, technology resources, and other valuable assets.",
    icon: <FiFile size={sz} />,
  },
  {
    id: 3,
    title: "Training and workshops",
    des: " We will host workshops and training sessions to help startups develop the skills they need to succeed. These sessions can cover topics such as business planning, marketing, sales, and finance.",
    icon: <FiBarChart size={sz} />,
  },
];
const incubBen = [
  {
    id: 1,
    title: "Increased chances of success",
    des: "Startups that participate in incubation programs are more likely to succeed than those that do not.",
    icon: <FiLayers size={sz} />,
  },
  {
    id: 2,
    title: "Access to valuable resources",
    des: "We will provide startups with access to a variety of resources that can help them grow their businesses.",
    icon: <FiFile size={sz} />,
  },
  {
    id: 3,
    title: "Reduced risk of failure",
    des: "We will help to reduce the risk of failure for startups by providing them with the support they need to succeed.",
    icon: <FiAward size={sz} />,
  },
  {
    id: 4,
    title: "Networking and Connection",
    des: "We will provide a great opportunity for startups to network and connect with other entrepreneurs.",
    icon: <FiBox size={sz} />,
  },
];

const Incubation = () => {
  return (
    <section className=" bg-slate-100 py-10">
      <div className="mx-5 sm:mx-10 md:mx-20 bg-white shadow-md rounded-sm p-5">
        <p className=" bg-amber-300 p-5 text-lg uppercase font-bold my-3">
          Incubation
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-5 min-h-screen">
          <Image src={incub} alt="" />
          <div className="">
            <p className=" text-justify pb-5 text-lg">
              In business, incubation refers to a process of nurturing and
              supporting early-stage startup companies to help them grow and
              succeed. We provide a range of services including:
            </p>
            <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 ">
              {incubs.map((item, i) => (
                <div
                  key={i}
                  className="border rounded-md shadow-lg bg-indigo-600 p-5 hover:bg-white group"
                >
                  <div className=" flex  justify-center">
                    <p className="bg-white p-3 rounded-full shadow-xl ">
                      {item.icon}
                    </p>
                  </div>
                  <p className=" text-center font-bold py-2 text-lg text-white group-hover:text-black">
                    {item.title}
                  </p>
                  <p className=" text-white  group-hover:text-black text-justify">
                    {item.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <p className=" py-5 text-lg text-justify">
          FBCCI Innovation and Research Centre plays a vital role in the
          entrepreneurial ecosystem. We help to reduce the risk of failure for
          startups and increase their chances of success. Incubation is
          essential for driving economic growth and innovation.
        </p>
        <div className=" flex justify-center pb-10">
          <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {incubBen.map((item, i) => (
              <div
                key={i}
                className=" border rounded-md shadow-md bg-white p-5 hover:bg-indigo-500 hover:text-white"
              >
                <div className=" flex  justify-center">
                  <p className="bg-indigo-700 p-3 text-white rounded-full shadow-xl ">
                    {item.icon}
                  </p>
                </div>
                <p className=" text-center font-bold py-2 text-lg ">
                  {item.title}
                </p>
                <p className=" text-justify">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
        <p className=" text-lg text-justify py-5 md:px-20 font-bold bg-indigo-200 p-3">
          If you are an entrepreneur with an early-stage startup, consider
          applying to a business incubation program. It could be the best
          decision you ever make for your business. By nurturing and
          supporting early-stage ventures, FBCCI Innovation and Research Centre
          contributes to economic growth, job creation, and innovation.
        </p>
      </div>
    </section>
  );
};

export default Incubation;
