import React, { useRef, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { gsap, Power4 } from "gsap";
export default function Preloader() {
  let textAnim = useRef(null);
  let titleAnim = useRef(null);
  let loaderFadeOut = useRef(null);
  useEffect(() => {
    gsap.to(textAnim, {
      opacity: 1,
      y: -80,
      duration: 1,
      ease: Power4.easeOut,
    });

    gsap.to(titleAnim, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.3,
    });

    gsap.to(loaderFadeOut, {
      opacity: 0,
      duration: 0.5,
      ease: Power4.easeOut,
      delay: 2.75,
    });
  }, []);

  return (
    <div
      className="preloader"
      ref={(el) => {
        loaderFadeOut = el;
      }}
    >
      <div
        className="text"
        ref={(el) => {
          textAnim = el;
        }}
      >
        Jordi Franssen
      </div>
      <div
        class="title"
        ref={(el) => {
          titleAnim = el;
        }}
      >
        Welcome
      </div>

      <PropagateLoader size={5} color={"#FFFFFF"} />
    </div>
  );
}
