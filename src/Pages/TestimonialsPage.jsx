import React from "react";
import { Navbar, Services, Footer } from "../components/index";
import CommonHeader from "../components/CommonHeader";
import Testimonial from "../components/container/Testimonial";

const TestimonialsPage = () => {
  return (
    <div>
      <Navbar color={"bg-white"} />
      <CommonHeader />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
