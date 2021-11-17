import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Design en development,</span>
            </div>
            <div className="line">
              <span>iets waar ik passie voor heb.</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/about-me">
              Meer over mij <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
