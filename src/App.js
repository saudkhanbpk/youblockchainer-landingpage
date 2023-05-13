import NavBar from './components/NavBar'
import LandingPage from "./LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <NavBar>
      <LandingPage />
    </NavBar>
  );
}

export default App;
