"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import {
  FiChevronDown,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { CiMail, CiPhone } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className=" bg-indigo-950 p-2 flex justify-between md:pe-10 md:ps-10">
        <div className=" flex text-white gap-3">
          <a href="https://www.facebook.com/profile.php?id=61552477311564&mibextid=ZbWKwL" target="_blank">
            <FiFacebook />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiYoutube />
          </a>
        </div>
        <div className=" flex gap-2">
          <p className=" text-xs text-white flex items-center font-bold">
            <CiMail />
            secretariat@fbcciirc.org
          </p>
          <p className=" text-xs text-white flex items-center font-bold">
            <CiPhone />
            +8801783014227
          </p>
        </div>
      </div>
      <div className="navbar bg-white shadow-lg rounded-sm sticky top-0 z-50">
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li>
                <Link href="/" className=" text-lg flex hover:bg-amber-300 ">
                  Home
                </Link>
              </li>
              <details className="dropdown dropdown-bottom">
                <summary className="text-lg p-2 pe-3 ps-3 rounded-lg flex items-center gap-1 hover:bg-amber-300 ">
                  About us <FiChevronDown />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-56"
                >
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/history">Brief History Profile</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/governing">Governing Body Members</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="advisor">Expert Panel of Advisors</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/team">Core Team</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/mission">Mission & Vision</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/aim">Aims & Objectives</Link>
                  </li>
                  <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                    <Link href="/gallery">Gallery</Link>
                  </li>
                </ul>
              </details>
              <li>
                <Link
                  href="/innovation"
                  className="text-lg flex hover:bg-amber-300 "
                >
                  Innovation
                </Link>
              </li>
              
              <li>
                <Link
                  href="/research"
                  className="text-lg flex hover:bg-amber-300 "
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/incubation"
                  className="text-lg flex hover:bg-amber-300 "
                >
                  Incubation
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-lg flex hover:bg-amber-300 "
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-lg flex hover:bg-amber-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg flex hover:bg-amber-300"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/certificate"
                  className="text-lg flex hover:bg-amber-300"
                >
                  Certificate
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="text-md flex hover:bg-amber-300 uppercase lg:hidden"
          >
            <Image src={logo} height={20} width={40} alt="logo" />
          </Link>
        </div>

        {/* dasktop */}
        <div className="navbar hidden lg:flex  lg:items-center lg:justify-center p-0">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/" className=" text-lg flex hover:bg-amber-300 ">
                Home
              </Link>
            </li>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-lg p-2 pe-3 ps-3 rounded-lg flex justify-center items-center gap-1 hover:bg-amber-300 "
              >
                About us <FiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-56"
              >
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/history">Brief History Profile</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/governing">Governing Body Members</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="advisor">Expert Panel of Advisors</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/team">Core Team</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/mission">Mission & Vision</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/aim">Aims & Objectives</Link>
                </li>
                <li className=" font-semibold text-sm hover:bg-amber-300 rounded-sm">
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <li>
              <Link
                href="/innovation"
                className="text-lg flex hover:bg-amber-300 "
              >
                Innovation
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-lg flex hover:bg-amber-300 "
              >
                Research
              </Link>
            </li>
            

            <Link href="/" className="pe-2 ps-2">
              <Image
                className=" "
                src={logo}
                width={50}
                height={40}
                alt="logo"
              />
            </Link>

            
            <li>
              <Link
                href="/incubation"
                className="text-lg flex hover:bg-amber-300 "
              >
                Incubation
              </Link>
            </li>
            <li>
              <Link
                href="/training"
                className="text-lg flex hover:bg-amber-300 "
              >
                Training
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-lg flex hover:bg-amber-300">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg flex hover:bg-amber-300">
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/certificate"
                className="text-lg flex hover:bg-amber-300"
              >
                Certificate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
