import React from "react";
import { Navbar, Services, Footer } from "../components/index";
import CommonHeader from "../components/CommonHeader";
import Testimonial from "../components/container/Testimonial";

const TestimonialsPage = () => {
  const data = {
    title: "Our Testimonials",
    description: "Build your future with our quality education. The best and largest all in one online and home tuition services in the region.",
  }
  return (
    <div>
      <Navbar color={"bg-white"} />
      <CommonHeader data={data} />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
