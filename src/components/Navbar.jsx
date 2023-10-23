import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/computer-logos-4.gif";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "70px" }} />
      </div>
      {/*Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>

      {/*Hamburger*/}
      <div className="md:hidden z-10">
        <FaBars />
      </div>

      {/*Mobile Menu*/}

      <ul
        className="hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] 
      flex flex-col justify-center items-center"
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contacts</li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
