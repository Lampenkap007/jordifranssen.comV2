import React, { useRef, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { gsap, Power4 } from "gsap";
export default function Preloader() {
  let textAnim = useRef(null);
  let titleAnim = useRef(null);
  useEffect(() => {
    gsap.to(textAnim, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: Power4.easeOut,
    });

    gsap.to(titleAnim, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="preloader">
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
