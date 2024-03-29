
import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import faction from '../../../public/partner/faction.png'
import aws from '../../../public/partner/aws.png'
import uiu from '../../../public/partner/uiu.png'
import uncdp from '../../../public/partner/uncdp.png'
import undp from '../../../public/partner/undp.png'
import wust from '../../../public/partner/wust.png'
import gen from '../../../public/partner/genbd.svg'
import cmsf from '../../../public/partner/cmsf.png'
import nijer from '../../../public/partner/nij.png'
import microsoft from '../../../public/partner/microsoft.png'
import cto from '../../../public/partner/cto.jpeg'
import buet from '../../../public/partner/buet.jpeg'
import cidauk from '../../../public/partner/cidauk.jpg'
import orel from '../../../public/partner/orel.png'
import ithub from '../../../public/partner/ithub.jpg'

const partners = [
  {
    id:1,
    name:'Faction AI USA',
    photo:faction
  },
  {
    id:2,
    name:'GEN Bangladesh',
    photo:gen
  },
  {
    id:3,
    name:'WUST',
    photo:wust
  },
  {
    id:4,
    name:'UNDP',
    photo:undp
  },
  {
    id:5,
    name:'UNCDF',
    photo:uncdp
  },
  {
    id:6,
    name:'Amazon Web Series',
    photo:aws
  },
  {
    id:7,
    name:'RISE BUET',
    photo:buet
  },
  {
    id:8,
    name:'UIU',
    photo:uiu
  },
  {
    id:10,
    name:'CMSF',
    photo:cmsf
  },
  {
    id:11,
    name:'Nijer Bolar Moto Ekta Golpo Foundation',
    photo:nijer
  },
  {
    id:12,
    name:'Microsoft',
    photo:microsoft
  },
  {
    id:13,
    name:'IT HUB Incorporated',
    photo:ithub
  },
  {
    id:14,
    name:'OREL IT',
    photo:orel
  },
  {
    id:15,
    name:'CIDAUK Incubation Centre',
    photo:cidauk
  },
  {
    id:16,
    name:'CTO Forum',
    photo:cto
  },
]


const Partner = () => {
  return (
    <section className=' bg-slate-100 pt-10 pb-10'>
       <h1 className=" font-extrabold text-center text-2xl pt-5 uppercase">
       Our Potential Partners
        </h1>
        <div className="flex justify-center pb-5">
          <div className=" h-2 w-32 bg-amber-400 rounded-xl shadow-sm mt-1"></div>
        </div>
        <Marquee speed={40} className=' mt-2 mb-2'>
           {
            partners.map((item)=>
            <div key={item.id} className='p-5 bg-white shadow-md rounded-md m-3'>
              <Image src={item.photo} alt='logo' className=' h-20 w-48'/>
               <p className=' text-2xl font-bold text-center pt-2'>{item.name}</p>
            </div>
            )
           }
        </Marquee>
        <Marquee speed={40} direction='right' className=' mt-2 mb-2'>
           {
            partners.map((item)=>
            <div key={item.id} className='p-5 bg-white shadow-md rounded-md m-3'>
              <Image src={item.photo} alt='logo' className=' h-20 w-64'/>
               <p className=' text-2xl font-bold text-center pt-2'>{item.name}</p>
            </div>
            )
           }
        </Marquee>
        
    </section>
  )
}

export default Partner