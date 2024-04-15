import React from "react";
import tutor from "../../assets/tutorOne.png";
import rectangle8 from "../../assets/Rectangle8.png";
import "./testimonial.css";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <div className="bg-gray h-auto py-36" id="testimonial">
      <div className="flex items-center justify-center gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M33.6716 6.88947L7.32843 33.2326C4.80857 35.7525 0.5 33.9678 0.5 30.4042L0.499998 4.06104C0.499998 1.8519 2.29086 0.0610368 4.5 0.0610367L30.8431 0.0610356C34.4068 0.0610354 36.1914 4.36961 33.6716 6.88947Z"
            fill="#04989E"
          />
        </svg>
        <p className="font-bold text-3xl text-center ">
          What Our Client Say About Us
        </p>
      </div>
      <div className="text-base font-normal text-center w-4/5 sm:w-3/5 m-auto my-10">
        Our valuable clients are our assets we value there feedback, suggestions
        and question. The following are few feedbacks from our clients.
      </div>
      <div className=" py-14 w-11/12 m-auto">
        <Slider />
      </div>
      <div className="h-60 bg-bluePrimary relative">
        <div className="flex items-center justify-center gap-3 pt-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M33.1716 6.88996L6.82843 33.2331C4.30857 35.753 -2.66344e-07 33.9683 -4.22114e-07 30.4047L-1.57361e-06 4.06153C-1.67017e-06 1.85239 1.79086 0.0615251 4 0.061525L30.3431 0.0615239C33.9068 0.0615237 35.6914 4.3701 33.1716 6.88996Z"
              fill="#FFD15C"
            />
          </svg>
          <p className="font-bold text-3xl text-center text-white">
            We're here to help! Call Us Today!
          </p>
        </div>
        <div className=" flex items-center justify-center gap-4 mt-8">
          <Link 
          to={'/TeachRica/contactus'}
            
            
            className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl font-semibold cursor-pointer"
          >
            Register Now
          </Link>
          <Link
           to={'/TeachRica/contactus'}
        
            className="text-sm py-3 px-7  bg-gray rounded-3xl font-semibold cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        <div className="tutor">
          <img src={tutor} alt="" className="absolute left-8 z-10" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="208"
            height="209"
            viewBox="0 0 208 209"
            fill="none"
            className="absolute z-0 -top-7 left-24"
          >
            <path
              d="M14.0047 205.904L205.505 14.4039C210.545 9.36415 206.976 0.747009 199.848 0.747009L8.34784 0.747009C3.92957 0.747009 0.347839 4.32874 0.347839 8.74701L0.347839 200.248C0.347839 207.375 8.96498 210.944 14.0047 205.904Z"
              fill="#00C9DA"
            />
          </svg>
        </div>
      </div>

      <div className="w-5/6 m-auto items-center sm:flex-row flex flex-col py-28 gap-12">
        <div className=" sm:w-2/3 w-100">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M33.1716 7.41804L6.82843 33.7612C4.30857 36.281 -2.66344e-07 34.4964 -4.22114e-07 30.9327L-1.57361e-06 4.5896C-1.67017e-06 2.38046 1.79086 0.589601 4 0.589601L30.3431 0.5896C33.9068 0.5896 35.6914 4.89818 33.1716 7.41804Z"
                fill="#FFD15C"
              />
            </svg>
            <p className="font-bold text-3xl text-center">
              Best Tuition Services in Peshawar
            </p>
          </div>

          <div className=" text-base my-6 text-justify p-2">
            Good news for all the parents and students looking for affordable
            and best tuition services. We offer a full variety of in-home
            tutoring services in Peshawar. Our qualified, competent, and
            experienced tutors will visit your home to teach your children. They
            are experts in numerous academic programs, courses, and grades and
            have experience in all subject areas.
          </div>
          <Link
            to={'/TeachRica/contactus'}
            className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl font-semibold cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        <div className=" mt-3  relative">
          <img src={rectangle8} alt="" className="w-wAbout" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="252"
            height="252"
            viewBox="0 0 252 252"
            fill="none"
            className="absolute -bottom-4 -left-4 mix-blend-multiply"
          >
            <path
              d="M224.162 223.804L27.8733 27.5154C17.7939 17.4359 0.55963 24.5746 0.55963 38.829L0.559621 235.118C0.559621 243.955 7.72306 251.118 16.5596 251.118L212.849 251.118C227.103 251.118 234.242 233.884 224.162 223.804Z"
              fill="#04989E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
