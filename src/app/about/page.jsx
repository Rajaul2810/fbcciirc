"use client";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Governing from "../Components/Governing";
import Advisor from "../Components/Advisor";

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

const About = () => {
  return (
    <section>
      <section className=" flex justify-center mt-3 mb-5 bg-slate-50">
        <div className=" w-11/12 p-5">
          <section>
            <h1 className=" text-lg font-bold uppercase">Introduction</h1>
            <p className=" text-sm text-gray-700 text-justify">
              FBCCI Innovation and Research Centre (FIRC) stands as a dedicated
              institution, firmly committed to advancing the realms of
              innovation and research within the borders of Bangladesh aiming to
              collaborate closely with the government to shape innovation
              policies and support industry-led research initiatives, bridging
              gaps between various sectors for sustainable growth. FBCCI
              Innovation and Research Centre (FIRC) will be organized to promote
              Innovation and Research for all commercial organizations of
              Bangladesh especially member organizations of FBCCI. FBCCI
              Innovation and Research Centre (FIRC) has formed a Panel of
              Advisors, who will provide advisory support to FIRC on policy
              advocacy, skill development, education, and social welfare
              initiatives facilitation that will determine the rate and
              direction of technological learning and change, fostering economic
              growth and sustainable development of individuals and societies in
              Bangladesh and beyond.
            </p>
          </section>
          <section className="pt-5">
            <h1 className=" text-lg font-bold uppercase">Mission</h1>
            <p className=" text-sm text-gray-700 text-justify">
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
                    className=" shadow-sm p-2 rounded-md bg-white"
                  >
                    <div className="">
                      <BsFillCheckCircleFill
                        size={25}
                        className=" text-rose-600"
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
            <h1 className=" text-lg font-bold uppercase">Vision</h1>
            <p className=" text-sm text-gray-700 text-justify">
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
                    className=" shadow-sm p-2 rounded-md bg-white"
                  >
                    <div className="">
                      <BsFillCheckCircleFill
                        size={25}
                        className=" text-indigo-600"
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
      <Governing />
      <Advisor />
      <section className=" flex justify-center">
        <div className=" w-11/12 p-5">
          <h1 className=" text-lg font-bold uppercase">AIMS AND OBJECTIVES</h1>
          <p className=" text-sm text-gray-700 text-justify">
            The objects for which the Centre is established shall be the
            following, which will be implemented after obtaining necessary
            permission from the Government / Concerned authority/ competent
            authority before implementation of the objects and the objects
            contrary to the provision of Section 20 of the Act shall be treated
            as ineffective:
          </p>
          <ul className=" text-xs list-outside pt-3 ps-5 list-decimal">
            <li className=' pb-2'>
            To build, maintain, promote, facilitate, liaison and maintain
              network of Centres in the public and private sectors whose
              activities and interactions initiate, import, modify and diffuse
              new technologies and facilitate relationship which interact in the
              production, diffusion and use of new and economically useful
              knowledge.
            </li>
            <li className=' pb-2'>
            To collaborate, liaison, build together a set of Centres whose
              interactions would determine the innovative performance of private
              sector and to work on the national Centres, their incentive
              structures and their competencies, that would determine the rate
              and direction of technological learning or the volume and
              composition of change generating activities which jointly and
              individually contribute to the development and diffusion of new
              technologies.
            </li>
            <li className=' pb-2'>
            To work with the Government to develop framework within which
              governments form and implement policies to influence the
              innovation process and to facilitate a system of interconnected
              Centres to create, store and share the knowledge, skills and
              artefacts which define new technologies.
            </li>
            <li className=' pb-2'>
            To work and build innovation/research database for industry to
              have access to fund and develop such innovation for commercial
              viability and bridge the industry and researchers/innovators gaps
              and develop industry-led research and concepts and business
              models.
            </li>
            <li className=' pb-2'>
            To establish, set-up, run, operate, manage and maintain
              innovation, research and development center with the view to do
              research and develop various innovation concepts and models on
              business, revenue, industry, economic growth, technologies, etc.
              and to create investment climate, opportunities in
              business/industry/trade and investments through policy analysis,
              advocacy, dialogue for improved investment opportunities.
            </li>
            <li className=' pb-2'>
            To establish, build, liaison, promote and maintain a
              relationship with FBCCI, Government and private sector
              (chambers/associates/SME organizations) in developing effective
              policies/strategies towards sustainable innovation and research
              and development through cross-country analysis, regional business
              trade and investment developments, competitive analysis, linking
              industry and academic mechanism for sustainable growth.
            </li>
            <li className=' pb-2'>
            To assist and support Government and other local and
              international organizations both in private and public sector with
              various data driven research work and analysis and policy
              guidelines relating to trade, investment and industry for improved
              policy planning, LDC graduation challenges and opportunities, 4IR
              adoption and its challenges across the industrial eco-system,
              regional integration and connectivity benefits among India,
              Myanmar, China and other countries.
            </li>
            <li className=' pb-2'>
            To promote skill development activities in the areas/field of
              business community, chambers, association groups for the purpose
              of serving industry need in line with the broad goal and
              objectives of FBCCI and its member groups and other related
              chambers and association and business community.
            </li>
            <li className=' pb-2'>
            To establish, set-up, run, operate, manage and maintain
              education Centres such as university, college, school,
              polytechnics, madrassa, polytechnic, training and research center
              and institutes for promotion of education, science, literature and
              fine arts with permission from concerned authority as and when
              necessary.
            </li>
            <li className=' pb-2'>
              To engage in charitable purposes and social welfare activities
              and to promote and advance charity, welfare and well-being in and
              among communities and peoples of Bangladesh and other countries of
              the world
            </li>
            <li className=' pb-2'>
              To establish, run and manage academic scholarship for
              brilliant and meritorious students
            </li>
            <li className=' pb-2'>
              To establish, set-up, run, operate, manage and maintain
              Hospital, Clinic and Diagnostic Center for the people in
              Bangladesh
            </li>
            <li>
              To promote, establish, manage, control, supervise co-operative
              society, corporate body or undertakings, companies, Centres
              subject to the approval of the relevant authorities as may be
              conducive to the attainment of objects of the Centre and/or to
              generate funds therefrom to carry on the objects of the Centre.
            </li>
            <li className=' pb-2'>
              To fund, build, aid, assist, set up, manage, maintain,
              administer libraries, museums, public buildings and halls, parks,
              playgrounds, places for recreation and other places for use or
              benefit to communities and people as a whole or to any specially
              disadvantaged section
            </li>
            <li className=' pb-2'>
              To provide community training on communicable diseases and
              establish to Health Care Center and Hospitals for free Medical
              services.
            </li>
            <li className=' pb-2'>
              To undertake and carry on any humanitarian or charitable
              program for the poor and under privileged people
            </li>
            <li className=' pb-2'>
              To take up program for promotion of literature, fine art,
              economy, business, science and education
            </li>
            <li className=' pb-2'>
              To take up program to distribute relief among the neglected,
              poverty stricken in the event of any natural calamity like flood,
              storm, cyclone and earth quack
            </li>
            <li className=' pb-2'>
              To establish libraries, reading room, study centre for
              developing the habit of study for the benefit of the society, for
              its members and for the use of general public and to take up and
              adopt any program, Seminar, Rally, Workshops, Symposium, Fair,
              Cultural Program, Fair Exhibition, etc. to promote and develop
              innovative ideas, knowledge and concepts among the society.{" "}
            </li>
            <li className=' pb-2'>
              To distribute books free of cost among the poor students of
              school, College University and for the purpose of amelioration of
              the quality of education.{" "}
            </li>
            <li className=' pb-2'>
              To enter into any agreement with the Government, Authority of
              municipal, local or other bodies, with any other person or body
              that may seem conducive to the Centres’ objects or any of them and
              to obtain from any such government or authority any rights,
              privileges and concession, which the Centre may think to obtain
              and to carry out, exercise and comply with any such arrangements,
              rights, privileges and concessions in exchange of money or any
              other means and to undertake management contract, consultancy
              services, and other lawful activities that would directly and
              indirectly promote and sustain the objectives of the Centres on
              mutually agreed terms and conditions.{" "}
            </li>
            <li className=' pb-2'>
              To receive lawful subscription, donation from the members of
              the Centre and outsiders and to accept any donation, gift,
              contribution towards promoting the objects of the Centre, provided
              however that the Centre shall not receive any foreign donation,
              gift, etc.
            </li>
            <li className=' pb-2'>
              To purchase, hire, take on lease, or in exchange, or
              allotment, or otherwise acquire, erect, maintain, equip,
              construct, renovate movable or immovable property including land,
              building and equipment for the purpose of the Centre.
            </li>
            <li className=' pb-2'>
              To do all such other things as may be incidental or conducive
              to the attainment of the objects of the Centre.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
