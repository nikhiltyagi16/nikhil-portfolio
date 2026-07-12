import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-5 py-8 shadow-[0_0_15px_0_rgba(255,255,255,0.25)] w-full z-50 bg-[#030712] fixed top-0 left-0">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex items-center justify-between gap-3">
          <h2 className="xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] text-[#fff] font-bold">
            Nikhil<span className="text-[#8B5CF6]">.</span>
          </h2>

          <ul className="hidden sm:flex sm:gap-14 gap-5 items-center">
            <li className="sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="!border-b !border-[#fff] !text-[#fff]"
              >
                About
              </Link>
            </li>

            <li className="sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Projects
              </Link>
            </li>

            <li className="sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Skills
              </Link>
            </li>

            <li className="sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden text-white text-3xl"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-[260px] bg-[#030712] shadow-[-5px_0_20px_rgba(0,0,0,0.4)] transition-transform duration-300 sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={closeMenu}
            className="text-white text-3xl"
          >
            <HiOutlineX />
          </button>
        </div>
        <ul className="flex flex-col gap-8 px-8 mt-2">
          <li className="text-[#9CA3AF] hover:text-white text-lg cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              About
            </Link>
          </li>

          <li className="text-[#9CA3AF] hover:text-white text-lg cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Projects
            </Link>
          </li>

          <li className="text-[#9CA3AF] hover:text-white text-lg cursor-pointer">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Skills
            </Link>
          </li>

          <li className="text-[#9CA3AF] hover:text-white text-lg cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;