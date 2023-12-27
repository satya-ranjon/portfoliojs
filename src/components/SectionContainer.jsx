"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const SectionContainer = ({ color = "bg-colorThree", children }) => {
  return (
    <div className=" relative">
      {children}
      <div className=" hidden md:block absolute bottom-20 right-16">
        <div className="flex flex-col gap-5 justify-center items-center">
          {generateLink("heroSection", color)}
          {generateLink("design", color)}
          {generateLink("myself", color)}
          {generateLink("project", color)}
          {generateLink("contact", color)}
        </div>
      </div>
    </div>
  );
};

const generateLink = (to, color) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    className={`cursor-pointer rotate-45 w-3 h-3 block ${color}`}
    key={to}></ScrollLink>
);

export default SectionContainer;
