import React from "react";
import CommonHeader from "../components/CommonHeader";
import { Footer, Navbar } from "../components/index";
import serviceOne from '../assets/service1.png';


const ServiceModal = () => {
  return (
    <div>
      <Navbar color={"bg-white"} />

      <CommonHeader />
      <div className="border-2 h-[100vh] w-[70vw] mx-auto bg-slate-400">
        <div className="flex border-2 w-full h-80 my-10">
          <div className="flex">
            
          <div className="w-3/5 h-full  relative " >
          <img src={serviceOne} alt="" className="w-full h-full w block "  />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="109"
            viewBox="0 0 108 109"
            fill="none"
            className=" absolute left-0 bottom-0  "
          >
            
            <path
              d="M89.895 90.15L13.6568 13.9119C8.61713 8.87214 -8.16208e-06 12.4415 -8.47362e-06 19.5687L-1.18061e-05 95.8068C-1.19992e-05 100.225 3.58171 103.807 7.99999 103.807L84.2381 103.807C91.3653 103.807 94.9347 95.1897 89.895 90.15Z"
              fill="#FFD15C"
            />
          </svg>
        </div>
        <div><h3 className="text-3xl mx-auto my-8">Home Tution</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nemo labore totam provident, eos veritatis? Aperiam qui blanditiis amet vitae cupiditate nemo velit vero eveniet! Aperiam sapiente dicta facilis est.</p></div>
       

          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceModal;
