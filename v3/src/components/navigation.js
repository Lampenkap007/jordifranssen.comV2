import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/about-me" exact>
                  Over mij
                </NavLink>
              </li>
              <li>
                <NavLink to="/stage" exact>
                  Stage
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" exact>
                  Projecten
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label nav-label-contact">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <p>Primair:</p>
                  <a
                    onClick={() => window.open("mailto:info@jordifranssen.com")}
                  >
                    info@jordifranssen.com
                  </a>
                </li>
                <li>
                  <p>Studie:</p>
                  <a
                    onClick={() =>
                      window.open("mailto:j.franssen@student.fontys.nl")
                    }
                  >
                    j.franssen@student.fontys.nl
                  </a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Social</li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=31612684680"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/franssenjordi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jordi-franssen-71177619a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">GitHub</li>
                <li>
                  <a
                    href="https://github.com/Lampenkap007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Lampenkap007
                  </a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">CV</li>
                <li>
                  <a
                    onClick={() => window.open("my-cv.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
