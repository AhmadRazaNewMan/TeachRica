
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import Modal from './components/Modal';
function App() {

  return (
    <>
    
   
       <div className="App font-Montserrat bg-Solitude">
       <Router>
      <Routes>
        <Route path="TeachRica/" element={<HomePage />} />
        <Route path='TeachRica/about' element ={<AboutPage/>}/>
        <Route path='TeachRica/services' element ={<ServicesPage/>}/>

         

      </Routes>
    </Router> 
  </div>
    </>
  )
}

export default App
