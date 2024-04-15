import { Navbar, Footer } from "../components/index";
import CommonHeader from "../components/CommonHeader";
import serviceOne from "../assets/service1.png";
import serviceTwo from "../assets/service2.png";
import serviceThree from "../assets/service3.png";
import { Link, useNavigate } from "react-router-dom";
const ServicesPage = () => {
  const data = {
    title: "Our Services",
    description: "Build your future with our quality education. The best and largest all in one online and home tuition services in the region.",
  }
  const navigate = useNavigate();
  return (
    <div>
      <Navbar color={"bg-white"} />
      <CommonHeader data={data} />
      {/* Services Section */}
      <div
        className=" flex flex-col  gap-10 items-center justify-center py-32"
        id="service"
      >
        <div className=" flex gap-2 mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <path
              d="M33.1716 7.63532L6.82843 33.9785C4.30857 36.4983 -2.66344e-07 34.7137 -4.22114e-07 31.15L-1.57361e-06 4.80689C-1.67017e-06 2.59775 1.79086 0.806886 4 0.806886L30.3431 0.806885C33.9068 0.806885 35.6914 5.11546 33.1716 7.63532Z"
              fill="#FFD15C"
            />
          </svg>
          <p className="font-bold text-3xl">How Can We Help You?</p>
        </div>

        <div className=" flex-col flex w-5/6 m-auto   sm:flex-row  justify-center items-center">
          <div
            className="sm:w-1/3 w-2/3 relative "
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceOne} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3 ">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className=" absolute left-0 bottom-24  "
            >
              <path
                d="M89.895 90.15L13.6568 13.9119C8.61713 8.87214 -8.16208e-06 12.4415 -8.47362e-06 19.5687L-1.18061e-05 95.8068C-1.19992e-05 100.225 3.58171 103.807 7.99999 103.807L84.2381 103.807C91.3653 103.807 94.9347 95.1897 89.895 90.15Z"
                fill="#FFD15C"
              />
            </svg>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceTwo} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Online Tuition
            </p>
            <p className="text-base pl-3">
              Get the best quality without compromising the time or location.
            </p>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceThree} alt="" className="w-96 block m-auto " />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className="absolute right-0 bottom-24"
            >
              <path
                d="M94.3432 14.5055L13.6986 95.15C8.65889 100.19 12.2282 108.807 19.3555 108.807L100 108.807C104.418 108.807 108 105.225 108 100.807L108 20.1623C108 13.0351 99.3829 9.46574 94.3432 14.5055Z"
                fill="#00C9DA"
              />
            </svg>
          </div>
        </div>

        <div className=" flex-col  flex w-5/6 m-auto gap-4 sm:flex-row justify-center items-center">
          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceOne} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className=" absolute left-0 bottom-24  "
            >
              <path
                d="M89.895 90.15L13.6568 13.9119C8.61713 8.87214 -8.16208e-06 12.4415 -8.47362e-06 19.5687L-1.18061e-05 95.8068C-1.19992e-05 100.225 3.58171 103.807 7.99999 103.807L84.2381 103.807C91.3653 103.807 94.9347 95.1897 89.895 90.15Z"
                fill="#FFD15C"
              />
            </svg>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceTwo} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Online Tuition
            </p>
            <p className="text-base pl-3">
              Get the best quality without compromising the time or location.
            </p>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceThree} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className="absolute right-0 bottom-24"
            >
              <path
                d="M94.3432 14.5055L13.6986 95.15C8.65889 100.19 12.2282 108.807 19.3555 108.807L100 108.807C104.418 108.807 108 105.225 108 100.807L108 20.1623C108 13.0351 99.3829 9.46574 94.3432 14.5055Z"
                fill="#00C9DA"
              />
            </svg>
          </div>
        </div>
        <div className=" flex-col  flex w-5/6 m-auto gap-4 sm:flex-row justify-center items-center">
          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceOne} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className=" absolute left-0 bottom-24  "
            >
              <path
                d="M89.895 90.15L13.6568 13.9119C8.61713 8.87214 -8.16208e-06 12.4415 -8.47362e-06 19.5687L-1.18061e-05 95.8068C-1.19992e-05 100.225 3.58171 103.807 7.99999 103.807L84.2381 103.807C91.3653 103.807 94.9347 95.1897 89.895 90.15Z"
                fill="#FFD15C"
              />
            </svg>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceTwo} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Online Tuition
            </p>
            <p className="text-base pl-3">
              Get the best quality without compromising the time or location.
            </p>
          </div>

          <div
            className="sm:w-1/3 w-2/3 relative"
            onClick={() => navigate("/TeachRica/service-modal")}
          >
            <img src={serviceThree} alt="" className="w-96 block m-auto" />
            <p className="text-2xl font-bold text-start mt-2 p-3">
              Soft Skills Courses
            </p>
            <p className="text-base pl-3">
              Courses to help your child grow into a confident, smart and well
              rounded.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="109"
              viewBox="0 0 108 109"
              fill="none"
              className="absolute right-0 bottom-24"
            >
              <path
                d="M94.3432 14.5055L13.6986 95.15C8.65889 100.19 12.2282 108.807 19.3555 108.807L100 108.807C104.418 108.807 108 105.225 108 100.807L108 20.1623C108 13.0351 99.3829 9.46574 94.3432 14.5055Z"
                fill="#00C9DA"
              />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
