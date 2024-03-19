import NavBar from "./components/NavBar";
import LandingPage from "./LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Knowledge from "./components/Knowledge";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
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
          path="/privacy-policy"
          element={
            <NavBar>
              <PrivacyPolicy />
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
