// components/Footer.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiChevronsRight } from 'react-icons/fi';
import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer className=" bg-indigo-950">
            <div className="max-w-7xl w-11/12 md:w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 pt-5">
                <div className='mb-5'>
                    <Image src={logo} alt='logo' width={100}/>
                   
                    <div className="mt-4">

                        <ul className="flex space-x-4">

                            <li className=' bg-slate-300 p-2 hover:bg-slate-50 shadow-sm rounded-md'>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61552477311564&mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <FaFacebook size={20} />
                                </a>
                            </li>
                            <li className='bg-slate-300 p-2 hover:bg-slate-50 shadow-sm rounded-md'>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <FaTwitter size={20} />
                                </Link>
                            </li>
                            <li className='bg-slate-300 p-2 hover:bg-slate-50 shadow-sm rounded-md'>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <FaInstagram size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mb-5">

                    <div className="">
                        <h2 className="text-white text-lg font-semibold pb-2">Explore</h2>
                        <Link href="#">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>FAQ</p>
                        </Link>
                        <Link href="/history">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>About Us</p>
                        </Link>
                        <Link href="/contact">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Contact Us</p>
                        </Link>
                        <Link href="/innovation">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Innovation</p>
                        </Link>
                        <Link href="/incubation">
                            <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Incubation</p>
                        </Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <h2 className="text-white text-lg font-semibold pb-2">Quick Link</h2>
                    <Link href="#">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Join Us</p>
                    </Link>
                    <Link href="/training">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Training</p>
                    </Link>
                    <Link href="/">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Our Partners</p>
                    </Link>
                    <Link href="#">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Tech Venture</p>
                    </Link>
                    <Link href="/governing">
                        <p className="text-gray-400 text-sm hover:text-gray-300 flex items-center"><FiChevronsRight/>Governing Body</p>
                    </Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div>
                        <p className='text-gray-400 text-sm text-center'><a href="#" className=' underline hover:text-white'>Terms of use</a> | <a href="#" className=' underline hover:text-white'>Privacy Policy</a></p>
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} FBCCI. All rights reserved. Designed & Developed by <a className=' underline' href="https://www.facebook.com/profile.php?id=100088669787964" target='_blank'>AyAl Corp Limited </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
