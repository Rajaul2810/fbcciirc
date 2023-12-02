import React from "react";
import {
  FiBarChart2,
  FiBriefcase,
  FiLayers,
  FiSmile,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";
import training from "../../../public/others/training.jpg";

const sz = 25;
const trainings = [
  {
    id: 1,
    title: "Improved job performance",
    des: "Training can help employees develop the skills and knowledge they need to perform their jobs more effectively.",
    icon: <FiBriefcase size={sz} />,
  },
  {
    id: 2,
    title: "Increased productivity",
    des: "Training can help employees work more efficiently and produce more work.",
    icon: <FiBarChart2 size={sz} />,
  },
  {
    id: 3,
    title: "Reduced employee turnover",
    des: "Training can help employees feel more valued and appreciated, which can lead to increased job satisfaction and reduced turnover.",
    icon: <FiUsers size={sz} />,
  },
  {
    id: 4,
    title: "Improved customer satisfaction",
    des: "Training can help employees provide better customer service, which can lead to increased customer satisfaction.",
    icon: <FiSmile size={sz} />,
  },
  {
    id: 5,
    title: "Increased innovation",
    des: "Training can help employees develop their creativity and problem-solving skills, which can lead to increased innovation.",
    icon: <FiLayers size={sz} />,
  },
];

const Training = () => {
  return (
    <section className=" bg-slate-100 py-10">
      <div className="mx-5 sm:mx-10 md:mx-20 bg-white shadow-md rounded-sm p-5">
        <p className=" bg-amber-300 p-5 text-lg uppercase font-bold my-3">
          Training
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-10">
          <Image src={training} alt="" />
          <div>
            <p className=" text-justify pb-5 text-lg">
              Training is a structured process of imparting specific skills or
              knowledge to individuals or groups. It typically focuses on
              short-term objectives and aims to equip learners with the
              competencies they need to perform a particular task or function
              effectively. Training is often delivered through workshops,
              seminars, or sessions. Training is an essential part of personal
              and professional development, and it can help individuals achieve
              their goals and reach their full potential.
            </p>
            <p className=" text-justify text-lg">
              The importance of training cannot be overstated. Training can help
              individuals achieve their goals, improve their job performance,
              and advance their careers. It can also help organizations improve
              their productivity, reduce employee turnover, and increase
              customer satisfaction.
            </p>
          </div>
        </div>
        <hr />
        <p className=" py-5 font-bold text-xl text-center">
          Here are some of the benefits of training:
        </p>

        <div className=" flex justify-center py-5">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {trainings.map((item, i) => (
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
        <div className="">
          <p className=" font-bold text-lg pb-3">
            How to choose the right type of training
          </p>
          <p className=" text-justify text-lg">
            The best type of training for a particular situation will depend on
            a number of factors, such as the needs of the employees, the
            resources available, and the time constraints. It is important to
            carefully consider all of these factors before choosing a training
            program.
          </p>
          <p className=" text-justify text-lg py-2">
            Training is an essential investment for individuals and
            organizations alike. It can help to improve skills, knowledge,
            productivity, quality, customer satisfaction, and employee
            engagement. By choosing the right type of training and delivering it
            effectively, organizations can reap the many benefits that
            training has to offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
