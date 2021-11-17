import React, { useState, useEffect } from "react";
import "../css/app.css";
import Preloader from "./Preloader";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { Scrollbars } from "react-custom-scrollbars-2";

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
        <Scrollbars autoHide style={{ width: "100%", height: "100vh" }}>
          <NavBar />
          <Home />
          <AboutMe />
          <Projects />
          <Contact />
        </Scrollbars>
      )}
    </>
  );
}

export default App;
