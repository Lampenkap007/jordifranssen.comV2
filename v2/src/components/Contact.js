import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT</h2>
      <form
        className="contactForm"
        id="form"
        action="https://formspree.io/f/mwkakdry"
        method="POST"
      >
        <input
          className="inputEmail"
          id="email"
          type="email"
          name="_replyto"
          placeholder="EMAIL"
        ></input>
        <div className="messageSubmit">
          <textarea
            className="inputMessage"
            id="message"
            name="message"
            placeholder="BERICHT"
          ></textarea>
          <button className="submitMessage" id="submit" type="submit">
            VERZEND
          </button>
        </div>
      </form>

      <div className="contactSocials">
        <div className="contactSocialsLinks">
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
              window.open(
                "https://www.linkedin.com/in/jordi-franssen-71177619a/"
              )
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

        <div className="socialsMobile socialsMobileContact">
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
              window.open(
                "https://www.linkedin.com/in/jordi-franssen-71177619a/"
              )
            }
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="link"
            onClick={() => window.open("https://github.com/Lampenkap007")}
            icon={faGithub}
          />
        </div>

        <p className="copyright">© 2021 JORDI FRANSSEN </p>
      </div>
    </div>
  );
}
