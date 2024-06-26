import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import home from "../../assets/home.png";
import pair1last from "../../assets/pair1last.png";
import pair1mid from "../../assets/pair1mid.png";
import pair1top from "../../assets/pair1top.png";
import rectangle from "../../assets/Rectangle 2.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-scroll";
import cardImage from '../../assets/cardImage.png'
const Home = () => {
  return (
    <div className="">
      <div
        className="flex flex-col items-center justify-center relative"
        id="home"
        style={{
          backgroundImage: `url(${home})`,
          width: "100%",
          height: "824px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        
        <div className="flex w-10/12 m-auto ">
          <div className="flex flex-col items-center justify-center gap-4 w-2/12">
            <div
              className="flex items-center justify-center"
              style={{
                backgroundImage: `url(${pair1last})`,
                width: " 13.806rem",
                height: " 13.806rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundImage: `url(${pair1mid})`,
                  width: "11.25rem",
                  height: "11.25rem",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  backgroundPosition: "center",
                  flexShrink: "0",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${pair1top})`,
                    width: "2.543rem",
                    height: "2.643rem",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>

            <p className="text-white font-semibold text-2xl ">How it works? </p>
          </div>

          <div className=" w-7/12   flex flex-col gap-32">
            {/* relative */}
            <div className="flex flex-col gap-10 mt-10 relative ">
              <div className="text-6xl font-extrabold w-100 m-auto text-center leading-normal relative z-10">
                <span className="text-blueSecondary ">Grow</span> Your Learning
                Skill By Tuition
                <span />
              </div>

              <p className="text-base font-semibold w-5/6 text-center m-auto ">
                Build your future with our quality education. The best and
                largest all in one online and home tuition services in the
                region.
              </p>

              <div className="flex items-center justify-center gap-4 ">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl font-semibold cursor-pointer"
                >
                  Register Now
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="text-sm py-3 px-7 bg-gray rounded-3xl font-semibold cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </div>

              <div className="absolute top-36 left-96 z-0 object-cover ">
                <img src={rectangle} className="w-56 h-4" alt="" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 ">
              <Link
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="font-boldtransition-all duration-300 cursor-pointer"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="29"
                  viewBox="0 0 18 29"
                  fill="none"
                  className="scroll-smooth cursor-pointer"
                >
                  <rect
                    x="1.09375"
                    y="1"
                    width="15.8125"
                    height="26.5"
                    rx="7.90625"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="9.6438"
                    y1="8.73483"
                    x2="9.6438"
                    y2="13.25"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <p className="text-sm font-semibold">Scroll Down</p>
            </div>
          </div>

          <div className=" w-3/12 flex flex-col items-center justify-start pt-8">
            <div className="">
              <div className="-mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="188"
                  height="189"
                  viewBox="0 0 188 189"
                  fill="none"
                >
                  {/* //svg for that arrow above the image */}
                  <g clipPath="url(#clip0_2_227)">
                    <path
                      d="M20.4357 94.7356C20.0469 94.7866 19.6925 94.9882 19.4499 95.2962C19.2073 95.6043 19.0963 95.9938 19.1412 96.3795C19.3303 97.9431 19.5603 99.4589 19.8645 101.019C19.948 101.388 20.173 101.709 20.4922 101.915C20.8113 102.12 21.1997 102.193 21.5756 102.119C21.9515 102.045 22.2856 101.83 22.5076 101.518C22.7296 101.206 22.8221 100.822 22.7657 100.448C22.4818 98.9484 22.2627 97.4937 22.083 95.9971C22.0354 95.611 21.8351 95.2613 21.5263 95.0247C21.2174 94.7882 20.8252 94.6842 20.4357 94.7356Z"
                      fill="white"
                    />
                    <path
                      d="M19.6465 77.3167C19.0711 80.4682 18.7465 83.6568 18.6757 86.853C18.6779 87.2346 18.8299 87.5985 19.0993 87.8674C19.3687 88.1363 19.7343 88.289 20.1185 88.2931C20.5027 88.2972 20.8752 88.1524 21.1568 87.8894C21.4384 87.6264 21.607 87.2659 21.6268 86.8846C21.6914 83.8447 21.9998 80.8119 22.5492 77.8149C22.5843 77.625 22.5815 77.4305 22.5409 77.2426C22.5003 77.0546 22.4227 76.8769 22.3126 76.7196C22.2025 76.5623 22.062 76.4284 21.8991 76.3257C21.7362 76.2229 21.5541 76.1532 21.3633 76.1206C21.1725 76.0881 20.9766 76.0932 20.7869 76.1358C20.5971 76.1784 20.4172 76.2576 20.2575 76.3688C20.0977 76.4801 19.9612 76.6213 19.8558 76.7843C19.7503 76.9473 19.678 77.1289 19.6429 77.3188L19.6465 77.3167Z"
                      fill="white"
                    />
                    <path
                      d="M40.219 45.6172C37.5648 47.4736 35.081 49.561 32.7976 51.8543C32.5425 52.108 32.3881 52.4442 32.3632 52.8001C32.3383 53.1559 32.4447 53.507 32.6625 53.7877C32.8802 54.0684 33.1945 54.2595 33.5464 54.3252C33.8983 54.3909 34.2638 54.3268 34.5746 54.1449C34.6914 54.078 34.7983 53.9952 34.8921 53.8989C37.0488 51.7304 39.3959 49.7573 41.9049 48.0038C42.2277 47.7771 42.4482 47.4334 42.5179 47.0484C42.5875 46.6633 42.5006 46.2683 42.2762 45.9504C42.0518 45.6325 41.7083 45.4176 41.3214 45.3531C40.9344 45.2886 40.5356 45.3797 40.2128 45.6064L40.219 45.6172Z"
                      fill="white"
                    />
                    <path
                      d="M26.6905 59.4198C24.9256 62.1413 23.4472 65.0336 22.2787 68.0504C22.1371 68.4147 22.1464 68.8183 22.3044 69.1722C22.4625 69.5262 22.7565 69.8016 23.1216 69.9379C23.4868 70.0742 23.8933 70.0601 24.2517 69.8989C24.61 69.7376 24.8909 69.4424 25.0326 69.0781C26.1246 66.2517 27.5093 63.5426 29.1641 60.9949C29.3781 60.6661 29.4529 60.268 29.3719 59.888C29.2909 59.508 29.0609 59.1774 28.7324 58.9688C28.4039 58.7602 28.0039 58.6908 27.6203 58.7757C27.2366 58.8607 26.9009 59.0931 26.6869 59.4219L26.6905 59.4198Z"
                      fill="white"
                    />
                    <path
                      d="M67.5214 80.8842C67.411 80.7264 67.2702 80.5921 67.1069 80.4889C66.9435 80.3858 66.761 80.3158 66.5696 80.2831C66.3782 80.2504 66.1818 80.2554 65.9914 80.2981C65.8011 80.3407 65.6207 80.4201 65.4604 80.5316C65.3001 80.6431 65.1632 80.7846 65.0573 80.9481C64.9515 81.1115 64.8789 81.2937 64.8436 81.4841C64.8083 81.6746 64.8111 81.8697 64.8517 82.0582C64.8924 82.2467 64.9701 82.4249 65.0805 82.5827C66.9435 85.2183 69.1205 87.6189 71.5649 89.7333C71.7961 89.9342 72.0857 90.0574 72.393 90.0857C72.7004 90.1139 73.0101 90.0459 73.2788 89.8911C73.418 89.8102 73.5439 89.7082 73.6518 89.589C73.9109 89.2945 74.0436 88.9117 74.0211 88.5238C73.9986 88.136 73.8226 87.7746 73.5315 87.5181C71.2652 85.5568 69.2474 83.3296 67.5214 80.8842Z"
                      fill="white"
                    />
                    <path
                      d="M111.011 47.4454C110.532 46.6748 110.009 45.9324 109.444 45.2218C107.945 43.358 106.184 41.7175 104.216 40.349C104.058 40.2383 103.88 40.1599 103.691 40.118C103.502 40.0762 103.306 40.0719 103.115 40.1053C102.923 40.1387 102.74 40.2091 102.575 40.3126C102.41 40.4161 102.266 40.5506 102.153 40.7084C102.04 40.8663 101.959 41.0444 101.914 41.2326C101.87 41.4207 101.863 41.6153 101.894 41.8051C101.926 41.995 101.995 42.1764 102.097 42.339C102.199 42.5016 102.333 42.6423 102.49 42.7529C104.235 43.9578 105.793 45.4074 107.116 47.0573C107.615 47.6813 108.075 48.3346 108.495 49.0138C108.697 49.3344 109.016 49.5636 109.387 49.6533C109.758 49.743 110.151 49.6863 110.484 49.495L110.528 49.4696C110.694 49.3671 110.838 49.2332 110.952 49.0758C111.066 48.9184 111.148 48.7405 111.193 48.5524C111.238 48.3642 111.245 48.1695 111.214 47.9796C111.182 47.7896 111.114 47.608 111.011 47.4454Z"
                      fill="white"
                    />
                    <path
                      d="M64.5023 64.666C64.5721 64.4855 64.6055 64.2936 64.6007 64.1011C64.5959 63.9087 64.553 63.7196 64.4744 63.5445C64.3958 63.3694 64.283 63.2119 64.1426 63.0808C64.0021 62.9497 63.8367 62.8477 63.6558 62.7806C63.4749 62.7135 63.282 62.6827 63.0881 62.6897C62.8943 62.6968 62.7033 62.7417 62.5261 62.8219C62.3488 62.9021 62.1888 63.016 62.0551 63.157C61.9214 63.2981 61.8167 63.4636 61.747 63.6441C61.0115 65.492 60.598 67.4475 60.5246 69.4258C60.4861 70.8563 60.6317 72.2837 60.958 73.6731C60.9999 73.8607 61.0788 74.0377 61.1902 74.194C61.3016 74.3504 61.4433 74.483 61.6071 74.5841C61.7709 74.6853 61.9536 74.7531 62.1447 74.7836C62.3358 74.8142 62.5315 74.8068 62.7207 74.762C62.8599 74.7283 62.9939 74.6753 63.1186 74.6046C63.3938 74.4459 63.6114 74.2042 63.7394 73.9151C63.8673 73.626 63.8987 73.3048 63.829 72.9989C63.1671 70.2325 63.4 67.319 64.495 64.6702L64.5023 64.666Z"
                      fill="white"
                    />
                    <path
                      d="M49.8351 43.3337C52.6006 41.9801 55.457 40.8222 58.3829 39.8689C58.4828 39.8357 58.5792 39.7929 58.6709 39.7412C58.9863 39.5574 59.2237 39.2653 59.3376 38.9209C59.4514 38.5765 59.4338 38.204 59.2879 37.8748C59.1421 37.5456 58.8784 37.2829 58.5473 37.1372C58.2163 36.9914 57.8412 36.9727 57.4941 37.0848C54.4319 38.0807 51.4424 39.2912 48.5483 40.7071C48.195 40.881 47.9241 41.1864 47.7951 41.556C47.6661 41.9256 47.6897 42.3292 47.8606 42.678C48.0315 43.0268 48.3358 43.2922 48.7065 43.4159C49.0771 43.5395 49.4839 43.5113 49.8372 43.3373L49.8351 43.3337Z"
                      fill="white"
                    />
                    <path
                      d="M142.089 50.4766C142.311 50.7383 142.619 50.9132 142.959 50.9704C143.3 51.0277 143.651 50.9637 143.952 50.7898C144.028 50.7455 144.1 50.6943 144.166 50.6368C144.316 50.5118 144.439 50.3589 144.529 50.1871C144.619 50.0152 144.674 49.8278 144.691 49.6356C144.709 49.4433 144.687 49.2501 144.629 49.0669C144.57 48.8838 144.476 48.7144 144.351 48.5685C142.276 46.1102 139.931 43.8912 137.358 41.9521C137.047 41.7195 136.654 41.6203 136.266 41.6764C135.877 41.7325 135.526 41.9392 135.288 42.2512C135.05 42.5631 134.945 42.9546 134.997 43.3397C135.049 43.7247 135.252 44.0717 135.564 44.3043C137.965 46.1127 140.154 48.1828 142.089 50.4766Z"
                      fill="white"
                    />
                    <path
                      d="M100.858 39.3084C103.841 38.5769 106.873 38.077 109.928 37.8131C110.308 37.7673 110.658 37.5767 110.903 37.2815C111.147 36.9863 111.268 36.6096 111.24 36.2309C111.211 35.8521 111.036 35.5009 110.75 35.2513C110.464 35.0018 110.091 34.8733 109.708 34.8932C106.502 35.1728 103.319 35.6971 100.187 36.4612C99.8059 36.5537 99.4751 36.7924 99.2679 37.125C99.0606 37.4575 98.9939 37.8566 99.0825 38.2344C99.171 38.6123 99.4074 38.9379 99.7398 39.1397C100.072 39.3415 100.473 39.4029 100.855 39.3105L100.858 39.3084Z"
                      fill="white"
                    />
                    <path
                      d="M112.919 55.3971C112.539 55.4944 112.211 55.7366 112.008 56.071C111.804 56.4053 111.741 56.8045 111.832 57.1812C112.537 60.1013 112.909 63.0944 112.942 66.1046C112.948 66.493 113.109 66.8612 113.39 67.1284C113.671 67.3957 114.048 67.54 114.439 67.5298C114.688 67.5255 114.931 67.4578 115.147 67.3333C115.378 67.2007 115.568 67.0092 115.7 66.779C115.831 66.5489 115.898 66.2885 115.893 66.0255C115.857 62.7968 115.458 59.5865 114.702 56.4546C114.657 56.268 114.574 56.0926 114.46 55.9384C114.345 55.7843 114.201 55.6544 114.036 55.5562C113.87 55.458 113.686 55.3934 113.495 55.3661C113.303 55.3388 113.107 55.3493 112.919 55.3971Z"
                      fill="white"
                    />
                    <path
                      d="M85.6437 36.8897C88.6595 37.2336 91.6288 37.8806 94.506 38.8207C94.6887 38.8822 94.8823 38.9073 95.0757 38.8943C95.269 38.8813 95.4584 38.8306 95.6328 38.7451C95.8073 38.6596 95.9635 38.541 96.0925 38.396C96.2214 38.251 96.3206 38.0825 96.3843 37.9001C96.4485 37.7176 96.4759 37.5247 96.465 37.3325C96.4542 37.1402 96.4053 36.9525 96.3211 36.78C96.2369 36.6074 96.1191 36.4534 95.9744 36.3269C95.8297 36.2003 95.661 36.1035 95.4778 36.0422C92.4099 35.0364 89.2429 34.3452 86.0261 33.9791C85.8306 33.9495 85.6307 33.9592 85.4382 34.0078C85.2457 34.0564 85.0645 34.1429 84.9055 34.262C84.7465 34.3812 84.6129 34.5306 84.5126 34.7014C84.4123 34.8722 84.3473 35.0609 84.3217 35.2562C84.296 35.4516 84.3102 35.6495 84.3632 35.8384C84.4163 36.0273 84.5072 36.2031 84.6305 36.3555C84.7539 36.508 84.9072 36.6338 85.0812 36.7256C85.2553 36.8173 85.4466 36.8732 85.6437 36.8897Z"
                      fill="white"
                    />
                    <path
                      d="M77.9183 35.0399C77.9122 34.8475 77.868 34.6587 77.7881 34.4841C77.7083 34.3096 77.5944 34.1528 77.4531 34.0227C77.3117 33.8926 77.1455 33.7917 76.9641 33.7259C76.7827 33.66 76.5896 33.6305 76.3957 33.6389C73.1888 33.7749 69.9927 34.135 66.8313 34.7164C66.4545 34.7963 66.1222 35.0186 65.9049 35.336C65.6877 35.6535 65.6026 36.0411 65.6678 36.4164C65.7331 36.7918 65.9434 37.1253 66.2542 37.3462C66.565 37.567 66.9518 37.6577 67.3323 37.5991C70.3595 37.0424 73.4198 36.6962 76.4906 36.5632C76.8824 36.5466 77.2535 36.3765 77.5225 36.0902C77.7915 35.8039 77.9365 35.4247 77.9256 35.0357L77.9183 35.0399Z"
                      fill="white"
                    />
                    <path
                      d="M156.873 110.075C156.487 110.02 156.093 110.12 155.777 110.353C155.462 110.586 155.251 110.932 155.19 111.316C154.72 114.321 154.107 117.374 153.377 120.384C153.324 120.574 153.31 120.773 153.335 120.967C153.361 121.162 153.426 121.349 153.526 121.517C153.626 121.685 153.76 121.832 153.919 121.947C154.077 122.062 154.258 122.145 154.451 122.189C154.643 122.233 154.843 122.238 155.038 122.204C155.234 122.17 155.42 122.097 155.588 121.99C155.755 121.883 155.9 121.744 156.012 121.581C156.125 121.419 156.204 121.235 156.245 121.042C156.995 117.948 157.623 114.819 158.105 111.735C158.136 111.544 158.128 111.35 158.083 111.163C158.037 110.976 157.955 110.8 157.84 110.646C157.726 110.492 157.581 110.362 157.415 110.264C157.249 110.166 157.065 110.101 156.873 110.075Z"
                      fill="white"
                    />
                    <path
                      d="M80.93 92.6707C80.5884 92.4844 80.1847 92.4413 79.8075 92.551C79.4304 92.6607 79.1108 92.9142 78.919 93.2557C78.7273 93.5972 78.6791 93.9987 78.785 94.3719C78.8909 94.7451 79.1424 95.0595 79.4839 95.2458C82.3316 96.8304 85.3922 98.0113 88.5777 98.7544C88.7726 98.8163 88.9788 98.8369 89.1832 98.815C89.3875 98.7931 89.5856 98.7292 89.7647 98.6273C89.9437 98.5254 90.0999 98.3878 90.2232 98.2233C90.3464 98.0587 90.4341 97.8709 90.4805 97.6717C90.527 97.4726 90.5312 97.2665 90.4929 97.0666C90.4547 96.8668 90.3748 96.6775 90.2583 96.511C90.1418 96.3445 89.9914 96.2043 89.8166 96.0995C89.6417 95.9947 89.4464 95.9275 89.243 95.9022C86.3303 95.2136 83.5326 94.1261 80.93 92.6707Z"
                      fill="white"
                    />
                    <path
                      d="M157.831 91.4154C157.638 91.4227 157.447 91.4679 157.27 91.5484C157.093 91.6289 156.933 91.7431 156.8 91.8845C156.667 92.0259 156.563 92.1916 156.494 92.3723C156.425 92.5529 156.392 92.7449 156.398 92.9371C156.483 95.954 156.419 99.052 156.215 102.144C156.202 102.336 156.227 102.529 156.289 102.711C156.351 102.892 156.449 103.059 156.577 103.203C156.704 103.346 156.86 103.463 157.033 103.546C157.207 103.629 157.396 103.678 157.59 103.688C157.783 103.699 157.977 103.671 158.161 103.607C158.345 103.543 158.514 103.444 158.66 103.316C158.806 103.187 158.926 103.031 159.012 102.858C159.097 102.684 159.148 102.496 159.161 102.304C159.372 99.121 159.436 95.9311 159.347 92.8207C159.341 92.6284 159.298 92.4394 159.219 92.2646C159.14 92.0898 159.027 91.9326 158.887 91.8021C158.746 91.6715 158.58 91.5702 158.399 91.5038C158.218 91.4374 158.025 91.4074 157.831 91.4154Z"
                      fill="white"
                    />
                    <path
                      d="M147.834 55.8802C147.665 55.9783 147.517 56.1081 147.399 56.2624C147.28 56.4166 147.192 56.5922 147.141 56.7792C147.09 56.9662 147.077 57.1608 147.102 57.352C147.127 57.5432 147.189 57.7273 147.286 57.8937C148.801 60.5255 150.116 63.2674 151.22 66.097C151.29 66.2768 151.395 66.4406 151.529 66.5793C151.663 66.7179 151.824 66.8285 152.002 66.9049C152.18 66.9812 152.372 67.0217 152.567 67.0241C152.761 67.0265 152.955 66.9907 153.137 66.9188L153.327 66.8087C153.636 66.631 153.871 66.3493 153.989 66.0154C154.107 65.6815 154.1 65.318 153.97 64.9918C152.815 62.0347 151.442 59.1681 149.863 56.4151C149.769 56.2455 149.641 56.0969 149.487 55.9779C149.333 55.8589 149.156 55.7719 148.967 55.7221C148.778 55.6722 148.581 55.6606 148.386 55.6877C148.191 55.7149 148.004 55.7804 147.834 55.8802Z"
                      fill="white"
                    />
                    <path
                      d="M155.05 72.9921C154.861 73.0406 154.684 73.1254 154.528 73.2416C154.372 73.3578 154.24 73.5031 154.14 73.6692C154.04 73.8354 153.973 74.0192 153.944 74.21C153.915 74.4008 153.924 74.595 153.971 74.7814C154.706 77.7434 155.273 80.746 155.669 83.775C155.72 84.1597 155.923 84.5066 156.233 84.7396C156.544 84.9725 156.936 85.0724 157.324 85.0172C157.514 84.9914 157.697 84.9284 157.863 84.8318C158.118 84.6849 158.324 84.4661 158.455 84.2035C158.585 83.9408 158.634 83.6464 158.595 83.3579C158.184 80.2183 157.595 77.1063 156.831 74.0366C156.735 73.6628 156.495 73.3432 156.161 73.1476C155.828 72.952 155.428 72.8961 155.05 72.9921Z"
                      fill="white"
                    />
                    <path
                      d="M128.869 37.2219C125.827 36.0744 122.645 35.3197 119.4 34.9761C119.022 34.9544 118.648 35.0777 118.355 35.3205C118.063 35.5633 117.874 35.9071 117.827 36.2813C117.781 36.6554 117.88 37.0312 118.105 37.3314C118.33 37.6316 118.664 37.8332 119.037 37.8948C122.031 38.2061 124.967 38.9008 127.773 39.9617C127.953 40.0312 128.145 40.0646 128.339 40.06C128.533 40.0555 128.725 40.0131 128.903 39.9352C129.081 39.8573 129.243 39.7454 129.379 39.606C129.514 39.4667 129.621 39.3024 129.693 39.1228C129.765 38.9431 129.801 38.7515 129.799 38.559C129.797 38.3664 129.756 38.1766 129.68 38.0004C129.604 37.8242 129.493 37.6651 129.354 37.5321C129.216 37.3992 129.052 37.295 128.871 37.2255L128.869 37.2219Z"
                      fill="white"
                    />
                    <path
                      d="M92.2585 41.9887C92.6135 41.8176 92.8872 41.5143 93.0194 41.1455C93.1516 40.7768 93.1315 40.3727 92.9635 40.0222C92.7955 39.6717 92.4934 39.4036 92.1236 39.2767C91.7538 39.1498 91.3466 39.1747 90.9917 39.3457C87.9973 40.5126 85.0815 41.8739 82.2634 43.4209C81.9187 43.6097 81.6619 43.9258 81.5497 44.2998C81.4374 44.6738 81.4789 45.075 81.6648 45.4151C81.8508 45.7552 82.1661 46.0063 82.5414 46.1133C82.9167 46.2203 83.3211 46.1743 83.6659 45.9855C86.3725 44.5035 89.1718 43.1981 92.0459 42.0776C92.1191 42.0539 92.1902 42.0241 92.2585 41.9887Z"
                      fill="white"
                    />
                    <path
                      d="M104.963 91.3572C103.821 92.6515 102.481 93.759 100.992 94.6383C100.378 94.9931 99.7366 95.2975 99.0736 95.5483C98.6773 95.698 98.2735 95.8266 97.8638 95.9335C97.484 96.0345 97.1583 96.2808 96.9584 96.6181C96.7585 96.9554 96.7009 97.3562 96.798 97.7322C96.8952 98.1082 97.1393 98.4287 97.4766 98.6232C97.8139 98.8176 98.2168 98.8701 98.5966 98.769C99.1033 98.6307 99.607 98.4701 100.089 98.2885C100.907 97.9806 101.7 97.6054 102.457 97.1669C104.214 96.1314 105.797 94.8269 107.147 93.3022C107.282 93.1588 107.388 92.9904 107.457 92.8068C107.527 92.6233 107.559 92.4282 107.551 92.2331C107.544 92.038 107.497 91.8468 107.414 91.6707C107.331 91.4946 107.213 91.3372 107.068 91.2078C106.922 91.0783 106.751 90.9794 106.566 90.9169C106.38 90.8543 106.183 90.8293 105.987 90.8435C105.791 90.8576 105.599 90.9105 105.422 90.9991C105.246 91.0877 105.089 91.2102 104.96 91.3593L104.963 91.3572Z"
                      fill="white"
                    />
                    <path
                      d="M76.2229 48.9426C75.9859 48.6376 75.6359 48.4395 75.2493 48.3918C74.8627 48.344 74.4709 48.4504 74.1596 48.6877C71.5611 50.6419 69.1665 52.8514 67.0128 55.282C66.7818 55.5452 66.6513 55.8801 66.6445 56.2272C66.6378 56.5743 66.7552 56.911 66.9759 57.1775C67.1966 57.4439 67.5063 57.6229 67.8499 57.6825C68.1934 57.742 68.5486 57.6783 68.8522 57.5028C68.9964 57.4204 69.125 57.3135 69.2321 57.1871C71.2513 54.9111 73.4965 52.8427 75.9329 51.0141C76.0898 50.8962 76.222 50.7488 76.3216 50.5805C76.4213 50.4121 76.4865 50.2261 76.5135 50.0334C76.5405 49.8407 76.5287 49.645 76.4788 49.4577C76.4289 49.2705 76.3419 49.0954 76.2229 48.9426Z"
                      fill="white"
                    />
                    <path
                      d="M115.099 75.6234C115.165 75.2413 115.077 74.8506 114.854 74.5363C114.631 74.222 114.29 74.0096 113.907 73.9454C113.523 73.8812 113.128 73.9703 112.807 74.1935C112.486 74.4166 112.266 74.7556 112.193 75.1366C111.663 78.1089 110.805 81.0179 109.635 83.8109C109.515 84.0944 109.486 84.4071 109.554 84.7051C109.622 85.0032 109.782 85.2715 110.013 85.4725C110.243 85.6735 110.532 85.797 110.838 85.8257C111.145 85.8544 111.454 85.7869 111.723 85.6326C112.005 85.4714 112.225 85.2218 112.35 84.9236C113.608 81.9297 114.53 78.8106 115.099 75.6234Z"
                      fill="white"
                    />
                    <path
                      d="M152.879 132.391C153.132 131.661 153.383 130.928 153.62 130.203C153.689 130.017 153.72 129.82 153.711 129.623C153.702 129.426 153.653 129.233 153.566 129.056C153.48 128.879 153.358 128.722 153.209 128.594C153.059 128.465 152.885 128.369 152.696 128.31C152.507 128.25 152.307 128.23 152.109 128.249C151.911 128.269 151.718 128.328 151.543 128.422C151.367 128.517 151.212 128.646 151.087 128.801C150.962 128.956 150.87 129.135 150.816 129.325C150.589 130.015 150.353 130.708 150.108 131.402C147.734 128.135 143.701 125.773 140.136 124.178C143.745 130.192 146.857 136.86 147.045 143.968C151.96 138.672 158.517 135.18 165.313 133.117C161.857 131.999 156.757 131.352 152.879 132.391Z"
                      fill="white"
                    />
                  </g>

                  <defs>
                    <clipPath id="clip0_2_227">
                      <rect
                        width="134.965"
                        height="138.679"
                        fill="white"
                        transform="translate(0.839111 68.252) rotate(-30)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="bg-white w-100 rounded-lg py-8 px-2 flex flex-col  items-center gap-3">
                <p className=" font-medium text-sm block m-auto w-5/6 text-center">
                  I have received a great response from students and their
                  parents.
                </p>

                <div>
                  <img src={cardImage} alt="" />
                </div>
                

                <div className="flex gap-1 items-center justify-center">
                  <FaStar className="text-bluePrimary" />
                  <FaStar className="text-bluePrimary" />
                  <FaStar className="text-bluePrimary" />
                  <FaStar className="text-bluePrimary" />
                  <FaStar className="text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-32 z-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="251"
            height="252"
            viewBox="0 0 251 132"
            fill="none"
            className="w-48"
          >
            <path
              d="M223.686 27.8974L27.3974 224.186C17.318 234.266 24.4566 251.5 38.7111 251.5H235C243.837 251.5 251 244.337 251 235.5V39.2111C251 24.9566 233.766 17.8179 223.686 27.8974Z"
              fill="#FFD15C"
            />
          </svg>
        </div>
      </div>

      <div className="bg-bluePrimary h-52 flex items-center justify-center text-center z-10">
        <div className="w-11/12 m-auto flex items-center justify-center text-center text-white">
          <div className=" m-auto flex sm:flex-row flex-col items-center justify-center sm:gap-4 gap-1">
            <span className="font-extrabold text-lg sm:text-2xl">05</span>
            <span className="font-medium text-sm sm:text-base">Cities</span>
          </div>

          <div className=" m-auto flex sm:flex-row flex-col items-center justify-center sm:gap-4 gap-1">
            <span className="font-extrabold text-lg sm:text-2xl">02</span>
            <span className="font-medium text-sm sm:text-base">
              Years in Market
            </span>
          </div>

          <div className=" m-auto flex sm:flex-row flex-col items-center justify-center sm:gap-4 gap-1">
            <span className="font-extrabold text-lg sm:text-2xl">3000+</span>
            <span className="font-medium text-sm sm:text-base">Student</span>
          </div>

          <div className=" m-auto flex sm:flex-row flex-col items-center justify-center sm:gap-4 gap-1">
            <span className="font-extrabold text-lg sm:text-2xl">200+</span>
            <span className="font-medium text-sm sm:text-base">Teachers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
