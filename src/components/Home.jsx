import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400 text-xl font-bold ">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-white">
          Igor Drozhilkin
        </h1>
        <p className="text-4xl font-bold text-gray-400">
          I am a Web Developer
        </p>
        <p className="text-xl font-bold text-white max-w-[700px]">
          Welcome to my portfolio! I'm an aspiring full-stack developer
          passionate about crafting user-friendly digital experiences. With a
          strong background in front-end and back-end technologies, I enjoy
          turning creative ideas into functional applications. I'm committed to
          staying at the forefront of web development and excited to collaborate
          on innovative projects. Let's embark on this coding journey together!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
