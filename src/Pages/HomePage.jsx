import React from 'react'
import { Navbar, Home, About, Services, Teacher, Contact, Footer, } from "../components/index"

const HomePage = () => {
  return (
    <div>
    //   <Navbar color={"bg-navClr"} />
        <Home />
        <About />
        <Services />
        <Teacher />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage
