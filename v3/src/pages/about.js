import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const About = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100vh", autohide: true }}>
      <div className="page">
        <div className="header-gradient"></div>
        <div className="container">
          <div className="image"></div>
          <div className="text-left">
            <div>
              <h1>Over mij</h1>
              <p>
                Mijn naam is Jordi, ik ben 21 jaar en woon in Deurne. Momenteel
                studeer ik HBO ICT&Media bij Fontys in Eindhoven. Met behulp van
                deze opleiding kom ik aan de nodige skillset om later
                professioneel webdesigner en webdeveloper te worden. Terwijl ik
                hard bezig ben om mijn diploma te halen, help ik vast kennissen
                en andere connecties aan een eventuele website. Buiten
                kantooruren ben ik vaak als winkelmedewerker in de Jumbo te
                vinden. Daarnaast doe ik één avond per week vrijwilligerswerk
                als groepsleiding bij jeugdvereniging Jong Nederland Zeilberg.
                In de weekenden ben ik altijd in voor een feestje of een
                gezellige borrel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default About;
