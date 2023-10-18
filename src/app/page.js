import Image from 'next/image'
import Hero from './Components/Hero'
import certificate from '../.././public/certificates.jpg';
import Contact from './contact/page';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[url('../../public/ybg.jpg')] bg-cover bg-center pt-5 pb-5">
      <h1 className=' font-bold text-center text-2xl'>Incorporation Certificate</h1>
      <div className='flex justify-center'><div className=' h-2 w-32 bg-amber-400 rounded-xl shadow-sm '></div></div>
        <div className=' flex justify-center mt-3'>
          <Image className=' h-screen w-11/12 md:w-6/12 object-fill' src={certificate} height='auto' width='auto' alt='cer' />
        </div>
      </div>
      <Contact/>
    </div>
  )
}
