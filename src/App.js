import NavBar from './components/NavBar'
import LandingPage from "./LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {


  return (
   
    <Router>
    <Routes>
    <Route exact path='/' element={ <NavBar><LandingPage /></NavBar>} />
    <Route exact path='/privacy-policy' element={ <NavBar><PrivacyPolicy/></NavBar>} />
    </Routes>
    </Router>
  );
}

export default App;
