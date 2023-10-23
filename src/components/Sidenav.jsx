import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/computer-logos-4.gif";

function Sidenav() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "70px" }} />
      </div>
      {/*Menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/*Hamburger*/}
      <div className="hidden">
        <FaBars />
      </div>

      {/*Mobile Menu*/}
      <div className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>

      {/*Social Icons*/}
      <div></div>
    </div>
  );
}

export default Sidenav;
