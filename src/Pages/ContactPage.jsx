import React from 'react'
import { Contact, Footer, Navbar } from '../components/index'
import CommonHeader from '../components/CommonHeader'
import tutor from "../assets/tutorOne.png"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ContactPage = () => {
  const  data = {
    title:"Contact Us",
    description:"Build your future with our quality education. The best and largest all in one online and home tution services in the region.",
  } 
  return (
    <div>
       <Navbar color={"bg-white"} />
       <CommonHeader data= {data} />
       <Contact/>
       <div className="h-60 bg-bluePrimary relative mt-40">
        <div className="flex items-center justify-center gap-3 pt-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M33.1716 6.88996L6.82843 33.2331C4.30857 35.753 -2.66344e-07 33.9683 -4.22114e-07 30.4047L-1.57361e-06 4.06153C-1.67017e-06 1.85239 1.79086 0.0615251 4 0.061525L30.3431 0.0615239C33.9068 0.0615237 35.6914 4.3701 33.1716 6.88996Z" fill="#FFD15C" />
          </svg>
          <p className='font-bold text-3xl text-center text-white'>We're here to help! Call Us Today!</p>
        </div>

        <div className=" flex items-center justify-center gap-4 mt-8">
          <ScrollLink to="contact" smooth={true} duration={800} className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl font-semibold cursor-pointer">
            Register Now
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={800} className="text-sm py-3 px-7  bg-gray rounded-3xl font-semibold cursor-pointer">
            Contact Us
          </ScrollLink>
        </div>

        <div className='tutor'>
          <img src={tutor} alt="" className='absolute left-8 z-10' />
          <svg xmlns="http://www.w3.org/2000/svg" width="208" height="209" viewBox="0 0 208 209" fill="none" className='absolute z-0 -top-7 left-24' >
            <path d="M14.0047 205.904L205.505 14.4039C210.545 9.36415 206.976 0.747009 199.848 0.747009L8.34784 0.747009C3.92957 0.747009 0.347839 4.32874 0.347839 8.74701L0.347839 200.248C0.347839 207.375 8.96498 210.944 14.0047 205.904Z" fill="#00C9DA" />
          </svg>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default ContactPage
