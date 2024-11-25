
'use client'
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {

    let menuClasses = [];

        if(isOpen){
          menuClasses = [
            "flex",
            "absolute",
            "top-[60px]",
            "bg-black-800",
            "w-full",
            "p-4",
            "left-0",
            "gap-2",
            "flex-row"
          ];
      } else {
          menuClasses.push("hidden");
        }
        return menuClasses.join("")

      }

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Khadija</div>

        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="manulink hover:text-gray-400"><a href="#hero">Home</a></li>
          <li className="manulink hover:text-gray-400"><a href="#about">About</a></li>
          <li className="manulink hover:text-gray-400"><a href="#contact">Contact</a></li>
          <li className="manulink hover:text-gray-400"><a href="#projects">Projects</a></li>
          <li className="manulink hover:text-gray-400"><a href="#skills">Skills</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={getMenuClasses()}>
        <ul className="gap-10 flex flex-col">
          <li className="manulink hover:text-gray-400"><a href="#hero">Home</a></li>
          <li className="manulink hover:text-gray-400"><a href="#about">About</a></li>
          <li className="manulink hover:text-gray-400"><a href="#contact">Contact</a></li>
          <li className="manulink hover:text-gray-400"><a href="#projects">Projects</a></li>
          <li className="manulink hover:text-gray-400"><a href="#skills">Skills</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
