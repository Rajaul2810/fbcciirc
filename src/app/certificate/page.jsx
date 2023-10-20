import Image from 'next/image'
import React from 'react'
import certificate from '../../../public/certificates.jpg';

const Certificate = () => {
  return (
    <div>
        <div className="bg-[url('../../public/ybg.jpg')] bg-cover bg-center pt-5 pb-5 mt-3 mb-3">
      <h1 className=' font-bold text-center text-2xl'>Incorporation Certificate</h1>
      <div className='flex justify-center'><div className=' h-2 w-32 bg-amber-400 rounded-xl shadow-sm '></div></div>
        <div className=' flex justify-center mt-3'>
          <Image className=' h-screen w-11/12 md:w-6/12 object-fill' src={certificate} height='auto' width='auto' alt='cer' />
        </div>
      </div>
    </div>
  )
}

export default Certificate