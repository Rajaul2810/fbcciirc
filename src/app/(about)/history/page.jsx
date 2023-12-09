import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import {
  FiAperture,
  FiAward,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiSettings,
  FiShield,
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
    id: 1,
    title:
      " Investment climate, opportunities in business/industry/trade and investments",
  },
  {
    id: 2,
    title:
      "Areas of comparative and competitive advantages vs others (regional)",
  },
  {
    id: 3,
    title: "LDC graduation challenges and opportunities",
  },
  {
    id: 4,
    title:
      "Regional integration and connectivity benefits (India, Myanmar and China)",
  },
  {
    id: 5,
    title: "China + one opportunities in trade and investment",
  },
  {
    id: 6,
    title: " Linking Industry and Academia mechanism for sustainable growth",
  },
  {
    id: 7,
    title: "4IR adoption and its challenges across the industrial eco-system",
  },
];

const History = () => {
  return (
    <section className="  bg-slate-50 pt-5 pb-5">
      <div className="flex justify-center">
        <div className="w-11/12 bg-white shadow-md rounded-md py-5">
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-3 p-5 place-items-center ">
            <Image src={logo} alt="logo" className=" h-72 w-72 p-5" />
            <div>
              <h1 className=" text-lg font-bold uppercase bg-amber-300 p-5">
                Brief History
              </h1>
              <p className=" text-md text-gray-700 text-justify py-3">
                First meeting of Governing Body held on 21 June 2023 with Mr Md
                Jashim Uddin, Chairman of FBCCI Innovation and Research Centre
                and Past President, FBCCI on chair. Memorandum of Association and
                Rules and Regulations approved and signed by All GB members.
              </p>
              <p className=" font-bold">Year of Establishment: 2023</p>
              <p className=" font-bold">
                Established under: Societies Act 1860,through RJSC
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
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
              {structure.map((item, index) => (
                <div key={index} className="border p-5">
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
            <p className=" font-bold pb-5 text-center">
              Following are some of the core focus areas that an effective
              innovation centre will emphasize on:
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {structure.map((item, index) => (
                <div
                  key={index}
                  className=" bg-amber-200 p-5 rounded-md shadow-sm"
                >
                  <div className=" flex justify-center">
                    <p className=" self-center bg-white p-2 rounded-full shadow-xl mb-3 text-amber-500">
                      {item.icon}
                    </p>
                  </div>
                  <p className=" text-sm text-justify">{item.des}</p>
                </div>
              ))}
            </div>
          </section>
          <section className=" p-5">
            <p className=" font-bold pb-5 text-center">
              Effective strategies via dialogue, research and advocacy that will
              address:
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {strategies.map((item, index) => (
                <div
                  key={index}
                  className=" p-4 shadow-md rounded-sm flex items-center border gap-5"
                >
                  <p>
                    <FiShield size={30} className=" text-amber-400" />
                  </p>
                  <p className="">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
          <section className=" p-5">
            <p className=" font-bold pb-5 text-center">Addition FBCCI-IRC focus:</p>
            <ul className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <li className=" p-4 shadow-md rounded-sm flex items-center border gap-5">
                <p>
                  <FiTarget size={30} className=" text-amber-400" />
                </p>
                Policy analysis/research/advocacy/dialogue for improved
                investment opportunities.
              </li>
              <li className=" p-4 shadow-md rounded-sm flex items-center border gap-5">
                <p>

                  <FiTarget size={30} className=" text-amber-400" />
                </p>
                Build tripartite relationship with FBCCI-IC, Government and
                private sector (chambers/associations/SME org) in developing
                effective policies/strategies towards sustainable innovation and
                research led development.
              </li>
              <li className=" p-4 shadow-md rounded-sm flex items-center border gap-5">
                <p>

                  <FiTarget size={30} className=" text-amber-400" />
                </p>
                Cross-country analysis, regional business trade and investment
                developments. Competition Analysis.
              </li>
              <li className=" p-4 shadow-md rounded-sm flex items-center border gap-5">
                <p>

                  <FiTarget size={30} className=" text-amber-400" />
                </p>
                Assist and support Government with various date driven research
                work relating to trade, investment, and industry for improved
                policy planning.
              </li>
            </ul>
          </section>
          <section className=" py-5">
            <p className=" text-2xl font-bold text-center">FBCCI-IRC Board</p>
            <p className=" text-center">
              The total proposed members are 13 persons including Chairman.
            </p>
            <div className="overflow-x-auto px-5 md:px-20 py-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Member</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <td>Chairman</td>
                    <td>President of FBCCI (Ex-officio)</td>
                    <td>1</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <td>Members</td>
                    <td>Sr. Vice President, FBCCI</td>
                    <td>1</td>
                  </tr>
                  <tr className="hover">
                    <td>Members</td>
                    <td>FBCCI</td>
                    <td>5</td>
                  </tr>
                  <tr className="hover">
                    <td>Nominated Members</td>
                    <td>President-selected chambers/Association</td>
                    <td>2</td>
                  </tr>
                  <tr className="hover">
                    <td>Nominated Members</td>
                    <td>
                      Reps from of partner Org/Universities/Government agencies
                    </td>
                    <td>2</td>
                  </tr>
                  <tr className="hover">
                    <td>Nominated Members</td>
                    <td>Various partners, Think-Thanks</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="py-5 px-5">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                <div className="p-5 border rounded-md shadow-sm">
                  <p className=" text-center font-bold">
                    Secretary: FBCCI-IRC CEO
                  </p>
                  <p className=" text-center">Functions</p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Overall policy directions
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Review of progress and
                    achievements
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Selection of issues to route to
                    Strategy Committee
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Strategy Committee meetings and
                    agendas
                  </p>
                </div>
                <div className="p-5 border rounded-md shadow-sm">
                  <p className=" text-center font-bold">
                    Strategic Operations Unit (SOU)
                  </p>
                  <p className=" text-center">Functions</p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Secretariat to FBCCI-IC
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Secretariat to the Board of
                    FBCCI-IC
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> HR, Finance and Administration for
                    FBCCI-IC
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Monitoring and evaluation
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Policy and strategic
                    implementation
                  </p>
                </div>
                <div className="p-5 border rounded-md shadow-sm">
                  <p className=" text-center font-bold">
                    Innovation & Research Wing
                  </p>
                  <p className=" text-center">Functions</p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" />
                    Conducting private sector research on various issues
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Build a bridge between industry
                    and academia
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Creating links between research
                    and business
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" />
                    Conducting various regulatory impact analyses
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Reviewing administrative barriers
                    & other diagnostic research to support dialogue.
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Conducting analysis of business
                    regulations impacting investments.
                  </p>
                </div>
                <div className="p-5 border rounded-md shadow-sm">
                  <p className=" text-center font-bold">
                    Dialogue Wing & Advocacy Wing
                  </p>
                  <p className=" text-center">Functions</p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" />
                    Formulation of and secretariat to Working Committees
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Selection of facilitators, members
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" />
                    Coordination of follow-up research by the research wing on
                    issues identified by WCs
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" />
                    Tracking of recommendations and implementation
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Coordinate all FBCCI-IC
                    communications.
                  </p>
                  <p className=" flex items-center gap-2">
                    <FiCheck color="green" /> Design and implement communication
                    and advocacy strategies around issues arising from research
                    and around the reform agenda.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className=" py-5">
            <p className=" text-2xl font-bold text-center">
              Membership Categories
            </p>
               <div className=" flex justify-center py-5">
               <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
                <p className=" bg-indigo-500 text-white font-bold px-3 py-2">1. Founder Members</p>
                <p className=" bg-indigo-500 text-white font-bold px-3 py-2"> 2. Life Members</p>
                <p className=" bg-indigo-500 text-white font-bold px-3 py-2"> 3. Corporate Members</p>
                <p className=" bg-indigo-500 text-white font-bold px-3 py-2">4. Honorary Members</p>
               </div>
               </div>
               <p className=" text-center">The Centre shall have two constitutional bodies:</p>
            <div className="overflow-x-auto px-5 md:px-20 py-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>General Body</th>
                    <th>Governing Body</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>1</th>
                    <td>
                      The General Body shall be comprised of the Founder Members
                      and Life Members having the right to vote
                    </td>
                    <td>
                      The Governing Body will be elected/ selected by the
                      General Body and will remain in office for a term of three
                      (3) years from the date of their selection/election
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>2</th>
                    <td>
                      General Body shall elect the Governing Body, after the
                      expiry of the first Governing Body every three years.
                    </td>
                    <td>
                      Under special circumstances tenure of the Governing Body
                      can be extended by the General Body but not more than six
                      months.
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>
                      General Body through the AGM shall approve the budget and
                      action plan every year.
                    </td>
                    <td>
                      The Governing Body shall be responsible for staff
                      management and implementing the programs in accordance
                      with the action plan approved by the General Body
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>4</th>
                    <td>
                      The General Body through the Annual General Meeting every
                      year shall appoint the auditors or delegate the power to
                      the Governing Body of appointing auditors or auditing the
                      organizations accounts and approve the audit report every
                      year.
                    </td>
                    <td>
                      The Governing Body shall function as the supreme executive
                      authority of the organization and shall be accountable
                      only to the General Body for its acts and decisions.
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>5</th>
                    <td>
                    The General Body shall normally meet once a year.
                    </td>
                    <td>
                    The Governing Body shall normally meet every meeting.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default History;
