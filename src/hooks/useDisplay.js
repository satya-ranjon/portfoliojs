"use client";
import { useState, useEffect } from "react";

const useDisplay = () => {
  const [width, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [width, scrollY];
};

export default useDisplay;
