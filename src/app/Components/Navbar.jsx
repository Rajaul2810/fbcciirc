'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../../public/logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-sm sticky top-0 z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link href='/' className=" text-md flex hover:bg-amber-300">HOME</Link>
          </li>
          <li>
            <Link href='/about' className="text-md flex hover:bg-amber-300">ABOUT US</Link>
          </li>
          <li>
            <Link href='/innovation' className="text-md flex hover:bg-amber-300 uppercase">Innovation</Link>
          </li>
          <li>
            <Link href='/training' className="text-md flex hover:bg-amber-300 uppercase">Training</Link>
          </li>
          
          <li>
            <Link href='/research' className="text-md flex hover:bg-amber-300 uppercase">Research</Link>
          </li>
          <li>
            <Link href='/incubation' className="text-md flex hover:bg-amber-300 uppercase">Incubation</Link>
          </li>
          <li>
            <Link href='/contact' className="text-md flex hover:bg-amber-300">CONTACT US</Link>
          </li>
          </ul>
        </div>
        <Link href='/' className="text-md flex hover:bg-amber-300 uppercase lg:hidden"> <Image src={logo} height={20} width={40} alt="logo"/></Link>
      </div>
      <div className="navbar hidden lg:flex  lg:items-center lg:justify-center">
        <ul className="menu menu-horizontal">
          <li>
            <Link href='/' className=" text-md flex hover:bg-amber-300">HOME</Link>
          </li>
          <li>
            <Link href='/about' className="text-md flex hover:bg-amber-300">ABOUT US</Link>
          </li>
          <li>
            <Link href='/innovation' className="text-md flex hover:bg-amber-300 uppercase">Innovation</Link>
          </li>
          <li>
            <Link href='/training' className="text-md flex hover:bg-amber-300 uppercase">Training</Link>
          </li>
          
            <Link href='/' className="rounded-full shadow-sm p-2 w-16"> <Image className=" " src={logo} width='auto' height='auto' alt="logo"/></Link>
          
          <li>
            <Link href='/research' className="text-md flex hover:bg-amber-300 uppercase">Research</Link>
          </li>
          <li>
            <Link href='/incubation' className="text-md flex hover:bg-amber-300 uppercase">Incubation</Link>
          </li>
          <li>
            <Link href='/contact' className="text-md flex hover:bg-amber-300">CONTACT US</Link>
          </li>
          
          
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
