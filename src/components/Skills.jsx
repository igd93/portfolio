import React from "react";
import CSS from "../assets/css3-original.svg";
import HTML from "../assets/html5-original.svg";
import Git from "../assets/git-original.svg";
import Java from "../assets/java-original.svg";
import JavaScript from "../assets/javascript-original.svg";
import MongoDB from "../assets/mongodb-original.svg";
import Python from "../assets/python-original.svg";
import Pandas from "../assets/pandas-original.svg";
import MySQL from "../assets/mysql-original.svg";
import ReactImg from "../assets/react-original.svg";
import Spring from "../assets/spring-original.svg";
import Docker from "../assets/docker-original.svg";

const Skills = () => {
  return (
    <div name="skills">
      <div>
        <div>
          <p>Technical skills</p>
          <p>The following are the technologies I worked with</p>
        </div>
        <div>
            <div>
                <img src={JavaScript} alt="JavaScript icon" />
                <p>JavaScript</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
