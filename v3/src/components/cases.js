import React from "react";
import { NavLink } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    subtitle: "Over mij",
    title: "Kom meer over mij te weten",
    img: "about-min",
    location: "about-me",
  },
  {
    id: 2,
    subtitle: "Stage",
    title: "Vind hier alles over mijn stage bij Handpicked Agencies",
    img: "stage-min",
    location: "stage",
  },
  {
    id: 3,
    subtitle: "Lorem Ipsum",
    title: "Mijn meest recente project",
    img: "project-min",
    location: "projects",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map((caseItem) => (
            <NavLink className="caseLink" to={"/" + caseItem.location} exact>
              <div className="case" key={caseItem.id}>
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img
                    src={require(`../assets/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
