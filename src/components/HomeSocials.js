import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HomeSocials() {
  let social1Anim = useRef(null);
  let social2Anim = useRef(null);
  let social3Anim = useRef(null);
  let social4Anim = useRef(null);
  let social5Anim = useRef(null);
  let downloadAnim = useRef(null);

  useEffect(() => {
    gsap.from(social1Anim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.2,
      ease: Power4.easeOut,
    });
    gsap.from(social2Anim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.4,
      ease: Power4.easeOut,
    });
    gsap.from(social3Anim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.6,
      ease: Power4.easeOut,
    });
    gsap.from(social4Anim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.8,
      ease: Power4.easeOut,
    });
    gsap.from(social5Anim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 2,
      ease: Power4.easeOut,
    });
    gsap.from(downloadAnim, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 2.4,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <div className="homesocials">
      <div className="socials">
        <p
          className="link"
          onClick={() => window.open("mailto:jordifranssenmij@gmail.com")}
          ref={(el) => {
            social1Anim = el;
          }}
        >
          MAIL
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://api.whatsapp.com/send?phone=31612684680")
          }
          ref={(el) => {
            social2Anim = el;
          }}
        >
          WHATSAPP
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://www.instagram.com/franssenjordi/")
          }
          ref={(el) => {
            social3Anim = el;
          }}
        >
          INSTAGRAM
        </p>
        <p
          className="link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jordi-franssen-71177619a/")
          }
          ref={(el) => {
            social4Anim = el;
          }}
        >
          LINKEDIN
        </p>
        <p
          className="link"
          onClick={() => window.open("https://github.com/Lampenkap007")}
          ref={(el) => {
            social5Anim = el;
          }}
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

      <p
        className="download link"
        onClick={() => window.open("../doc/my-cv.pdf")}
        ref={(el) => {
          downloadAnim = el;
        }}
      >
        <FontAwesomeIcon icon={faDownload} /> CV
      </p>
    </div>
  );
}
