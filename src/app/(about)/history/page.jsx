import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import {
  FiAperture,
  FiAward,
  FiGlobe,
  FiLayers,
  FiSettings,
  FiStar,
  FiTarget,
} from "react-icons/fi";

const structure = [
  {
    id: 1,
    title: "Single Portal for All Innovation Research",
    des: "This will be a website and application where all Innovation Research will reside. It will have a summary, research owner, funding mechanisms, published documents, codes for applications, and other artifacts.",
    icon: <FiAperture size={25} />,
  },
  {
    id: 2,
    title: "Marketplace for Research Demands from Commercial Organizations",
    des: "FBCCI IRC will survey its member organizations for research demands, and publish them in the portal. This survey may be conducted annually, however, refreshed quarterly.",
    icon: <FiLayers size={25} />,
  },
  {
    id: 3,
    title: "Matchmaking for Skills and Research",
    des: "FBCCI IRC will conduct matchmaking skills who can conduct the research from the Academy or other organizations.",
    icon: <FiSettings size={25} />,
  },
  {
    id: 4,
    title:
      "Single Destination for all Grants, Awards, and Programs related to Research",
    des: "FBCCI IRC will publish available funding options such as grants, awards, and programs for the research it plans to conduct, this will include locally available funds as well as globally available ones. FBCCI IRC will create its fund for this research by driving fundraising through its member organization.",
    icon: <FiAward size={25} />,
  },
  {
    id: 5,
    title: "FBCCI Co-Innovation Lab",
    des: "FBCCI Co-Innovation Lab is an eco-system Innovation implementation, where it will combine team members from member organizations, industry, academia, policy, service provider, and donor/fund provider, The output of the Co-Innovation lab may be protected through IP regulations (copyright, trademark,), or open source for anyone to utilize.",
    icon: <FiTarget size={25} />,
  },
  {
    id: 6,
    title: "Collaborate with Global Organization",
    des: "FBCCI IRC will create a program team to collaborate with global organizations, such as UNDP, World Bank, Google, Microsoft, Amazon, etc. The program team will coordinate, collaborate, and manage all the globally available programs through its PM team so that each researcher can get maximum funding, based on the topic and implementation.",
    icon: <FiGlobe size={25} />,
  },
];
const foucas = [
  {
    id: 1,
    des: "Build the network of institutions in the public and private sectors whose activities and interactions initiate, import, modify and diffuse new technologies.",
    icon: <FiAperture size={25} />,
  },
  {
    id: 2,
    des: "Facilitate relationships which interact in the production, diffusion and use of new, and economically useful, knowledge",
    icon: <FiLayers size={25} />,
  },
  {
    id: 3,
    des: "Bring together a set of institutions whose interactions determine the innovative performance of private sector",
    icon: <FiSettings size={25} />,
  },
  {
    id: 4,
    des: "To work on the national institutions, their incentive structures and their competencies, that determine the rate and direction of technological learning (or the volume and composition of change generating activities)",
    icon: <FiAward size={25} />,
  },
  {
    id: 5,
    des: "Set of distinct institutions which jointly and individually contribute to the development and diffusion of new technologies",
    icon: <FiTarget size={25} />,
  },
  {
    id: 6,
    des: "Work with government to develop framework within which governments form and implement policies to influence the innovation process. As such help create a system of interconnected institutions to create, store and transfer the knowledge, skills and artefacts which define new technologies",
    icon: <FiGlobe size={25} />,
  },
  {
    id: 7,
    des: "Work and build innovation/research database for industry to have access to fund and develop such innovation for commercial viability. Bridge the industry and researchers/innovators gaps and develop industry-led research.",
    icon: <FiGlobe size={25} />,
  },
];

const strategies = [
  {
    id:1,
    title:' Investment climate, opportunities in business/industry/trade and investments'
  },
  {
    id:2,
    title:'Areas of comparative and competitive advantages vs others (regional)'
  },
  {
    id:3,
    title:'LDC graduation challenges and opportunities'
  },
  {
    id:4,
    title:'Regional integration and connectivity benefits (India, Myanmar and China)'
  },
  {
    id:5,
    title:'China + one opportunities in trade and investment'
  },
  {
    id:6,
    title:' Linking Industry and Academia mechanism for sustainable growth'
  },
  {
    id:7,
    title:'4IR adoption and its challenges across the industrial eco-system'
  },
]

const History = () => {
  return (
    <section className="  bg-slate-50 pt-5 pb-5">
      <div className="flex justify-center">
        <div className="w-11/12 bg-white shadow-md rounded-md">
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-3 p-5 place-items-center ">
            <Image src={logo} alt="logo" className=" h-72 w-72 p-5" />
            <div>
              <h1 className=" text-lg font-bold uppercase bg-amber-300 p-5">
                Brief History
              </h1>
              <p className=" text-md text-gray-700 text-justify pt-2 pb-3">
                First meeting of Governing Body held on 21 June 2023 with Mr Md
                Jashim Uddin, Chairman of FBCCI Innovation and Research Centre
                and President, FBCCI on chair. Memorandum of Association and
                Rules and Regulations approved and signed by All GB members.
              </p>
              <p className=" font-bold">Year of Establishment: 1973</p>
              <p className=" font-bold">
                Established under: Societies Act 1860
              </p>
            </div>
          </div>
          <hr />
          <section className="p-5">
            <p className=" text-3xl font-bold pb-3">Structure</p>
            <p>
              FBCCI IRC will be organized to promote Innovation and Research for
              all commercial organizations of Bangladesh especially member
              organizations of FBCCI.
            </p>
            <p className="mb-5 pt-2">
              To accomplish that, the structure is recommended to be as follows:
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {structure.map((item, index) => (
                <div key={index} className="border-r p-3 border-b">
                  <div className=" flex justify-center">
                    <p className=" self-center bg-amber-400 p-2 rounded-full shadow-xl ">
                      {item.icon}
                    </p>
                  </div>
                  <p className=" font-bold text-center pt-3 pb-1">
                    {item.title}
                  </p>
                  <p className=" text-sm text-justify">{item.des}</p>
                </div>
              ))}
            </div>
          </section>
          <section className=" p-5">
            <p className=" font-bold">
              Following are some of the core focus areas that an effective
              innovation center will emphasize on:
            </p>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {foucas.map((item, index) => (
                <div key={index} className="">
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.des}</td>
                  </tr>
                </div>
              ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className=" p-5">
            <p className=" font-bold pb-5">Effective strategies via dialogue, research and advocacy that will address:</p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
              strategies.map((item,index)=>
                <div key={index} className=" p-4 shadow-md rounded-sm flex items-center bg-slate-50 gap-5">
                  <p> <FiTarget size={30} className=" text-amber-400"/></p>
                   <p className=" text-sm">{item.title}</p>
                </div>
              )
            }
            </div>
          </section>
          <section className=" p-5">
            <p className=" font-bold pb-5">Addition FBCCI-IRC focus:</p>
             <ul className=" list-disc list-inside">
              <li>Policy analysis/research/advocacy/dialogue for improved investment opportunities.</li>
              <li>Build tripartite relationship with FBCCI-IC, Government and private sector (chambers/associations/SME org) in developing effective policies/strategies towards sustainable innovation and research led development.</li>
              <li>Cross-country analysis, regional business trade and investment developments. Competition Analysis.</li>
              <li>Assist and support Government with various date driven research work relating to trade, investment, and industry for improved policy planning.</li>
             </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default History;
