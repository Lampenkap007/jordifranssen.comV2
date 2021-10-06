import React from "react";

export default function HomeRecentProjects() {
  return (
    <div className="HomeRecentProjects">
      <p className="RecentProjectsTitle">RECENT PROJECTS</p>
      <div className="RecentProjectsDevider"></div>
      <div className="RecentProjectsOverflow">
        <div className="RecentProjectsItems">
          <div className="RecentProjectsItem">
            <h3>PROJECT 1</h3>
            <p className="RecentProjectsItemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="RecentProjectsItemLink link">More</p>
          </div>
          <div className="RecentProjectsItem">
            <h3>PROJECT 2</h3>
            <p className="RecentProjectsItemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="RecentProjectsItemLink link">More</p>
          </div>
          <div className="RecentProjectsItem">
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
