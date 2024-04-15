import React from 'react'
import "./contact.css"
import contactPhone from "../../assets/contactPhone.png"

const Contact = () => {
  return (
    <div className='contact mb-10 relative' id='contact'>
      <div className="pt-20">
        <div className='flex justify-center items-center gap-3 mb-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M33.1716 6.82844L6.82843 33.1716C4.30857 35.6914 -2.66344e-07 33.9068 -4.22114e-07 30.3431L-1.57361e-06 4C-1.67017e-06 1.79086 1.79086 1.67017e-06 4 1.57361e-06L30.3431 4.22115e-07C33.9068 2.66344e-07 35.6914 4.30858 33.1716 6.82844Z" fill="#FFD15C" />
          </svg>
          <p className='font-bold text-3xl text-white'>Contact Us Now</p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <form action="">
            {/*  */}
            <input
              type="text"
              name=""
              id=""
              placeholder='Name'
              className='bg-transparent m-auto border rounded-md border-white mb-4 p-1 pl-2 placeholder-white text-white outline-none' />
            <br />

            {/*  */}
            <input
              type="email"
              name=""
              id=""
              placeholder='Email'
              className='bg-transparent m-auto border rounded-md  border-white mb-4 p-1 pl-2 placeholder-white  text-white outline-none' />
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder='Your Message'
              className='bg-transparent m-auto border rounded-md  border-white mb-4 pt-4 pr-4 pl-4 pb-28 placeholder-white   text-white outline-none' />
            <br />
            <button type="submit" className='bg-white rounded-3xl py-3 px-8 text-center text-sm w-80 m-auto block font-bold mt-10'>
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="phoneSet border-2 relative">
        <img src={contactPhone} alt="" className=' w-72 absolute bottom-20 right-24 z-10' />

        <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-20 right-24 z-0' width="178" height="179" viewBox="0 0 178 179" fill="none" >
          <circle cx="89.1799" cy="89.5011" r="88.5503" transform="rotate(-73.421 89.1799 89.5011)" fill="#FFD15C" />
        </svg>
      </div>
    </div>
  )
}

export default Contact