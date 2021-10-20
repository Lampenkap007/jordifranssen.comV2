import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
export default function HomeRecentProjects() {
  let recentProjectsTitleAnim = useRef(null);
  let recentProjectsDeviderAnim = useRef(null);
  let recentProjectsItem1Anim = useRef(null);
  let recentProjectsItem2Anim = useRef(null);
  let recentProjectsItem3Anim = useRef(null);

  useEffect(() => {
    gsap.from(recentProjectsTitleAnim, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.4,
    });
    gsap.from(recentProjectsDeviderAnim, {
      opacity: 0,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.4,
    });

    gsap.from(recentProjectsItem1Anim, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.6,
    });

    gsap.from(recentProjectsItem2Anim, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.8,
    });

    gsap.from(recentProjectsItem3Anim, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: Power4.easeOut,
      delay: 1,
    });
  }, []);

  return (
    <div className="HomeRecentProjects">
      <p
        className="RecentProjectsTitle"
        ref={(el) => {
          recentProjectsTitleAnim = el;
        }}
      >
        RECENT PROJECTS
      </p>
      <div
        className="RecentProjectsDevider"
        ref={(el) => {
          recentProjectsDeviderAnim = el;
        }}
      ></div>
      <div className="RecentProjectsOverflow">
        <div className="RecentProjectsItems">
          <div
            className="RecentProjectsItem"
            ref={(el) => {
              recentProjectsItem1Anim = el;
            }}
          >
            <h3>PROJECT 1</h3>
            <p className="RecentProjectsItemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="RecentProjectsItemLink link">More</p>
          </div>
          <div
            className="RecentProjectsItem"
            ref={(el) => {
              recentProjectsItem2Anim = el;
            }}
          >
            <h3>PROJECT 2</h3>
            <p className="RecentProjectsItemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="RecentProjectsItemLink link">More</p>
          </div>
          <div
            className="RecentProjectsItem"
            ref={(el) => {
              recentProjectsItem3Anim = el;
            }}
          >
            <h3>PROJECT 3</h3>
            <p className="RecentProjectsItemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="RecentProjectsItemLink link">More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
