
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactPage'

import ContactPage from './Pages/ContactPage';
import TestimonialsPage from './Pages/TestimonialsPage';
function App() {

  return (
    <>
    
   
       <div className="App font-Montserrat bg-Solitude">
       <Router>
       <Routes>
       <Route path="TeachRica/home" element={<HomePage />} />
        <Route path='TeachRica/about' element ={<AboutPage/>}/>
        <Route path='TeachRica/services' element ={<ServicesPage/>}/>
        <Route path='TeachRica/testimonials' element ={<TestimonialsPage/>}/>
        <Route path='TeachRica/contactus' element ={<ContactPage/>}/>

</Routes>
    </Router> 
  </div>
    </>
  )
}

export default App
