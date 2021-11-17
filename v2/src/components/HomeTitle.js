import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";

export default function HomeTitle() {
  let titleAnim = useRef(null);
  let subTitleAnim = useRef(null);

  useEffect(() => {
    gsap.from(titleAnim, {
      opacity: 0,
      y: 200,
      duration: 1,
      ease: Power4.easeOut,
    });

    gsap.from(subTitleAnim, {
      opacity: 0,
      y: 200,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.3,
    });
  }, []);
  return (
    <div>
      <h1
        ref={(el) => {
          titleAnim = el;
        }}
      >
        Jordi Franssen
      </h1>
      <h2
        ref={(el) => {
          subTitleAnim = el;
        }}
      >
        DESIGN & DEVELOPMENT
      </h2>
    </div>
  );
}
