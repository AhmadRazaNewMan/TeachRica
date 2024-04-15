import React from 'react'
import aboutImg from "../../assets/aboutImg.png"
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="w-10/12 m-auto py-24" id='about'>
      <div className="w-full m-auto items-center sm:flex-row flex flex-col gap-10 p-2 mt-10 ">
        <div className=" sm:w-2/3 w-100">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M33.1716 7.10688L6.82843 33.45C4.30857 35.9699 -2.66344e-07 34.1852 -4.22114e-07 30.6216L-1.57361e-06 4.27844C-1.67017e-06 2.06931 1.79086 0.278444 4 0.278444L30.3431 0.278443C33.9068 0.278443 35.6914 4.58702 33.1716 7.10688Z" fill="#04989E" />
            </svg>
            <p className="font-bold text-4xl text-center">About Us</p>
          </div>
          <div className=" text-base font-normal my-5 p-1">
            Teachrica offers top-level home tuition services in Peshawar and online tutors throughout the globe. Hire a professional home tutor in Peshawar, either a male or female instructor, for in-home tuition or online at guideway.pk. We teach the concepts so that our students might excel in and out of academic education. Our at-home tutors are accomplished teachers who are prepared to come to your house and instruct your children. They have knowledge of every subject. They present tuition for all the prominent education systems of Peshawar and they can teach all subjects and grades.
          </div>
          <Link to="/TeachRica/services"  duration={800} className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl font-semibold cursor-pointer mt-5">
            Explore More
          </Link>
        </div>
        <div className="relative mt-3">
          <img src={aboutImg} alt="" className='w-wAbout' />
          <svg xmlns="http://www.w3.org/2000/svg" width="252" height="252" viewBox="0 0 252 252" fill="none" className='absolute -bottom-4 -left-4 mix-blend-multiply'>
            <path d="M224.162 224.493L27.8733 28.2042C17.7939 18.1248 0.55963 25.2634 0.55963 39.5179L0.559621 235.807C0.559621 244.643 7.72306 251.807 16.5596 251.807L212.849 251.807C227.103 251.807 234.242 234.573 224.162 224.493Z" fill="#FFD15C" />
          </svg>
        </div>
      </div>
    </div >
  )
}

export default About