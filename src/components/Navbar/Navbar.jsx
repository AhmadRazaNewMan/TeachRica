import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom"; // import {activeLink as NavLink   } from "react-router-dom";

const Navbar = ({ color }) => {
  // toggle state
  const [toggle, setToggle] = useState(false);

  // nav active state
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    // Navbar
    <div
      className={` ${
        active ? "shadow-lg " : ""
      } fixed w-full  top-0 left-0 z-20 ${color}`}
    >
      <div className="">
        <div className=" bg-bluePrimary flex items-center justify-center  h-[1.5rem]">
          <p className="text-center text-xs text-white">
            {" "}
            15% Discount for new registered student. Avail this amazing
            opportunity
          </p>
        </div>
        <div className=" ">
          <div
            className={`${
              active ? "py-3 transition-all duration-300" : "py-6 "
            }  container mx-auto   flex items-center justify-between px-1 `}
          >
            <div className="flex items-center gap-4 w-1/3 ">
              {/* left icon */}
              <HiMenuAlt1
                className="text-3xl sm:hidden cursor-pointer"
                onClick={() => setToggle(true)}
              />
              {/* Name */}
              {/* <img src={techLogo} alt="" className='w-28 cursor-pointer' /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="49"
                viewBox="0 0 120 49"
                fill="none"
              >
                <path
                  d="M77.4619 9.30907L74.9736 10.0796C74.7517 9.60587 74.4984 9.14769 74.2152 8.70814C74.0274 8.41281 73.8181 8.13185 73.589 7.86758L73.7139 7.76988L73.8865 7.63531C74.5992 7.68261 75.2956 7.87053 75.9359 8.18832C76.505 8.47105 77.0212 8.8502 77.4619 9.30907Z"
                  fill="#00C9DA"
                />
                <path
                  d="M71.8921 8.09615L71.7268 8.08509C71.7704 7.98886 71.8484 7.91256 71.9453 7.87126C72.0175 7.85363 72.0934 7.85943 72.162 7.88785L71.8958 8.09615H71.8921Z"
                  fill="#00C9DA"
                />
                <path
                  d="M74.0995 10.3542L71.569 11.1431C71.4879 10.6193 71.4492 10.0898 71.4533 9.5597C71.4533 9.53943 71.4533 9.52099 71.4533 9.50256C71.4561 9.29665 71.4708 9.09108 71.4974 8.88689L71.6461 8.8961L72.2264 8.93297L72.7608 8.51637L72.8691 8.43158C73.0125 8.59223 73.1468 8.76086 73.2713 8.93665C73.2846 8.95374 73.2968 8.97159 73.308 8.99011C73.6071 9.42327 73.8717 9.87937 74.0995 10.3542Z"
                  fill="#00C9DA"
                />
                <path
                  d="M70.6949 11.4142L68.2085 12.1884C68.4264 10.8505 69.1327 9.642 70.1899 8.79846L70.5829 8.82427C70.5436 9.16069 70.5282 9.4995 70.537 9.83811C70.5549 10.3664 70.6077 10.8929 70.6949 11.4142Z"
                  fill="#00C9DA"
                />
                <path
                  d="M73.7414 18.4833C72.9776 18.5087 72.217 18.3723 71.5092 18.0829C70.8014 17.7936 70.1623 17.3579 69.6334 16.8041L72.1217 16.0298C72.6047 17.0455 73.1611 17.9193 73.7414 18.4833Z"
                  fill="#00C9DA"
                />
                <path
                  d="M75.5244 14.97C75.6097 15.5125 75.649 16.0613 75.6419 16.6105C75.6199 17.6391 75.3793 18.1719 75.148 18.2437C74.9166 18.3156 74.4134 18.0115 73.8221 17.1765C73.5073 16.7272 73.2303 16.2524 72.9939 15.7571L75.5244 14.97Z"
                  fill="#00C9DA"
                />
                <path
                  d="M78.887 13.9247C78.7618 14.6808 78.4797 15.4021 78.059 16.0416C77.6382 16.6812 77.0882 17.2248 76.4446 17.6372C76.6044 16.8409 76.5731 15.805 76.3987 14.6879L78.887 13.9247Z"
                  fill="#00C9DA"
                />
                <path
                  d="M78.7142 11.4492C78.8654 11.9359 78.9464 12.4418 78.9548 12.9515L76.2296 13.7994C76.1231 13.3146 75.9946 12.8243 75.8458 12.3414C75.6971 11.8584 75.5263 11.381 75.3408 10.9201L78.066 10.0722C78.3457 10.4982 78.564 10.9618 78.7142 11.4492Z"
                  fill="#00C9DA"
                />
                <path
                  d="M74.981 12.6105C75.1334 13.1045 75.2619 13.593 75.3629 14.0686L72.6212 14.9221C72.4376 14.4723 72.265 14.0004 72.1126 13.5027C71.9601 13.005 71.8334 12.5183 71.7324 12.0428L74.4723 11.1856C74.6578 11.6409 74.8285 12.1165 74.981 12.6105Z"
                  fill="#00C9DA"
                />
                <path
                  d="M71.2495 13.7663C71.3982 14.2492 71.5672 14.7266 71.7545 15.1856L69.0275 16.0354C68.4678 15.1784 68.1598 14.1806 68.1387 13.1561L70.8657 12.3082C70.9704 12.7985 71.0989 13.2888 71.2495 13.7663Z"
                  fill="#00C9DA"
                />
                <path
                  d="M80.5892 10.8648C80.2422 9.74956 79.6377 8.73233 78.8249 7.89596C78.0121 7.0596 77.0141 6.42774 75.912 6.05184L75.8679 6.08502L75.8495 6.09792L74.9405 6.80761C75.7459 6.98973 76.5085 7.32649 77.1864 7.79933C78.1702 8.48449 78.9421 9.43374 79.4137 10.5385C79.8853 11.6433 80.0376 12.859 79.8533 14.0466C79.6689 15.2343 79.1554 16.3458 78.3713 17.2542C77.5871 18.1626 76.5642 18.8311 75.4194 19.1834C74.2745 19.5356 73.0541 19.5573 71.8975 19.246C70.741 18.9347 69.6951 18.303 68.8794 17.4231C68.0637 16.5431 67.5112 15.4505 67.2851 14.2702C67.0589 13.0899 67.1682 11.8695 67.6006 10.7487C67.8914 9.99611 68.3206 9.30513 68.8658 8.71178H68.8548L67.6465 8.63252C66.891 9.64651 66.4074 10.8382 66.2419 12.0934C66.0765 13.3487 66.2347 14.6256 66.7014 15.8019C67.1682 16.9782 67.9279 18.0146 68.9078 18.812C69.8877 19.6093 71.0551 20.1409 72.2982 20.3558C73.5413 20.5707 74.8186 20.4618 76.0078 20.0396C77.1969 19.6173 78.2583 18.8957 79.0902 17.9439C79.9222 16.9921 80.4969 15.842 80.7593 14.6035C81.0218 13.365 80.9632 12.0796 80.5892 10.8703V10.8648ZM69.7014 7.9468C70.8616 7.06589 72.2874 6.6105 73.7414 6.65646L74.0903 6.38548L74.8671 5.77903C73.689 5.56325 72.4762 5.63936 71.3341 6.00074C70.192 6.36213 69.1549 6.99788 68.3131 7.85279L69.1229 7.90809L69.7014 7.9468Z"
                  fill="#00C9DA"
                />
                <path
                  d="M13.4184 26.701C13.4235 26.565 13.4006 26.4294 13.3512 26.3027C13.3017 26.176 13.2266 26.061 13.1308 25.9647C13.0349 25.8685 12.9203 25.7932 12.7941 25.7435C12.6679 25.6939 12.5328 25.6709 12.3973 25.6761H1.02102C0.75023 25.6761 0.490528 25.784 0.299049 25.9763C0.10757 26.1685 0 26.4291 0 26.701C0 26.9728 0.10757 27.2335 0.299049 27.4257C0.490528 27.6179 0.75023 27.7259 1.02102 27.7259H5.61195V41.232C5.61195 41.5254 5.72804 41.8067 5.93467 42.0141C6.1413 42.2215 6.42155 42.338 6.71378 42.338C7.006 42.338 7.28625 42.2215 7.49288 42.0141C7.69951 41.8067 7.8156 41.5254 7.8156 41.232V27.7203H12.3863C12.5219 27.7261 12.6573 27.7035 12.7837 27.654C12.9102 27.6045 13.025 27.5292 13.121 27.4329C13.217 27.3366 13.292 27.2213 13.3413 27.0943C13.3906 26.9674 13.4131 26.8316 13.4073 26.6954L13.4184 26.701Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M21.5002 31.313C20.643 30.812 19.6638 30.5605 18.6722 30.5868C17.6334 30.5692 16.6089 30.8308 15.7046 31.3444C14.8399 31.8422 14.1323 32.5743 13.6626 33.4569C13.164 34.3994 12.9113 35.4534 12.928 36.5205C12.9106 37.5896 13.1795 38.6439 13.7067 39.5731C14.216 40.4627 14.9635 41.1914 15.8644 41.6763C16.6541 42.0962 17.5216 42.348 18.4127 42.4159C19.3038 42.4838 20.1992 42.3663 21.043 42.0708C21.6915 41.8646 22.2993 41.5465 22.8389 41.1307C22.9434 41.0609 23.0292 40.9664 23.0888 40.8555C23.1484 40.7446 23.1799 40.6207 23.1805 40.4947C23.1759 40.3523 23.139 40.2128 23.0724 40.087C23.0059 39.9611 22.9116 39.8521 22.7967 39.7685C22.6188 39.6189 22.3912 39.5425 22.1595 39.5546C21.9049 39.5493 21.6564 39.6327 21.4562 39.7906C21.1104 40.0422 20.7266 40.2364 20.3194 40.3657C19.6394 40.6012 18.9115 40.6621 18.202 40.543C17.4926 40.4239 16.824 40.1284 16.2574 39.6837C15.5184 39.0807 15.0358 38.218 14.9077 37.2707H22.9877C23.1163 37.2753 23.2445 37.2542 23.365 37.2087C23.4854 37.1631 23.5956 37.094 23.6892 37.0053C23.7799 36.919 23.8515 36.8145 23.8993 36.6986C23.9471 36.5826 23.97 36.4579 23.9665 36.3325C23.9865 35.3002 23.7677 34.2774 23.3274 33.3444C22.929 32.5027 22.2938 31.7966 21.5002 31.313ZM14.9279 35.5527C15.0595 34.6722 15.4918 33.8648 16.1509 33.2688C16.7948 32.6986 17.6353 32.4141 18.6722 32.4154C19.6075 32.4154 20.366 32.6998 20.9475 33.2688C21.5508 33.8863 21.9259 34.6921 22.0107 35.5527H14.9279Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M35.6092 31.3665C34.7071 30.842 33.6803 30.5726 32.6379 30.5868C31.5906 30.5748 30.559 30.844 29.6501 31.3665C28.7635 31.8699 28.0312 32.6075 27.5328 33.4993C27.0184 34.4216 26.7549 35.4636 26.7689 36.5205C26.7549 37.5709 26.999 38.6086 27.4796 39.5417C27.9274 40.4152 28.6042 41.1494 29.4371 41.6653C30.2712 42.1793 31.2332 42.4458 32.2119 42.4339C32.9981 42.4419 33.776 42.2716 34.4876 41.9358C35.1992 41.6001 35.8261 41.1075 36.3217 40.4947V41.2837C36.3157 41.4304 36.3393 41.5768 36.391 41.7141C36.4428 41.8515 36.5217 41.9769 36.623 42.0828C36.7243 42.1888 36.8459 42.2731 36.9804 42.3307C37.115 42.3882 37.2598 42.4179 37.4061 42.4179C37.5523 42.4179 37.6971 42.3882 37.8317 42.3307C37.9662 42.2731 38.0878 42.1888 38.1891 42.0828C38.2904 41.9769 38.3693 41.8515 38.4211 41.7141C38.4729 41.5768 38.4965 41.4304 38.4904 41.2837V36.5205C38.5036 35.462 38.2355 34.4191 37.7137 33.4993C37.2133 32.6134 36.4869 31.8772 35.6092 31.3665ZM35.9177 38.5555C35.6046 39.1459 35.1382 39.6402 34.568 39.986C33.9828 40.329 33.3174 40.5098 32.6398 40.5098C31.9621 40.5098 31.2967 40.329 30.7116 39.986C30.1388 39.6391 29.6685 39.1454 29.349 38.5555C29.0112 37.9302 28.8392 37.2281 28.8495 36.5168C28.8401 35.8021 29.012 35.0967 29.349 34.467C29.6667 33.8734 30.1372 33.3762 30.7116 33.0274C31.2963 32.6832 31.9619 32.5018 32.6398 32.5018C33.3176 32.5018 33.9832 32.6832 34.568 33.0274C35.14 33.375 35.6067 33.8727 35.9177 34.467C36.2478 35.0989 36.4157 35.8034 36.4062 36.5168C36.4172 37.228 36.2492 37.9306 35.9177 38.5592V38.5555Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M47.9533 32.5075C48.4444 32.4982 48.9324 32.5891 49.3875 32.7748C49.8296 32.9697 50.2252 33.2568 50.5481 33.6172C50.6491 33.739 50.7758 33.8366 50.919 33.9033C51.0623 33.9699 51.2184 34.0038 51.3763 34.0025C51.5507 34.0055 51.7216 33.9532 51.8647 33.8532C52.0039 33.7728 52.12 33.6579 52.2021 33.5194C52.2841 33.3809 52.3292 33.2235 52.333 33.0624C52.3361 32.8573 52.2598 32.659 52.12 32.5094C51.614 31.8954 50.9766 31.4038 50.2552 31.0713C49.5338 30.7387 48.747 30.5737 47.9533 30.5886C46.9117 30.5718 45.8843 30.8333 44.9765 31.3462C44.1066 31.8407 43.3941 32.5725 42.9216 33.4569C42.423 34.3995 42.1703 35.4534 42.1871 36.5205C42.1732 37.5763 42.4333 38.6175 42.9418 39.5417C43.4306 40.4303 44.1552 41.1654 45.0353 41.6653C45.9591 42.1861 47.0041 42.4514 48.0634 42.434C49.5938 42.434 50.8694 41.9571 51.8904 41.0035C51.9699 40.9299 52.0336 40.8407 52.0775 40.7415C52.1214 40.6423 52.1446 40.5351 52.1457 40.4266C52.1408 40.2761 52.1019 40.1287 52.0319 39.9955C51.9619 39.8624 51.8627 39.7469 51.7417 39.6579C51.5828 39.5382 51.3895 39.4735 51.1908 39.4735C50.9035 39.485 50.6277 39.5898 50.4048 39.7722C49.8086 40.2699 49.0288 40.5187 48.0653 40.5187C47.3756 40.5318 46.6954 40.3552 46.0985 40.0081C45.5277 39.67 45.0631 39.1775 44.758 38.5869C44.4315 37.9508 44.2674 37.2433 44.2805 36.5279C44.2805 35.3186 44.6203 34.3472 45.2997 33.6136C45.9792 32.8799 46.8637 32.5112 47.9533 32.5075Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M65.0499 31.2061C64.2394 30.7709 63.3319 30.5501 62.4128 30.5646C61.7295 30.5584 61.0513 30.6835 60.4149 30.9333C59.8089 31.1699 59.2582 31.5294 58.797 31.9895V26.7655C58.8058 26.6203 58.7839 26.4748 58.7326 26.3388C58.6813 26.2027 58.6018 26.0791 58.4994 25.9761C58.397 25.8732 58.274 25.7932 58.1386 25.7415C58.0031 25.6897 57.8582 25.6674 57.7136 25.6761C57.5707 25.6719 57.4284 25.6963 57.2951 25.7478C57.1617 25.7994 57.0399 25.8772 56.9368 25.9765C56.8334 26.0792 56.7526 26.2024 56.6994 26.3383C56.6463 26.4741 56.6221 26.6197 56.6283 26.7655V41.28C56.6306 41.4965 56.6962 41.7077 56.8169 41.8871C56.9377 42.0666 57.1083 42.2066 57.3076 42.2896C57.5069 42.3726 57.726 42.3951 57.9379 42.3542C58.1498 42.3134 58.3451 42.211 58.4995 42.0597C58.5983 41.9561 58.6754 41.8338 58.7265 41.6999C58.7776 41.566 58.8016 41.4233 58.797 41.28V35.2614C58.7922 34.7673 58.9369 34.2832 59.212 33.8734C59.5019 33.4496 59.8986 33.1106 60.3616 32.8909C60.8675 32.6431 61.4239 32.5169 61.9868 32.5222C63.0078 32.5222 63.8268 32.8172 64.4439 33.407C65.0609 33.9969 65.3669 34.8688 65.3621 36.0227V41.2726C65.356 41.4193 65.3796 41.5657 65.4314 41.703C65.4832 41.8404 65.5621 41.9658 65.6634 42.0717C65.7647 42.1777 65.8862 42.262 66.0208 42.3195C66.1554 42.3771 66.3001 42.4068 66.4464 42.4068C66.5927 42.4068 66.7375 42.3771 66.872 42.3195C67.0066 42.262 67.1282 42.1777 67.2295 42.0717C67.3308 41.9658 67.4097 41.8404 67.4614 41.703C67.5132 41.5657 67.5368 41.4193 67.5308 41.2726V36.0301C67.5586 35.0073 67.332 33.9936 66.8715 33.0808C66.4621 32.289 65.8282 31.6367 65.0499 31.2061Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M88.8456 24.9664C88.5181 24.9638 88.1998 25.0755 87.9452 25.2824C87.6906 25.4892 87.5154 25.7783 87.4495 26.1004C87.3837 26.4225 87.4313 26.7575 87.5842 27.0483C87.7371 27.3391 87.9858 27.5675 88.2879 27.6947C88.59 27.8218 88.9267 27.8398 89.2404 27.7454C89.5542 27.6511 89.8256 27.4503 90.0083 27.1774C90.191 26.9045 90.2736 26.5764 90.2421 26.2491C90.2106 25.9218 90.0668 25.6157 89.8354 25.383C89.7075 25.2494 89.5537 25.1435 89.3835 25.0718C89.2133 25.0002 89.0302 24.9643 88.8456 24.9664Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M88.8456 30.6715C88.7031 30.6668 88.5611 30.6908 88.428 30.7421C88.2949 30.7934 88.1734 30.8709 88.0706 30.9702C87.9671 31.0731 87.8862 31.1966 87.8331 31.3328C87.7799 31.469 87.7558 31.6148 87.7621 31.7609V41.2597C87.7648 41.4761 87.8306 41.687 87.9515 41.8662C88.0724 42.0454 88.2431 42.1851 88.4423 42.2679C88.6415 42.3507 88.8605 42.373 89.0722 42.3321C89.2839 42.2911 89.479 42.1887 89.6334 42.0376C89.7322 41.9345 89.8095 41.8125 89.8606 41.6789C89.9117 41.5453 89.9356 41.4027 89.9309 41.2597V31.7609C89.94 31.6155 89.9182 31.4698 89.8669 31.3334C89.8156 31.1971 89.736 31.0733 89.6333 30.9702C89.5306 30.8672 89.4073 30.7872 89.2715 30.7357C89.1356 30.6842 88.9905 30.6624 88.8456 30.6715Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M100.202 32.5075C100.693 32.4982 101.181 32.5891 101.636 32.7748C102.078 32.9693 102.473 33.2565 102.795 33.6172C102.896 33.739 103.023 33.8367 103.167 33.9033C103.31 33.9699 103.467 34.0038 103.625 34.0025C103.799 34.0055 103.97 33.9532 104.113 33.8532C104.252 33.7728 104.368 33.6579 104.45 33.5194C104.532 33.3809 104.578 33.2235 104.581 33.0624C104.584 32.8574 104.508 32.6594 104.368 32.5094C103.862 31.8954 103.225 31.4038 102.504 31.0713C101.782 30.7387 100.995 30.5737 100.202 30.5886C99.1601 30.5718 98.1327 30.8333 97.2249 31.3462C96.355 31.841 95.6431 32.5736 95.1719 33.4587C94.6733 34.4013 94.4206 35.4553 94.4373 36.5224C94.4234 37.5781 94.6835 38.6193 95.192 39.5436C95.6808 40.4322 96.4055 41.1672 97.2855 41.6671C98.2071 42.1867 99.2494 42.4519 100.306 42.4358C101.837 42.4358 103.112 41.959 104.133 41.0054C104.213 40.9317 104.276 40.8426 104.32 40.7434C104.364 40.6441 104.387 40.537 104.389 40.4284C104.383 40.278 104.344 40.1308 104.274 39.9977C104.204 39.8646 104.105 39.749 103.985 39.6597C103.826 39.5401 103.632 39.4754 103.434 39.4754C103.146 39.4871 102.87 39.5919 102.646 39.774C102.051 40.2717 101.272 40.5206 100.308 40.5206C99.6179 40.5334 98.9373 40.3569 98.3396 40.01C97.7697 39.6712 97.3059 39.1788 97.0009 38.5887C96.6738 37.9528 96.5091 37.2453 96.5216 36.5297C96.5216 35.3205 96.8619 34.349 97.5426 33.6154C98.2233 32.8817 99.1096 32.5125 100.202 32.5075Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M119.223 33.4992C118.72 32.6124 117.991 31.8762 117.111 31.3665C116.21 30.843 115.184 30.5736 114.143 30.5868C113.096 30.5752 112.065 30.8444 111.156 31.3665C110.27 31.8705 109.538 32.608 109.04 33.4992C108.525 34.4214 108.261 35.4634 108.274 36.5205C108.26 37.5711 108.505 38.609 108.987 39.5417C109.435 40.4147 110.111 41.1488 110.943 41.6653C111.777 42.1788 112.739 42.4453 113.717 42.4339C114.504 42.4421 115.282 42.272 115.994 41.9362C116.706 41.6005 117.333 41.1077 117.829 40.4947V41.2837C117.829 41.5726 117.943 41.8497 118.147 42.054C118.35 42.2583 118.626 42.3731 118.914 42.3731C119.202 42.3731 119.478 42.2583 119.682 42.054C119.885 41.8497 120 41.5726 120 41.2837V36.5205C120.013 35.462 119.745 34.4191 119.223 33.4992ZM117.425 38.5592C117.182 39.001 116.854 39.3895 116.459 39.7017C116.064 40.0139 115.611 40.2435 115.127 40.3768C114.642 40.5102 114.135 40.5447 113.637 40.4781C113.139 40.4116 112.659 40.2455 112.226 39.9897C111.655 39.6425 111.186 39.1487 110.867 38.5592C110.529 37.9338 110.357 37.2318 110.368 36.5205C110.358 35.8058 110.53 35.1004 110.867 34.4707C111.184 33.8772 111.654 33.38 112.228 33.031C112.66 32.7674 113.14 32.5952 113.641 32.525C114.141 32.4549 114.65 32.4883 115.137 32.6231C115.624 32.758 116.079 32.9915 116.472 33.3092C116.866 33.6269 117.191 34.0222 117.427 34.4707C117.758 35.1021 117.927 35.8068 117.917 36.5205C117.927 37.2309 117.758 37.9323 117.425 38.5592Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M64.6459 10.0279C64.6458 9.97298 64.6315 9.91898 64.6045 9.87118C64.5775 9.82338 64.5386 9.7834 64.4916 9.75513V7.58736L64.2088 7.56708V9.73116C64.1457 9.75665 64.0924 9.8017 64.0566 9.85973C64.0207 9.91776 64.0043 9.98576 64.0096 10.0538C64.0149 10.1219 64.0417 10.1865 64.0862 10.2382C64.1306 10.2899 64.1903 10.326 64.2566 10.3413C63.6574 11.1528 63.3353 12.1368 63.3384 13.1469V14.7451H63.7057L63.5992 14.1128C63.5443 13.7884 63.5239 13.459 63.5386 13.1303C63.5643 13.4279 63.6184 13.7223 63.7002 14.0096L63.9095 14.7469H64.0399L63.9885 14.4335C63.9335 14.1097 63.9132 13.781 63.9279 13.4529C63.9536 13.7505 64.0077 14.0449 64.0895 14.3321L64.207 14.7469H65.3254V13.1487C65.3251 12.1374 64.9992 11.1533 64.3962 10.3432C64.4674 10.3272 64.531 10.2871 64.5765 10.2298C64.6219 10.1725 64.6464 10.1012 64.6459 10.0279Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M81.0079 0.980821L75.148 5.55968L75.1315 5.57074L74.867 5.7772L74.0903 6.38366L73.7413 6.65463L72.1621 7.88783L71.8958 8.09612H71.8921L71.725 8.08506L71.6203 8.07769L70.6489 8.01133L69.7013 7.94681L69.1229 7.90626L68.313 7.85096L67.8135 7.81594H67.8044L64.4934 7.58736V7.58183L64.3134 6.99381L66.1333 5.54862L65.9661 5.33848L64.194 6.75048L64.0049 6.89795L64.2106 7.56155V7.56709L60.3726 7.30164L69.4883 0.18634L81.0079 0.980821Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M78.2479 7.47304L77.1865 7.79932L77.0946 7.82697L75.9304 8.18458L75.8294 8.21592L75.1591 8.42053L74.2905 8.68781L74.2152 8.70993L73.308 8.98827L72.4872 9.24266L71.4661 9.55603H71.4551L70.548 9.83437L68.8585 10.3524L68.8181 10.3653L67.6024 10.7339L67.5565 10.7487L66.4547 11.0878H66.429C66.4228 11.0705 66.4185 11.0526 66.4161 11.0344C66.1942 10.1993 66.2931 9.31105 66.6934 8.54587L67.6336 8.61224H67.6575L68.8659 8.6915H68.8769L70.2009 8.78366L70.5939 8.80947L71.4992 8.87215L71.6479 8.88136L72.2282 8.91823L72.7626 8.50163L72.871 8.41684L73.5853 7.86384L73.7102 7.76614L73.8828 7.63158L74.8818 6.84815L74.9424 6.80023L75.8514 6.09054L75.8698 6.07764L75.9138 6.04445L76.6062 5.50067C77.3343 5.89446 77.8983 6.53644 78.1965 7.31084C78.1965 7.33296 78.213 7.35323 78.2203 7.37535C78.2277 7.39747 78.2368 7.42512 78.2442 7.45093C78.2515 7.47673 78.246 7.46936 78.2479 7.47304Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M83.2079 32.8522C83.2801 28.9016 84.5356 25.0644 86.8109 21.8401C87.7078 20.3294 88.7202 18.8909 89.8391 17.5377C89.937 17.4254 89.9909 17.2813 89.9909 17.1322C89.9909 16.983 89.937 16.8389 89.8391 16.7266C89.7473 16.6121 89.6173 16.5349 89.4731 16.5091C89.329 16.4834 89.1804 16.5109 89.0549 16.5865C86.1595 18.2484 83.1826 19.763 80.1357 21.1248C71.4533 24.7489 63.792 26.1424 63.1915 26.3986C62.4018 26.7323 63.0354 27.2226 63.0354 27.2226L64.6091 27.0696C64.7065 27.0586 64.8056 27.0512 64.9048 27.0438C65.1178 27.0272 65.3106 27.018 65.498 27.0162C65.6853 27.0143 65.913 27.0162 66.1297 27.0162C66.3004 27.0254 66.4731 27.0383 66.6457 27.0586C66.8183 27.0788 66.9652 27.0973 67.1231 27.1231C67.2811 27.1489 67.4206 27.1821 67.5675 27.2152C67.7145 27.2484 67.843 27.289 67.9807 27.3332C68.1185 27.3775 68.2342 27.418 68.359 27.4659C68.4839 27.5139 68.5959 27.5655 68.7098 27.6208C68.8236 27.6761 68.932 27.7351 69.0403 27.8051C69.1487 27.8752 69.2772 27.9507 69.358 28.0079C69.4388 28.065 69.5159 28.1222 69.5931 28.1922C69.6702 28.2623 69.7547 28.3249 69.8355 28.3987L69.9714 28.5222C70.2655 28.7677 70.5282 29.0488 70.7537 29.3591C70.8075 29.4393 70.8572 29.5224 70.9024 29.6079C70.9501 29.6945 70.9942 29.7922 71.0346 29.8752C71.075 29.9581 71.1154 30.0595 71.1503 30.1535C71.1852 30.2475 71.2201 30.3563 71.2495 30.4577C71.2789 30.5591 71.3064 30.6678 71.3321 30.7747C71.3578 30.8817 71.378 30.9959 71.3982 31.1102C71.4184 31.2245 71.4349 31.3388 71.4478 31.4568C71.4607 31.5747 71.4753 31.6946 71.4845 31.8254C71.4937 31.9563 71.501 32.0724 71.5066 32.1941C71.5121 32.3158 71.5066 32.4503 71.5066 32.5812C71.5066 32.7121 71.5066 32.8467 71.5066 32.9794C71.5066 33.1121 71.4974 33.254 71.4882 33.3886C71.479 33.5232 71.4717 33.6706 71.4588 33.807L71.446 33.9361C71.446 34.0375 71.4258 34.137 71.4147 34.2384C71.3964 34.3858 71.3799 34.5333 71.3597 34.6771L71.2935 35.1232L71.1283 36.0449C71.1099 36.1444 71.0879 36.2458 71.0677 36.3472L71.0346 36.5075C70.9997 36.6661 70.9648 36.8209 70.9281 36.9776C70.8914 37.1343 70.8547 37.2946 70.8143 37.4532C70.7739 37.6117 70.7353 37.7721 70.693 37.9324C70.6508 38.0928 70.6086 38.2513 70.5645 38.4117L70.4764 38.7288L70.4286 38.8928C70.3827 39.055 70.3368 39.2173 70.2854 39.3776L70.1385 39.8643C70.0889 40.0246 70.0375 40.185 69.9842 40.3472C69.931 40.5094 69.8814 40.6698 69.8281 40.8283L69.6647 41.3113C69.6096 41.4698 69.5545 41.6302 69.5012 41.7887C69.4645 41.8901 69.4278 41.9896 69.3929 42.0929L68.9375 43.3297C68.8952 43.4403 68.853 43.5528 68.8089 43.6652L68.6345 44.1169L68.5133 44.4228L68.4527 44.5777C68.3958 44.7215 68.3388 44.8653 68.269 45.009L68.0854 45.4422C68.0322 45.5768 67.9771 45.7077 67.922 45.8385L67.9109 45.8643L67.8118 46.104L67.7383 46.2773L67.5675 46.6791C67.4962 46.8331 67.4845 47.0083 67.5348 47.1705C67.585 47.3326 67.6936 47.4703 67.8393 47.5565C67.9817 47.6482 68.1526 47.6844 68.3197 47.6582C68.4868 47.6321 68.6387 47.5454 68.7465 47.4146C71.3489 44.3361 74.2809 41.5543 77.4895 39.1195C77.8127 38.8744 78.1377 38.6366 78.4609 38.4025C80.7954 42.727 84.2956 46.3043 88.561 48.7252C88.7109 48.8086 88.886 48.8341 89.0534 48.797C89.2207 48.7599 89.3689 48.6627 89.4699 48.5237C89.5709 48.3847 89.6179 48.2135 89.602 48.0422C89.5861 47.8709 89.5085 47.7113 89.3836 47.5934C87.3864 45.7032 85.8045 43.4151 84.7392 40.8757C83.6738 38.3363 83.1485 35.6016 83.1969 32.8467L83.2079 32.8522Z"
                  fill="#04989E"
                />
              </svg>
            </div>

            {/* Links */}

            <div className="sm:flex hidden font-semibold w-2/3 items-center justify-center">
              <div className="flex  md:gap-3 lg:gap-6 xl:gap-10 text-[18px] text-md w-[700px] mr-10">
              <Link
                  to="/TeachRica/home"
                  
                >
                  Home
                </Link>
                <Link
                  to="/TeachRica/about"
                 
                >
                  About Us
                </Link>
                <Link
                  to="/TeachRica/services"
                 
                >
                  Services
                </Link>
                <Link
                  to="/TeachRica/testimonials"
                 
                >
                  Testimonials
                </Link>
                <Link
                  to="/TeachRica/contactus"
                 
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/*Buttons  */}
            <button className="text-sm bg-blueSecondary text-white rounded-3xl py-3 px-6 outline-none">
              +923046667704
            </button>

            {/* Toggle function */}
            {toggle && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed h-full w-56 top-0 left-0 z-20 bg-bluePrimary text-white flex flex-col justify-center items-center shadow-lg gap-6 py-8"
              >
                
                <Link
                  to="/TeachRica/home"
                  
                >
                  Home
                </Link>
                <Link
                  to="/TeachRica/about"
                 
                >
                  About Us
                </Link>
                <Link
                  to="/TeachRica/services"
                 
                >
                  Services
                </Link>
                <Link
                  to="/TeachRica/testimonials"
                 
                >
                  Testimonials
                </Link>
                <Link
                  to="/TeachRica/contactus"
                 
                >
                  Contact Us
                </Link>
                {/* Cross icon */}
                <HiX
                  className="absolute top-6 right-6 text-3xl cursor-pointer"
                  onClick={(prev) => setToggle(!prev)}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
