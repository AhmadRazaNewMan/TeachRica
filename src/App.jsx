
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
function App() {

  return (
    <>
       <div className="App font-Montserrat bg-Solitude">
       <Router>
      <Routes>
        <Route path="TeachRica/" element={<HomePage />} />
        <Route path='TeachRica/about' element ={<AboutPage/>}/>
         

      </Routes>
    </Router>
     </div>
    </>
  )
}

export default App
