import React from "react";
import { FiBox, FiCheckCircle, FiCrosshair, FiPackage } from "react-icons/fi";
import Image from "next/image";
import innov2 from "../../../public/others/inno.svg";
import innov from "../../../public/others/innov2.jpg";
import innov3 from "../../../public/others/innov3.jpg";

const sz = 25;
const innos = [
  {
    id: 1,
    title: "Revenue-model innovation",
    des: "This involves business owners looking at their revenue model for places to innovate the products and services that they offer, the prices of their products and services, and the customers they target. When organizations choose revenue-model innovation, they may choose, for example, to create innovative products, stop selling certain products, make changes to their supply chain, sell to new customers, or change the prices of their offerings.",
    icon: <FiBox size={sz} />,
  },
  {
    id: 2,
    title: "Business-model innovation",
    des: "This involves business owners looking at their overarching business model for places to implement innovative solutions: their business processes, their business strategy, their mission statement, the technologies they use, and the businesses that they partner with. When organizations choose business-model innovation, they may choose, for example, to create a strategic alliance with another business, to update the software that they use, to accept venture capital financing, or to go from selling at a physical storefront to selling online.",
    icon: <FiPackage size={sz} />,
  },
  {
    id: 3,
    title: "Industry-model innovation",
    des: "This involves business owners looking at their industry model for places to innovate: the industry they currently work within and what potential industries they could transition to. When organizations choose industry- model innovation, they may choose, for example, to market their product to an entirely different industry or even to create a new industry to align with their mission and products.",
    icon: <FiCrosshair size={sz} />,
  },
];

const inadd = [
  {
    id:1,
    des:'Innovation helps grow business. Business growth means, ultimately, increasing your profits. Successful innovation allows you to add value to your business so that you can increase your profits—if you don’t innovate well, your business will plateau'
  },
  {
    id:2,
    des:'Innovation helps a country/sector ahead of the competition. With globalization and a rapidly changing market, there are more competing businesses than ever before. Innovative thinking can help predict the market and keep up with customer needs. If business doesn’t innovate, other innovative companies bring new ideas to the marketplace, and you’ll have to scramble to keep up.'
  },
  {
    id:3,
    des:'Innovation helps take advantage of new technologies. Technology (and especially artificial intelligence) is evolving faster than ever before, which means that there may be new, more efficient technologies to make better products, to offer your services, to market your business, or to track your performance with analytics. By taking advantage of these new technologies for process innovation, you’ll be able to optimize your business and gain a competitive advantage over your competitors.'
  },
  {
    id:4,
    des:'Reinforce Brand – Development branding is popular in organizational leadership. This process reveals information to help leaders to learn other ways to be more innovative. It is important because it is recognized as one of the main drivers for success. It gives organizational sustainability such as brand maintenance.'
  },
  {
    id:5,
    des:'Making the Most of What You Have Already – It is not all about creating a new product or service which you can sell, but you also need to focus on your existing business procedures to improve your efficiency, find some new customers, increase your profits and cut down on the amount of your waste. When you are continually innovating and improving on the practices of your business you will likely also attract better staff and keep more of your existing staff. This is detrimental to the health and performance of your business in the long-term.'
  },
  {
    id:6,
    des:'Responding to Competition and Trends – Innovation can help you to see what exists now in opportunities or which ones will likely pop up in the near future. Businesses which are successful don’t only respond to the current needs of their customers, but usually predict the future trends and come up with an idea, service or product that can meet the future demand quickly and effectively. In this way you can stay ahead of your competition as trends, technology or markets shift.'
  },
]
const Innovation = () => {
  return (
    <section className=" bg-slate-100 py-10">
      <div className="mx-5 sm:mx-10 md:mx-20 bg-white shadow-md rounded-sm p-5">
        <p className=" bg-amber-300 p-5 text-lg uppercase font-bold my-3">
          Innovation
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-10 px-5">
          <Image src={innov2} alt="" className=" h-96 w-auto" />
          <div>
            <p className=" text-justify pb-5 text-lg">
              Business innovation is the act of introducing something new to a
              company/sector/economy—whether it’s a new product, a new market
              strategy, a new method, and so on—in order to reinvigorate the
              company and promote new value and growth. Innovation is all about
              business leaders coming up with (or listening to) creative ideas,
              and then using strategic planning and decision-making to implement
              the new business ideas successfully. When a business innovates, it
              can either improve its existing products, processes, or
              methodologies, or it can create new ones from scratch.
            </p>
          </div>
        </div>
        <hr />
        <div className=" row-span-1">
          <p className=" py-5 font-bold text-lg text-center">
            Models of Business Innovation
          </p>
          <p>
            There isn’t just one way to innovate—in fact, there are three
            distinct approaches that businesses use to introducing something
            new. Each model involves innovating a different aspect of the
            organization:
          </p>
        </div>
        <div className=" flex justify-center py-5">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
           
            {innos.map((item, i) => (
              <div
                key={i}
                className=" border rounded-md shadow-md bg-white p-5 hover:bg-indigo-100 h-fit"
              >
                <div className=" h-16 bg-indigo-600 rounded-b-xl shadow-md"></div>
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
        <p className=" font-bold text-xl py-5 text-center">
          Why is Innovation Important for Businesses
        </p>
          <div className=" flex justify-center py-5">
            <div className=" w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Image src={innov3} alt="" className=" md:col-span-2 md:row-span-1"/>
              {inadd.map((item, i) => (
                <div
                  key={i}
                  className=" rounded-md bg-white p-5 hover:bg-green-100 mt-5 border shadow-sm"
                >
                  <div className=" flex  justify-center -mt-10">
                    <p className="bg-green-400 text-white p-3 rounded-full shadow-xl ">
                      <FiCheckCircle/>
                    </p>
                  </div>
                  <p className=" text-justify pt-5">{item.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
