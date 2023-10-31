import React from "react";
import World from "../assets/theWorld.png";
import DataDemo from "../assets/DataReactDemo.png";
import Ecommerce from "../assets/eCommerce.png";
import FoodDelivery from "../assets/FoodDelivery.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
            Projects
          </p>
          <p className="py-6">Here are some of my recent projects: </p>
        </div>

        {/* Grid Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Food Delivery Cart Item */}
          <div
            style={{ backgroundImage: `url(${FoodDelivery})` }}
            className="shadow-lg shadow-black-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Delivery App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*eCommerce Cart Item */}
          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-black-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                eCommerce App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* the World App */}
          <div
            style={{ backgroundImage: `url(${World})` }}
            className="shadow-lg shadow-black-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                World App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Data React Demo */}

          <div
            style={{ backgroundImage: `url(${DataDemo})` }}
            className="shadow-lg shadow-black-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Data Demo App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Repeat several times to look pretty */ }
          <div
            style={{ backgroundImage: `url(${FoodDelivery})` }}
            className="shadow-lg shadow-blue-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Delivery App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-blue-300 group container 
          rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ecommerce App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
