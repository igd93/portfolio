import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400 text-xl font-bold ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Igor Drozhilkin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I am a
          <Typed
            className="text-4xl 
          sm:text-7xl text-gray-400 font-bold"
            strings={[
              "  Frontend Developer",
              "  Backend Developer",
              "  Full Stack Developer",
            ]}
            typeSpeed={150}
            backSpeed={120}
            loop
          />
        </h2>
        <p className="text-xl font-bold text-white py-4 max-w-[700px]">
          Welcome to my portfolio! I'm an aspiring full-stack developer
          passionate about crafting user-friendly digital experiences. With a
          strong background in front-end and back-end technologies, I enjoy
          turning creative ideas into functional applications. I'm committed to
          staying at the forefront of web development and excited to collaborate
          on innovative projects. Let's embark on this coding journey together!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
            View Projects
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
