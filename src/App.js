import NavBar from './components/NavBar';
import LandingPage from './LandingPage';
// import "./App.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Knowledge from './components/Knowledge';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import About from './components/About';
import Team from './components/Team';
// import NavBar from "./components/NavBar";
// import LandingPage from "./LandingPage";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Knowledge from "./components/Knowledge";
// import Blog from "./components/Blog";
// import BlogDetails from "./components/BlogDetails";
import ContactUs from "./components/ContactUs";
import FilmLocation from './components/FilmLocation';
import Festival from './components/Festival';
import Auditions from './components/Auditions';
import SmartContracts from './components/SmartContracts';
import OurMissions from './components/OurMissions';
import Vision from './components/Vision';
import HowItWorks from './components/HowItWorks';
import Community from './components/Communities';
import Corporation from './components/Corporation';
import Aspiring from './components/Aspiring';


// import About from "./components/About";

function App() {
  return (
   
    <Router >
      <Routes>
        <Route
          exact
          path="/blog"
          element={
            <NavBar>
              <Blog />
            </NavBar>
          }
        />
        <Route
          exact
          path="/film"
          element={
            
            <NavBar>
              <FilmLocation/>
            </NavBar>
            
          }
        />
          <Route
          exact
          path="/aspiring"
          element={
            
            <NavBar>
              <Aspiring/>
            </NavBar>
            
          }
        />
        <Route
          exact
          path="/audition"
          element={
            
            <NavBar>
              <Auditions/>
             </NavBar>
            
          }
        />
         <Route
          exact
          path="/contract"
          element={
            
            <NavBar>
              <SmartContracts/>
            </NavBar>
            
          }
        />
        <Route
          exact
          path="/festival"
          element={
            
            <NavBar>
              <Festival />
            </NavBar>
            
          }
        />
        <Route
          exact
          path="/blog/:blogId"
          element={
            <NavBar>
              <BlogDetails />
            </NavBar>
          }
        />
        <Route
          exact
          path="/knowledge"
          element={
            <NavBar>
              <Knowledge />
            </NavBar>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <NavBar>
              <About/>
            </NavBar>
          }
        />
        <Route
          exact
          path="/privacy-policy"
          element={
            <NavBar>
              <PrivacyPolicy />
            </NavBar>
          }
        />
         <Route
          exact
          path="/about"
          element={
            <NavBar>
              <About />
            </NavBar>
          }
        />
        <Route
          exact
          path="/OurMissions"
          element={
            
            <NavBar>
              <OurMissions />
            </NavBar>
            
          }
        />
              <Route
          exact
          path="/howitworks"
          element={
            
            <NavBar>
              <HowItWorks />
            </NavBar>
            
          }
        />
         <Route
          exact
          path="/community"
          element={
            
            <NavBar>
              <Community />
            </NavBar>
            
          }
        />
        <Route
          exact
          path="/blog"
          element={
            
            <NavBar>
              <Blog />
            </NavBar>
            
          }
        />
          <Route
          exact
          path="/corporation"
          element={
            
            <NavBar>
              <Corporation />
            </NavBar>
            
          }
        />
         <Route
          exact
          path="/vision"
          element={
            
            <NavBar>
              <Vision />
            </NavBar>
            
          }
        />
        
        <Route
          exact
          path="/contactus"
          element={
            <NavBar>
              <ContactUs />
            </NavBar>
          }
        />
        <Route
          exact
          path='/team'
          element={
            <NavBar>
              <Team />
            </NavBar>
          }
        />
        <Route
          path="*"
          element={
            <NavBar>
              <LandingPage />
            </NavBar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
