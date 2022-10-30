import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);
    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [windowWidth]);

  return { windowWidth };
};
