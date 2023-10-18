"use client";
import React from "react";

const advisors = [
  {
    id: "1",
    name: "Mr. Md. Abul Kalam Azad",
    designation:
      " Former Principal Secretary &n Principal Coordinator (SDG Affairs), PMO",
  },
  {
    id: "2",
    name: "Dr. Muhammad Anisuzzaman Talukder",
    designation: " Director & Professor, RISE, BUET",
  },
  {
    id: "3",
    name: "Prof. Dr. Syed Akhter Hossain",
    designation:
      " Dean, Department of Computer Science and Engineering, Daffodil International University-DIU",
  },
  {
    id: "4",
    name: "Mr. Farid Uddin",
    designation: " Panel Advisor, FBCCI Former Member, NBR",
  },
  {
    id: "5",
    name: "Mr. Shykh Seraj",
    designation: " Founder Director and Head of News, Channel I",
  },
  {
    id: "6",
    name: "Dr. Ijaz Hossain",
    designation: " Professor (Rtd.), BUET",
  },
  {
    id: "7",
    name: "Dr. M.A. Razzaque",
    designation:
      " Research Director, Policy Research Institute of Bangladesh (PRI).",
  },
  {
    id: "8",
    name: "Prof. Dr. Khondaker A. Mamun",
    designation:
      " Professor & Director, IRIIC, United International University (UIU)",
  },
  {
    id: "9",
    name: "Mr. Sami Ahmed",
    designation: " Managing Director, Startup Bangladesh Limited",
  },
  {
    id: "10",
    name: "Mr. Mamun Rashid",
    designation: " Managing Partner, PwC Bangladesh",
  },
  {
    id: "11",
    name: "Dr. M. Masrur Reaz",
    designation: " Founder Chairman, Policy Exchange, Bangladesh",
  },
  {
    id: "12",
    name: "Mr. Abdul Bari",
    designation:
      " Policy Advisor, Establishing Digital Government and Economy Project, ICT Division",
  },
  {
    id: "13",
    name: "Mr. Siddhartho Goushami",
    designation: " Sr. Consultant, IDEA Project, ICT Division",
  },
  {
    id: "14",
    name: "Mr. Anindya Sengupta",
    designation:
      " Director, ADCOR International Limited & Former Director, PwC",
  },
  {
    id: "15",
    name: "Mr. Arfe Elahi",
    designation:
      " Chief Digital Transformation Specialist, UNDP Regional Office, Bangkok",
  },
  {
    id: "16",
    name: "Mr. Khandaker Golam Moazzem",
    designation: " Research Director, Center for Policy Dialogue (CPD)",
  },
  {
    id: "17",
    name: "Mr. Mohammed Humayun Kabir (FCA)",
    designation: " Member, Association of Ship Recycling in Bangladesh",
  },
  {
    id: "18",
    name: "Mr. Mohammed Nurul Amin",
    designation: " Member, Bangladesh Freight Forwarders Association",
  },
  {
    id: "19",
    name: "Dr. A.K. Enamul Haque",
    designation: " Professor of Economics, East West University",
  },
  {
    id: "20",
    name: "Architect Mr. Iqbal Habib",
    designation: " Member Secretary, Bangladesh Poribesh Andolon (BAPA)",
  },
  {
    id: "21",
    name: "Dr. Mostafa Abid Khan",
    designation: " Trade Policy Analyst and Trade Negotiator",
  },
];

const Advisor = () => {
  return (
    <section>
      <div>
       
        <div className=" flex justify-center mt-5 mb-5">
          <div className=" w-11/12 md:w-10/12">
          <h1 className=" bg-amber-300 p-5 font-bold">Expert Panel of Advisors</h1>
            <div className="overflow-x-auto overflow-y-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {advisors.map((item) => (
                    <tr key={item.id} className="shadow-sm odd:bg-white even:bg-amber-100 rounded-md">
                      <th>{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisor;
