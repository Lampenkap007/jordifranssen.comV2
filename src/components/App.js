import React from 'react';
import '../css/app.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar';



function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App;
