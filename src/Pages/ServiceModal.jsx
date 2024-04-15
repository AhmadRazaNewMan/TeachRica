import React from "react";
import CommonHeader from "../components/CommonHeader";
import { Footer, Navbar } from "../components/index";
import serviceOne from "../assets/service1.png";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const ServiceModal = () => {
  const navigate =  useNavigate()
  const data = {
    title: "Our Services",
    description: "Build your future with our quality education. The best and largest all in one online and home tuition services in the region.",
  }
  return (
    <div className="">
      <Navbar color={"bg-white"} />

      <CommonHeader data={data} />
      <div className="shadow-lg shadow-cyan-500/50  h-auto sm:w-[80vw] md:w-[50vw] lg:w-[50vw] mx-auto mb-28">
        <div className="flex  w-full h-80 my-10">
          <div className="flex ">
            <div className="w-3/5 h-full  bg-orange-400 relative ">
              <img  src={serviceOne} alt="" className="w-full h-full   " />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="109"
                viewBox="0 0 108 109"
                fill="none"
                className=" absolute left-0  bottom-0  "
              >
                <path
                  d="M89.895 90.15L13.6568 13.9119C8.61713 8.87214 -8.16208e-06 12.4415 -8.47362e-06 19.5687L-1.18061e-05 95.8068C-1.19992e-05 100.225 3.58171 103.807 7.99999 103.807L84.2381 103.807C91.3653 103.807 94.9347 95.1897 89.895 90.15Z"
                  fill="#FFD15C"
                />
              </svg>
            </div>
            <div className=" ml-5   ">
              <h3 className="text-3xl mx-auto my-8">Home Tution</h3>
              <p className=" w-[300px] font-thin text-lg tracking-widest">
                Home Tuition Providing the best quality Home Tuition service the
                most qualified teachers at your service
              </p>
            </div>
            
          </div>
          <div className="border-2 border-red-500 h-[50px] ml-40 p-2" ><RxCross1 className="text-3xl text-bluePrimary " onClick={() => navigate('/TeachRica/services')} /></div>
        </div>
        <div className=" w-[90%] mx-auto tracking-wide my-28">
          <p>
            Teachrica offers top-level home tuition services in Peshawar and
            online tutors throughout the globe. Hire a professional home tutor
            in Peshawar, either a male or female instructor, for in-home tuition
            or online at guideway.pk. We teach the concepts so that our students
            might excel in and out of academic education. Our at-home tutors are
            accomplished teachers who are prepared to come to your house and
            instruct your children. They have knowledge of every subject. They
            present tuition for all the prominent education systems of Peshawar
            and they can teach all subjects and grades.
          </p>
        </div>
        <div className=" w-[90%] mx-auto flex flex-col gap-20 ">
          <div>
            <h1 className="text-3xl ">Feature 1</h1>
            <p className="tracking-wider   text-xl">
              Providing the best quality Home Tuition service the most qualified
              teachers at your service
            </p>
          </div>
          <div>
            <h1 className="text-3xl  ">Feature 2</h1>
            <p className="tracking-wider  text-xl">
              Providing the best quality Home Tuition service the most qualified
              teachers at your service
            </p>
          </div>
          <div>
            <h1 className="text-3xl ">Feature 3</h1>
            <p className="tracking-wider  text-xl">
              Providing the best quality Home Tuition service the most qualified
              teachers at your service
            </p>
          </div>
         
        </div>
        <div className="bg-bluePrimary h-20 w-full mt-20 flex gap-96">
          <div className="text-white text-3xl flex items-center justify-center h-full ml-12">Fee Details</div>
          <div className="text-white text-3xl flex items-center justify-center h-full">Rs 12000/=</div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceModal;
