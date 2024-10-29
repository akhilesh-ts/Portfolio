import React from "react";
import Proffession from "./Proffession";
import AchievementStats from "./AchievementStats";
import Blog from "../component/Blog";
import Projects from "./Projects";
import Experience from "./Experience";
import Tools from "./Tools";
import Certificates from "./Certificates";
import Contact from "./Contact";

const Bio = () => {
  return (
    <div className="flex flex-col gap-8">
      <div id="Proffession">
        <Proffession />
      </div>
      <div id="AchievementStats">
        <AchievementStats />
      </div>
      <div id="Blog">
        <Blog />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Certificates">
        <Certificates />
      </div>
      <div id="Tools">
        <Tools />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default Bio;
