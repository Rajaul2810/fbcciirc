import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";

const History = () => {
  return (
    <section className=" flex justify-center bg-slate-50 pt-5 pb-5">
      <div className=" w-11/12 grid grid-cols-1 md:grid-cols-2 p-5 place-items-center bg-white shadow-md rounded-md">
        <Image src={logo} alt="logo" className=" h-96 w-full" />
        <div>
          <h1 className=" text-lg font-bold uppercase bg-amber-300 p-3">
            Brief History
          </h1>
          <p className=" text-sm text-gray-700 text-justify pt-2 pb-3">
            First meeting of Governing Body held on 21 June 2023 with Mr Md
            Jashim Uddin, Chairman of FBCCI Innovation and Research Centre and
            President, FBCCI on chair. Memorandum of Association and Rules and
            Regulations approved and signed by All GB members.
          </p>
          <p className=" font-bold">Year of Establishment: 1973</p>
          <p className=" font-bold">Established under: Societies Act 1860</p>
        </div>
      </div>
    </section>
  );
};

export default History;
