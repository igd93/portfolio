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
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Technical skills
          </p>
          <p className="py-4">
            The following are the technologies I worked with
          </p>
        </div>

        {/* Image container */}
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 gap-4 text-center py-8">
          {/* JavaScript*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          {/* HTML */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          {/* CSS */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          {/* React */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          {/* Java */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          {/* Spring */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="Spring icon" />
            <p className="my-4">Spring</p>
          </div>
          {/* MongoDB */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          {/* MySQL */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          {/* Python */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          {/* Pandas */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Pandas} alt="Pandas icon" />
            <p className="my-4">Pandas</p>
          </div>
          {/* Git */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          {/* Docker */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="Docker icon" />
            <p className="my-4">Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
