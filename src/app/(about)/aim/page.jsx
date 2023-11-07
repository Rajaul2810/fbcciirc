import React from "react";

const aims = [
  {
    id: 1,
    txt: "To build, maintain, promote, facilitate, liaison and maintain network of Centres in the public and private sectors whose activities and interactions initiate, import, modify and diffuse new technologies and facilitate relationship which interact in the production, diffusion and use of new and economically useful knowledge.",
  },
  {
    id: 2,
    txt: "To collaborate, liaison, build together a set of Centres whose interactions would determine the innovative performance of private sector and to work on the national Centres, their incentive structures and their competencies, that would determine the rate and direction of technological learning or the volume and composition of change generating activities which jointly and individually contribute to the development and diffusion of new technologies.",
  },
  {
    id: 3,
    txt: "To work with the Government to develop framework within which governments form and implement policies to influence the innovation process and to facilitate a system of interconnected Centres to create, store and share the knowledge, skills and artefacts which define new technologies.",
  },
  {
    id: 4,
    txt: "To work and build innovation/research database for industry to have access to fund and develop such innovation for commercial viability and bridge the industry and researchers/innovators gaps and develop industry-led research and concepts and business models.",
  },
  {
    id: 5,
    txt: "To establish, set-up, run, operate, manage and maintain innovation, research and development center with the view to do research and develop various innovation concepts and models on business, revenue, industry, economic growth, technologies, etc. and to create investment climate, opportunities in business/industry/trade and investments through policy analysis, advocacy, dialogue for improved investment opportunities.",
  },
  {
    id: 6,
    txt: "To establish, build, liaison, promote and maintain a relationship with FBCCI, Government and private sector (chambers/associates/SME organizations) in developing effective policies/strategies towards sustainable innovation and research and development through cross-country analysis, regional business trade and investment developments, competitive analysis, linking industry and academic mechanism for sustainable growth.",
  },
  {
    id: 7,
    txt: "To assist and support Government and other local and international organizations both in private and public sector with various data driven research work and analysis and policy guidelines relating to trade, investment and industry for improved policy planning, LDC graduation challenges and opportunities, 4IR adoption and its challenges across the industrial eco-system, regional integration and connectivity benefits among India, Myanmar, China and other countries.",
  },
  {
    id: 8,
    txt: "To promote skill development activities in the areas/field of business community, chambers, association groups for the purpose of serving industry need in line with the broad goal and objectives of FBCCI and its member groups and other related chambers and association and business community.",
  },
  {
    id: 9,
    txt: "To establish, set-up, run, operate, manage and maintain education Centres such as university, college, school, polytechnics, madrassa, polytechnic, training and research center and institutes for promotion of education, science, literature and fine arts with permission from concerned authority as and when necessary.",
  },
  {
    id: 10,
    txt: "To engage in charitable purposes and social welfare activities and to promote and advance charity, welfare and well-being in and among communities and peoples of Bangladesh and other countries of the world.",
  },
  {
    id: 11,
    txt: "To establish, run and manage academic scholarship for brilliant and meritorious students",
  },
  {
    id: 12,
    txt: "To establish, set-up, run, operate, manage and maintain Hospital, Clinic and Diagnostic Center for the people in Bangladesh.",
  },
  {
    id: 13,
    txt: "To promote, establish, manage, control, supervise co-operative society, corporate body or undertakings, companies, Centres subject to the approval of the relevant authorities as may be conducive to the attainment of objects of the Centre and/or to generate funds therefrom to carry on the objects of the Centre.",
  },
  {
    id: 14,
    txt: "To fund, build, aid, assist, set up, manage, maintain, administer libraries, museums, public buildings and halls, parks, playgrounds, places for recreation and other places for use or benefit to communities and people as a whole or to any specially disadvantaged section.",
  },
  {
    id: 15,
    txt: "To provide community training on communicable diseases and establish to Health Care Center and Hospitals for free Medical services.",
  },
  {
    id: 16,
    txt: "To undertake and carry on any humanitarian or charitable program for the poor and under privileged people",
  },
  {
    id: 17,
    txt: "To take up program for promotion of literature, fine art, economy, business, science and education.",
  },
  {
    id: 18,
    txt: "To take up program to distribute relief among the neglected, poverty stricken in the event of any natural calamity like flood, storm, cyclone and earth quack",
  },
  {
    id: 19,
    txt: "To establish libraries, reading room, study centre for developing the habit of study for the benefit of the society, for its members and for the use of general public and to take up and adopt any program, Seminar, Rally, Workshops, Symposium, Fair, Cultural Program, Fair Exhibition, etc. to promote and develop innovative ideas, knowledge and concepts among the society.",
  },
  {
    id: 20,
    txt: "To distribute books free of cost among the poor students of school, College University and for the purpose of amelioration of the quality of education.",
  },
  {
    id: 21,
    txt: "To enter into any agreement with the Government, Authority of municipal, local or other bodies, with any other person or body that may seem conducive to the Centres’ objects or any of them and to obtain from any such government or authority any rights, privileges and concession, which the Centre may think to obtain and to carry out, exercise and comply with any such arrangements, rights, privileges and concessions in exchange of money or any other means and to undertake management contract, consultancy services, and other lawful activities that would directly and indirectly promote and sustain the objectives of the Centres on mutually agreed terms and conditions.",
  },
  {
    id: 22,
    txt: "To receive lawful subscription, donation from the members of the Centre and outsiders and to accept any donation, gift, contribution towards promoting the objects of the Centre, provided however that the Centre shall not receive any foreign donation, gift, etc.",
  },
  {
    id: 23,
    txt: "To purchase, hire, take on lease, or in exchange, or allotment, or otherwise acquire, erect, maintain, equip, construct, renovate movable or immovable property including land, building and equipment for the purpose of the Centre.",
  },
  {
    id: 24,
    txt: "To do all such other things as may be incidental or conducive to the attainment of the objects of the Centre.",
  },
];

const Aim = () => {
  return (
    <section className=" flex justify-center bg-slate-50">
      <div className=" w-11/12 p-5 bg-white shadow-md rounded-md mt-5 mb-5">
        <h1 className=" text-lg font-bold uppercase bg-amber-300 p-5">
          AIMS AND OBJECTIVES
        </h1>
        <p className=" pt-2 text-gray-700 text-justify">
          The objects for which the Centre is established shall be the
          following, which will be implemented after obtaining necessary
          permission from the Government / Concerned authority/ competent
          authority before implementation of the objects and the objects
          contrary to the provision of Section 20 of the Act shall be treated as
          ineffective:
        </p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Aims & Objective</th>
              </tr>
            </thead>
            <tbody>
              {
                aims.map((item,index)=>
                <tr key={index} className="hover">
                <th>{item.id}</th>
                <td>{item.txt}</td>
              </tr>
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Aim;
