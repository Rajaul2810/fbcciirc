import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import rec from "../../../public/others/re.svg";
import {
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill,
  Bs5CircleFill,
  Bs6CircleFill,
  Bs7CircleFill,
  Bs8CircleFill,
} from "react-icons/bs";

const sz = 25;
const research = [
  {
    id: 1,
    title: "Purpose",
    des: "Business research is conducted with the specific goal of providing information that can be used to make business decisions. This means that the research is focused on a specific problem or question, and the data that is collected is analyzed in a way that is relevant to the business context.",
    icon: <Bs1CircleFill size={sz} />,
  },
  {
    id: 2,
    title: "Systematic approach",
    des: "Business research is not simply a matter of collecting data and hoping for the best. Instead, it is a systematic process that involves a number of steps, from defining the research problem to analyzing the data and drawing conclusions. This systematic approach helps to ensure that the research is rigorous and objective.",
    icon: <Bs2CircleFill size={sz} />,
  },
  {
    id: 3,
    title: "Objectivity",
    des: "Business research should be objective, meaning that the researcher should not allow their personal biases to influence the results of the research. This is important because business decisions should be based on sound evidence, not on hunch or intuition.",
    icon: <Bs3CircleFill size={sz} />,
  },
  {
    id: 4,
    title: "Data-driven",
    des: "Business research is data-driven, meaning that it relies on the collection and analysis of data to provide insights. The type of data that is collected will vary depending on the research question, but it may include primary data (such as surveys or interviews) and secondary data (such as market reports or industry statistics).",
    icon: <Bs4CircleFill size={sz} />,
  },
  {
    id: 5,
    title: "Relevance",
    des: "Business research should be relevant to the specific needs of the business. This means that the research should focus on issues that are important to the business and that the results of the research can be used to improve business operations.",
    icon: <Bs5CircleFill size={sz} />,
  },
  {
    id: 6,
    title: "Timeliness",
    des: "Business research needs to be timely, meaning that the results of the research need to be available to decision-makers in a timely manner. This is because business conditions can change quickly, and decision-makers need to have the latest information available to them.",
    icon: <Bs6CircleFill size={sz} />,
  },
  {
    id: 7,
    title: "Ethical considerations",
    des: "Business research should be conducted in an ethical manner, meaning that the rights of research participants should be protected. This includes obtaining informed consent from participants, protecting their confidentiality, and avoiding deception.",
    icon: <Bs7CircleFill size={sz} />,
  },
  {
    id: 8,
    title: "Communication",
    des: "The results of business research need to be communicated effectively to decision-makers. This means that the research findings should be presented in a clear and concise way, and that the implications of the findings should be clearly explained.",
    icon: <Bs8CircleFill size={sz} />,
  },
];

const re = 30;
const readd = [
  {
    id: 1,
    title: "Identifying Opportunities and Threats",
    des: "Business research helps businesses identify untapped market opportunities and potential threats. By understanding customer needs, market trends, and competitor strategies, businesses can position themselves to capitalize on emerging opportunities and proactively address potential risks.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 2,
    title: "Understanding Customer Needs and Preferences",
    des: "Business research provides in-depth insights into customer needs, preferences, and behaviors. This understanding is essential for developing products and services that meet customer expectations, crafting effective marketing campaigns, and delivering exceptional customer experiences.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 3,
    title: "Improving Decision-Making",
    des: "Business research helps businesses make informed decisions based on data and evidence, rather than relying on gut feelings or assumptions. By analyzing market trends, customer feedback, and competitor actions, businesses can make strategic decisions that maximize their chances of success.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 4,
    title: "Reducing Risks and Uncertainties",
    des: "Business research helps businesses identify and assess potential risks and uncertainties in the market. By understanding the competitive landscape, regulatory environment, and economic trends, businesses can take proactive steps to mitigate risks and protect their profitability.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 5,
    title: "Enhancing Innovation and Creativity",
    des: "Business research sparks innovation and creativity by uncovering new market opportunities, identifying unmet customer needs, and stimulating fresh ideas for products and services. It encourages businesses to think outside the box and challenge conventions, leading to breakthroughs and competitive advantages.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 6,
    title: "Strengthening Brand Reputation",
    des: "Business research helps businesses understand how customers perceive their brand and identify areas for improvement. By addressing customer concerns, enhancing brand messaging, and delivering consistent quality, businesses can strengthen their brand reputation and foster customer loyalty.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 7,
    title: "Optimizing Resource Allocation",
    des: "Business research provides businesses with valuable information to make informed decisions about resource allocation. By understanding which marketing channels are most effective, which sales strategies yield the best results, and which investments have the highest return on investment, businesses can optimize their resource allocation and maximize their financial performance.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 8,
    title: "Staying Ahead of the Competition",
    des: "Business research helps businesses stay ahead of the competition by tracking their strategies, identifying their strengths and weaknesses, and understanding their market positioning. By proactively responding to competitor actions and differentiating themselves in the market, businesses can maintain a competitive edge and secure their market share.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 9,
    title: "Guiding Long-Term Growth",
    des: "Business research provides businesses with a roadmap for long-term growth by identifying sustainable market opportunities, understanding customer needs over time, and adapting to changing industry trends. It helps businesses develop a clear vision for the future and make strategic decisions that support long-term growth and sustainability.",
    icon: <FiCheckCircle size={re} />,
  },
  {
    id: 10,
    title: "Measuring and Evaluating Success",
    des: "Business research provides businesses with the tools to measure and evaluate the effectiveness of their marketing campaigns, product launches, and strategic initiatives. By tracking key performance indicators and analyzing data over time, businesses can identify areas for improvement and refine their strategies to achieve their desired outcomes.",
    icon: <FiCheckCircle size={re} />,
  },
];

const Research = () => {
  return (
    <section className=" bg-slate-100 py-10">
      <div className="mx-5 sm:mx-10 md:mx-20 bg-white shadow-md rounded-sm p-5">
        <p className=" bg-amber-300 p-5 text-lg uppercase font-bold my-3">
          Research
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-10 px-5">
          <Image src={rec} alt="" className=""/>
          <div>
            <p className=" text-xl font-bold">Business Research</p>
            <p className=" text-justify py-4 text-lg">
              Business Research is more than conducting surveys. This process
              includes theory and idea development, problem definition,
              searching for and collecting information, analyzing data and
              communication the findings and their implications.
            </p>
          </div>
        </div>
        <hr />
        <div className=" row-span-1">
          <p className=" py-5 font-bold text-xl text-center">
            Characteristics of Business Research :
          </p>
        </div>
        <div className=" flex justify-center py-5">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {research.map((item, i) => (
              <div
                key={i}
                className=" border rounded-md shadow-md bg-white p-5 hover:bg-amber-100"
              >
                <div className=" h-14 bg-amber-400 rounded-b-xl shadow-md"></div>
                <div className=" flex  justify-center -mt-8">
                  <p className="bg-white p-3 rounded-full shadow-xl ">
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
        <hr />
        <div className="py-5">
          <p className=" font-bold text-xl pb-3 text-center">
            Why is Research Important for Businesses
          </p>
          <div className=" flex justify-center py-5">
            <div className=" w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {readd.map((item, i) => (
                <div
                  key={i}
                  className=" rounded-md bg-white p-5 hover:bg-green-100 mt-5 border shadow-sm"
                >
                  <div className=" flex  justify-center -mt-10">
                    <p className="bg-green-400 text-white p-3 rounded-full shadow-xl ">
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
        </div>
      </div>
    </section>
  );
};

export default Research;
