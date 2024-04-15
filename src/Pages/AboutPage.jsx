import React from 'react'
import { Navbar,  About, Services, Teacher,  Footer, } from "../components/index"
import CommonHeader from '../components/CommonHeader'

const AboutPage = () => {
  const data = {
    title:"About Us",
    description:"Build your future with our quality education. The best and largest all in one online and home tuition services in the region.",
  }

  return (
    <div>
        
        <Navbar color={"bg-white"} />
        <CommonHeader data = {data} />
        <About />
        <Services />
        <Teacher />
        <Footer />
    </div>
  )
}

export default AboutPage
