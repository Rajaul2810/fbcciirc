"use client"
import Image from 'next/image'
import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import zbg from '../../../public/zbg.jpg';

const Contact = () => {
    return (
        <section className=" bg-amber-50">
            <div className=' flex justify-center items-center pt-10 pb-10'>
                <div className='w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center '>
                    <div className='pb-5'>
                        <p className=' text-3xl font-extrabold  text-black'>CONTACT US</p>

                        <p className=' text-md pb-5 pt-2'>Send us a note and we will be in touch shortly.</p>
                        <div className=' mb-2 flex p-3 shadow-lg  rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-amber-600 to-amber-400 p-3 w-10 h-10 rounded-full  shadow-indigo-500/50 shadow-md bg-white'><FiMapPin color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Address:</p>
                                <p className=' text-sm'>FBCCI Innovation & Research Centre, 25, Shahid Nazrul Islam Sarak, Hatkhola, Dhaka</p>
                            </div>
                        </div>
                        <div className='mb-2 flex items-center p-3 shadow-lg me-1 rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-amber-600 to-amber-400 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md bg-white'><FiMail color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Mailbox:</p>
                                <a href='mailto:fbcci.irc@gmail.com' className=' text-sm'>fbcci.irc@gmail.com</a>
                            </div>
                        </div>
                        <div className=' mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-amber-600 to-amber-400 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md bg-white'><FiPhone color='white' /></p>
                            <div className='ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Phone:</p>
                                <p className=' text-sm'>+88 01000000000</p>
                            </div>
                        </div>

                    </div>
                    <div className='p-1 w-full shadow-md rounded-md'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.8430460099237!2d90.41998870473392!3d23.71968047954268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85237d1aa7b%3A0xbc36395a3428f076!2sFBCCI%20New%20Building!5e0!3m2!1sen!2sbd!4v1697535630861!5m2!1sen!2sbd" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact