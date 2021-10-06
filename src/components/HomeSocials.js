import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HomeSocials() {
  return (
    <div className="homesocials">
      <div className="socials">
        <p
          className="link"
          onClick={() => window.open("mailto:jordifranssenmij@gmail.com")}
        >
          MAIL
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://api.whatsapp.com/send?phone=31612684680")
          }
        >
          WHATSAPP
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://www.instagram.com/franssenjordi/")
          }
        >
          INSTAGRAM
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jordi-franssen-71177619a/")
          }
        >
          LINKEDIN
        </p>
        <p
          className="link"
          onClick={() => window.open("https://github.com/Lampenkap007")}
        >
          GITHUB
        </p>
      </div>

      <div className="socialsMobile">
        <FontAwesomeIcon
          className="link"
          onClick={() => window.open("mailto:jordifranssenmij@gmail.com")}
          icon={faAt}
        />
        <FontAwesomeIcon
          className="link"
          onClick={() =>
            window.open("https://api.whatsapp.com/send?phone=31612684680")
          }
          icon={faWhatsapp}
        />
        <FontAwesomeIcon
          className="link"
          onClick={() =>
            window.open("https://www.instagram.com/franssenjordi/")
          }
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jordi-franssen-71177619a/")
          }
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="link"
          onClick={() => window.open("https://github.com/Lampenkap007")}
          icon={faGithub}
        />
      </div>

      <p className="download link">
        <FontAwesomeIcon icon={faDownload} /> CV
      </p>
    </div>
  );
}
