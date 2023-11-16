
"use client"
import Hero from './Components/Hero'
import Contact from './contact/page';
import Intro from './Components/Intro';
import WorkingSector from './Components/WorkingSector';
import Partner from './Components/Partner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Videos from './Components/Videos';

export default function Home() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
      <Hero />
      <Intro/>
      <Videos/>
      <WorkingSector/>
      <Partner/>
      <Contact/>
    </div>
  )
}
