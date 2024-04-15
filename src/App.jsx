
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactPage'
import TestimonialsPage from './Pages/TestimonialsPage';
import ServiceModal from './Pages/ServiceModal';

function App() {
  return (
    <>   
<Router>
      <Routes>
        <Route path="TeachRica/" element={<HomePage />} />
        <Route path='TeachRica/about' element={<AboutPage />} />
        <Route path='TeachRica/services' element={<ServicesPage />} />
        <Route path='TeachRica/testimonials' element={<TestimonialsPage />} />
        <Route path='TeachRica/contactus' element={<ContactUsPage />} />
        <Route path='TeachRica/service-modal' element={<ServiceModal />} />
      </Routes>  
    </Router>
    </>
  )
}

export default App
