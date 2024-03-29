import React from 'react'
import { Navbar,  About, Services, Teacher,  Footer, } from "../components/index"
import CommonHeader from '../components/CommonHeader'

const AboutPage = () => {
  return (
    <div>
        
        <Navbar/>
        <CommonHeader/>
        <About />
        <Services />
        <Teacher />
        <Footer />
    </div>
  )
}

export default AboutPage
