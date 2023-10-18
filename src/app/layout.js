import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const poppins = Roboto_Mono({ 
  subsets: ['latin'],
  weight:'400',
  display:'block'
 })

export const metadata = {
  title: 'FBCCIIRC',
  description: 'FBCCI Innovation and Research Centre (FIRC)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
         <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
