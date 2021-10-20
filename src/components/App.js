import React, { useState, useEffect } from "react";
import "../css/app.css";
import Preloader from "./Preloader";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3750);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Preloader />
        </>
      ) : (
        <>
          <NavBar />
          <Home />
          <AboutMe />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
