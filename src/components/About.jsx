import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-400">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I am Igor Drozhilkin. Nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Welcome to my portfolio! I'm an aspiring full-stack developer
              passionate about crafting user-friendly digital experiences. With
              a strong background in front-end and back-end technologies, I
              enjoy turning creative ideas into functional applications. I'm
              committed to staying at the forefront of web development and
              excited to collaborate on innovative projects. Let's embark on
              this coding journey together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
