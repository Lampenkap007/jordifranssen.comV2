import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import HomeRecentProjects from "./HomeRecentProjects";
import HomeSocials from "./HomeSocials";
import HomeTitle from "./HomeTitle";

export default function Home() {
  let homeFadeIn = useRef(null);

  useEffect(() => {
    gsap.from(homeFadeIn, {
      opacity: 0,
      duration: 0.5,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <div
      className="home"
      id="home"
      ref={(el) => {
        homeFadeIn = el;
      }}
    >
      <HomeSocials />
      <HomeTitle />
      <HomeRecentProjects />
    </div>
  );
}
